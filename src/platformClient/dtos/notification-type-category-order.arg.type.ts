import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsEnum } from '@roq/class-validator';
import { OrderEnum } from 'src/library/enums';
import { NotificationTypeCategoryOrderSortEnum } from 'src/platformClient/platformNotificationClient/enums';

@InputType()
export class NotificationTypeCategoryOrderArgType {
  @Field(() => OrderEnum)
  @IsDefined()
  @IsEnum(OrderEnum)
  order: OrderEnum;

  @Field(() => NotificationTypeCategoryOrderSortEnum)
  @IsDefined()
  @IsEnum(NotificationTypeCategoryOrderSortEnum)
  sort: NotificationTypeCategoryOrderSortEnum;
}
