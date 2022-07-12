import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsEnum } from '@roq/class-validator';
import { NotificationTypeCategorySearchKeyEnum } from 'src/platformClient/platformNotificationClient/enums';


@InputType()
export class NotificationTypeCategorySearchArgType {
  @Field(() => NotificationTypeCategorySearchKeyEnum)
  @IsDefined()
  @IsEnum(NotificationTypeCategorySearchKeyEnum)
  key: NotificationTypeCategorySearchKeyEnum;

  @Field()
  value: string;
}
