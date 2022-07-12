import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested, IsArray } from '@roq/class-validator';
import { UserInviteCreateDto } from 'src/platformClient/dtos';

@InputType()
export class UserInvitesCreateDto {
  @Field(() => [UserInviteCreateDto], { nullable: false })
  @Type(() => UserInviteCreateDto)
  @IsArray()
  @ValidateNested({ each: true })
  userInvites: UserInviteCreateDto[];
}
