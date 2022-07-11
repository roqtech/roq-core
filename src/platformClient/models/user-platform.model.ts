import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Trim } from 'src/library/decorators';
import {
  RolePageModel,
  UserGroupPageModel,
  UserInvitePageModel,
  UserPlatformInviteModel,
  UserProviderPageModel,
  UserTokenPageModel,
} from 'src/platformClient/models';

@ObjectType()
export class UserPlatformModel {
  @Field(() => ID)
  id: string;

  @Field()
  @Trim()
  email: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @Trim()
  firstName?: string;

  @Field({ nullable: true })
  @Trim()
  lastName?: string;

  @Field({ nullable: true })
  locale?: string;

  @Field({ nullable: true })
  timezone?: string;

  @Field({ nullable: true })
  optedInAt?: Date;

  @Field({ nullable: true })
  active?: boolean;

  @Field(() => UserProviderPageModel)
  userProviders: UserProviderPageModel;

  @Field(() => UserTokenPageModel)
  userTokens: UserTokenPageModel;

  @Field(() => ID, { nullable: true })
  userInviteId: string;

  @Field(() => UserPlatformInviteModel, { nullable: true })
  acceptedUserInvite: UserPlatformInviteModel;

  @Field(() => UserInvitePageModel, { nullable: true })
  createdUserInvites: UserInvitePageModel;

  @Field(() => UserGroupPageModel, { nullable: true })
  userGroups: UserGroupPageModel;

  @Field(() => RolePageModel, { nullable: true })
  roles: RolePageModel;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
