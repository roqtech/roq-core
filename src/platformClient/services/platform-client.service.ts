import { MutationOptions, QueryOptions } from '@apollo/client/core'
import { ForbiddenException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { print } from 'graphql/language/printer'
import { ClsServiceManager } from 'nestjs-cls'
import { ApolloClientService } from '../../apolloClient/services'
import { ApolloClientConfigType } from '../../apolloClient/types'
import { ClsKeyEnum, ErrorCodeEnum } from '../../library/enums'
import { LoggingTypeEnum } from '../../logger/enums'
import { Logger } from '../../logger/services'
import { getGqlOperationName } from '../../logger/utilities'
import { ExceptionMappingType, GraphqlExceptionType } from '../types'
import { v4 } from 'uuid'

@Injectable()
export class PlatformClientService extends ApolloClientService {
  private static exceptionMapping: ExceptionMappingType = {
    [ErrorCodeEnum.FORBIDDEN]: ForbiddenException,
    [ErrorCodeEnum.UNAUTHORIZED_EXCEPTION]: UnauthorizedException,
  }

  constructor(
    protected config: ApolloClientConfigType,
    protected configService: ConfigService,
    protected logger: Logger,
  ) {
    super(config, configService)
  }

  static parseException(
    e: GraphqlExceptionType | HttpException,
    exceptionMapping = PlatformClientService.exceptionMapping,
  ): HttpException {
    const error = (e as GraphqlExceptionType)?.graphQLErrors?.[0] || (e as GraphqlExceptionType)
    if (!error?.extensions) {
      return e as HttpException
    }
    const { response } = error.extensions
    const { errorCode } = response
    const ExceptionClass = exceptionMapping[errorCode]
    if (!ExceptionClass) {
      throw e
    }
    return new ExceptionClass(response as never)
  }

  protected async setHeaders(headers: Record<string, unknown> = {}): Promise<void> {
    const cls = ClsServiceManager.getClsService();
    const requestId = cls.get(ClsKeyEnum.REQUEST_ID) ?? v4()
    const userToken = cls.get(ClsKeyEnum.USER_TOKEN)
    const requestCaller = this.configService.get('application.appName')

    headers[this.configService.get('application.platform.requestIdHeader')] = requestId
    headers[this.configService.get('application.platform.requestCallerHeader')] = requestCaller
    if (userToken) {
      headers[this.configService.get('application.platform.authorizationHeader')] = userToken
    }
  }

  async request<T>(
    request: QueryOptions | MutationOptions,
    responseKey?: string,
    headers: Record<string, unknown> = {},
  ): Promise<T> {
    await this.setHeaders(headers)

    let requestLogType
    let responseLogType
    let errorResponseLogType
    const isMutation = 'mutation' in request
    if (isMutation) {
      requestLogType = LoggingTypeEnum.outgoingMutation
      responseLogType = LoggingTypeEnum.outgoingMutationResponse
      errorResponseLogType = LoggingTypeEnum.outgoingMutationError
    } else {
      requestLogType = LoggingTypeEnum.outgoingQuery
      responseLogType = LoggingTypeEnum.outgoingQueryResponse
      errorResponseLogType = LoggingTypeEnum.outgoingQueryError
    }

    const operationName = getGqlOperationName(isMutation ? request.mutation : request.query)

    const loggingRequest = {
      graphql: print(isMutation ? request.mutation : request.query),
      variables: request.variables,
      operationName,
      url: this.uri,
      headers,
    }

    try {
      this.logger.log({
        type: requestLogType,
        request: loggingRequest,
      })
      const response = await super.request<T>(request, responseKey, headers)
      this.logger.log({
        request: loggingRequest,
        response: {
          data: response,
        },
        type: responseLogType,
      })
      return response
    } catch (error) {
      this.logger.error({
        request: loggingRequest,
        response: {
          data: error,
        },
        type: errorResponseLogType,
      })
      throw PlatformClientService.parseException(error)
    }
  }
}
