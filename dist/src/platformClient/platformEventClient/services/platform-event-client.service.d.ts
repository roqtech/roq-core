import { TriggerEventMutationArgs } from '../../../platformClient/platformEventClient/types';
import { PlatformServiceAccountClientService } from '../../../platformClient/services';
export declare class PlatformEventClientService {
    protected readonly platformServiceAccountClientService: PlatformServiceAccountClientService;
    constructor(platformServiceAccountClientService: PlatformServiceAccountClientService);
    trigger(event: TriggerEventMutationArgs): Promise<string>;
}
