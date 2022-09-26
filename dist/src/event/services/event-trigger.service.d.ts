import { EventInterface } from '../../event/interfaces';
import { PlatformEventClientService } from '../../platformClient/platformEventClient/services';
export declare class EventTriggerService {
    private readonly platformEventClientService;
    constructor(platformEventClientService: PlatformEventClientService);
    trigger(event: EventInterface): Promise<string>;
}
