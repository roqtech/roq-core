import { NotificationUserGroup } from '@src/platformClient/platformNotificationClient/types';

export interface NotificationRecipient {
  userIds?: string[];
  userGroups?: NotificationUserGroup;
  excludedUserIds?: string[];
  allUsers: boolean;
}
