import { MutationOptions, QueryOptions } from '@apollo/client/core';
import { HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClsService } from 'nestjs-cls';
import { ApolloClientService } from '../../apolloClient/services';
import { ApolloClientConfigType } from '../../apolloClient/types';
import { ErrorCodeEnum } from '../../library/enums';
import { Logger } from '../../logger/services';
import { GraphqlExceptionType } from '../types';
export declare class PlatformClientService extends ApolloClientService {
    protected config: ApolloClientConfigType;
    protected configService: ConfigService;
    protected logger: Logger;
    protected readonly cls: ClsService;
    private static exceptionMapping;
    constructor(config: ApolloClientConfigType, configService: ConfigService, logger: Logger, cls: ClsService);
    static parseException(e: GraphqlExceptionType | HttpException, exceptionMapping?: Partial<Record<ErrorCodeEnum, new (...args: never[]) => HttpException>>): HttpException;
    protected setHeaders(headers?: Record<string, unknown>): Promise<void>;
    request<T>(request: QueryOptions | MutationOptions, responseKey?: string, headers?: Record<string, unknown>): Promise<T>;
}
