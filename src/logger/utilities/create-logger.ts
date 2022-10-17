// eslint-disable-next-line @roq/filename-suffix-mismatch
import { LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { ClsServiceManager } from 'nestjs-cls';
import { initialFormat, messageFormat, skipFieldsFormat } from 'src/logger/formats';
import { GkeGoogleCloudTransport, GoogleCloudTransport, NewrelicTransport } from 'src/logger/transports';
import * as winston from 'winston';

export function createLogger(
  configService: ConfigService,
  additionalTransports: winston.transport[] = [],
): LoggerService {
  const cls = ClsServiceManager.getClsService();
  const formats = [initialFormat(configService, cls), skipFieldsFormat(configService), messageFormat()];
  const format = winston.format.combine(...formats);
  const transports: winston.transport[] = [];
  const consoleLogs = configService.get('application.consoleLogs');
  const cloudLogs = configService.get('application.cloudLogs');
  const fileLogs = configService.get('application.fileLogs');
  const newrelic = configService.get('application.newrelic');
  const k8sName = configService.get('application.kubernetes.clusterName');

  if (consoleLogs && cloudLogs && k8sName) {
    const options = {
      name: configService.get('application.cloudLogsName'),
      containerName: configService.get('application.kubernetes.containerName'),
      clusterName: configService.get('application.kubernetes.clusterName'),
      location: configService.get('application.kubernetes.location'),
      namespaceName: configService.get('application.kubernetes.namespaceName'),
      podName: configService.get('application.kubernetes.podName'),
      projectId: configService.get('application.kubernetes.projectId'),
    };
    transports.push(new GkeGoogleCloudTransport({}, options));
  } else if (consoleLogs && cloudLogs) {
    transports.push(new GoogleCloudTransport({}, configService.get('application.cloudLogsName')));
  } else if (consoleLogs) {
    transports.push(new winston.transports.Console({ format: winston.format.json() }));
  }

  if (fileLogs) {
    transports.push(new winston.transports.File({ filename: 'combined.log' }));
  }

  if (newrelic) {
    transports.push(new NewrelicTransport({}));
  }

  const mergedTransports = additionalTransports.reduce((acc, curr) => {
    const filteredTransports = acc.filter((transport) => transport?.constructor?.name !== curr?.constructor?.name);
    return [...filteredTransports, curr];
  }, transports);

  return WinstonModule.createLogger({ format, transports: mergedTransports });
}
