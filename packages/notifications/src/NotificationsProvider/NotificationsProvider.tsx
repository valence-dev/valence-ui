import { ReactNode, createContext, useContext } from "react";
import { INotificationContext, Notification, NotificationsContextDefaults } from "./NotificationsProvider.types";

export const NotificationsContext = createContext<INotificationContext>(NotificationsContextDefaults);

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (context === null)
    throw new Error("Notifications components must be wrapped in <NotificationsProvider />");

  return context;
}

export type NotificationsProviderProps = {
  children: ReactNode;
}

export function NotificationsProvider(props: NotificationsProviderProps) {
  const { children } = props;

  const queue: Notification[] = [];

  function add(notification: Notification) {
    queue.push(notification);
  }
  function update(id: string, notification: Notification) {
    const index = queue.findIndex(n => n.id === id);
    if (index === -1) return;
    queue[index] = notification;
  }
  function remove(id: string) {
    const index = queue.findIndex(n => n.id === id);
    if (index === -1) return;
    queue.splice(index, 1);
  }
  function clear() {
    queue.splice(0, queue.length);
  }


  return ( 
    <NotificationsContext.Provider value={{
      queue,
      add,
      update,
      remove,
      clear,
    }}>
      {children}
    </NotificationsContext.Provider>
  )
}