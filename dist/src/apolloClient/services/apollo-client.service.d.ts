import { MutationOptions, QueryOptions } from '@apollo/client/core';
import { ConfigService } from '@nestjs/config';
import { ApolloClientConfigType } from '../../apolloClient/types';
export declare class ApolloClientService {
    protected config: ApolloClientConfigType;
    protected configService: ConfigService;
    protected readonly apolloClient: any;
    protected uri: string;
    apollo: any;
    constructor(config: ApolloClientConfigType, configService: ConfigService);
    request<T>(request: QueryOptions | MutationOptions, responseKey?: string, headers?: any): Promise<T>;
}
