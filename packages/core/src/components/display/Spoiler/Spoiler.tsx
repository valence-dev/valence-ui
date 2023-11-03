import { motion } from "framer-motion";
import { GenericProps } from "@valence-ui/utils";
import { CSSProperties, forwardRef } from "react";

export type SpoilerProps = GenericProps & {
  /** Whether to show or hide the spoiler content. Defaults to `true`. */
  show?: boolean;
}

/** A simple wrapper component used to show or hide content at will. */
export const Spoiler = forwardRef(function Spoiler(
  props: SpoilerProps,
  ref: any
) {
  // Defaults
  const {
    show = true,
    style,
    children,
    ...rest
  } = props;


  // Styles
  const SpoilerStyle: CSSProperties = { 
    overflow: "hidden",
    ...style
  }


  return (
    <motion.div
      animate={{ height: show ? "auto" : 0 }}
      style={SpoilerStyle}
      ref={ref}
      {...rest}
    >
      {children}
    </motion.div>
  )
});