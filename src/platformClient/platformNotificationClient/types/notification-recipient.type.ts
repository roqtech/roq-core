import { NotificationUserGroup } from './notification-user-group.type'

export interface NotificationRecipient {
  userIds?: string[]
  userGroups?: NotificationUserGroup
  excludedUserIds?: string[]
  allUsers: boolean
}
