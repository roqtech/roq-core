"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotificationMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.createNotificationMutation = (0, core_1.gql) `
  mutation createNotification($notificationData: NotificationCreateDto!) {
    createNotification(notification: $notificationData) {
      webNotifications
    }
  }
`;
