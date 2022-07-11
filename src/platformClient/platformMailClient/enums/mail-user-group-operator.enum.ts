import { registerEnumType } from '@nestjs/graphql';

export enum MailUserGroupOperatorEnum {
  AND = 'AND',
  OR = 'OR',
}

registerEnumType(MailUserGroupOperatorEnum, { name: 'MailUserGroupOperatorEnum' });
