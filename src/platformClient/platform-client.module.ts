import { CacheModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApolloClientModule } from 'src/apolloClient';
import { Logger } from 'src/logger/services';
import { PlatformClientResolver } from 'src/platformClient/resolvers';
import { PlatformClientService, PlatformHttpClientService, PlatformServiceAccountClientService } from 'src/platformClient/services';

@Module({
  imports: [
    ApolloClientModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        host: configService.get('application.platform.host'),
        endpoint: configService.get('application.platform.apiUri'),
        headers: {}
      }),
      imports: [],
      inject: [ConfigService],
    }),
    CacheModule.register({
      useFactory: async (configService: ConfigService) => ({
        ttl: configService.get('application.serviceAccount.cache.ttl'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    PlatformClientService, PlatformHttpClientService, PlatformClientResolver, Logger,
    PlatformServiceAccountClientService
  ],
  exports: [PlatformClientService, PlatformHttpClientService, PlatformServiceAccountClientService],
  controllers: [],
})
export class PlatformClientModule {}
