import { MailEntity } from './mail-entity.type'
import { MailRecipient } from './mail-recipient.type'

export interface MailSendDto {
  subject?: string
  mailType: string
  entities: MailEntity[]
  directlyInjectedVariables?: string
  recipients: MailRecipient
}
