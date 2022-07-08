import { Field, InputType } from '@nestjs/graphql'
import { IsEmpty } from '@roq/class-validator'

@InputType()
export class DateFilterArgType {
  @Field(() => Date, { nullable: true })
  moreThan?: Date

  @Field(() => Date, { nullable: true })
  lessThan?: Date

  @Field(() => Date, { nullable: true })
  moreThanEqual?: Date

  @Field(() => Date, { nullable: true })
  lessThanEqual?: Date

  @Field(() => Date, { nullable: true })
  @IsEmpty()
  equalTo?: Date

  @Field(() => Date, { nullable: true })
  @IsEmpty()
  notEqualTo?: Date
}
