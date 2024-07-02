import { CSSProperties, ReactNode } from "react";
import { NotificationComponentProps } from "../components";

export type Notification = { 
  /** The unique identifier for the notification */
  id: string;
  /** The title of the notification */
  title: string;
  /** The message to display in the notification */
  message?: string;

  /** The icon to display in the notification */
  icon?: ReactNode;
  /** The color to display the notification in */
  color?: CSSProperties["color"];
  /** Whether the notification denotes a loading state */
  loading?: boolean;

  /** Whether the notification contains a manual close button */
  withCloseButton?: boolean;
  /** The time in milliseconds to wait before automatically closing the notification. Setting this to `false` will cause the notification to remain indefinitely. */
  closeTimeout?: number | false;

  /** Calls when the notification is closed */
  onClose?: () => void;
  /** Calls when the notification is clicked */
  onClick?: () => void;
}

export type INotificationContext = {
  /** The current queue of notifications */
  queue: Notification[];

  /** Adds a notification to the queue */
  addNotification: (notification: Notification) => void;
  /** Updates a notification in the queue */
  updateNotification: (id: string, notification: Notification) => void;
  /** Removes a notification from the queue */
  removeNotification: (id: string) => void;

  /** Clears all notifications from the queue */
  clearQueue: () => void;

  /** Props to pass to the notification component */
  notificationComponentProps: Omit<NotificationComponentProps, "notification">;
}

export const NotificationsContextDefaults: INotificationContext = {
  queue: [],
  addNotification: () => {},
  updateNotification: () => {},
  removeNotification: () => {},
  clearQueue: () => {},
  notificationComponentProps: {
    variant: "filled",
    height: "fit-content",
    radius: "lg",
    style: { gap: 5 },
    iconContainerStyle: { 
      padding: 10,
    }
  },
}