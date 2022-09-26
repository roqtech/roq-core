import { NotificationUserGroup } from '../../../platformClient/platformNotificationClient/types';
export interface NotificationRecipient {
    userIds?: string[];
    userGroups?: NotificationUserGroup;
    excludedUserIds?: string[];
    allUsers: boolean;
}
