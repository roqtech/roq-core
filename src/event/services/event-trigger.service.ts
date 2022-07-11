import { Injectable } from '@nestjs/common';
import { EventInterface } from 'src/event/interfaces';
import { PlatformEventClientService } from 'src/platformClient/platformEventClient/services';

@Injectable()
export class EventTriggerService {
  constructor(private readonly platformEventClientService: PlatformEventClientService) {}

  trigger(event: EventInterface): Promise<string> {
    return this.platformEventClientService.trigger(event);
  }
}
