import { ComponentSize, GenericReactiveLayoutProps, GenericReactiveProps, ReactiveProp, SizeClasses, getReactiveProp } from "@valence-ui/utils";
import { Flex, FlexProps } from "..";
import { PrimitiveButton, PrimitiveButtonProps } from "../../buttons/PrimitiveButton";
import { CSSProperties, useContext } from "react";
import { ValenceContext } from "../../../ValenceProvider";
import { useBreakpoint } from "../../../hooks";
import { GenericImageProps, Image } from "../../display";
import { UnstyledButton } from "../../buttons";


export type CardProps = GenericReactiveLayoutProps & {
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


export const Card = function Card(props: CardProps) {
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
  } = props;


  // Styles
  const cardStyle: CSSProperties = {
    overflow: "hidden",
    padding: getReactiveProp(padding, breakpoint),
    margin: getReactiveProp(margin, breakpoint),

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
      {...buttonProps}
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
}


export type CardImageProps = GenericReactiveProps & GenericImageProps & {
  /** **[REACTIVE]** Defines the radius size class of this image. Defaults to the theme default radius size class. */
  radius?: ReactiveProp<ComponentSize>;
  /** **[REACTIVE]** Sets `width` css property */
  width?: ReactiveProp<CSSProperties["width"]>;
  /** **[REACTIVE]** Sets `height` css property */
  height?: ReactiveProp<CSSProperties["height"]>;
}

Card.Image = function CardImage(props: CardImageProps) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    radius = theme.defaultRadius,
    width = "100%",
    height = "fit-content",

    ...rest
  } = props;


  return (
    <Image
      radius={radius}
      width={width}
      height={height}
      {...rest}
    />
  )
}


export type CardSectionProps = FlexProps;

Card.Section = function CardSection(props: CardSectionProps) {
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
      {...rest}
    >
      {children}
    </Flex>
  )
}


export type CardButtonsProps = FlexProps;

Card.Buttons = function CardButtons(props: CardButtonsProps) {
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
      style={ButtonStyle}
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
}