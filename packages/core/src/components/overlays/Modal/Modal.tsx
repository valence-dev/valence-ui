/** @jsxImportSource @emotion/react */
import { CSSProperties, forwardRef } from "react";
import { ModalBackground, Disclosure, useDetectKeyDown, useValence, MakeResponsive, useResponsiveProps, useColors } from "../../..";
import { Flex, FlexProps, OverflowContainer } from "../../layout";
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

    /** Optional props to pass to the inner flex component */
    innerFlexProps?: FlexProps;
  }


export const Modal = forwardRef(function Modal(
  props: MakeResponsive<ModalProps>,
  ref: any
) {
  const theme = useValence();
  const { getHex } = useColors();


  // Defaults
  const {
    disclosure,
    title,
    header = (props) => <DefaultModalHeader
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
    innerFlexProps,
    overlayBackgroundProps,

    children,
    style,

    ...rest
  } = useResponsiveProps<ModalProps>(props);
  const {
    style: flexStyle,
    ...flexPropsRest
  } = flexProps || {} as any;


  // Hooks
  useLockedBody(disclosure.opened && lockScroll, "root");
  useDetectKeyDown(() => disclosure.close(), "Escape", closeOnEscape && disclosure.opened);


  // Floating UI
  /** Moving this to the sheets should allow them to trap focus.
   * Not sure if there's a way to conditionally trap focus.
   */
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
    backgroundColor: getHex(backgroundColor),
    color: getHex(color),
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
  const FlexStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    ...flexStyle
  }


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
                style={FlexStyle}
                {...flexPropsRest}
              >
                {header({ title })}

                <OverflowContainer
                  innerProps={innerFlexProps}
                >
                  {children}
                </OverflowContainer>
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
  props: MakeResponsive<DefaultModalHeaderProps>,
  ref: any,
) {
  const { title, disclosure } = useResponsiveProps<DefaultModalHeaderProps>(props);
  const { getHex } = useColors();


  const HeaderStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",

    backgroundColor: getHex(
      "white",
      "strong"
    ),
    backdropFilter: "blur(10px)",
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