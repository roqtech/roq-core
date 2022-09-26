import { BadRequestException } from '@nestjs/common';
interface InvalidUUIDInputExceptionInterface {
    message: string;
    variables?: Record<any, never>;
}
export declare class InvalidUUIDInputException extends BadRequestException {
    constructor(error?: InvalidUUIDInputExceptionInterface, description?: string);
}
export {};
