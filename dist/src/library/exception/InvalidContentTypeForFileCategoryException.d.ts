import { BadRequestException } from '@nestjs/common';
interface VariablesInterface {
    contentType: string;
    extension: string;
    fileCategory: string;
    fileCategoryName: string;
}
interface InvalidContentTypeForFileCategoryExceptionInterface {
    message?: string;
    variables: VariablesInterface;
}
export declare class InvalidContentTypeForFileCategoryException extends BadRequestException {
    constructor(error: InvalidContentTypeForFileCategoryExceptionInterface, description?: string);
}
export {};
