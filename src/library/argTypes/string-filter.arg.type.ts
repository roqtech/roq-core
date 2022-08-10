import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StringFilterArgType {
  @Field(() => String, { nullable: true })
  equalTo?: string;

  @Field(() => String, { nullable: true })
  notEqualTo?: string;

  @Field(() => [String], { nullable: true })
  valueNotIn?: string[];

  @Field(() => [String], { nullable: true })
  valueIn?: string[];

  @Field(() => String, { nullable: true })
  like?: string;

  @Field(() => String, { nullable: true })
  iLike?: string;
}
