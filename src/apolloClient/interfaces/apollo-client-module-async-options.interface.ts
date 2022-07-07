import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { ApolloClientOptionsFactoryInterface } from '../interfaces';
import { ApolloClientConfigType } from '../types';

export interface ApolloClientModuleAsyncOptionsInterface extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<ApolloClientOptionsFactoryInterface>;
  useClass?: Type<ApolloClientOptionsFactoryInterface>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useFactory?: (...args: any[]) => Promise<ApolloClientConfigType> | ApolloClientConfigType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inject?: any[];
}
