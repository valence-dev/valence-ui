import { TextButtonProps } from "@valence-ui/core";
import { ReactNode } from "react";
export type GridButtonProps = TextButtonProps & {
    /** The icon to include with this button */
    icon: ReactNode;
    /** The position of the icon relative to the text. Defaults to `"top"` */
    iconPosition?: "top" | "bottom";
};
export declare function GridButton(props: GridButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=GridButton.d.ts.map