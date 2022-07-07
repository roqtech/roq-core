import { gql } from '@apollo/client/core';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { ClsService } from 'nestjs-cls';
import { Observable, tap } from 'rxjs';
import { ClsKeyEnum } from '@src/library/enums';
import { LoggingTypeEnum } from '@src/logger/enums';
import { Logger } from '@src/logger/services';
import { getGqlOperationName } from '@src/logger/utilities';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(
    private readonly cls: ClsService,
    private readonly logger: Logger,
    private configService: ConfigService,
  ) {}
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (context.getType<GqlContextType>() === 'graphql') {
      const ctx = GqlExecutionContext.create(context);
      const req = ctx.getContext().req;
      if (req?.body?.operationName !== 'IntrospectionQuery') {
        const graphql = req.body.query;
        const type = graphql.includes('mutation') ? LoggingTypeEnum.incomingMutation : LoggingTypeEnum.incomingQuery;
        const operationName = getGqlOperationName(gql(graphql));
        this.logger.log({
          type,
          request: {
            operationName,
            graphql,
            headers: req.headers,
            variables: req.body.variables,
          },
        });
      }
    }

    /*else if (!req.body.query) {
      const type = LoggingTypeEnum.incomingRequest;
      this.logger.log({
        type,
        api: {
          headers: req.headers,
          body: req.body,
          query: req.query,
          url: req.originalUrl,
          method: req.method,
        },
      });
    }*/
    const processResponse = () => {
      if (context.getType<GqlContextType>() === 'graphql') {
        const ctx = GqlExecutionContext.create(context);
        const res = ctx.getContext().res;
        res.header(this.configService.get('application.platform.requestIdHeader'), this.cls.get(ClsKeyEnum.REQUEST_ID));
      }
    };
    return next.handle().pipe(tap(processResponse, processResponse));
  }
}
