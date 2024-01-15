import React, { ReactNode } from "react";
import { MakeResponsive } from "../../../responsive";
export type IconProps = {
    /** Size of the icon. Defaults to theme default icon size. */
    size?: number;
    /** Stroke width of the icon. `1.5` by default. */
    stroke?: number;
    /** Color of the icon. Inherits by default. */
    color?: string;
    children?: ReactNode;
};
/** This is the new wrapper component for Tabler Icons, designed to pass them
 * the necessary props to conform with the theme standards. This component
 * replaces the `useDefaultIconProps` hook.
 *
 * ```tsx
 * <Icon color="black">
 *  <Icon123 />
 * </Icon>
 * ```
*/
export declare const Icon: React.ForwardRefExoticComponent<MakeResponsive<IconProps> & React.RefAttributes<unknown>>;
//# sourceMappingURL=Icon.d.ts.map