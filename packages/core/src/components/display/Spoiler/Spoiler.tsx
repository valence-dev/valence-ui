/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "motion/react";
import { GenericProps } from "@valence-ui/utils";
import { forwardRef } from "react";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";

export type SpoilerProps = GenericProps & {
  /** Whether to show or hide the spoiler content. Defaults to `true`. */
  show?: boolean;
};

/** A simple wrapper component used to show or hide content at will. */
export const Spoiler = forwardRef(function Spoiler(
  props: MakeResponsive<SpoilerProps>,
  ref: any,
) {
  // Defaults
  const {
    show = true,
    style,
    children,
    ...rest
  } = useResponsiveProps<SpoilerProps>(props);

  // Styles
  const SpoilerStyle = css({
    overflow: "hidden",
    ...style,
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          css={SpoilerStyle}
          ref={ref}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});
