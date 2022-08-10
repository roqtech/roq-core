import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeCategorySearchKeyEnum {
  KEY = 'key',
}

registerEnumType(NotificationTypeCategorySearchKeyEnum, {
  name: 'NotificationTypeCategorySearchKeyEnum',
});
