import { applyDecorators } from '@nestjs/common';
import { Transform, TransformFnParams } from 'class-transformer';

/**
 * Trims the original value
 */
export const Trim = (): PropertyDecorator =>
  applyDecorators(
    Transform(
      (arg: TransformFnParams) => typeof arg.value === 'string' ? arg?.value.trim?.() : arg.value)
  );
