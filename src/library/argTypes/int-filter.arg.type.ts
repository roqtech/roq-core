import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt } from '@roq/class-validator';

@InputType()
export class IntFilterArgType {
  @IsInt()
  @Field(() => Int, { nullable: true })
  equalTo?: number;

  @IsInt()
  @Field(() => Int, { nullable: true })
  notEqualTo?: number;

  @IsInt()
  @Field(() => Int, { nullable: true })
  moreThan?: number;

  @IsInt()
  @Field(() => Int, { nullable: true })
  lessThan?: number;

  @IsInt()
  @Field(() => Int, { nullable: true })
  moreThanEqual?: number;

  @IsInt()
  @Field(() => Int, { nullable: true })
  lessThanEqual?: number;

  @IsInt({ each: true })
  @Field(() => [Int], { nullable: true })
  valueNotIn?: number[];

  @IsInt({ each: true })
  @Field(() => [Int], { nullable: true })
  valueIn?: number[];
}
