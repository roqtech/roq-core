import { ConfigService } from '@nestjs/config';
import { Format } from 'logform';
import { ClsService } from 'nestjs-cls';
import { ClsKeyEnum } from 'src/library/enums';
import * as winston from 'winston';

export const initialFormat = (configService: ConfigService, cls: ClsService): Format => winston.format((info) => {
    info.timestamp = new Date().getTime();
    info.service = configService.get('application.appName');
    info.environment = configService.get('application.appEnvironment');
    info.project = configService.get('application.appProject');
    info.requestId = cls.get(ClsKeyEnum.REQUEST_ID);
    info.caller = cls.get(ClsKeyEnum.REQUEST_CALLER);
    return info;
  })();
