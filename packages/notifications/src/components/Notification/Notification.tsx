import { CSSProperties, forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { Notification, useNotifications } from "../../NotificationsProvider"
import { IconButton, MultipartButton, MultipartButtonProps } from "@valence-ui/core";
import { IconX } from "@tabler/icons-react";

export type NotificationComponentProps =
  Omit<MultipartButtonProps, "title" | "subtitle" | "leftIcon" | "rightIcon" | "loading" | "color" | "onClick">
  & {
    notification: Notification;
  }

export const NotificationComponent = forwardRef(function Notification(
  props: NotificationComponentProps,
  ref: any
) {
  // Contexts
  const { notificationComponentProps, removeNotification } = useNotifications();
  const {
    variant, style,
    ...rest
  } = notificationComponentProps;

  const closeTimeoutRef = useRef<number>();



  const { notification } = props;
  const {
    title, message, icon, loading,
    color = "primary",
    onClick, onClose, withCloseButton = true,
    closeTimeout,
  } = notification;


  // Methods
  function handleClose(event: any) {
    event?.stopPropagation();
    removeNotification(notification.id);
    onClose?.();
  }

  function cancelCloseTimeout() {
    window.clearTimeout(closeTimeoutRef.current);
  }
  function handleCloseTimeout() { 
    if (!closeTimeout) return;
    closeTimeoutRef.current = window.setTimeout(handleClose, closeTimeout);
  }
  useEffect(() => {
    handleCloseTimeout();
    return cancelCloseTimeout;
  }, [notification]);

  


  // Styles
  const ButtonStyles: CSSProperties = {
    backdropFilter: (variant !== "filled" && variant !== "paper") ? "blur(10px)" : undefined,
    ...style,
  }


  // Components
  const rightIcon = !withCloseButton ? <></> : (
    <IconButton
      onClick={handleClose}
      variant="subtle"
      component="div"
    >
      <IconX />
    </IconButton>
  );


  return (
    <MultipartButton
      title={title}
      subtitle={message}
      leftIcon={icon}
      rightIcon={rightIcon}
      loading={loading}
      color={color}

      onClick={onClick}
      style={ButtonStyles}
      variant={variant}

      ref={ref}
      {...rest}
    />
  )
});