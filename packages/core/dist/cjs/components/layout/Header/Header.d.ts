import { CSSProperties } from "react";
import { FlexProps } from "../Flex";
import { MakeResponsive } from "../../..";
export type HeaderProps = Omit<FlexProps, "height"> & {
    /** Defines the height of this header. Defaults to `100` for regular devices, and `150` for `mobileTall` devices. */
    height?: number;
    /** The height of this header when it has been compacted. Defaults to `75`. */
    compactHeight?: number;
    /** Defines the position of this header`. */
    position?: CSSProperties["position"];
    /** Defines the breakpoints in which the header is allowed to compact. By default this
     * is `true` for mobile devices, and `false` for all other devices.
     */
    compact?: boolean;
};
/** A layout component that helps position `Title` and similar components.
 *
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
export declare const Header: import("react").ForwardRefExoticComponent<MakeResponsive<HeaderProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Header.d.ts.map