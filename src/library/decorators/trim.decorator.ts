import { applyDecorators } from '@nestjs/common';
import { Transform, TransformFnParams } from 'class-transformer';

/**
 * Trims the original value
 */
export const Trim = (): PropertyDecorator =>
  applyDecorators(
    Transform(
      (arg: TransformFnParams) => {
        if (typeof arg === 'object' && arg.value !== undefined) {
          return typeof arg.value === 'string' ? arg?.value?.trim?.() : arg.value
        } else if (typeof arg === 'string') {
          return (arg as string).trim?.()
        }
        return arg
      })
  );
