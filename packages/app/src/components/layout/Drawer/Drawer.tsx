/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Flex, FlexProps, MakeResponsive, Responsive, useBreakpoint, useColors, useResponsiveProps, useValence } from "@valence-ui/core";
import { ReactNode, forwardRef } from "react";
import { DragSizing } from "react-drag-sizing";
import { DragSizingProps } from "react-drag-sizing/dist/types";
import { CSSProperties } from "styled-components";

export type ResizeDirection = "left" | "right" | "top" | "bottom" | "none";

export type DrawerProps = {
  /** The direction to resize the drawer. `"right"` by default. */
  resizeDirection?: ResizeDirection;
  /** The minimum width of the drawer. `250` by default. */
  minWidth?: CSSProperties["minWidth"];
  /** The maximum width of the drawer. `400` by default. */
  maxWidth?: CSSProperties["maxWidth"];
  /** The initial width of the drawer. Defaults to the minimum width. */
  initialWidth?: number;

  /** The background color of the drawer. */
  backgroundColor?: CSSProperties["backgroundColor"];

  dragResizeProps?: DragSizingProps;
  flexProps?: Omit<FlexProps, "children">;
  children: ReactNode;
}

export const Drawer = forwardRef(function Drawer(
  props: MakeResponsive<DrawerProps>,
  ref: any,
) {
  const { getHex } = useColors();
  const theme = useValence();
  const breakpoint = useBreakpoint();

  const {
    resizeDirection = "right",
    minWidth = 250,
    maxWidth = 400,
    initialWidth = minWidth,

    backgroundColor = getHex("white") + "EE",

    dragResizeProps,
    flexProps,
    children,
  } = useResponsiveProps<DrawerProps>(props);
  const {
    width: flexWidth = "100%",
    height: flexHeight = "100%",
    direction: flexDirection = "column",
    padding: flexPadding = theme.getSize("padding"),
    style: flexStyle,
    ...flexRest
  } = flexProps ?? {};


  // Styles
  const SizingCSS = css({
    height: "100%",
    minWidth: minWidth,
    maxWidth: maxWidth,
    width: initialWidth,
    overflowX: "hidden",
  });
  const radius = theme.sizeClasses.radius[theme.defaults.radius] as number + 5;
  const FlexStyle: Responsive<CSSProperties> = {
    default: {
      backgroundColor: backgroundColor,
      overflowX: "hidden",
      ...flexStyle,
    },
    mobile: { 
      backgroundColor: backgroundColor,
      overflowX: "hidden",
      borderRadius: `0px 0px ${radius}px ${radius}px`,
      userSelect: "none",
      touchAction: "none",
      ...flexStyle,
    }
  }


  const subComponents = (
    <Flex
      ref={ref}
      width={flexWidth}
      height={flexHeight}
      direction={flexDirection}
      padding={flexPadding}
      style={FlexStyle}
      {...flexRest}
    >
      {children}
    </Flex>
  )


  return (
    resizeDirection !== "none" && !breakpoint.isMobile ? (
      <DragSizing
        border={resizeDirection}
        css={SizingCSS}
        {...dragResizeProps}
      >
        {subComponents}
      </DragSizing>
    ) : (
      subComponents
    )
  )
})