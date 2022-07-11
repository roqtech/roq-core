import { UserLoginHistoryPageModel } from 'src/platformClient/models';

export interface User {
  id: string;
  email: string;
  password: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  locale?: string;
  timezone?: string;
  roqIdentifier: string;
  optedInAt?: Date;
  active?: boolean;
  sync?: boolean;
  userLoginHistories: UserLoginHistoryPageModel;
  createdAt?: Date;
  updatedAt?: Date;
}
