// eslint-disable-next-line @roq/filename-suffix-mismatch
import { LoggerService } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { WinstonModule } from 'nest-winston'
import { ClsServiceManager } from 'nestjs-cls'
import { initialFormat, messageFormat, skipFieldsFormat } from '../formats'
import { GoogleCloudTransport, NewrelicTransport } from '../transports'
import * as winston from 'winston'

export function createLogger(configService: ConfigService): LoggerService {
  const cls = ClsServiceManager.getClsService()
  const formats = [initialFormat(configService, cls), skipFieldsFormat(configService), messageFormat()]
  const format = winston.format.combine(...formats)

  const transports = []

  if (configService.get('application.consoleLogs')) {
    if (configService.get('application.cloudLogs')) {
      transports.push(new GoogleCloudTransport({}, configService.get('application.cloudLogsName')))
    } else {
      transports.push(
        new winston.transports.Console({
          format: winston.format.json(),
        }),
      )
    }
  }
  if (configService.get('application.fileLogs')) {
    transports.push(
      new winston.transports.File({
        filename: 'combined.log',
      }),
    )
  }
  if (configService.get('application.newrelic')) {
    transports.push(new NewrelicTransport({}))
  }
  return WinstonModule.createLogger({
    format,
    transports,
  })
}
