import { ComponentSize, GenericLayoutProps, GenericProps, PolymorphicButtonProps, SizeClasses } from "@valence-ui/utils";
import { FlexProps } from "..";
import { PrimitiveButtonProps } from "../../buttons/PrimitiveButton";
import { CSSProperties } from "react";
import { GenericImageProps } from "../../display";
import { MakeResponsive } from "../../../utilities/responsive";
export type CardProps = GenericLayoutProps & PolymorphicButtonProps & {
    /**  Defines the size class for this card */
    size?: ComponentSize;
    /**  Defines the radius size class for this card */
    radius?: ComponentSize;
    /**  Defines the gap size between this card's contents */
    gap?: CSSProperties["gap"];
    /** Optional props to pass to the button component of this card */
    buttonProps?: PrimitiveButtonProps;
    /** Optional props to pass to the `Flex` component of this card */
    flexProps?: FlexProps;
};
export declare const CARD_DEFAULTS: {
    width: SizeClasses<CSSProperties["width"]>;
};
export type CardImageProps = GenericProps & GenericImageProps & {
    /**  Defines the radius size class of this image. Defaults to the theme default radius size class. */
    radius?: ComponentSize;
    /**  Sets `width` css property */
    width?: CSSProperties["width"];
    /**  Sets `height` css property */
    height?: CSSProperties["height"];
    children?: never;
};
export type CardSectionProps = FlexProps;
export type CardButtonsProps = FlexProps;
declare const CardNamesapce: import("react").ForwardRefExoticComponent<MakeResponsive<CardProps> & import("react").RefAttributes<unknown>> & {
    Image: import("react").ForwardRefExoticComponent<MakeResponsive<CardImageProps> & import("react").RefAttributes<unknown>>;
    Section: import("react").ForwardRefExoticComponent<MakeResponsive<FlexProps> & import("react").RefAttributes<unknown>>;
    Buttons: import("react").ForwardRefExoticComponent<MakeResponsive<FlexProps> & import("react").RefAttributes<unknown>>;
};
export { CardNamesapce as Card };
//# sourceMappingURL=Card.d.ts.map