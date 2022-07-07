import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApolloClientModuleAsyncOptionsInterface, ApolloClientOptionsFactoryInterface } from './interfaces';
import { ApolloClientService } from './services';
import { ApolloClientConfigType } from './types';

@Module({
  imports: [],
  providers: [ApolloClientService, ApolloClientConfigType, ConfigService],
  exports: [ApolloClientService, ApolloClientConfigType, ConfigService],
})
export class ApolloClientModule {
  static register(config: ApolloClientConfigType): DynamicModule {
    return {
      module: ApolloClientModule,
      providers: [
        {
          provide: ApolloClientConfigType,
          useValue: config,
        },
      ],
    };
  }
  static registerAsync(options: ApolloClientModuleAsyncOptionsInterface): DynamicModule {
    return {
      module: ApolloClientModule,
      imports: options.imports || [],
      providers: [...this.createAsyncProviders(options)],
    };
  }

  private static createAsyncProviders(options: ApolloClientModuleAsyncOptionsInterface): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(options: ApolloClientModuleAsyncOptionsInterface): Provider {
    if (options.useFactory) {
      return {
        provide: ApolloClientConfigType,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    return {
      provide: ApolloClientConfigType,
      useFactory: async (optionsFactory: ApolloClientOptionsFactoryInterface) =>
        optionsFactory.createApolloClientOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
