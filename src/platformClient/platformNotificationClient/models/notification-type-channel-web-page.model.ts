import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NotificationTypeChannelWebModel } from 'src/platformClient/platformNotificationClient/models';

@ObjectType()
export class NotificationTypeChannelWebPageModel {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [NotificationTypeChannelWebModel])
  data: NotificationTypeChannelWebModel[];
}
