import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NotificationWebModel {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  icon: string;

  @Field()
  content: string;

  @Field()
  locale: string;

  @Field()
  read: boolean;

  @Field()
  notificationTypeChannelWebId: string;

  @Field()
  userId: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
