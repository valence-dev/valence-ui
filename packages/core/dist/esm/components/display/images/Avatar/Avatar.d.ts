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
export declare const Avatar: import("react").ForwardRefExoticComponent<import("../Image").GenericImageProps & import("@valence-ui/utils").GenericProps & {
    style?: import("@valence-ui/utils").ReactiveProp<CSSProperties> | undefined;
    tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
} & {
    placeholder?: ReactNode;
    radius?: import("@valence-ui/utils").ReactiveProp<import("@valence-ui/utils").ComponentSize> | undefined;
    width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
    square?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
    shadow?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
    children?: undefined;
} & {
    /** Placeholder icon for this avatar */
    placeholderIcon?: ReactNode;
    /** Placeholder color for this avatar */
    placeholderColor?: CSSProperties["color"];
    /** Defines the fill variant for this avatar. Defaults to theme default fill variant */
    fillVariant?: FillVariant | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Avatar.d.ts.map