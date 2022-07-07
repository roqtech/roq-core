export class UserLoginHistoryInterface {
  id: string;
  ip: string;
  host: string;
  timestamp: Date;
  userId: string;
  user: UserModel;
  createdAt?: Date;
  updatedAt?: Date;
}


export class UserModel {
  id: string;
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  locale?: string;
  timezone?: string;
  roqIdentifier: string;
  optedInAt?: Date;
  active?: boolean;
  sync?: boolean;
  userLoginHistories: UserLoginHistoryPageInterface;
  createdAt?: Date;
  updatedAt?: Date;
}


export interface UserLoginHistoryPageInterface {
  totalCount: number;
  data: UserLoginHistoryInterface[];
}


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
  userLoginHistories: UserLoginHistoryPageInterface;
  createdAt?: Date;
  updatedAt?: Date;
}
