import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import { decode, JwtPayload } from 'jsonwebtoken';
import { ClsService } from 'nestjs-cls';
import { ApolloClientConfigType } from '../../apolloClient/types';
import { Logger } from '../../logger/services';
import { PlatformClientService } from './platform-client.service';
import { PlatformHttpClientService } from './platform-http-client.service';
import { v4 } from 'uuid';

// eslint-disable-next-line @roq/only-constants-in-enum
export enum ClsKeyEnum {
  REQUEST_ID = 'REQUEST_ID',
  REQUEST_CALLER = 'REQUEST_CALLER',
  USER_ID = 'USER_ID',
  USER_TOKEN = 'USER_TOKEN',
}


@Injectable()
export class PlatformServiceAccountClientService extends PlatformClientService {
  constructor(
    protected config: ApolloClientConfigType,
    protected configService: ConfigService,
    protected logger: Logger,
    protected readonly cls: ClsService,
    private platformHttpClientService: PlatformHttpClientService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    super(config, configService, logger, cls);
  }

  protected async setHeaders(headers?: Record<string, unknown>): Promise<void> {
    const requestId = this.cls.get(ClsKeyEnum.REQUEST_ID) ?? v4();
    const requestCaller = this.configService.get('application.appName');

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
