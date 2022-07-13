import { Inject, Injectable } from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { ConfigService } from '@nestjs/config';
import { InjectConnection } from '@nestjs/typeorm';
import { EntityListenerOptionsInterface } from 'src/entityListener/interfaces';
import { FactoryListener } from 'src/entityListener/listener';
import { ClassType, EntityListenerType } from 'src/entityListener/types';
import { PlatformEventClientService } from 'src/platformClient/platformEventClient/services';
import { Connection, EntitySubscriberInterface } from 'typeorm';

@Injectable()
export class ListenerFactory {
  constructor(
    // @InjectConnection()
    // private readonly connection: Connection,
    @Inject(PlatformEventClientService)
    private readonly platformClientEventService: PlatformEventClientService,
    private readonly configService: ConfigService,
  ) {}

  createListener(conn: Connection, entityClass: ClassType<unknown>, excludedFields?: string[]): EntitySubscriberInterface {
    return new FactoryListener(
      entityClass,
      entityClass.name,
      conn,
      this.platformClientEventService,
      this.configService,
      excludedFields,
    );
  }

  static generateProviders(entitiesListeners: EntityListenerType[]): Provider[] {
    return entitiesListeners.map((entityListener) => ({
      provide: `${entityListener.entity}Listener`,
      useFactory: (factory: ListenerFactory) =>
        factory.createListener(entityListener.conn, entityListener.entity, entityListener.excludedFields),
      inject: [ListenerFactory],
    }));
  }

  static generateAsyncProviders(option: EntityListenerOptionsInterface): Provider[] {
    return [
      {
        provide: option.name,
        useFactory: option.useFactory,
        inject: option.inject || [],
      },
      {
        provide: option.name + 'Listener',
        useFactory: async (entityListener: EntityListenerType, factory: ListenerFactory) =>
          factory.createListener(entityListener.conn, entityListener.entity, entityListener.excludedFields),
        inject: [option.name, ListenerFactory],
      },
    ];
  }
}
