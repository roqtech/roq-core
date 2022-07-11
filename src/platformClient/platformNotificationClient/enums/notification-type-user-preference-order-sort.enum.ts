import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeUserPreferenceOrderSortEnum {
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  KEY = 'key',
  USER_ID = 'userId',
  WEB = 'web',
  MAIL = 'mail',
}

registerEnumType(NotificationTypeUserPreferenceOrderSortEnum, {
  name: 'NotificationTypeUserPreferenceOrderSortEnum',
});
