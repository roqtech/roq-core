import { Field, ID, ObjectType } from '@nestjs/graphql';
import { RolePageModel, UserPlatformPageModel } from 'src/platformClient/models';

@ObjectType()
export class UserGroupModel {
  @Field(() => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  remoteId: string;

  @Field(() => UserPlatformPageModel, { nullable: true })
  memberUsers: UserPlatformPageModel;

  @Field(() => RolePageModel, { nullable: false })
  roles: RolePageModel;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
