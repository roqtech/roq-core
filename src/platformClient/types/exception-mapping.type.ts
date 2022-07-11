import { HttpException } from '@nestjs/common';
import { ErrorCodeEnum } from 'src/library/enums';

export type ExceptionMappingType = Partial<Record<ErrorCodeEnum, new (...args: never[]) => HttpException>>;
