import { CSSProperties } from "react";
import { FlexProps } from "../Flex";
import { MakeResponsive } from "../../..";
export type HeaderProps = FlexProps & {
    /** Defines the position of this header. */
    position?: CSSProperties["position"];
    /** Properties to pass to the inner flex component. */
    innerProps?: FlexProps;
};
/** A layout component that helps position `Title` and similar components.
 *
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
export declare const Header: import("react").ForwardRefExoticComponent<MakeResponsive<HeaderProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Header.d.ts.map