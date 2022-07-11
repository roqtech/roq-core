import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  NotificationTypeChannelWebLocalizedPageModel,
  NotificationTypeModel,
} from 'src/platformClient/platformNotificationClient/models';

@ObjectType()
export class NotificationTypeChannelWebModel {
  @Field(() => ID)
  id: string;

  @Field()
  key: string;

  @Field()
  isActive: boolean;

  @Field(() => ID, { nullable: false })
  notificationTypeId: string;

  @Field(() => NotificationTypeModel, { nullable: false })
  notificationType: NotificationTypeModel;

  @Field(() => NotificationTypeChannelWebLocalizedPageModel)
  notificationTypeChannelWebLocalizeds: NotificationTypeChannelWebLocalizedPageModel;

  @Field()
  createdAt?: string;

  @Field()
  updatedAt?: string;
}
