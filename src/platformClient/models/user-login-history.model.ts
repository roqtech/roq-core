import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserModel } from 'src/platformClient/models';

@ObjectType()
export class UserLoginHistoryModel {
  @Field(() => ID)
  id: string;

  @Field()
  ip: string;

  @Field()
  host: string;

  @Field()
  timestamp: Date;

  @Field(() => ID, { nullable: false })
  userId: string;

  @Field(() => UserModel, { nullable: false })
  user: UserModel;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
