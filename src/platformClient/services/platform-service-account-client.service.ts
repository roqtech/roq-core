import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import { decode, JwtPayload } from 'jsonwebtoken';
import {  ClsServiceManager } from 'nestjs-cls';
import { ApolloClientConfigType } from 'src/apolloClient/types';
import { ClsKeyEnum } from 'src/library/enums';
import { Logger } from 'src/logger/services';
import { PlatformClientService } from 'src/platformClient/services/platform-client.service';
import { PlatformHttpClientService } from 'src/platformClient/services/platform-http-client.service';
import { v4 } from 'uuid';

@Injectable()
export class PlatformServiceAccountClientService extends PlatformClientService {
  constructor(
    protected config: ApolloClientConfigType,
    protected configService: ConfigService,
    protected logger: Logger,
    private platformHttpClientService: PlatformHttpClientService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    super(config, configService, logger);
  }

  protected async setHeaders(headers?: Record<string, unknown>): Promise<void> {
    const cls = ClsServiceManager.getClsService();
    const requestId = cls.get(ClsKeyEnum.REQUEST_ID) ?? v4()
    const requestCaller = this.configService.get('application.appName')

    headers[this.configService.get('application.platform.requestIdHeader')] = requestId;
    headers[this.configService.get('application.platform.requestCallerHeader')] = requestCaller;

    const tokenCacheKey = this.configService.get('application.serviceAccount.cache.key');
    let isTokenValid = false;
    let token = await this.cacheManager.get(tokenCacheKey);

    if(token) {
      try {
        const payload  = decode(token) as JwtPayload;
        isTokenValid = payload.exp !== undefined && (payload.exp * 1000) > Date.now();
      } catch(err) {
        isTokenValid = false;
      }
    }

    if(!isTokenValid) {
      token = await this.platformHttpClientService.getServiceAccountAccessToken(this.configService.get('application.serviceAccount.email'));
      await this.cacheManager.set(tokenCacheKey, token);
    }
    headers[this.configService.get('application.platform.authorizationHeader')] = `Bearer ${token}`;
  }
}
