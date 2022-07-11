import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserPlatformInviteModel } from 'src/platformClient/models';

@ObjectType()
export class UserInvitePageModel {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [UserPlatformInviteModel])
  data: UserPlatformInviteModel[];
}
