import { registerEnumType } from '@nestjs/graphql';

export enum NotificationTypeChannelMailSearchKeyEnum {
  KEY = 'key',
  MAIL_TYPE_ID = 'mailTypeId',
}

registerEnumType(NotificationTypeChannelMailSearchKeyEnum, {
  name: 'NotificationTypeChannelMailSearchKeyEnum',
});
