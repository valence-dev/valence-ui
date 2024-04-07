/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Flex, FlexProps, MakeResponsive, useColors, useResponsiveProps, useValence } from "@valence-ui/core";
import { ReactNode, forwardRef } from "react";
import { DragSizing } from "react-drag-sizing";
import { DragSizingProps } from "react-drag-sizing/dist/types";
import { CSSProperties } from "styled-components";
import { SideSheet, SideSheetProps } from "../../overlays";
import { useAppContainerContext } from "../../../contexts";

export type ResizeDirection = "left" | "right" | "top" | "bottom" | "none";
export type DrawerType = "inline" | "overlay";

export type DrawerProps = {
  /** The direction to resize the drawer. `"right"` by default. */
  resizeDirection?: ResizeDirection;
  /** The minimum width of the drawer. `250` by default. */
  minWidth?: CSSProperties["minWidth"];
  /** The maximum width of the drawer. `400` by default. */
  maxWidth?: CSSProperties["maxWidth"];
  /** The initial width of the drawer. Defaults to the minimum width. */
  initialWidth?: number;
  /** The type of the drawer. By default, this is `"inline"` by on tablet and larger; `"overlay"` on mobile. */
  type?: DrawerType;

  /** The background color of the drawer. */
  backgroundColor?: CSSProperties["backgroundColor"];

  dragResizeProps?: DragSizingProps;
  flexProps?: Omit<FlexProps, "children">;
  sheetProps?: Omit<SideSheetProps, "children"|"disclosure">;
  children: ReactNode;
}

export const Drawer = forwardRef(function Drawer(
  props: MakeResponsive<DrawerProps>,
  ref: any,
) {
  const { getHex } = useColors();
  const theme = useValence();
  const containerContext = useAppContainerContext();

  const {
    resizeDirection = "right",
    minWidth = 250,
    maxWidth = 400,
    initialWidth = minWidth,
    type = useResponsiveProps({ default: "inline", mobile: "overlay" }),

    backgroundColor = getHex("primary") + "15",

    dragResizeProps,
    flexProps,
    sheetProps,
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
  const { 
    title: sheetTitle = "",
    direction: sheetDirection = "left",
    ...sheetRest
  } = sheetProps ?? {};


  // Styles
  const SizingCSS = css({
    height: "100%",
    minWidth: minWidth,
    maxWidth: maxWidth,
    width: initialWidth,
    overflowX: "hidden",
  });
  const FlexStyle: CSSProperties = {
    backgroundColor: backgroundColor,
    overflowX: "hidden",
    ...flexStyle,
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
    type === "overlay" ? (
      <SideSheet
      disclosure={containerContext.drawerDisclosure}
        title={sheetTitle}
        direction={sheetDirection}
        {...sheetRest}
      >
        {children}
      </SideSheet>
    ) : !containerContext.drawerDisclosure.opened ? (
      <></>
    ) : resizeDirection !== "none" ? (
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