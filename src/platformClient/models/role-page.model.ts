import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RoleModel } from 'src/platformClient/models/role.model';

@ObjectType()
export class RolePageModel {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [RoleModel])
  data: RoleModel[];
}
