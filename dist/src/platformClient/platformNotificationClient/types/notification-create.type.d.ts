import { NotificationRecipient } from '../../../platformClient/platformNotificationClient/types';
declare type NotificationEntitiesCreateArgType = {
    uuid: string;
    type: string;
    alias?: string;
};
export interface NotificationCreateMutationArgs {
    key: string;
    entities?: NotificationEntitiesCreateArgType[];
    recipients: NotificationRecipient;
}
export {};
