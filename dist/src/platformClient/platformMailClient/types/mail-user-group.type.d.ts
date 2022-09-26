import { MailUserGroupOperatorEnum } from '../../../platformClient/platformMailClient/enums';
export interface MailUserGroup {
    userGroupIds: string[];
    operator: MailUserGroupOperatorEnum;
}
