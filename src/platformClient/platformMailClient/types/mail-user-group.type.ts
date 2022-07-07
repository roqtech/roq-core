import { MailUserGroupOperatorEnum } from 'src/platformClient/platformMailClient/enums';

export interface MailUserGroup {
  userGroupIds: string[];
  operator: MailUserGroupOperatorEnum;
}
