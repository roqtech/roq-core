import { MailNonUser, MailUserGroup } from '../../../platformClient/platformMailClient/types';
export interface MailRecipient {
    userIds?: string[];
    userGroups?: MailUserGroup;
    nonUsers?: MailNonUser[];
    excludedUserIds?: string[];
    allUsers: boolean;
}
