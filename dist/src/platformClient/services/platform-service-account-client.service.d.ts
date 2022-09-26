import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import { ClsService } from 'nestjs-cls';
import { ApolloClientConfigType } from '../../apolloClient/types';
import { Logger } from '../../logger/services';
import { PlatformClientService } from '../../platformClient/services/platform-client.service';
import { PlatformHttpClientService } from '../../platformClient/services/platform-http-client.service';
export declare class PlatformServiceAccountClientService extends PlatformClientService {
    protected config: ApolloClientConfigType;
    protected configService: ConfigService;
    protected logger: Logger;
    protected readonly cls: ClsService;
    private platformHttpClientService;
    private cacheManager;
    constructor(config: ApolloClientConfigType, configService: ConfigService, logger: Logger, cls: ClsService, platformHttpClientService: PlatformHttpClientService, cacheManager: Cache);
    protected setHeaders(headers?: Record<string, unknown>): Promise<void>;
}
