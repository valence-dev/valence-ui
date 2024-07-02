import { Flex, FlexProps, MakeResponsive, PositionHorizontal, PositionVertical, useFloating, useResponsiveProps } from "@valence-ui/core";
import { GenericFloatingLayoutProps } from "@valence-ui/utils";
import { forwardRef, CSSProperties } from "react";
import { useNotifications } from "../../NotificationsProvider";
import { NotificationComponent } from "../Notification/Notification";

export type NotificationRendererProps =
  GenericFloatingLayoutProps
  & FlexProps
  & {
    /** The maximum number of notifications to display at once */
    maxNotifications?: number;

    /** The horizontal position of this toolbar. Defaults to `"left"`. */
    positionHorizontal?: PositionHorizontal;
    /** The vertical position of this toolbar. Defaults to `"top"`. */
    positionVertical?: PositionVertical;
    /** The offset of the toolbar. Defaults to `5`. */
    offset?: number;
  }

export const NotificationRenderer = forwardRef(function NotificationRenderer(
  props: MakeResponsive<NotificationRendererProps>,
  ref: any,
) {
  // Defaults
  const {
    maxNotifications = useResponsiveProps({ default: 5, mobile: 1 }),

    positionHorizontal = "right",
    positionVertical = "bottom",
    offset = 10,

    position = "fixed",
    zIndex = 151,
    top = offset, left = offset, right = offset, bottom = offset,

    width = useResponsiveProps({ default: "35vw", mobile: "90vw" }),
    gap = offset,

    ...rest
  } = useResponsiveProps<NotificationRendererProps>(props);


  // Hooks
  const floating = useFloating({ positionHorizontal, positionVertical, offset: { top, left, right, bottom }, });

  // Contexts
  const { queue } = useNotifications();


  // Styles
  const ContainerStyle: CSSProperties = {
    position, zIndex,
    ...floating.style,
  }

  return (
    <Flex
      direction="column"
      width={width} gap={gap}
      style={ContainerStyle}
      ref={ref}
      {...rest}
    >
      {queue.slice(0, maxNotifications).map((notification, index) => (
        <NotificationComponent
          key={index}
          notification={notification}
        />
      ))}
    </Flex>
  )
});