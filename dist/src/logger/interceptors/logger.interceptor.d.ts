import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { Logger } from '../../logger/services';
export declare class LoggerInterceptor implements NestInterceptor {
    private readonly logger;
    private configService;
    constructor(logger: Logger, configService: ConfigService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
