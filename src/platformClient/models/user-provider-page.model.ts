import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserProviderModel } from 'src/platformClient/models';

@ObjectType()
export class UserProviderPageModel {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [UserProviderModel])
  data: UserProviderModel[];
}
