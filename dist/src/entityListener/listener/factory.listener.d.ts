import { ConfigService } from '@nestjs/config';
import { EntityListener } from '../../entityListener/listener';
import { ClassType } from '../../entityListener/types';
import { PlatformEventClientService } from '../../platformClient/platformEventClient/services';
import { Connection } from 'typeorm';
export declare class FactoryListener<T extends ClassType<unknown>> extends EntityListener<T> {
    private readonly entityClass;
    private readonly className;
    private readonly connection;
    constructor(entityClass: T, className: string, connection: Connection, platformClientEventService: PlatformEventClientService, configService: ConfigService, excludedFields?: string[]);
    listenTo(): T;
}
