import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserGroupModel } from 'src/platformClient/models';

@ObjectType()
export class UserGroupPageModel {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [UserGroupModel])
  data: UserGroupModel[];
}
