import { gql } from '@apollo/client/core';

export const createNotificationMutation = gql`
  mutation createNotification($notificationData: NotificationCreateDto!) {
    createNotification(notification: $notificationData) {
      webNotifications
    }
  }
`;
