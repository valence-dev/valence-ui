import { ComponentSize, GenericReactiveLayoutProps, GenericReactiveProps, PolymorphicButtonProps, ReactiveProp, SizeClasses, getReactiveProp } from "@valence-ui/utils";
import { Flex, FlexProps } from "..";
import { PrimitiveButton, PrimitiveButtonProps } from "../../buttons/PrimitiveButton";
import { CSSProperties, forwardRef, useContext } from "react";
import { ValenceContext } from "../../../ValenceProvider";
import { useBreakpoint } from "../../../hooks";
import { GenericImageProps, Image as ImageComponent } from "../../display";
import { UnstyledButton } from "../../buttons";


export type CardProps =
  GenericReactiveLayoutProps
  & PolymorphicButtonProps
  & {
    /** **[REACTIVE]** Defines the size class for this card */
    size?: ReactiveProp<ComponentSize>;
    /** **[REACTIVE]** Defines the radius size class for this card */
    radius?: ReactiveProp<ComponentSize>;
    /** **[REACTIVE]** Defines the gap size between this card's contents */
    gap?: ReactiveProp<CSSProperties["gap"]>;

    /** Optional props to pass to the button component of this card */
    buttonProps?: PrimitiveButtonProps;
    /** Optional props to pass to the `Flex` component of this card */
    flexProps?: FlexProps;
  }
export const CARD_DEFAULTS: { width: SizeClasses<CSSProperties["width"]> } = {
  width: {
    "xs": 150,
    "sm": 200,
    "md": 250,
    "lg": 300,
    "xl": 350
  }
}


const Card = forwardRef(function Card(
  props: CardProps,
  ref: any
) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    size = theme.defaultSize,
    radius = theme.defaultRadius,
    gap = 0,
    buttonProps,
    flexProps,

    height = "fit-content",
    width = CARD_DEFAULTS.width[getReactiveProp(size, breakpoint)],
    padding = 0,
    margin,

    color = "black",
    backgroundColor = color,

    children,
    style,
    ...rest
  } = props;


  // Styles
  const cardStyle: CSSProperties = {
    overflow: "hidden",
    padding: getReactiveProp(padding, breakpoint),
    margin: getReactiveProp(margin, breakpoint),
    userSelect: "none",

    ...getReactiveProp(style, breakpoint)
  }


  return (
    <PrimitiveButton
      height={getReactiveProp(height, breakpoint)}
      width={getReactiveProp(width, breakpoint)}
      color={getReactiveProp(color, breakpoint)}
      backgroundColor={getReactiveProp(backgroundColor, breakpoint)}

      radius={getReactiveProp(radius, breakpoint)}
      style={cardStyle}

      motion={{
        onHover: "raise",
        onTap: "bounce",
      }}

      ref={ref}
      {...buttonProps}
      {...rest}
    >
      <Flex
        direction="column"
        gap={gap}
        {...flexProps}
      >
        {children}
      </Flex>
    </PrimitiveButton>
  )
});


export type CardImageProps = GenericReactiveProps & GenericImageProps & {
  /** **[REACTIVE]** Defines the radius size class of this image. Defaults to the theme default radius size class. */
  radius?: ReactiveProp<ComponentSize>;
  /** **[REACTIVE]** Sets `width` css property */
  width?: ReactiveProp<CSSProperties["width"]>;
  /** **[REACTIVE]** Sets `height` css property */
  height?: ReactiveProp<CSSProperties["height"]>;

  children?: never;
}

const Image = forwardRef(function CardImage(
  props: CardImageProps,
  ref: any
) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    radius = theme.defaultRadius,
    width = "100%",
    height = "fit-content",

    ...rest
  } = props;


  return (
    <ImageComponent
      radius={radius}
      width={width}
      height={height}

      ref={ref}
      {...rest}
    />
  )
});


export type CardSectionProps = FlexProps;

const Section = forwardRef(function CardSection(
  props: CardSectionProps,
  ref: any
) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    width = "100%",
    height = "fit-content",
    padding = theme.sizeClasses.padding[theme.defaultSize],

    children,
    ...rest
  } = props;


  return (
    <Flex
      width={width}
      height={height}
      padding={padding}

      ref={ref}
      {...rest}
    >
      {children}
    </Flex>
  )
});


export type CardButtonsProps = FlexProps;

const Buttons = forwardRef(function CardButtons(
  props: CardButtonsProps,
  ref: any
) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    width = "100%",
    height = "fit-content",
    padding = theme.sizeClasses.padding[theme.defaultSize],

    direction = "row",
    align = "center",
    justify = "flex-start",

    children,
    ...rest
  } = props;


  // Styles
  const ButtonStyle: CSSProperties = {
    width: getReactiveProp(width, breakpoint),
    height: getReactiveProp(height, breakpoint),
    padding: getReactiveProp(padding, breakpoint),

    boxSizing: "border-box",
  }


  return (
    <UnstyledButton
      onClick={(e) => e.stopPropagation()}
      component="div"
      style={ButtonStyle}
      ref={ref}
    >
      <Flex
        width="100%"
        height="100%"
        padding={0}

        direction={direction}
        align={align}
        justify={justify}
        {...rest}
      >
        {children}
      </Flex>
    </UnstyledButton>
  )
});


const CardNamesapce = Object.assign(Card, {
  Image,
  Section,
  Buttons,
});
export { CardNamesapce as Card };