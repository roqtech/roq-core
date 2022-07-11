import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Trim } from 'src/library/decorators';
import { JsonObject } from 'src/library/scalars';
import { UserPlatformModel } from 'src/platformClient/models/user-platform.model';
import { UserPlatformTokenModel } from 'src/platformClient/models/user-platform-token.model';

@ObjectType()
export class UserPlatformInviteModel {
  @Field(() => ID)
  id: string;

  @Field()
  @Trim()
  email: string;

  @Field({ nullable: true })
  @Trim()
  firstName?: string;

  @Field({ nullable: true })
  @Trim()
  lastName?: string;

  @Field({ nullable: true })
  locale?: string;

  @Field(() => JsonObject, { nullable: true })
  data?: Record<string, unknown>;

  @Field()
  status: string;

  @Field(() => ID, { nullable: false })
  createdByUserId: string;

  @Field(() => UserPlatformModel, { nullable: false })
  createdBy: UserPlatformModel;

  @Field(() => ID, { nullable: false })
  userTokenId: string;

  @Field(() => UserPlatformTokenModel, { nullable: false })
  userToken: UserPlatformTokenModel;

  @Field(() => ID, { nullable: true })
  acceptedByUserId: string;

  @Field(() => UserPlatformModel, { nullable: true })
  acceptedBy: UserPlatformModel;

  @Field()
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  statusUpdatedAt?: string;
}

