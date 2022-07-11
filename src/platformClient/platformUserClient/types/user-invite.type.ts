import { User, UserToken } from 'src/platformClient/platformUserClient/types';

export interface UserInvite {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  locale?: string;
  data?: Record<string, unknown>;
  status: string;
  createdByUserId: string;
  createdBy: User;
  acceptedByUserId?: string;
  acceptedBy?: User;
  userTokenId: string;
  userToken: UserToken;
  createdAt?: Date;
  updatedAt?: Date;
  statusUpdatedAt?: Date;
}
