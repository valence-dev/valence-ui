import { ComponentSize } from "@valence-ui/utils";
import { CSSProperties, ReactNode } from "react";

export type Notification = { 
  /** The title of the notification */
  title: string;
  /** The unique identifier for the notification */
  id?: string;
  /** The message to display in the notification */
  message?: string;

  /** The icon to display in the notification */
  icon?: ReactNode;
  /** The color to display the notification in */
  color?: CSSProperties["color"];
  /** Whether the notification denotes a loading state */
  loading?: boolean;
  /** The radius of the notification */
  radius?: ComponentSize;

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
  add: (notification: Notification) => void;
  /** Updates a notification in the queue */
  update: (id: string, notification: Notification) => void;
  /** Removes a notification from the queue */
  remove: (id: string) => void;

  /** Clears all notifications from the queue */
  clear: () => void;
}

export const NotificationsContextDefaults: INotificationContext = {
  queue: [],
  add: () => {},
  update: () => {},
  remove: () => {},
  clear: () => {},
}