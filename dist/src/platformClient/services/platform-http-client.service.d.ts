import { ConfigService } from '@nestjs/config';
export declare class PlatformHttpClientService {
    private configService;
    private http;
    constructor(configService: ConfigService);
    getAccessToken(roqIdentifier: string): Promise<string>;
    getServiceAccountAccessToken(email: string): Promise<string>;
}
