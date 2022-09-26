import { MailEntity, MailRecipient } from '../../../platformClient/platformMailClient/types';
export interface MailSendDto {
    subject?: string;
    mailType: string;
    entities: MailEntity[];
    directlyInjectedVariables?: string;
    recipients: MailRecipient;
}
