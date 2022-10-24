import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNumber } from '@roq/class-validator';

@ArgsType()
export class BaseArgType {
  @IsNumber()
  @Field(() => Int, { nullable: true })
  limit?: number;

  @IsNumber()
  @Field(() => Int, { nullable: true })
  offset?: number;
}
