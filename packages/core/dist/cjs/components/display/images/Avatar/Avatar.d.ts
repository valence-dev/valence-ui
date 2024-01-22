import { CSSProperties } from "react";
import { ImageProps } from "../Image";
import { FillVariant } from "@valence-ui/utils";
import { MakeResponsive } from "../../../../utilities/responsive";
export type AvatarProps = ImageProps & {
    /** Placeholder color for this avatar */
    placeholderColor?: CSSProperties["color"];
    /** Defines the fill variant for this avatar. Defaults to theme default fill variant */
    variant?: FillVariant;
};
export declare const Avatar: import("react").ForwardRefExoticComponent<MakeResponsive<AvatarProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Avatar.d.ts.map