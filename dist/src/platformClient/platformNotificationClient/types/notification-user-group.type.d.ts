import { NotificationUserGroupOperatorEnum } from '../../../platformClient/platformNotificationClient/enums';
export interface NotificationUserGroup {
    userGroupIds: string[];
    operator: NotificationUserGroupOperatorEnum;
}
