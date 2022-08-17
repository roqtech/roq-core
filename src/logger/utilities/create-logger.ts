// eslint-disable-next-line @roq/filename-suffix-mismatch
import { LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { ClsServiceManager } from 'nestjs-cls';
import { initialFormat, messageFormat, skipFieldsFormat } from 'src/logger/formats';
import { GoogleCloudTransport, NewrelicTransport } from 'src/logger/transports';
import * as winston from 'winston';

export function createLogger(configService: ConfigService, additionalTransports: winston.transport[] = []): LoggerService {
  const cls = ClsServiceManager.getClsService();
  const formats = [
    initialFormat(configService, cls),
    skipFieldsFormat(configService),
    messageFormat()
  ];
  const format = winston.format.combine(...formats);

  const transports: winston.transport[] = [];

  if (configService.get('application.consoleLogs')) {
    if (configService.get('application.cloudLogs')) {
      transports.push(new GoogleCloudTransport({}, configService.get('application.cloudLogsName')));
    } else {
      transports.push(
        new winston.transports.Console({
          format: winston.format.json(),
        }),
      );
    }
  }
  if (configService.get('application.fileLogs')) {
    transports.push(
      new winston.transports.File({
        filename: 'combined.log',
      }),
    );
  }
  if (configService.get('application.newrelic')) {
    transports.push(new NewrelicTransport({}));
  }

  const mergedTransports = additionalTransports.reduce((acc, curr) => {
    const filteredTransports = acc.filter((transport) => transport?.constructor?.name !== curr?.constructor?.name);
    return [
      ...filteredTransports,
      curr,
    ];
  }, transports);

  return WinstonModule.createLogger({
    format,
    transports: mergedTransports,
  });
}
