import { registerEnumType } from '@nestjs/graphql';

export enum NotificationWebOrderSortEnum {
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  TITLE = 'title',
  CONTENT = 'content',
  LOCALE = 'locale',
  READ = 'read',
  NOTIFICATION_TYPE_CHANNEL_WEB_ID = 'notificationTypeChannelWebId',
  USER_ID = 'userId',
}

registerEnumType(NotificationWebOrderSortEnum, {
  name: 'NotificationWebOrderSortEnum',
});
