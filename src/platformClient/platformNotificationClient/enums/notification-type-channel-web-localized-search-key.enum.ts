import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeChannelWebLocalizedSearchKeyEnum {
  KEY = 'key',
  TITLE = 'title',
  ICON = 'icon',
  LOCALE = 'locale',
}

registerEnumType(NotificationTypeChannelWebLocalizedSearchKeyEnum, {
  name: 'NotificationTypeChannelWebLocalizedSearchKeyEnum',
});
