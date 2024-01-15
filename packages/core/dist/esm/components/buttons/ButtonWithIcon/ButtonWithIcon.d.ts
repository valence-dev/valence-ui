import { ReactNode } from "react";
import { TextButtonProps } from "../TextButton";
import { MakeResponsive } from "../../..";
export type ButtonWithIconProps = TextButtonProps & {
    /** The icon to include with this button */
    icon: ReactNode;
    /** The position of the icon relative to the text */
    iconPosition?: "left" | "right";
};
export declare const ButtonWithIcon: import("react").ForwardRefExoticComponent<MakeResponsive<ButtonWithIconProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=ButtonWithIcon.d.ts.map