import { NotificationRecipient } from './notification-recipient.type'

type NotificationEntitiesCreateArgType = {
  uuid: string
  type: string
  alias?: string
}

export interface NotificationCreateMutationArgs {
  key: string
  entities?: NotificationEntitiesCreateArgType[]
  recipients: NotificationRecipient
}
