import { Field, InputType } from '@nestjs/graphql'
import { Type } from 'class-transformer'
import { ValidateNested } from '@roq/class-validator'
import { DateFilterArgType, IdFilterArgType } from './'

@InputType()
export class BaseFilterArgType {
  @Field(() => IdFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => IdFilterArgType)
  id?: IdFilterArgType

  @Field(() => DateFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => DateFilterArgType)
  createdAt?: DateFilterArgType

  @Field(() => DateFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => DateFilterArgType)
  updatedAt?: DateFilterArgType
}
