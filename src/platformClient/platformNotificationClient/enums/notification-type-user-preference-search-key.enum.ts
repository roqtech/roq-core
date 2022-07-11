import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeUserPreferenceSearchKeyEnum {
  KEY = 'key',
  USER_ID = 'userId',
}

registerEnumType(NotificationTypeUserPreferenceSearchKeyEnum, {
  name: 'NotificationTypeUserPreferenceSearchKeyEnum',
});
