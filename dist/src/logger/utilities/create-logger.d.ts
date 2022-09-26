import { LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as winston from 'winston';
export declare function createLogger(configService: ConfigService, additionalTransports?: winston.transport[]): LoggerService;
