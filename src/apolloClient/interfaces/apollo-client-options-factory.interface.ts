import { ApolloClientModuleAsyncOptionsInterface } from '../interfaces';

export interface ApolloClientOptionsFactoryInterface {
  createApolloClientOptions():
    | Promise<ApolloClientModuleAsyncOptionsInterface>
    | ApolloClientModuleAsyncOptionsInterface;
}
