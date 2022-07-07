import { NotificationUserGroupOperatorEnum } from '@src/platformClient/platformNotificationClient/enums';

export interface NotificationUserGroup {
  userGroupIds: string[];
  operator: NotificationUserGroupOperatorEnum;
}
