import { ComponentSize, GenericReactiveLayoutProps, GenericReactiveProps, ReactiveProp, SizeClasses } from "@valence-ui/utils";
import { FlexProps } from "..";
import { PrimitiveButtonProps } from "../../buttons/PrimitiveButton";
import { CSSProperties } from "react";
import { GenericImageProps } from "../../display";
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
};
export declare const CARD_DEFAULTS: {
    width: SizeClasses<CSSProperties["width"]>;
};
export declare const Card: {
    (props: CardProps): import("react/jsx-runtime").JSX.Element;
    Image(props: CardImageProps): import("react/jsx-runtime").JSX.Element;
    Section(props: CardSectionProps): import("react/jsx-runtime").JSX.Element;
    Buttons(props: CardButtonsProps): import("react/jsx-runtime").JSX.Element;
};
export type CardImageProps = GenericReactiveProps & GenericImageProps & {
    /** **[REACTIVE]** Defines the radius size class of this image. Defaults to the theme default radius size class. */
    radius?: ReactiveProp<ComponentSize>;
    /** **[REACTIVE]** Sets `width` css property */
    width?: ReactiveProp<CSSProperties["width"]>;
    /** **[REACTIVE]** Sets `height` css property */
    height?: ReactiveProp<CSSProperties["height"]>;
};
export type CardSectionProps = FlexProps;
export type CardButtonsProps = FlexProps;
//# sourceMappingURL=Card.d.ts.map