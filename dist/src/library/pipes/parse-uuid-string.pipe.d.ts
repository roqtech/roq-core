import { ArgumentMetadata, ParseUUIDPipeOptions, PipeTransform } from '@nestjs/common';
interface PipeOpts extends ParseUUIDPipeOptions {
}
export declare class ParseUUIDStringPipe implements PipeTransform<string> {
    private builtInParseUUIDPipe;
    constructor(opts?: PipeOpts);
    transform(value: string, metadata: ArgumentMetadata): Promise<string>;
}
export {};
