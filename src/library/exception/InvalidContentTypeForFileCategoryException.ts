import { BadRequestException } from '@nestjs/common'
import { startCase } from 'lodash'
import { ErrorCodeEnum } from 'src/library/enums'
import { prepareError } from 'src/library/exception/utils'

interface VariablesInterface {
  contentType: string
  extension: string
  fileCategory: string
  fileCategoryName: string
}

interface InvalidContentTypeForFileCategoryExceptionInterface {
  message?: string
  variables: VariablesInterface
}

const defaultMessage = 'Invalid contentType {{contentType}} against category {{fileCategory}}'

export class InvalidContentTypeForFileCategoryException extends BadRequestException {
  constructor(error: InvalidContentTypeForFileCategoryExceptionInterface, description?: string) {
    const { variables, message } = error
    super(
      prepareError(defaultMessage, ErrorCodeEnum.INVALID_CONTENT_TYPE_FOR_FILE_CATEGORY, {
        message,
        variables: {
          ...variables,
          extension: variables.contentType,
          fileCategoryName: startCase(variables.fileCategory.toLowerCase()),
        },
      }),
      description,
    )
  }
}
