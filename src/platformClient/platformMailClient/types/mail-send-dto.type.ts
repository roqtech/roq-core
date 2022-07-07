import { MailEntity, MailRecipient } from '@src/platformClient/platformMailClient/types';

export interface MailSendDto {
  subject?: string;
  mailType: string;
  entities: MailEntity[];
  directlyInjectedVariables?: string;
  recipients: MailRecipient;
}
