import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserLoginHistoryType } from 'src/platformClient/platformUserClient/types';

export class UserLoginHistoryPageType {
  totalCount: number;
  data: UserLoginHistoryType[];
}
