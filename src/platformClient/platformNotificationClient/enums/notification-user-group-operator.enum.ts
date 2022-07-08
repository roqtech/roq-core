import { registerEnumType } from '@nestjs/graphql'

export enum NotificationUserGroupOperatorEnum {
  AND = 'AND',
  OR = 'OR',
}

registerEnumType(NotificationUserGroupOperatorEnum, { name: 'NotificationUserGroupOperatorEnum' })
