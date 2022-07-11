import { Field, ID, ObjectType } from '@nestjs/graphql';
import { NotificationTypePageModel } from 'src/platformClient/platformNotificationClient/models';

@ObjectType()
export class NotificationTypeCategoryModel {
  @Field(() => ID)
  id: string;

  @Field()
  key: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => NotificationTypePageModel)
  notificationTypes: NotificationTypePageModel;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
