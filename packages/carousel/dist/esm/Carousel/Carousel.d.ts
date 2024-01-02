import { FlexProps, IconButtonProps } from "@valence-ui/core";
import { ReactiveProp } from "@valence-ui/utils";
import React, { ReactNode } from "react";
export type CarouselProps = FlexProps & {
    /** Whether to allow the carousel content to be dragged on desktop. `true` on desktop devices by default. */
    allowDrag?: ReactiveProp<boolean>;
    /** Whether to show the horizontal scrollbar. `false` by default. */
    showScrollbar?: ReactiveProp<boolean>;
    /** Whether to snap to the nearest child when no longer scrolling. `true` by default. */
    snapToChildren?: ReactiveProp<boolean>;
    /** Whether the active child should be changed during scroll. `true` by default. */
    changeActiveOnScroll?: ReactiveProp<boolean>;
    /** Optional props to pass to the content flex component */
    contentProps?: FlexProps;
    /** The active child of this carousel. For use when controlled. */
    activeChild?: number;
    /** Sets the active child of this carousel. For use when controlled. */
    setActiveChild?: (index: number) => void;
    /** Whether to the carousel controls. `true` by default. */
    showControls?: ReactiveProp<boolean>;
    /** Optional overrides for the icons to use for the controls */
    controlIcons?: {
        prev: ReactNode;
        next: ReactNode;
    };
    /** Optional props to pass to the control buttons */
    controlButtonProps?: IconButtonProps;
    children: ReactNode[];
};
declare const CarouselNamespace: React.ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: ReactiveProp<React.CSSProperties> | undefined;
    /** Whether to the carousel controls. `true` by default. */
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
    grow?: ReactiveProp<boolean> | undefined;
    wrap?: ReactiveProp<import("csstype").Property.FlexWrap | undefined>;
} & {
    /** Whether to allow the carousel content to be dragged on desktop. `true` on desktop devices by default. */
    allowDrag?: ReactiveProp<boolean> | undefined;
    /** Whether to show the horizontal scrollbar. `false` by default. */
    showScrollbar?: ReactiveProp<boolean> | undefined;
    /** Whether to snap to the nearest child when no longer scrolling. `true` by default. */
    snapToChildren?: ReactiveProp<boolean> | undefined;
    /** Whether the active child should be changed during scroll. `true` by default. */
    changeActiveOnScroll?: ReactiveProp<boolean> | undefined;
    /** Optional props to pass to the content flex component */
    contentProps?: FlexProps | undefined;
    /** The active child of this carousel. For use when controlled. */
    activeChild?: number | undefined;
    /** Sets the active child of this carousel. For use when controlled. */
    setActiveChild?: ((index: number) => void) | undefined;
    /** Whether to the carousel controls. `true` by default. */
    showControls?: ReactiveProp<boolean> | undefined;
    /** Optional overrides for the icons to use for the controls */
    controlIcons?: {
        prev: ReactNode;
        next: ReactNode;
    } | undefined;
    /** Optional props to pass to the control buttons */
    controlButtonProps?: import("@valence-ui/core").PrimitiveButtonProps | undefined;
    children: ReactNode[];
} & React.RefAttributes<unknown>>;
export { CarouselNamespace as Carousel };
//# sourceMappingURL=Carousel.d.ts.map