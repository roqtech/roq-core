import { Field, ID, ObjectType } from '@nestjs/graphql';
import { NotificationTypeModel } from 'src/platformClient/platformNotificationClient/models';

@ObjectType()
export class NotificationTypeUserPreferenceModel {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  key?: string;

  @Field(() => ID)
  userId: string;

  @Field()
  web: boolean;

  @Field()
  mail: boolean;

  @Field(() => ID, { nullable: false })
  notificationTypeId: string;

  @Field(() => NotificationTypeModel, { nullable: false })
  notificationType: NotificationTypeModel;

  @Field()
  createdAt?: string;

  @Field()
  updatedAt?: string;
}
