import React from "react";
import { MotionBehaviourProps } from "../Helpers";
import { ComponentSize, FillVariant, GenericLayoutProps, PolymorphicButtonComponents } from "@valence-ui/utils";
export type GenericClickableProps = {
    /** Sets `to` property on `Link` polymorphic elements */
    to?: string;
    /** Sets html `href` property on valid elements */
    href?: string;
    /** Sets html `target` property on valid elements */
    target?: string;
    /** Sets html `type` property on valid elements */
    type?: "submit" | "reset" | "button";
    /** Sets `onClick` event */
    onClick?: () => void;
    /** Sets `onMouseEnter` event */
    onMouseEnter?: () => void;
    /** Sets `onMouseLeave` event */
    onMouseLeave?: () => void;
    /** Sets `onMouseDown` event */
    onMouseDown?: (event: any) => void;
    /** Sets `onMouseUp` event */
    onMouseUp?: (event: any) => void;
    /** Sets `onFocus` event */
    onFocus?: () => void;
    /** Sets `onBlur` event */
    onBlur?: () => void;
};
export type PrimitiveButtonProps = GenericClickableProps & GenericLayoutProps & {
    /** Sets styling variant. Defaults to theme default */
    variant?: FillVariant;
    /** Sets size class. Defaults to theme default */
    size?: ComponentSize;
    /** Sets radius size class. Defaults to theme default */
    radius?: ComponentSize;
    /** Sets `aspect-ratio` css property */
    aspectRatio?: React.CSSProperties["aspectRatio"];
    /** Shorthand for `aspect-ratio = 1` */
    square?: boolean;
    /** Specifies if a shadow will be shown */
    shadow?: boolean;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** Specifies if this button is disabled */
    disabled?: boolean;
    /** If set, this button will be disabled and its contents replaced with a loader */
    loading?: boolean;
    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps;
    /** An optional addition to allow components to become polymorphic */
    component?: PolymorphicButtonComponents;
};
export declare function PrimitiveButton(props: PrimitiveButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PrimitiveButton.d.ts.map