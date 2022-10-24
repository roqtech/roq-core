import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsEmpty } from '@roq/class-validator';

@InputType()
export class DateFilterArgType {
  @IsDate()
  @Field(() => Date, { nullable: true })
  moreThan?: Date;

  @IsDate()
  @Field(() => Date, { nullable: true })
  lessThan?: Date;

  @IsDate()
  @Field(() => Date, { nullable: true })
  moreThanEqual?: Date;

  @IsDate()
  @Field(() => Date, { nullable: true })
  lessThanEqual?: Date;

  @IsDate()
  @Field(() => Date, { nullable: true })
  @IsEmpty()
  equalTo?: Date;

  @IsDate()
  @Field(() => Date, { nullable: true })
  @IsEmpty()
  notEqualTo?: Date;
}
