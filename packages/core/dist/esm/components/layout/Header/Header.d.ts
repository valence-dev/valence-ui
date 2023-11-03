import { CSSProperties } from "react";
import { FlexProps } from "../Flex";
export type HeaderProps = FlexProps & {
    /** The height of this header for regular devices. Defaults to `100`. */
    regularHeight?: number;
    /** The height of this header for tall mobile devices. Defaults to `150`. */
    tallHeight?: number;
    /** The height of this header when it has been compacted. Defaults to `75`. */
    compactHeight?: number;
    /** Whether this header should compact when the user scrolls down (mobile). Defaults to `true`. */
    compactOnScroll?: boolean;
};
/** A layout component that helps position `Title` and similar components.
 *
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
export declare const Header: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: import("@valence-ui/utils").ReactiveProp<CSSProperties> | undefined;
    tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
} & {
    backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    direction?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
    align?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignItems | undefined>;
    justify?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
    alignSelf?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignSelf | undefined>; /** A layout component that helps position `Title` and similar components.
     *
     * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
     */
    gap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
    grow?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
    wrap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexWrap | undefined>;
} & {
    /** The height of this header for regular devices. Defaults to `100`. */
    regularHeight?: number | undefined;
    /** The height of this header for tall mobile devices. Defaults to `150`. */
    tallHeight?: number | undefined;
    /** The height of this header when it has been compacted. Defaults to `75`. */
    compactHeight?: number | undefined;
    /** Whether this header should compact when the user scrolls down (mobile). Defaults to `true`. */
    compactOnScroll?: boolean | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Header.d.ts.map