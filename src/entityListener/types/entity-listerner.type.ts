import { ConfigService } from '@nestjs/config';
import { ClassType } from 'src/entityListener/types';
import { Connection } from 'typeorm';

export type EntityListenerType = { conn: Connection, entity: ClassType<unknown>; excludedFields?: string[], configService: ConfigService };
