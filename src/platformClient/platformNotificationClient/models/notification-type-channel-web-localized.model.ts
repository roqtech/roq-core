import { Field, ID, ObjectType } from '@nestjs/graphql';
import { NotificationTypeChannelWebModel } from 'src/platformClient/platformNotificationClient/models';

@ObjectType()
export class NotificationTypeChannelWebLocalizedModel {
  @Field(() => ID)
  id: string;

  @Field()
  key: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  icon: string;

  @Field()
  locale: string;

  @Field(() => ID, { nullable: false })
  notificationTypeChannelWebId: string;

  @Field(() => NotificationTypeChannelWebModel, { nullable: false })
  notificationTypeChannelWeb: NotificationTypeChannelWebModel;

  @Field()
  createdAt?: string;

  @Field()
  updatedAt?: string;
}
