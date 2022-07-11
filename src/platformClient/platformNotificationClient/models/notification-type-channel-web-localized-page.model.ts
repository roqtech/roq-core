import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NotificationTypeChannelWebLocalizedModel } from 'src/platformClient/platformNotificationClient/models';

@ObjectType()
export class NotificationTypeChannelWebLocalizedPageModel {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [NotificationTypeChannelWebLocalizedModel])
  data: NotificationTypeChannelWebLocalizedModel[];
}
