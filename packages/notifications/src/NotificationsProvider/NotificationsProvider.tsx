import { ReactNode, createContext, useContext, useState } from "react";
import { INotificationContext, Notification, NotificationsContextDefaults } from "./NotificationsProvider.types";

export const NotificationsContext = createContext<INotificationContext>(NotificationsContextDefaults);

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (context === null)
    throw new Error("Notifications components must be wrapped in <NotificationsProvider />");

  return context;
}

export type NotificationsProviderProps = {
  notificationComponentProps?: INotificationContext["notificationComponentProps"];
  children: ReactNode;
}

export function NotificationsProvider(props: NotificationsProviderProps) {
  const { 
    notificationComponentProps = NotificationsContextDefaults.notificationComponentProps,
    children 
  } = props;

  const [queue, setQueue] = useState<Notification[]>([]);

  function add(notification: Notification) {
    setQueue([...queue, notification]);
  }
  function update(id: string, notification: Notification) {
    const index = queue.findIndex(n => n.id === id);
    if (index === -1) return;
    setQueue([
      ...queue.slice(0, index),
      notification,
      ...queue.slice(index + 1),
    ]);
  }
  function remove(id: string) {
    const index = queue.findIndex(n => n.id === id);
    if (index === -1) return;
    console.log(queue);
    setQueue([
      ...queue.slice(0, index),
      ...queue.slice(index + 1),
    ]);
  }
  function clear() {
    setQueue([]);
  }

  return ( 
    <NotificationsContext.Provider value={{
      queue,
      addNotification: add,
      updateNotification: update,
      removeNotification: remove,
      clearQueue: clear,
      notificationComponentProps,
    }}>
      {children}
    </NotificationsContext.Provider>
  )
}