import { CSSProperties, ReactNode } from "react";
import { ImageProps } from "../Image";
import { FillVariant } from "@valence-ui/utils";
export type AvatarProps = ImageProps & {
    /** Placeholder icon for this avatar */
    placeholderIcon?: ReactNode;
    /** Placeholder color for this avatar */
    placeholderColor?: CSSProperties["color"];
    /** Defines the fill variant for this avatar. Defaults to theme default fill variant */
    fillVariant?: FillVariant;
};
export declare function Avatar(props: AvatarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Avatar.d.ts.map