import { Notification, NotificationCreateMutationArgs } from '../../../platformClient/platformNotificationClient/types';
import { PlatformServiceAccountClientService } from '../../../platformClient/services';
export declare class PlatformNotificationClientService {
    protected readonly platformServiceAccountClientService: PlatformServiceAccountClientService;
    constructor(platformServiceAccountClientService: PlatformServiceAccountClientService);
    createNotification(notificationData: NotificationCreateMutationArgs): Promise<Notification>;
}
