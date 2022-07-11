// eslint-disable-next-line @roq/dir-contains-index
import { registerEnumType } from '@nestjs/graphql';
export enum UserInviteStatusEnum {
  accepted = 'accepted',
  canceled = 'canceled',
  expired = 'expired',
  pending = 'pending',
}
registerEnumType(UserInviteStatusEnum, {
  name: 'UserInviteStatusEnum',
});
