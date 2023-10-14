import { ReactNode } from "react";
import { TextButtonProps } from "../TextButton";
export type ButtonWithIconProps = TextButtonProps & {
    /** The icon to include with this button */
    icon: ReactNode;
    /** The position of the icon relative to the text */
    iconPosition?: "left" | "right";
};
export declare function ButtonWithIcon(props: ButtonWithIconProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ButtonWithIcon.d.ts.map