import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsObject, IsOptional, IsString } from '@roq/class-validator';
import { JsonObject } from 'src/library/scalars';

@InputType()
export class EventCreateDto {
  @Field({ nullable: false })
  @IsDefined()
  @IsString()
  id: string;

  @Field({ nullable: false })
  @IsDefined()
  @IsString()
  name: string;

  @Field({ nullable: false })
  @IsDefined()
  @IsString()
  object: string;

  @Field(() => JsonObject, { nullable: true })
  @IsOptional()
  @IsObject()
  data?: Record<string, unknown>;
}
