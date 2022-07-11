import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserPlatformTokenModel } from 'src/platformClient/models';

@ObjectType()
export class UserTokenPageModel {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [UserPlatformTokenModel])
  data: UserPlatformTokenModel[];
}
