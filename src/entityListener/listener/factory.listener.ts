import { ConfigService } from '@nestjs/config';
import { EntityListener } from 'src/entityListener/listener';
import { ClassType } from 'src/entityListener/types';
import { PlatformEventClientService } from 'src/platformClient/platformEventClient/services';
import { Connection } from 'typeorm';

export class FactoryListener<T extends ClassType<unknown>> extends EntityListener<T> {
  constructor(
    private readonly entityClass: T,
    private readonly className: string,
    private readonly connection: Connection,
    platformClientEventService: PlatformEventClientService,
    configService: ConfigService,
    excludedFields?: string[],
  ) {
    super(platformClientEventService, configService.get('application.entityListener.eventName'), excludedFields);
    connection.subscribers.push(this);
  }

  listenTo(): T {
    return this.entityClass;
  }
}
