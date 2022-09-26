import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { ApolloClientOptionsFactoryInterface } from '../../apolloClient/interfaces';
import { ApolloClientConfigType } from '../../apolloClient/types';
export interface ApolloClientModuleAsyncOptionsInterface extends Pick<ModuleMetadata, 'imports'> {
    useExisting?: Type<ApolloClientOptionsFactoryInterface>;
    useClass?: Type<ApolloClientOptionsFactoryInterface>;
    useFactory?: (...args: any[]) => Promise<ApolloClientConfigType> | ApolloClientConfigType;
    inject?: any[];
}
