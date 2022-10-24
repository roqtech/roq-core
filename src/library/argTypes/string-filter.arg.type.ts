import { Field, InputType } from '@nestjs/graphql';
import { IsString } from '@roq/class-validator';

@InputType()
export class StringFilterArgType {
  @IsString()
  @Field(() => String, { nullable: true })
  equalTo?: string;

  @IsString()
  @Field(() => String, { nullable: true })
  notEqualTo?: string;

  @IsString({ each: true })
  @Field(() => [String], { nullable: true })
  valueNotIn?: string[];

  @IsString({ each: true })
  @Field(() => [String], { nullable: true })
  valueIn?: string[];

  @IsString()
  @Field(() => String, { nullable: true })
  like?: string;

  @IsString()
  @Field(() => String, { nullable: true })
  iLike?: string;
}
