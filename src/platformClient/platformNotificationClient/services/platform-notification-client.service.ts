import { Injectable } from '@nestjs/common'
import { createNotificationMutation } from 'src/platformClient/platformNotificationClient/graphql'
import { Notification, NotificationCreateMutationArgs } from 'src/platformClient/platformNotificationClient/types'
import { PlatformServiceAccountClientService } from 'src/platformClient/services'

@Injectable()
export class PlatformNotificationClientService {
  constructor(private readonly platformServiceAccountClientService: PlatformServiceAccountClientService) {}

  async createNotification(notificationData: NotificationCreateMutationArgs): Promise<Notification> {
    return this.platformServiceAccountClientService.request<Notification>(
      {
        mutation: createNotificationMutation,
        variables: {
          notificationData,
        },
      },
      'createNotification',
    )
  }
}
