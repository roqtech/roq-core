import { registerEnumType } from '@nestjs/graphql'

export enum EventNameEnum {
  USER_LOGIN_SYNC = 'USER_LOGIN_SYNC',
}

registerEnumType(EventNameEnum, {
  name: 'EventNameEnum',
})
