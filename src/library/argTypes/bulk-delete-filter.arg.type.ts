import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from '@roq/class-validator';
import { DeleteFilterArgType } from 'src/library/argTypes';

@ArgsType()
export class BulkDeleteFilterArgType {
  @Field(() => DeleteFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => DeleteFilterArgType)
  filter?: DeleteFilterArgType;
}
