import { EventCreateDto } from '../../event/dtos';
import { PlatformEventClientService } from '../../platformClient/platformEventClient/services';
export declare class EventResolver {
    private platformEventClientService;
    constructor(platformEventClientService: PlatformEventClientService);
    triggerEvent(event: EventCreateDto): Promise<string>;
}
