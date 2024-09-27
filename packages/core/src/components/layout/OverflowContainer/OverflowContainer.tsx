/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GenericProps } from "@valence-ui/utils";
import { Flex, FlexProps } from "../Flex";
import { CSSProperties, forwardRef } from "react";
import { MakeResponsive, useResponsiveProps } from "../../../utilities";

export type OverflowDirection = "horizontal" | "vertical" | "both" | "none";

export type OverflowContainerProps = GenericProps & {
  /** The direction the container allows its inner content to scroll. Defaults to `"vertical"`. */
  direction?: OverflowDirection;

  /** The width of the container. */
  width?: CSSProperties["width"];
  /** The height of the container. */
  height?: CSSProperties["height"];

  /** Whether to show the scrollbar. Defaults to `true`. */
  showScrollbar?: boolean;

  /** Optional props to pass to the inner flex component. */
  innerProps?: FlexProps;
}


export const OverflowContainer = forwardRef(function OverflowContainer(
  props: MakeResponsive<OverflowContainerProps>,
  ref: any
) {
  const {
    direction = "vertical",
    width = "100%",
    height = "100%",
    showScrollbar = true,
    innerProps,

    children,
    style,
    ...rest
  } = useResponsiveProps<OverflowContainerProps>(props);
  const {
    style: innerStyle,
    width: innerWidth = "100%",
    height: innerHeight = "fit-content",
    direction: innerDirection = "column",
    ...innerRest
  } = innerProps || {};


  // Styles
  const OverflowContainerStyle = css({
    width: width,
    height: height,

    ...(direction !== "none" ? {
      overflowX: direction === "horizontal" || direction === "both" ? "auto" : "hidden",
      overflowY: direction === "vertical" || direction === "both" ? "auto" : "hidden",
    } : {
      overflow: "hidden",
      touchAction: "none",
    }),

    ...(showScrollbar ? {} : {
      scrollbarWidth: "none",
      "::-webkit-scrollbar": {
        display: "none",
      },
    }),

    ...style,
  })


  return (
    <div
      css={OverflowContainerStyle}
      {...rest}
    >
      <Flex
        ref={ref}
        style={innerStyle}
        width={innerWidth}
        height={innerHeight}
        direction={innerDirection}
        {...innerRest}
      >
        {children}
      </Flex>
    </div>
  );
}
)