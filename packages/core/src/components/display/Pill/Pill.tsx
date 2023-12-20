import { ComponentSize, FillVariant, GenericLayoutProps, SizeClasses } from "@valence-ui/utils";
import { IconButton, IconButtonProps, UnstyledButtonProps, getBackgroundColor, getTextColor } from "../../buttons";
import { CSSProperties, ReactNode, forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { IconX } from "@tabler/icons-react";
import { useDefaultIconProps } from "../../../hooks";
import { Text, TextProps } from "../Text";

export type PillProps =
  GenericLayoutProps
  & UnstyledButtonProps
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
    removeButtonProps?: IconButtonProps & { children?: never };
    /** Callback to be called when the remove button is clicked. */
    onRemove?: () => void;

    /** Optional props to pass to the `Text` component */
    textProps?: TextProps & { children?: never };

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
  props: PillProps,
  ref: any,
) {
  const theme = useValence();
  const defaultIconProps = useDefaultIconProps();


  // Defaults
  const {
    variant = theme.defaultVariant,
    size = theme.defaultSize,
    radius = "xl",

    withRemoveButton = false,
    removeButtonIcon = <IconX {...defaultIconProps.get()} />,
    removeButtonProps,
    onRemove,

    textProps,

    color = "black",
    backgroundColor = color,
    padding = SIZES[size].paddingVertical + "px " + SIZES[size].paddingHorizontal + "px",
    margin,
    width = "fit-content",
    height,

    style,
    children,
    ...rest
  } = props;


  // Styles
  const PillStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "stretch",

    backgroundColor: getBackgroundColor(backgroundColor, variant, false, theme),
    color: getTextColor(color, variant, theme),
    borderRadius: theme.sizeClasses.radius[radius],
    outline: variant === "subtle" ?
      `1px solid ${theme.getColorHex(backgroundColor, "medium")}`
      : "none",

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
    if (!withRemoveButton) return;
    onRemove?.();
    props.onClick?.(e);
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
        color={getTextColor(color, variant, theme)}
      >
        {children}
      </Text>

      {withRemoveButton && (
        <IconButton
          size={size}
          radius={radius}
          color={getTextColor(color, variant, theme)}
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