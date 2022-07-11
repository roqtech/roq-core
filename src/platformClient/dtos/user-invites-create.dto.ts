import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsArray } from 'class-validator';
import { ValidateNested } from '@roq/class-validator';
import { UserInviteCreateDto } from 'src/platformClient/dtos';

@InputType()
export class UserInvitesCreateDto {
  @Field(() => [UserInviteCreateDto], { nullable: false })
  @Type(() => UserInviteCreateDto)
  @IsArray()
  @ValidateNested({ each: true })
  userInvites: UserInviteCreateDto[];
}
