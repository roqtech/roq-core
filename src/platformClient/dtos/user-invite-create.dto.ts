import { Field, ID, InputType } from '@nestjs/graphql';
import { JsonObject } from 'src/library/scalars';
import { UserInviteStatusEnum } from 'src/platformClient/enums/user-invite-status.enum';

@InputType()
export class UserInviteCreateDto {
  @Field({ nullable: false })
  email: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  locale?: string;

  @Field(() => JsonObject, { nullable: true })
  data?: Record<string, unknown>;

  @Field(() => UserInviteStatusEnum, { nullable: true })
  status?: UserInviteStatusEnum;

  @Field(() => ID, { nullable: false })
  createdByUserId: string;
}
