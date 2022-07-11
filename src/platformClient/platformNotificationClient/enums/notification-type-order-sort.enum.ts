import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeOrderSortEnum {
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  KEY = 'key',
  DESCRIPTION = 'description',
  DEFAULT_USER_ACTIVE_WEB = 'defaultUserActiveWeb',
  DEFAULT_USER_ACTIVE_MAIL = 'defaultUserActiveMail',
  IS_ACTIVE = 'isActive',
}

registerEnumType(NotificationTypeOrderSortEnum, {
  name: 'NotificationTypeOrderSortEnum',
});
