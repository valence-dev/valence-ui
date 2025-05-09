import {
  ComponentSize,
  FillVariant,
  GenericLayoutProps,
  GenericProps,
  PolymorphicButtonProps,
  SizeClasses,
} from "@valence-ui/utils";
import { Flex, FlexProps } from "..";
import {
  PrimitiveButton,
  PrimitiveButtonProps,
} from "../../buttons/PrimitiveButton";
import { CSSProperties, forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { GenericImageProps, Image as ImageComponent } from "../../display";
import { UnstyledButton } from "../../buttons";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";

export type CardProps = GenericLayoutProps &
  PolymorphicButtonProps & {
    /**  Defines the size class for this card */
    size?: ComponentSize;
    /**  Defines the radius size class for this card */
    radius?: ComponentSize;
    /** Defines the fill variant of this card. */
    variant?: FillVariant;
    /**  Defines the gap size between this card's contents */
    gap?: CSSProperties["gap"];

    /** Optional props to pass to the button component of this card */
    buttonProps?: PrimitiveButtonProps;
    /** Optional props to pass to the `Flex` component of this card */
    flexProps?: FlexProps;
  };
export const CARD_DEFAULTS: { width: SizeClasses<CSSProperties["width"]> } = {
  width: {
    xs: 150,
    sm: 200,
    md: 250,
    lg: 300,
    xl: 350,
  },
};

const Card = forwardRef(function Card(
  props: MakeResponsive<CardProps>,
  ref: any
) {
  const theme = useValence();

  // Defaults
  const {
    size = theme.defaults.size,
    radius = theme.defaults.radius,
    variant = theme.defaults.variant,
    gap = 0,
    buttonProps,
    flexProps,

    height = "fit-content",
    width = CARD_DEFAULTS.width[size],
    padding = 0,
    margin,

    color = "black",
    backgroundColor = color,

    children,
    style,
    ...rest
  } = useResponsiveProps<CardProps>(props);

  // Styles
  const cardStyle: CSSProperties = {
    overflow: "hidden",
    padding: padding,
    margin: margin,
    userSelect: "none",

    ...style,
  };

  return (
    <PrimitiveButton
      height={height}
      width={width}
      color={color}
      backgroundColor={backgroundColor}
      variant={variant}
      radius={radius}
      style={cardStyle}
      motion={{
        onHover: "raise",
        onTap: "bounce",
      }}
      ref={ref}
      {...buttonProps}
      {...rest}
    >
      <Flex direction="column" gap={gap} {...flexProps}>
        {children}
      </Flex>
    </PrimitiveButton>
  );
});

export type CardImageProps = Omit<GenericProps, "children"> &
  GenericImageProps & {
    /**  Defines the radius size class of this image. Defaults to the theme default radius size class. */
    radius?: ComponentSize;
    /**  Sets `width` css property */
    width?: CSSProperties["width"];
    /**  Sets `height` css property */
    height?: CSSProperties["height"];
  };

const Image = forwardRef(function CardImage(
  props: MakeResponsive<CardImageProps>,
  ref: any
) {
  const theme = useValence();

  // Defaults
  const {
    radius = theme.defaults.radius,
    width = "100%",
    height = "fit-content",

    ...rest
  } = useResponsiveProps<CardImageProps>(props);

  return (
    <ImageComponent
      radius={radius}
      width={width}
      height={height}
      ref={ref}
      {...rest}
    />
  );
});

export type CardSectionProps = FlexProps;

const Section = forwardRef(function CardSection(
  props: MakeResponsive<CardSectionProps>,
  ref: any
) {
  const theme = useValence();

  // Defaults
  const {
    width = "100%",
    height = "fit-content",
    padding = theme.sizeClasses.padding[theme.defaults.size],

    children,
    ...rest
  } = useResponsiveProps<CardSectionProps>(props);

  return (
    <Flex width={width} height={height} padding={padding} ref={ref} {...rest}>
      {children}
    </Flex>
  );
});

export type CardButtonsProps = FlexProps;

const Buttons = forwardRef(function CardButtons(
  props: MakeResponsive<CardButtonsProps>,
  ref: any
) {
  const theme = useValence();

  // Defaults
  const {
    width = "100%",
    height = "fit-content",
    padding = theme.sizeClasses.padding[theme.defaults.size],

    direction = "row",
    align = "center",
    justify = "flex-start",

    children,
    ...rest
  } = useResponsiveProps<CardButtonsProps>(props);

  // Styles
  const ContainerStyle: CSSProperties = {
    width: width,
    height: height,
    padding: padding,

    boxSizing: "border-box",
  };

  return (
    <UnstyledButton
      onClick={(e) => e.stopPropagation()}
      component="div"
      style={ContainerStyle}
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
  );
});

const CardNamesapce = Object.assign(Card, {
  Image,
  Section,
  Buttons,
});
export { CardNamesapce as Card };
