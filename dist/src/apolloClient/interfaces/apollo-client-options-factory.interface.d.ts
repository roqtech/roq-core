import { ApolloClientModuleAsyncOptionsInterface } from '../../apolloClient/interfaces';
export interface ApolloClientOptionsFactoryInterface {
    createApolloClientOptions(): Promise<ApolloClientModuleAsyncOptionsInterface> | ApolloClientModuleAsyncOptionsInterface;
}
