import { MailNonUser } from './mail-non-user.type'
import { MailUserGroup } from './mail-user-group.type'

export interface MailRecipient {
  userIds?: string[]
  userGroups?: MailUserGroup
  nonUsers?: MailNonUser[]
  excludedUserIds?: string[]
  allUsers: boolean
}
