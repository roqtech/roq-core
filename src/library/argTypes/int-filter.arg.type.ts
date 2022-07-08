import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class IntFilterArgType {
  @Field(() => Int, { nullable: true })
  equalTo?: number

  @Field(() => Int, { nullable: true })
  notEqualTo?: number

  @Field(() => Int, { nullable: true })
  moreThan?: number

  @Field(() => Int, { nullable: true })
  lessThan?: number

  @Field(() => Int, { nullable: true })
  moreThanEqual?: number

  @Field(() => Int, { nullable: true })
  lessThanEqual?: number

  @Field(() => [Int], { nullable: true })
  valueNotIn?: number[]

  @Field(() => [Int], { nullable: true })
  valueIn?: number[]
}
