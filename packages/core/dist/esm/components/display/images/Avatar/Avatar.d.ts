import { CSSProperties, ReactNode } from "react";
import { ImageProps } from "../Image";
import { ComponentSize, FillVariant } from "@valence-ui/utils";
import { IconProps } from "../../Icon";
import { MakeResponsive } from "../../../../utilities/responsive";
export type AvatarProps = ImageProps & {
    /** Defines the fill variant for this avatar. Defaults to theme default. */
    variant?: FillVariant;
    /** Defines the size of this avatar. Defaults to theme default. */
    size?: ComponentSize;
    /** Whether to render an outline in the placeholder. */
    outline?: boolean;
    /** An optional secondary icon to display near the avatar. */
    secondaryIcon?: ReactNode;
    /** Props to apply to the secondary icon, if it exists. */
    secondaryIconProps?: IconProps;
    /** Optional styles to pass to the containing span component. */
    spanStyle?: CSSProperties;
};
export declare const Avatar: import("react").ForwardRefExoticComponent<MakeResponsive<AvatarProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Avatar.d.ts.map