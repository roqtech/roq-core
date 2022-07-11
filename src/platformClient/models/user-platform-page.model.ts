import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserPlatformModel } from 'src/platformClient/models/user-platform.model';

@ObjectType()
export class UserPlatformPageModel {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [UserPlatformModel])
  data: UserPlatformModel[];
}
