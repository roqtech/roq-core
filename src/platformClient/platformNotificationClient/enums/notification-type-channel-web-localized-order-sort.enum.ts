import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeChannelWebLocalizedOrderSortEnum {
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  KEY = 'key',
  TITLE = 'title',
  CONTENT = 'content',
  ICON = 'icon',
  LOCALE = 'locale',
}

registerEnumType(NotificationTypeChannelWebLocalizedOrderSortEnum, {
  name: 'NotificationTypeChannelWebLocalizedOrderSortEnum',
});
