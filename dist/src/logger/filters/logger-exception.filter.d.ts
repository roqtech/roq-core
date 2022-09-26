import { ArgumentsHost, HttpServer } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Logger } from '../../logger/services';
export declare class LoggerExceptionFilter extends BaseExceptionFilter {
    private logger;
    constructor(logger: Logger, applicationRef?: HttpServer);
    catch(exception: unknown, host: ArgumentsHost): void;
}
