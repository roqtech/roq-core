import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeChannelMailOrderSortEnum {
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  KEY = 'key',
  MAIL_TYPE_ID = 'mailTypeId',
  IS_ACTIVE = 'isActive',
}

registerEnumType(NotificationTypeChannelMailOrderSortEnum, {
  name: 'NotificationTypeChannelMailOrderSortEnum',
});
