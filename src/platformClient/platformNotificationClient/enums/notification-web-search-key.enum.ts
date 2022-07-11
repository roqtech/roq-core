import { registerEnumType } from '@nestjs/graphql';

export enum NotificationWebSearchKeyEnum {
  TITLE = 'title',
  LOCALE = 'locale',
  NOTIFICATION_TYPE_CHANNEL_WEB_ID = 'notificationTypeChannelWebId',
  USER_ID = 'userId',
}

registerEnumType(NotificationWebSearchKeyEnum, {
  name: 'NotificationWebSearchKeyEnum',
});
