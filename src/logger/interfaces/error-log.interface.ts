import { LoggingTypeEnum } from '../enums'

export interface ErrorLogInterface {
  type: LoggingTypeEnum.error
  stack: string
  message: string
}
