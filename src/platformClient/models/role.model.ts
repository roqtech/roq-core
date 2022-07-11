import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PermissionPageModel } from 'src/platformClient/models/permission-page.model';
import { UserGroupPageModel } from 'src/platformClient/models/user-group-page.model';
import { UserPlatformPageModel } from 'src/platformClient/models/user-platform-page.model';

@ObjectType()
export class RoleModel {
  @Field(() => ID)
  id: string;

  @Field()
  key: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  isSystemManaged: boolean;

  @Field(() => UserPlatformPageModel, { nullable: false })
  users: UserPlatformPageModel;

  @Field(() => UserGroupPageModel, { nullable: false })
  userGroups: UserGroupPageModel;

  @Field(() => PermissionPageModel)
  permissions: PermissionPageModel;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
