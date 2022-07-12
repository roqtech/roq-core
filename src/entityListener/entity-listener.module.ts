// eslint-disable-next-line @roq/filename-suffix-mismatch
import { DynamicModule, Module } from '@nestjs/common';
import { ListenerFactory } from 'src/entityListener/factories';
import { EntityListenerOptionsInterface } from 'src/entityListener/interfaces';
import { EntityListenerType } from 'src/entityListener/types';
import { EventModule } from 'src/event';
import { PlatformEventClientModule } from 'src/platformClient/platformEventClient';

@Module({
  imports: [EventModule, PlatformEventClientModule],
  providers: [ListenerFactory],
  exports: [ListenerFactory],
})
export class EntityListenerModule {
  static register(entitiesListeners: EntityListenerType[]): DynamicModule {
    const listeners = ListenerFactory.generateProviders(entitiesListeners);
    return {
      module: EntityListenerModule,
      providers: [...listeners],
      exports: [...listeners],
    };
  }

  static registerAsync(options: EntityListenerOptionsInterface[]): DynamicModule {
    const listeners = [];
    for (const option of options) {
      listeners.push(...ListenerFactory.generateAsyncProviders(option));
    }

    return {
      module: EntityListenerModule,
      providers: [...listeners],
      exports: [...listeners],
    };
  }
}
