import { Field, ID, InputType } from '@nestjs/graphql';
import { IsBoolean, IsDefined, IsUUID } from '@roq/class-validator';

@InputType()
export class NotificationTypeUserPreferenceUpsertDto {
  @Field(() => ID, { nullable: true })
  @IsUUID()
  id?: string;

  @Field({ nullable: false })
  @IsBoolean()
  @IsDefined()
  web: boolean;

  @Field({ nullable: false })
  @IsBoolean()
  @IsDefined()
  mail: boolean;

  @Field(() => ID, { nullable: false })
  @IsUUID()
  notificationTypeId: string;
}
