import { HttpException } from '@nestjs/common';
import { ErrorCodeEnum } from '../../library/enums';
export declare type ExceptionMappingType = Partial<Record<ErrorCodeEnum, new (...args: never[]) => HttpException>>;
