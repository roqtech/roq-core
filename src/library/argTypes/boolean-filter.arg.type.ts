import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BooleanFilterArgType {
  @Field(() => Boolean, { nullable: true })
  equalTo?: boolean;

  @Field(() => Boolean, { nullable: true })
  notEqualTo?: boolean;
}
