import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from '@roq/class-validator';
import { IdBulkFilterArgType } from 'src/library/argTypes';

@InputType()
export class BaseBulkFilterArgType {
  @Field(() => IdBulkFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => IdBulkFilterArgType)
  id?: IdBulkFilterArgType;
}
