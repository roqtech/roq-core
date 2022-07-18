
export interface NotificationInApp {
  id: string;
  title: string;
  icon: string;
  content: string;
  locale: string;
  read: boolean;
  notificationTypeChannelWebId: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
