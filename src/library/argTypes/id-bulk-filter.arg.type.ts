import { Field, ID, InputType } from '@nestjs/graphql';
import { ArrayNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class IdBulkFilterArgType {
  @Field(() => ID, { nullable: true })
  @IsUUID()
  equalTo?: string;

  @Field(() => [ID], { nullable: true })
  @ArrayNotEmpty()
  @IsUUID('all', { each: true })
  valueIn?: string[];
}
