import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeCategoryOrderSortEnum {
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  KEY = 'key',
  DESCRIPTION = 'description',
}

registerEnumType(NotificationTypeCategoryOrderSortEnum, {
  name: 'NotificationTypeCategoryOrderSortEnum',
});
