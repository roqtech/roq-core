import { Injectable } from '@nestjs/common';
import { sendMailMutation } from 'src/platformClient/platformMailClient/mutations';
import { MailSendDto } from 'src/platformClient/platformMailClient/types';
import { PlatformServiceAccountClientService } from 'src/platformClient/services';

@Injectable()
export class PlatformMailClientService {
  constructor(protected readonly platformServiceAccountClientService: PlatformServiceAccountClientService) { }

  async sendMail(payload: MailSendDto): Promise<boolean> {
    return this.platformServiceAccountClientService.request<boolean>(
      {
        mutation: sendMailMutation,
        variables: {
          payload,
        },
      },
      'sendMail',
    );
  }
}
