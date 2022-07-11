import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PermissionScopeEnum } from 'src/platformClient/enums/permission-scope.enum';
import { RoleModel } from 'src/platformClient/models/role.model';

@ObjectType()
export class PermissionModel {
  @Field(() => ID)
  id: string;

  @Field()
  key: string;

  @Field()
  resolverMapping: string;

  @Field(() => PermissionScopeEnum)
  scope: PermissionScopeEnum;

  @Field({ nullable: true })
  userGroupType?: string;

  @Field(() => ID, { nullable: false })
  roleId: string;

  @Field(() => RoleModel, { nullable: false })
  role: RoleModel;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
