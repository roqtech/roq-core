import { gql } from 'apollo-server-express';

export const createNotificationMutation = gql`
  mutation createNotification($notificationData: NotificationCreateDto!) {
    createNotification(notification: $notificationData) {
      webNotifications
    }
  }
`;
