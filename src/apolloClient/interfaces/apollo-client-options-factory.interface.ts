import { ApolloClientModuleAsyncOptionsInterface } from 'src/apolloClient/interfaces';

export interface ApolloClientOptionsFactoryInterface {
  createApolloClientOptions():
    | Promise<ApolloClientModuleAsyncOptionsInterface>
    | ApolloClientModuleAsyncOptionsInterface;
}
