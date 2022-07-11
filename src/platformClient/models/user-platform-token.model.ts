import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserPlatformModel } from 'src/platformClient/models/user-platform.model';
import { UserPlatformInviteModel } from 'src/platformClient/models/user-platform-invite.model';

@ObjectType()
export class UserPlatformTokenModel {
  @Field(() => ID)
  id: string;

  @Field()
  token: string;

  @Field()
  type: string;

  @Field()
  validTill: string;

  @Field(() => ID, { nullable: false })
  userId: string;

  @Field(() => UserPlatformModel, { nullable: false })
  user: UserPlatformModel;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;

  @Field(() => UserPlatformInviteModel, { nullable: true })
  userInvite: UserPlatformInviteModel;
}
