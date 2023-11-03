import { CSSProperties, forwardRef, useContext } from "react";
import { ValenceContext, useBreakpoint } from "../../..";
import { getBackgroundColor, getTextColor } from "../../buttons"
import { Flex, FlexProps } from "./Flex";
import { ComponentSize, FillVariant, ReactiveProp, getReactiveProp } from "@valence-ui/utils";

export type StyledFlexProps = FlexProps & {
  /** **[REACTIVE]** Sets the styling variant. Defaults to the theme default variant. */
  variant?: ReactiveProp<FillVariant>;
  /** **[REACTIVE]** Sets the size of this component. Defaults to the theme default size. */
  size?: ReactiveProp<ComponentSize>;
  /** **[REACTIVE]** Sets the radius of this component. Defaults to the theme default border size. */
  radius?: ReactiveProp<ComponentSize>;

  /** **[REACTIVE]** Whether to include a shadow underneath this component. Will display the theme default shadow. */
  shadow?: ReactiveProp<boolean>;
}


/** A styled version of the `Flex` component that offers many props in line with the button styling system */
export const StyledFlex = forwardRef(function StyledFlex(
  props: StyledFlexProps,
  ref: any
) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    variant = theme.defaultVariant,
    size = { default: theme.defaultSize },
    radius = { default: theme.defaultRadius },

    color = { default: theme.primaryColor },
    backgroundColor = color,

    style,
    children,
    ...rest
  } = props;


  // Styles
  const styles: CSSProperties = {
    backgroundColor: getBackgroundColor(
      getReactiveProp(backgroundColor, breakpoint),
      getReactiveProp(variant, breakpoint),
      false, theme
    ),
    color: getTextColor(
      getReactiveProp(color, breakpoint),
      getReactiveProp(variant, breakpoint),
      theme
    ),
    borderRadius: theme.sizeClasses.radius[getReactiveProp(radius, breakpoint)],

    ...getReactiveProp(style, breakpoint)
  }


  return (
    <Flex
      style={styles}
      padding={theme.sizeClasses.padding[getReactiveProp(size, breakpoint)]}

      ref={ref}
      {...rest}
    >
      {children}
    </Flex>
  )
});