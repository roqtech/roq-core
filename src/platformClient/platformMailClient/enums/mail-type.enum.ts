import { registerEnumType } from '@nestjs/graphql';

export enum MailTypeEnum {
  CONFIRM_MAIL = 'CONFIRM_MAIL',
  RESET_PASSWORD_MAIL = 'RESET_PASSWORD_MAIL',
  WELCOME_USER_MAIL = 'WELCOME_USER_MAIL',
}

registerEnumType(MailTypeEnum, {
  name: 'MailTypeEnum',
});
