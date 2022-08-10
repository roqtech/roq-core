import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeChannelWebSearchKeyEnum {
  KEY = 'key',
}

registerEnumType(NotificationTypeChannelWebSearchKeyEnum, {
  name: 'NotificationTypeChannelWebSearchKeyEnum',
});
