import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserModel } from 'src/platformClient/models';

@ObjectType()
export class UserProviderModel {
  @Field(() => ID)
  id: string;

  @Field()
  providerIdentifier: string;

  @Field()
  providerUserIdentifier: string;

  @Field()
  optedIn: boolean;

  @Field(() => ID, { nullable: false })
  userId: string;

  @Field(() => UserModel, { nullable: false })
  user: UserModel;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
