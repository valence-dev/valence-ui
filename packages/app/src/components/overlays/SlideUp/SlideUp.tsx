/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FlexProps, ValenceContext, useBreakpoint, ModalOverlayProps, ModalOverlay, Flex, useDetectKeyDown } from "@valence-ui/core";
import { ComponentSize, GenericReactiveLayoutProps, ReactiveProp, getReactiveProp } from "@valence-ui/utils";
import { useContext, CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLockedBody } from "usehooks-ts";

export type SlideUpProps = GenericReactiveLayoutProps & {
  /** Specifies if this slideup is opened */
  opened: boolean;
  /** Function to call when this slideup is closed */
  close: () => void;

  /** Whether to close this slideup when the overlay is clicked */
  closeOnOverlayClick?: boolean;
  /** Whether to close this slideup when the escape key is pressed */
  closeOnEscape?: boolean;
  /** Whether to lock scrolling when this slideup is open */
  lockScroll?: boolean;

  /** Sets the size class of the border */
  radius?: ReactiveProp<ComponentSize>;
  /** Specifies if a shadow will be shown */
  shadow?: ReactiveProp<boolean>;

  /** Props to pass to the overlay component */
  overlayProps?: ModalOverlayProps;
  /** Props to apply to the flex component */
  flexProps?: FlexProps;
}


export function SlideUp(props: SlideUpProps) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    opened,
    close,

    closeOnOverlayClick = true,
    closeOnEscape = true,
    lockScroll = true,

    radius = "lg",
    shadow = true,

    backgroundColor = theme.getColor("white")?.base,
    color = theme.getColor("black")?.base,

    padding = theme.sizeClasses.padding[theme.defaultSize],
    margin = 0,

    width,
    height = "50vh",

    overlayProps,
    flexProps,

    style,
    children,
    ...rest
  } = props;


  // Styles
  const borderRadius = theme.sizeClasses.radius[getReactiveProp(radius, breakpoint)];
  const ContainerStyles = css({
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,

    width: getReactiveProp(width, breakpoint),
    height: getReactiveProp(height, breakpoint),

    backgroundColor: getReactiveProp(backgroundColor, breakpoint),
    color: getReactiveProp(color, breakpoint),

    padding: getReactiveProp(padding, breakpoint),
    margin: getReactiveProp(margin, breakpoint),

    borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
    boxShadow: getReactiveProp(shadow, breakpoint) ? theme.defaultShadow : undefined,

    zIndex: 999,

    ...getReactiveProp(style, breakpoint),
  });
  const OverlayStyle: CSSProperties = {
    padding: 0,
    alignItems: "flex-end",
  }

  // Hooks
  useLockedBody(opened && lockScroll, "root");
  useDetectKeyDown(close, "Escape", closeOnEscape, [closeOnEscape, close]);


  return (
    <AnimatePresence>
      {opened &&
        <ModalOverlay
          opened={opened}
          close={close}
          closeOnClick={closeOnOverlayClick}
          style={OverlayStyle}
          {...overlayProps}
        >
          <motion.div
            css={ContainerStyles}
            id={rest.id}
            onClick={e => e.stopPropagation()}

            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ ease: "easeOut", duration: 0.1 }}
          >
            <Flex
              direction="column"
              {...flexProps}
            >
              {children}
            </Flex>
          </motion.div>
          </ModalOverlay>
      }
        </AnimatePresence>
  )
}