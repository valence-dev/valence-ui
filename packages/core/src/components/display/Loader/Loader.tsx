import { CSSProperties, forwardRef } from "react";
import { motion } from "framer-motion";
import { MakeResponsive, useResponsiveProps, useValence } from "../../..";
import { ComponentSize, GenericProps, SizeClasses } from "@valence-ui/utils";

export type LoaderProps = GenericProps & {
  /** Sets element size class. Defaults to theme default */
  size?: ComponentSize;
  /** Color of the loader. Defaults to theme default */
  color?: CSSProperties["color"];
}

const SIZES: SizeClasses<{ height: number, thickness: number }> = {
  xs: { height: 12, thickness: 2 },
  sm: { height: 14, thickness: 2 },
  md: { height: 16, thickness: 2.5 },
  lg: { height: 20, thickness: 3 },
  xl: { height: 25, thickness: 3.5 },
}

export const Loader = forwardRef(function Loader(
  props: MakeResponsive<LoaderProps>,
  ref: any
) {
  const theme = useValence();


  // Defaults
  const { 
    size = theme.defaults.size,
    color = theme.primaryColor,
    style,
    ...rest
  } = useResponsiveProps<LoaderProps>(props);


  // Styles
  const loaderStyle: CSSProperties = {
    width: SIZES[size].height,
    height: SIZES[size].height,
    border: `${SIZES[size].thickness}px solid #11181C00`,
    borderBottomColor: theme.getColorHex(color),
    borderRadius: "50%",
    display: "inline-block",
    boxSizing: "border-box",
    ...style
  }

  return (
    <motion.div
      style={loaderStyle}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, type: "tween", duration: 0.8, ease: "linear" }}
      ref={ref}
      {...rest}
    />
  )
});