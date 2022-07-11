import { Field, ObjectType } from '@nestjs/graphql';
import { CreateUserInviteErrorModel } from 'src/platformClient/models/create-user-invite-error.model';
import { UserPlatformInviteModel } from 'src/platformClient/models/user-platform-invite.model';

@ObjectType()
export class CreateUserInvitesModel {
  @Field(() => [UserPlatformInviteModel], { nullable: true, defaultValue: [] })
  success: UserPlatformInviteModel[];

  @Field(() => [CreateUserInviteErrorModel], { nullable: true, defaultValue: [] })
  errors: CreateUserInviteErrorModel[];
}
