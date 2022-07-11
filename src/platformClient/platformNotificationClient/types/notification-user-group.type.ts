import { NotificationUserGroupOperatorEnum } from '../enums'

export interface NotificationUserGroup {
  userGroupIds: string[]
  operator: NotificationUserGroupOperatorEnum
}
