import { NotificationRecipient } from '@src/platformClient/platformNotificationClient/types';

type NotificationEntitiesCreateArgType = {
  uuid: string;
  type: string;
  alias?: string;
};

export interface NotificationCreateMutationArgs {
  key: string;
  entities?: NotificationEntitiesCreateArgType[];
  recipients: NotificationRecipient;
}
