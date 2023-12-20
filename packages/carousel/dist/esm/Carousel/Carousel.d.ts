import { FlexProps, IconButtonProps } from "@valence-ui/core";
import { ReactiveProp } from "@valence-ui/utils";
import { CSSProperties, ReactNode } from "react";
export type CarouselProps = FlexProps & {
    /** Whether to allow the carousel content to be dragged on desktop. Defaults to `true`. */
    allowDrag?: ReactiveProp<boolean>;
    /** Whether to show the horizontal scrollbar. Defaults to the opposite of `allowDrag`. */
    showScrollbar?: ReactiveProp<boolean>;
    /** Whether to snap to the nearest child when no longer scrolling */
    snapToChildren?: ReactiveProp<boolean>;
    /** Optional props to pass to the content flex component */
    contentProps?: FlexProps;
    /** Whether to show buttons on this carousel. Defaults to `true`. */
    showControls?: ReactiveProp<boolean>;
    /** Optional overrides for the icons to use for the controls */
    controlIcons?: {
        prev: ReactNode;
        next: ReactNode;
    };
    /** Optional props to pass to the control buttons */
    controlButtonProps?: IconButtonProps;
};
declare const CarouselNamespace: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: ReactiveProp<CSSProperties> | undefined;
    tabIndex?: ReactiveProp<number> | undefined;
} & {
    backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    direction?: ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
    align?: ReactiveProp<import("csstype").Property.AlignItems | undefined>;
    justify?: ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
    alignSelf?: ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
    gap?: ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
    grow?: ReactiveProp<boolean> | undefined; /** Optional props to pass to the content flex component */
    wrap?: ReactiveProp<import("csstype").Property.FlexWrap | undefined>;
} & {
    /** Whether to allow the carousel content to be dragged on desktop. Defaults to `true`. */
    allowDrag?: ReactiveProp<boolean> | undefined;
    /** Whether to show the horizontal scrollbar. Defaults to the opposite of `allowDrag`. */
    showScrollbar?: ReactiveProp<boolean> | undefined;
    /** Whether to snap to the nearest child when no longer scrolling */
    snapToChildren?: ReactiveProp<boolean> | undefined;
    /** Optional props to pass to the content flex component */
    contentProps?: FlexProps | undefined;
    /** Whether to show buttons on this carousel. Defaults to `true`. */
    showControls?: ReactiveProp<boolean> | undefined;
    /** Optional overrides for the icons to use for the controls */
    controlIcons?: {
        prev: ReactNode;
        next: ReactNode;
    } | undefined;
    /** Optional props to pass to the control buttons */
    controlButtonProps?: import("@valence-ui/core").PrimitiveButtonProps | undefined;
} & import("react").RefAttributes<unknown>>;
export { CarouselNamespace as Carousel };
//# sourceMappingURL=Carousel.d.ts.map