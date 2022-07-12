import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class NumberFilterArgType {
  @Field(() => Float, { nullable: true })
  equalTo?: number;

  @Field(() => Float, { nullable: true })
  notEqualTo?: number;

  @Field(() => Float, { nullable: true })
  moreThan?: number;

  @Field(() => Float, { nullable: true })
  lessThan?: number;

  @Field(() => Float, { nullable: true })
  moreThanEqual?: number;

  @Field(() => Float, { nullable: true })
  lessThanEqual?: number;

  @Field(() => [Float], { nullable: true })
  valueNotIn?: number[];

  @Field(() => [Float], { nullable: true })
  valueIn?: number[];
}
