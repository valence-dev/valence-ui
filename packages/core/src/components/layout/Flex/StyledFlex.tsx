import { CSSProperties, forwardRef } from "react";
import { MakeResponsive, useResponsiveProps, useValence } from "../../..";
import { getBackgroundColor, getTextColor } from "../../buttons"
import { Flex, FlexProps } from "./Flex";
import { ComponentSize, FillVariant } from "@valence-ui/utils";

export type StyledFlexProps = FlexProps & {
  /** Sets the styling variant. Defaults to the theme default variant. */
  variant?: FillVariant;
  /** Sets the size of this component. Defaults to the theme default size. */
  size?: ComponentSize;
  /** Sets the radius of this component. Defaults to the theme default border size. */
  radius?: ComponentSize;

  /** Whether to include a shadow underneath this component. Will display the theme default shadow. */
  shadow?: boolean;
}


/** A styled version of the `Flex` component that offers many props in line with the button styling system */
export const StyledFlex = forwardRef(function StyledFlex(
  props: MakeResponsive<StyledFlexProps>,
  ref: any
) {
  const theme = useValence();


  // Defaults
  const {
    size = theme.defaults.size,
    radius = theme.defaults.radius,
    variant = theme.defaults.variant,
    padding = theme.sizeClasses.padding[theme.defaults.size],

    color = theme.primaryColor,
    backgroundColor = color,

    style,
    children,
    ...rest
  } = useResponsiveProps<StyledFlexProps>(props);


  // Styles
  const styles: CSSProperties = {
    backgroundColor: getBackgroundColor(
      backgroundColor,
      variant,
      false, theme
    ),
    color: getTextColor(
      color,
      variant,
      theme
    ),
    borderRadius: theme.sizeClasses.radius[radius],

    boxShadow: props.shadow
      ? theme.defaults.shadow : undefined,

    ...style
  }


  return (
    <Flex
      padding={padding}
      style={styles}

      ref={ref}
      {...rest}
    >
      {children}
    </Flex>
  )
});