/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { MotionBehaviourProps } from "../../buttons";
import { ComponentSize, FillVariant, GenericClickableEventProps, GenericClickableProps, GenericLayoutProps, PolymorphicButtonProps } from "@valence-ui/utils";
import { MakeResponsive } from "../../../utilities/responsive";
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
    /** The border size of this alert. Defaults to the theme default radius size. */
    radius?: ComponentSize;
    /** Specifies if a shadow will be shown */
    shadow?: boolean;
    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps;
};
export declare const Alert: import("react").ForwardRefExoticComponent<MakeResponsive<AlertProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Alert.d.ts.map