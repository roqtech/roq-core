import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserModel } from 'src/platformClient/models';

@ObjectType()
export class UserPageModel {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [UserModel])
  data: UserModel[];
}
