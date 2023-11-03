import { ComponentSize, GenericReactiveLayoutProps, GenericReactiveProps, PolymorphicButtonProps, ReactiveProp, SizeClasses } from "@valence-ui/utils";
import { FlexProps } from "..";
import { PrimitiveButtonProps } from "../../buttons/PrimitiveButton";
import { CSSProperties } from "react";
import { GenericImageProps } from "../../display";
export type CardProps = GenericReactiveLayoutProps & PolymorphicButtonProps & {
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
export type CardImageProps = GenericReactiveProps & GenericImageProps & {
    /** **[REACTIVE]** Defines the radius size class of this image. Defaults to the theme default radius size class. */
    radius?: ReactiveProp<ComponentSize>;
    /** **[REACTIVE]** Sets `width` css property */
    width?: ReactiveProp<CSSProperties["width"]>;
    /** **[REACTIVE]** Sets `height` css property */
    height?: ReactiveProp<CSSProperties["height"]>;
    children?: never;
};
export type CardSectionProps = FlexProps;
export type CardButtonsProps = FlexProps;
declare const CardNamesapce: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: ReactiveProp<CSSProperties> | undefined;
    tabIndex?: ReactiveProp<number> | undefined;
} & {
    backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    /** **[REACTIVE]** Defines the size class for this card */
    size?: ReactiveProp<ComponentSize> | undefined;
    /** **[REACTIVE]** Defines the radius size class for this card */
    radius?: ReactiveProp<ComponentSize> | undefined;
    /** **[REACTIVE]** Defines the gap size between this card's contents */
    gap?: ReactiveProp<CSSProperties["gap"]>;
    /** Optional props to pass to the button component of this card */
    buttonProps?: PrimitiveButtonProps | undefined;
    /** Optional props to pass to the `Flex` component of this card */
    flexProps?: FlexProps | undefined;
} & import("react").RefAttributes<unknown>> & {
    Image: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
        style?: ReactiveProp<CSSProperties> | undefined;
        tabIndex?: ReactiveProp<number> | undefined;
    } & GenericImageProps & {
        /** **[REACTIVE]** Defines the radius size class of this image. Defaults to the theme default radius size class. */
        radius?: ReactiveProp<ComponentSize> | undefined;
        /** **[REACTIVE]** Sets `width` css property */
        width?: ReactiveProp<CSSProperties["width"]>;
        /** **[REACTIVE]** Sets `height` css property */
        height?: ReactiveProp<CSSProperties["height"]>;
        children?: undefined;
    } & import("react").RefAttributes<unknown>>;
    Section: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
        style?: ReactiveProp<CSSProperties> | undefined;
        tabIndex?: ReactiveProp<number> | undefined;
    } & {
        backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
        color?: ReactiveProp<import("csstype").Property.Color | undefined>;
        padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
        margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
        width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
        height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
    } & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & {
        direction?: ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
        align?: ReactiveProp<import("csstype").Property.AlignItems | undefined>;
        justify?: ReactiveProp<import("csstype").Property.JustifyContent | undefined>; /** **[REACTIVE]** Defines the radius size class for this card */
        alignSelf?: ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
        gap?: ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
        grow?: ReactiveProp<boolean> | undefined;
        wrap?: ReactiveProp<import("csstype").Property.FlexWrap | undefined>;
    } & import("react").RefAttributes<unknown>>;
    Buttons: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
        style?: ReactiveProp<CSSProperties> | undefined;
        tabIndex?: ReactiveProp<number> | undefined;
    } & {
        backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
        color?: ReactiveProp<import("csstype").Property.Color | undefined>;
        padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
        margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
        width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
        height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
    } & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & {
        direction?: ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
        align?: ReactiveProp<import("csstype").Property.AlignItems | undefined>;
        justify?: ReactiveProp<import("csstype").Property.JustifyContent | undefined>; /** **[REACTIVE]** Defines the radius size class for this card */
        alignSelf?: ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
        gap?: ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
        grow?: ReactiveProp<boolean> | undefined;
        wrap?: ReactiveProp<import("csstype").Property.FlexWrap | undefined>;
    } & import("react").RefAttributes<unknown>>;
};
export { CardNamesapce as Card };
//# sourceMappingURL=Card.d.ts.map