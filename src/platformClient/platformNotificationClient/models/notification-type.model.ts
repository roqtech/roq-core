import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  NotificationTypeCategoryModel,
  NotificationTypeChannelMailModel,
  NotificationTypeChannelWebModel,
  NotificationTypeUserPreferencePageModel,
} from 'src/platformClient/platformNotificationClient/models';

@ObjectType()
export class NotificationTypeModel {
  @Field(() => ID)
  id: string;

  @Field()
  key: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  defaultUserActiveWeb: boolean;

  @Field()
  defaultUserActiveMail: boolean;

  @Field()
  isActive: boolean;

  @Field(() => NotificationTypeUserPreferencePageModel)
  notificationTypeUserPreferences: NotificationTypeUserPreferencePageModel;

  @Field(() => ID, { nullable: true })
  notificationTypeCategoryId: string;

  @Field(() => NotificationTypeCategoryModel, { nullable: true })
  notificationTypeCategory: NotificationTypeCategoryModel;

  @Field(() => ID, { nullable: true })
  notificationTypeChannelWebId: string;

  @Field(() => NotificationTypeChannelWebModel, { nullable: true })
  notificationTypeChannelWeb: NotificationTypeChannelWebModel;

  @Field(() => ID, { nullable: true })
  notificationTypeChannelMailId: string;

  @Field(() => NotificationTypeChannelMailModel, { nullable: true })
  notificationTypeChannelMail: NotificationTypeChannelMailModel;

  @Field()
  createdAt?: string;

  @Field()
  updatedAt?: string;
}
