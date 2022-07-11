import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsObject, IsOptional, IsString, MaxLength } from '@roq/class-validator';
import { JsonObject } from 'src/library/scalars';

@InputType()
export class FileUpdateDto {
  @Field({ nullable: true })
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name?: string;

  @Field(() => JsonObject, { nullable: true })
  @IsObject()
  @IsOptional()
  customMetaData?: Record<string, unknown>;
}
