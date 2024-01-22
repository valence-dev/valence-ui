import { forwardRef } from "react";
import { Flex, FlexProps } from "./Flex";

export type FlexCenterProps =
  FlexProps & {
    /** Width of the inner Flex component. Defaults to `50%`. */
    innerWidth?: FlexProps["width"];

    /** Optional props to pass to the inner Flex component. */
    innerProps?: Omit<FlexProps, "children">;
  }

export const FlexCenter = forwardRef(function FlexCentre(
  props: FlexCenterProps,
  ref: any
) {
  const {
    center = true,
    width = "100%",
    height = "100%",

    innerWidth = "50%",
    innerProps,

    children,
    ...rest
  } = props;

  return (
    <Flex
      center={center}
      width={width}
      height={height}

      ref={ref}
      {...rest}
    >
      <Flex
        width={innerWidth}
        height="fit-content"
        {...innerProps}
      >
        {children}
      </Flex>
    </Flex>
  );
});