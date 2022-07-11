import { Field, ID, ObjectType } from '@nestjs/graphql';
import { NotificationTypeModel } from 'src/platformClient/platformNotificationClient/models';

@ObjectType()
export class NotificationTypeChannelMailModel {
  @Field(() => ID)
  id: string;

  @Field()
  key: string;

  @Field()
  mailTypeId: string;

  @Field()
  isActive: boolean;

  @Field(() => ID, { nullable: false })
  notificationTypeId: string;

  @Field(() => NotificationTypeModel, { nullable: false })
  notificationType: NotificationTypeModel;

  @Field()
  createdAt?: string;

  @Field()
  updatedAt?: string;
}
