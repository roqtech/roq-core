import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeChannelWebOrderSortEnum {
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  KEY = 'key',
  IS_ACTIVE = 'isActive',
}

registerEnumType(NotificationTypeChannelWebOrderSortEnum, {
  name: 'NotificationTypeChannelWebOrderSortEnum',
});
