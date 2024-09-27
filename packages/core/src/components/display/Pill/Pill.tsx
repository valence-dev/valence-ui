import { ComponentSize, FillVariant, GenericLayoutProps, SizeClasses } from "@valence-ui/utils";
import { IconButton, IconButtonProps, UnstyledButtonProps } from "../../buttons";
import { CSSProperties, ReactNode, forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { IconX } from "@tabler/icons-react";
import { Text, TextProps } from "../Text";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";

export type PillProps =
  Omit<GenericLayoutProps, "children">
  & Omit<UnstyledButtonProps, "children">
  & {
    /** Fill variant of this pill. Defaults to theme default. */
    variant?: FillVariant;
    /** Size class of this pill. Defaults to theme default.  */
    size?: ComponentSize;
    /** Border radius of this pill. Defaults to theme default. */
    radius?: ComponentSize;

    /** Whether to include a remove button. `false` by default. */
    withRemoveButton?: boolean;
    /** Icon to use for the remove button. Defaults to `IconX`. */
    removeButtonIcon?: ReactNode;
    /** Optional props to pass to the remove button. */
    removeButtonProps?: Omit<IconButtonProps, "children">;
    /** Callback to be called when the remove button is clicked. */
    onRemove?: () => void;

    /** Optional props to pass to the `Text` component */
    textProps?: Omit<TextProps, "children">;

    children?: string;
  }


const SIZES: SizeClasses<{
  paddingVertical: CSSProperties["paddingTop"],
  paddingHorizontal: CSSProperties["paddingLeft"],
}> = {
  xs: { paddingHorizontal: 8, paddingVertical: 2 },
  sm: { paddingHorizontal: 10, paddingVertical: 3 },
  md: { paddingHorizontal: 10, paddingVertical: 3 },
  lg: { paddingHorizontal: 14, paddingVertical: 4 },
  xl: { paddingHorizontal: 14, paddingVertical: 4 },
}


export const Pill = forwardRef(function Pill(
  props: MakeResponsive<PillProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();


  // Defaults
  const {
    size = theme.defaults.size,
    radius = "xl",
    variant = theme.defaults.variant,

    withRemoveButton = false,
    removeButtonIcon = <IconX />,
    removeButtonProps,
    onRemove,

    textProps,

    color = "black",
    backgroundColor = color,
    padding = SIZES[size].paddingVertical + "px " + SIZES[size].paddingHorizontal + "px",
    margin,
    width = "fit-content",
    height,

    onClick,

    style,
    children,
    ...rest
  } = useResponsiveProps<PillProps>(props);


  // Styles
  const PillStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "stretch",

    backgroundColor: colors.getBgHex(backgroundColor, variant, false),
    color: colors.getFgHex(color, variant),
    borderRadius: theme.sizeClasses.radius[radius],
    outline: colors.getBorderHex(backgroundColor, variant),

    padding: padding,
    paddingRight: withRemoveButton ? SIZES[size].paddingVertical :
      SIZES[size].paddingHorizontal,
    gap: SIZES[size].paddingVertical,
    margin: margin,
    width: width,
    height: height,

    cursor: withRemoveButton ? "pointer" : undefined,

    ...style,
  }


  // Events
  const handleClick = (e: any) => {
    e.stopPropagation();
    if (withRemoveButton) onRemove?.();
    onClick?.(e);
  }


  return (
    <div
      onClick={handleClick}
      style={PillStyle}
      ref={ref}
      {...rest}
    >
      <Text
        size={size}
        color={colors.getFgHex(color, variant)}
      >
        {children}
      </Text>

      {withRemoveButton && (
        <IconButton
          size={size}
          radius={radius}
          color={colors.getFgHex(color, variant)}
          variant="subtle"
          onClick={handleClick}

          height={16}
          {...removeButtonProps}
        >
          {removeButtonIcon}
        </IconButton>
      )}
    </div>
  )
})