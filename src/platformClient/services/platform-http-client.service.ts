import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { AuthorizeCredentialsType } from '../types';

@Injectable()
export class PlatformHttpClientService {
  private http: AxiosInstance;

  constructor(private configService: ConfigService) {
    const base64encodedData = Buffer.from(
      `${configService.get('application.platform.tenantId')}:${configService.get(
        'application.platform.apiKey',
      )}`,
    ).toString('base64');
    this.http = axios.create({
      baseURL: configService.get('application.platform.host'),
      headers: { [configService.get('application.platform.authorizationHeader')]: `Basic ${base64encodedData}` },
    });
  }

  async getAccessToken(roqIdentifier: string): Promise<string> {
    const response = await this.http.post<AuthorizeCredentialsType>('/authorize', {
      tenantId: this.configService.get('application.platform.tenantId'),
      apiKey: this.configService.get('application.platform.apiKey'),
      roqIdentifier
    });
    return response.data.accessToken;
  }

  async getServiceAccountAccessToken(email: string): Promise<string> {
    const response = await this.http.post<AuthorizeCredentialsType>('/authorize/serviceAccount', {
      tenantId: this.configService.get('application.platform.tenantId'),
      apiKey: this.configService.get('application.platform.apiKey'),
      email
    });
    return response.data.accessToken;
  }
}
