import { User, UserInvite } from 'src/platformClient/platformUserClient/types';

export interface UserToken {
  id: string;
  token: string;
  type: string;
  validTill: Date;
  userId: string;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
  userInvite: UserInvite;
}
