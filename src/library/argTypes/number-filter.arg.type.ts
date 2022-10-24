import { Field, Float, InputType } from '@nestjs/graphql';
import { IsNumber } from '@roq/class-validator';

@InputType()
export class NumberFilterArgType {
  @IsNumber()
  @Field(() => Float, { nullable: true })
  equalTo?: number;

  @IsNumber()
  @Field(() => Float, { nullable: true })
  notEqualTo?: number;

  @IsNumber()
  @Field(() => Float, { nullable: true })
  moreThan?: number;

  @IsNumber()
  @Field(() => Float, { nullable: true })
  lessThan?: number;

  @IsNumber()
  @Field(() => Float, { nullable: true })
  moreThanEqual?: number;

  @IsNumber()
  @Field(() => Float, { nullable: true })
  lessThanEqual?: number;

  @IsNumber(undefined, { each: true })
  @Field(() => [Float], { nullable: true })
  valueNotIn?: number[];

  @IsNumber(undefined, { each: true })
  @Field(() => [Float], { nullable: true })
  valueIn?: number[];
}
