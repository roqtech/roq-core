import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from '@roq/class-validator';
import { DeleteArgType } from './';

@InputType()
export class DeleteFilterArgType {
  @Field(() => DeleteArgType, { nullable: true })
  @ValidateNested()
  @Type(() => DeleteArgType)
  id?: DeleteArgType;
}
