import { ConfigService } from '@nestjs/config';
import { Format } from 'logform';
// eslint-disable-next-line @roq/imports-should-follow-conventions
import { skipFields } from '@src/logger/utilities';
import * as winston from 'winston';

export const skipFieldsFormat = (configService: ConfigService,): Format => {
  const skipKeys = configService.get('application.logsSkipFields');
  return winston.format((info) => {
    skipFields(info, skipKeys);
    if (info?.api?.variables) {
      info.api.variables = JSON.stringify(info.api.variables);
    }
    if (info.context === 'ExceptionsHandler') {
      return null;
    }
    return info;
  })();
};
