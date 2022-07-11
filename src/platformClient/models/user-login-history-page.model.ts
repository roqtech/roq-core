import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserLoginHistoryModel } from 'src/platformClient/models';

@ObjectType()
export class UserLoginHistoryPageModel {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [UserLoginHistoryModel])
  data: UserLoginHistoryModel[];
}
