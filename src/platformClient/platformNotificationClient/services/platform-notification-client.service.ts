import { Injectable } from '@nestjs/common'
import { createNotificationMutation } from '../graphql/mutations'
import { Notification, NotificationCreateMutationArgs } from '../types'
import { PlatformServiceAccountClientService } from '../../services'

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
