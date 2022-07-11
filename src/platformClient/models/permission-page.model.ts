import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PermissionModel } from 'src/platformClient/models';

@ObjectType()
export class PermissionPageModel {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [PermissionModel])
  data: PermissionModel[];
}
