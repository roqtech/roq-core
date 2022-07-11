import { MailUserGroupOperatorEnum } from '../enums'

export interface MailUserGroup {
  userGroupIds: string[]
  operator: MailUserGroupOperatorEnum
}
