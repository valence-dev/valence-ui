/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CSSProperties, forwardRef } from "react";
import { motion } from "motion/react";
import {
  MakeResponsive,
  TransitionAnimation,
  useAnimation,
  useColors,
  useResponsiveProps,
  useValence,
} from "../../..";
import { ComponentSize, GenericProps, SizeClasses } from "@valence-ui/utils";

export type LoaderProps = Omit<GenericProps, "children"> & {
  /** Sets element size class. Defaults to theme default */
  size?: ComponentSize;
  /** Color of the loader. Defaults to theme default */
  color?: CSSProperties["color"];
  /** Optional animation properties for this icon. */
  animation?: TransitionAnimation | TransitionAnimation[];
};

const SIZES: SizeClasses<{ height: number; thickness: number }> = {
  xs: { height: 12, thickness: 2 },
  sm: { height: 14, thickness: 2 },
  md: { height: 16, thickness: 2.5 },
  lg: { height: 20, thickness: 3 },
  xl: { height: 25, thickness: 3.5 },
};

export const Loader = forwardRef(function Loader(
  props: MakeResponsive<LoaderProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  // Defaults
  const {
    size = theme.defaults.size,
    color = "inherit",
    animation,
    style,
    ...rest
  } = useResponsiveProps<LoaderProps>(props);
  const animations = useAnimation({ transitionAnimation: animation });

  // Styles
  const containerStyle = css({
    width: theme.getSize("iconSize", size),
    height: theme.getSize("iconSize", size),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const loaderStyle = css({
    width: SIZES[size].height,
    height: SIZES[size].height,
    border: `${SIZES[size].thickness}px solid #11181C00`,
    borderBottomColor: colors.getHex(color),
    borderRadius: "50%",
    display: "inline-block",
    boxSizing: "border-box",
    ...style,
  });

  return (
    <motion.div
      css={containerStyle}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        css={loaderStyle}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          type: "tween",
          duration: 0.8,
          ease: "linear",
        }}
        ref={ref}
        {...rest}
      />
    </motion.div>
  );
});
