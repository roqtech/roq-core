import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { EventCreateDto } from 'src/event/dtos';
import { PlatformEventClientService } from 'src/platformClient/platformEventClient/services';

@Resolver()
export class EventResolver {
  constructor(private platformEventClientService: PlatformEventClientService) {}

  @Mutation(() => String)
  triggerEvent(@Args({ name: 'event', type: () => EventCreateDto }) event: EventCreateDto): Promise<string> {
    return this.platformEventClientService.trigger(event);
  }
}
