import { DynamicModule } from '@nestjs/common';
import { ApolloClientModuleAsyncOptionsInterface } from '../apolloClient/interfaces';
import { ApolloClientConfigType } from '../apolloClient/types';
export declare class ApolloClientModule {
    static register(config: ApolloClientConfigType): DynamicModule;
    static registerAsync(options: ApolloClientModuleAsyncOptionsInterface): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
