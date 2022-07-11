import { Module } from '@nestjs/common';
import { EventResolver } from 'src/event/resolvers';
import { EventTriggerService } from 'src/event/services';
import { LibraryModule } from 'src/library';
import { Logger } from 'src/logger/services';
import { PlatformEventClientModule } from 'src/platformClient/platformEventClient';

@Module({
  imports: [LibraryModule, PlatformEventClientModule],
  providers: [
    EventResolver,
    Logger,
    EventTriggerService,
  ],
  exports: [EventTriggerService],
  controllers: [],
})
export class EventModule {}
