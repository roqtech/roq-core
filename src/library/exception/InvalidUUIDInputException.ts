/* eslint-disable @roq/name-of-class-and-function-rule, @roq/filename-suffix-mismatch, @roq/no-invalid-filename-chars */
import { BadRequestException } from '@nestjs/common'
import { ClassValidatorEnum } from '@roq/class-validator'
import { prepareError } from '../exception/utils'

interface InvalidUUIDInputExceptionInterface {
  message: string

  variables?: Record<any, never>
}

const defaultMessage = 'Provided argument should have been a valid uuid'

export class InvalidUUIDInputException extends BadRequestException {
  constructor(error?: InvalidUUIDInputExceptionInterface, description?: string) {
    super(prepareError(defaultMessage, ClassValidatorEnum.INVALID_UUID, error), description)
  }
}
