import { useValence } from "../../../ValenceProvider";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { Icon } from "../../display";
import { Tooltip, TooltipContentProps, TooltipProps } from "../../overlays";
import { PrimitiveButton, PrimitiveButtonProps } from "../PrimitiveButton"
import { forwardRef } from "react";

export type IconButtonProps =
  PrimitiveButtonProps & {
    /** An optional tooltip to include. The tooltip will inherit the button's color.*/
    tooltip?: string;

    /** Optional props to pass to the tooltip. */
    tooltipProps?: Omit<TooltipProps, "children">;
    /** Additional props to pass to the content sub-component of the tooltip. */
    tooltipContentProps?: Omit<TooltipContentProps, "children">;
  };

export const IconButton = forwardRef(function IconButton(
  props: MakeResponsive<IconButtonProps>,
  ref: any
) {
  const {
    tooltip,
    tooltipProps,
    tooltipContentProps,

    color = "primary",
    size,
    square = true,
    children,
    ...rest
  } = useResponsiveProps<IconButtonProps>(props);

  return (
    tooltip ?
      <Tooltip
        placement="bottom"
        {...tooltipProps}
      >
        <Tooltip.Trigger>
          <Button
            color={color}
            size={size}
            square={square}
            {...rest}
            ref={ref}
          >
            {children}
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content
          backgroundColor={color}
          zIndex={999}
          {...tooltipContentProps}
        >
          {tooltip}
        </Tooltip.Content>
      </Tooltip>
      :
      <Button
        color={color}
        size={size}
        square={square}
        {...rest}
        ref={ref}
      >
        {children}
      </Button >
  )
});

const Button = forwardRef(function Button(
  props: Omit<IconButtonProps, "tooltip" | "tooltipProps" | "tooltipContentProps">,
  ref: any
) {
  const {
    size,
    children,
    ...rest
  } = props;

  const theme = useValence();

  return (
    <PrimitiveButton
      size={size}
      ref={ref}
      {...rest}
    >
      <Icon
        size={theme.getSize("iconSize", size) as number}
      >
        {children}
      </Icon>
    </PrimitiveButton>
  )
})