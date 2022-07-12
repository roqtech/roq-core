import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

import { IdBulkFilterArgType } from './id-bulk-filter.arg.type';

@InputType()
export class BaseBulkFilterArgType {
  @Field(() => IdBulkFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => IdBulkFilterArgType)
  id?: IdBulkFilterArgType;
}
