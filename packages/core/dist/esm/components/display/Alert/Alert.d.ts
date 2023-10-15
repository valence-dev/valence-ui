import { ReactNode } from "react";
import { GenericClickableProps } from "../../buttons";
import { ComponentSize, FillVariant, GenericLayoutProps, PolymorphicButtonProps } from "@valence-ui/utils";
export type AlertContent = {
    /** The title of this alert */
    title: string;
    /** The message of this alert */
    message?: string;
    /** The icon of this alert */
    icon?: ReactNode;
};
export type AlertProps = GenericClickableProps & PolymorphicButtonProps & GenericLayoutProps & {
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
};
export declare function Alert(props: AlertProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Alert.d.ts.map