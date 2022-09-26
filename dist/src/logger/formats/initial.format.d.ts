import { ConfigService } from '@nestjs/config';
import { Format } from 'logform';
import { ClsService } from 'nestjs-cls';
export declare const initialFormat: (configService: ConfigService, cls: ClsService) => Format;
