import { MakeResponsive, TextButtonProps } from "@valence-ui/core";
import { ReactNode } from "react";
export type GridButtonProps = TextButtonProps & {
    /** The icon to include with this button. */
    icon: ReactNode;
    /** The position of the icon relative to the text. Defaults to `"top"`. */
    iconPosition?: "top" | "bottom";
};
export declare const GridButton: import("react").ForwardRefExoticComponent<MakeResponsive<GridButtonProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=GridButton.d.ts.map