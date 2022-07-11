import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class NotificationNewModel {
  @Field(() => Boolean, { nullable: true })
  webNotifications: boolean;
}
