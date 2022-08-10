import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeSearchKeyEnum {
  KEY = 'key',
}

registerEnumType(NotificationTypeSearchKeyEnum, {
  name: 'NotificationTypeSearchKeyEnum',
});
