import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from '@roq/class-validator';

@InputType()
export class IdFilterArgType {
  @IsUUID()
  @Field(() => ID, { nullable: true })
  equalTo?: string;

  @IsUUID()
  @Field(() => ID, { nullable: true })
  notEqualTo?: string;

  @IsUUID('all', { each: true })
  @Field(() => [ID], { nullable: true })
  valueNotIn?: string[];

  @IsUUID('all', { each: true })
  @Field(() => [ID], { nullable: true })
  valueIn?: string[];
}
