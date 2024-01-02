import { CSSProperties } from "react";
import { FlexProps } from "../Flex";
import { BreakpointCondition, ReactiveProp } from "@valence-ui/utils";
export type HeaderProps = Omit<FlexProps, "height"> & {
    /** **[REACTIVE]** Defines the height of this header. Defaults to `100` for regular devices, and `150` for `mobileTall` devices. */
    height?: ReactiveProp<number>;
    /** The height of this header when it has been compacted. Defaults to `75`. */
    compactHeight?: number;
    /** **[REACTIVE]** Defines the position of this header`. */
    position?: ReactiveProp<CSSProperties["position"]>;
    /** Defines the breakpoints at which the header should compact during scroll. Leave this list empty to By default this is `[ "mobile", "mobileTall" ]` */
    compact?: BreakpointCondition[];
};
/** A layout component that helps position `Title` and similar components.
 *
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
export declare const Header: import("react").ForwardRefExoticComponent<Omit<FlexProps, "height"> & {
    /** **[REACTIVE]** Defines the height of this header. Defaults to `100` for regular devices, and `150` for `mobileTall` devices. */
    height?: ReactiveProp<number> | undefined;
    /** The height of this header when it has been compacted. Defaults to `75`. */
    compactHeight?: number | undefined;
    /** **[REACTIVE]** Defines the position of this header`. */
    position?: ReactiveProp<CSSProperties["position"]>;
    /** Defines the breakpoints at which the header should compact during scroll. Leave this list empty to By default this is `[ "mobile", "mobileTall" ]` */
    compact?: BreakpointCondition[] | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Header.d.ts.map