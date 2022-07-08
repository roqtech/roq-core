import { Injectable } from '@nestjs/common'
import { sendMailMutation } from '../mutations'
import { MailSendDto } from '../types'
import { PlatformServiceAccountClientService } from '../../services'

@Injectable()
export class PlatformMailClientService {
  constructor(private readonly platformServiceAccountClientService: PlatformServiceAccountClientService) {}

  async sendMail(payload: MailSendDto): Promise<boolean> {
    return this.platformServiceAccountClientService.request<boolean>(
      {
        mutation: sendMailMutation,
        variables: {
          payload,
        },
      },
      'sendMail',
    )
  }
}
