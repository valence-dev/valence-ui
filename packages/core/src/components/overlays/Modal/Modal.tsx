/** @jsxImportSource @emotion/react */
import { forwardRef, useContext } from "react";
import { ValenceContext, useDefaultIconProps, useDetectKeyDown } from "../../..";
import { Flex, FlexProps } from "../../layout";
import { ModalOverlay, ModalOverlayProps } from "../ModalOverlay";
import { useLockedBody } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import { Text } from "../../display";
import { IconX } from "@tabler/icons-react";
import { ComponentSize, GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";
import { IconButton, IconButtonProps } from "../../buttons";
import { css } from "@emotion/react";

export type ModalProps =
  GenericLayoutProps
  & PolymorphicLayoutProps
  & {
    /** The title of this modal */
    title: string;

    /** Specifies if this modal is opened */
    opened: boolean;
    /** Function to call when this modal is closed */
    close: () => void;

    /** Whether to close this modal when the overlay is clicked */
    closeOnOverlayClick?: boolean;
    /** Whether to close this modal when the escape key is pressed */
    closeOnEscape?: boolean;
    /** Whether to lock scrolling when this modal is open */
    lockScroll?: boolean;

    /** Whether to include a shadow underneath the modal */
    withShadow?: boolean;
    /** Sets the `border-radius` css property */
    radius?: ComponentSize;

    /** Optional props to pass to the overlay component */
    overlayProps?: ModalOverlayProps;
    /** Optional props to pass to the flex component */
    flexProps?: FlexProps;
    /** Optional props to pass to the close button */
    closeButtonProps?: IconButtonProps;
  }


export const Modal = forwardRef(function Modal(
  props: ModalProps,
  ref: any
) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    title,

    opened,
    close,

    closeOnOverlayClick = true,
    closeOnEscape = true,
    lockScroll = true,

    withShadow = true,
    radius = theme.defaultRadius,

    backgroundColor = "white",
    color = "black",
    padding = theme.sizeClasses.padding[theme.defaultSize],
    margin,
    width = 500,
    height = "fit-content",

    overlayProps,
    flexProps,
    closeButtonProps,

    children,
    style,

    ...rest
  } = props;


  // Hooks
  useLockedBody(opened && lockScroll, "root");
  useDetectKeyDown(close, "Escape", closeOnEscape, [closeOnEscape, close]);
  const defaultIconProps = useDefaultIconProps();


  // Styles
  const ContainerStyle = css({
    backgroundColor: theme.getColorHex(backgroundColor),
    color: theme.getColorHex(color),
    padding: padding,
    margin: margin,
    width: width,
    height: height,
    borderRadius: theme.sizeClasses.radius[radius],
    boxShadow: withShadow ? theme.defaultShadow : undefined,

    ...style
  });
  const HeaderStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  });


  return (
    <AnimatePresence>
      {opened &&
        <ModalOverlay
          opened={opened}
          close={close}
          closeOnClick={closeOnOverlayClick}
          {...overlayProps}
        >
          <motion.div
            css={ContainerStyle}
            onClick={e => e.stopPropagation()}

            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ ease: "backOut" }}

            ref={ref}
            {...rest}
          >
            <Flex
              direction="column"
              gap={15}
              {...flexProps}
            >
              <header
                css={HeaderStyle}
              >
                <Text
                  bold
                  fontSize={20}
                >
                  {title}
                </Text>

                <IconButton
                  onClick={close}
                  color={color}
                  variant="subtle"
                  {...closeButtonProps}
                >
                  <IconX {...defaultIconProps.get()} />
                </IconButton>
              </header>

              {children}
            </Flex>
          </motion.div>
        </ModalOverlay>
      }
    </AnimatePresence>
  )
});