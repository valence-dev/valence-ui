/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { MotionBehaviourProps } from "../../buttons";
import { ComponentSize, FillVariant, GenericClickableEventProps, GenericClickableProps, GenericLayoutProps, PolymorphicButtonProps } from "@valence-ui/utils";
export type AlertContent = {
    /** The title of this alert */
    title: string;
    /** The message of this alert */
    message?: string;
    /** The icon of this alert */
    icon?: ReactNode;
};
export type AlertProps = GenericClickableProps & GenericClickableEventProps & PolymorphicButtonProps & GenericLayoutProps & {
    /** The content of this alert */
    alert: AlertContent;
    /** Whether to mount and show this alert */
    show?: boolean;
    /** The styling variant of this alert. Defaults to `filled`. */
    variant?: FillVariant;
    /** The size of this alert. Defaults to the theme default size. */
    size?: ComponentSize;
    /** The border size of this alert. Defaults to the theme default border size. */
    radius?: ComponentSize;
    /** Specifies if a shadow will be shown */
    shadow?: boolean;
    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps;
};
export declare const Alert: import("react").ForwardRefExoticComponent<GenericClickableProps & import("@valence-ui/utils").MouseClickEvents & import("@valence-ui/utils").MouseEvents & import("@valence-ui/utils").PointerEvents & import("@valence-ui/utils").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & {
    /** The content of this alert */
    alert: AlertContent;
    /** Whether to mount and show this alert */
    show?: boolean | undefined;
    /** The styling variant of this alert. Defaults to `filled`. */
    variant?: FillVariant | undefined;
    /** The size of this alert. Defaults to the theme default size. */
    size?: ComponentSize | undefined;
    /** The border size of this alert. Defaults to the theme default border size. */
    radius?: ComponentSize | undefined;
    /** Specifies if a shadow will be shown */
    shadow?: boolean | undefined;
    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Alert.d.ts.map