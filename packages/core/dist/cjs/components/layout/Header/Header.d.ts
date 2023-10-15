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
export declare function Header(props: HeaderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Header.d.ts.map