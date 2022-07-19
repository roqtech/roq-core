import { User } from 'src/platformClient/platformUserClient/types';

export class UserLoginHistoryType {
  id: string;
  ip: string;
  host: string;
  timestamp: Date;
  userId: string;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
