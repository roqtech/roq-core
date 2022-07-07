import { MailNonUser, MailUserGroup } from '@src/platformClient/platformMailClient/types';

export interface MailRecipient {
  userIds?: string[];
  userGroups?: MailUserGroup;
  nonUsers?: MailNonUser[];
  excludedUserIds?: string[];
  allUsers: boolean;
}
