import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean } from '@roq/class-validator';

@InputType()
export class BooleanFilterArgType {
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  equalTo?: boolean;

  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  notEqualTo?: boolean;
}
