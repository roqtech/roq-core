/* eslint-disable @roq/name-of-class-and-function-rule */
import { ArgumentMetadata, ParseUUIDPipe, ParseUUIDPipeOptions, PipeTransform } from '@nestjs/common';
import { InvalidUUIDInputException } from '../exception';

interface PipeOpts extends ParseUUIDPipeOptions {}

export class ParseUUIDStringPipe implements PipeTransform<string> {
  private builtInParseUUIDPipe;
  constructor(opts?: PipeOpts) {
    this.builtInParseUUIDPipe = new ParseUUIDPipe(opts);
  }
  async transform(value: string, metadata: ArgumentMetadata): Promise<string> {
    try {
      return await this.builtInParseUUIDPipe.transform(value, metadata);
    } catch (e) {
      throw new InvalidUUIDInputException();
    }
  }
}
