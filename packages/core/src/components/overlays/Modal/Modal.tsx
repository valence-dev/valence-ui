/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { ModalBackground, Disclosure, useDetectKeyDown, useValence } from "../../..";
import { Flex, FlexProps } from "../../layout";
import { AnimatePresence, motion } from "framer-motion";
import { Icon, Title } from "../../display";
import { IconX } from "@tabler/icons-react";
import { GenericOverlayHeaderProps, GenericOverlayProps } from "@valence-ui/utils";
import { IconButton } from "../../buttons";
import { css } from "@emotion/react";
import { FloatingFocusManager, useFloating, useId, useInteractions, useRole } from "@floating-ui/react";
import { useLockedBody } from "usehooks-ts";

export type ModalProps =
  GenericOverlayProps
  & {
    /** A disclosure to handle state information about this modal */
    disclosure: Disclosure;

    /** Optional props to pass to the flex component */
    flexProps?: FlexProps;
  }


export const Modal = forwardRef(function Modal(
  props: ModalProps,
  ref: any
) {
  const theme = useValence();


  // Defaults
  const {
    disclosure,
    title,
    header = (props: GenericOverlayHeaderProps) => <DefaultModalHeader
      disclosure={disclosure}
      {...props}
    />,

    closeOnOverlayClick = true,
    closeOnEscape = true,
    lockScroll = true,

    withShadow = true,
    radius = theme.defaults.radius,

    backgroundColor = "white",
    color = "black",
    padding = theme.sizeClasses.padding[theme.defaults.size],
    margin,
    width = 500,
    height = "fit-content",

    flexProps,
    overlayBackgroundProps,

    children,
    style,

    ...rest
  } = props;


  // Hooks
  useLockedBody(disclosure.opened && lockScroll, "root");
  useDetectKeyDown(() => disclosure.close(), "Escape", closeOnEscape && disclosure.opened);


  // Floating UI
  const { refs, context } = useFloating({
    open: disclosure.opened,
    onOpenChange: disclosure.update,
  });
  const role = useRole(context);

  const { getFloatingProps } = useInteractions([
    role,
  ])

  const labelId = useId();
  const descriptionId = useId();


  // Styles
  const ContainerStyle = css({
    backgroundColor: theme.getColorHex(backgroundColor),
    color: theme.getColorHex(color),
    padding: padding,
    margin: margin,
    width: width,
    height: height,
    borderRadius: theme.sizeClasses.radius[radius],
    boxShadow: withShadow ? theme.defaults.shadow : undefined,
    
    boxSizing: "border-box",
    maxWidth: "100%",

    ...style
  });


  return (
    <AnimatePresence>
      {disclosure.opened &&
        <ModalBackground
          disclosure={disclosure}
          {...overlayBackgroundProps}
        >
          <FloatingFocusManager context={context}>
            <motion.div
              css={ContainerStyle}
              onClick={e => e.stopPropagation()}

              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ ease: "backOut" }}

              ref={refs.setFloating}
              aria-labelledby={labelId}
              aria-describedby={descriptionId}

              {...getFloatingProps()}
              {...rest}
            >
              <Flex
                direction="column"
                gap={15}
                {...flexProps}
              >
                {header({ title })}

                {children}
              </Flex>
            </motion.div>
          </FloatingFocusManager>
        </ModalBackground>
      }
    </AnimatePresence>
  )
});


export type DefaultModalHeaderProps =
  GenericOverlayHeaderProps
  & {
    /** A disclosure to handle state information about this modal */
    disclosure: Disclosure;
  }

export const DefaultModalHeader = forwardRef(function DefaultModalHeader(
  props: DefaultModalHeaderProps,
  ref: any,
) {
  const { title, disclosure } = props;


  const HeaderStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  });


  return (
    <header
      css={HeaderStyle}
      ref={ref}
    >
      <Title
        order={2}
      >
        {title}
      </Title>

      <IconButton
        onClick={disclosure.close}
        color="black"
        variant="subtle"
      >
        <Icon><IconX /></Icon>
      </IconButton>
    </header>
  )
});