import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class IdFilterArgType {
  @Field(() => ID, { nullable: true })
  equalTo?: string

  @Field(() => ID, { nullable: true })
  notEqualTo?: string

  @Field(() => [ID], { nullable: true })
  valueNotIn?: string[]

  @Field(() => [ID], { nullable: true })
  valueIn?: string[]
}
