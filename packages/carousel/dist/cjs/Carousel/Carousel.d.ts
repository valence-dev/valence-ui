import { FlexProps, IconButtonProps, MakeResponsive } from "@valence-ui/core";
import React, { ReactNode } from "react";
export type CarouselProps = Omit<FlexProps, "children"> & {
    /** Whether to allow the carousel content to be dragged on desktop. `true` on desktop devices by default. */
    allowDrag?: boolean;
    /** Whether to show the horizontal scrollbar. `false` by default. */
    showScrollbar?: boolean;
    /** Whether to snap to the nearest child when no longer scrolling. `true` by default. */
    snapToChildren?: boolean;
    /** Whether the active child should be changed during scroll. `true` by default. */
    changeActiveOnScroll?: boolean;
    /** Optional props to pass to the content flex component */
    contentProps?: FlexProps;
    /** The active child of this carousel. For use when controlled. */
    activeChild?: number;
    /** Sets the active child of this carousel. For use when controlled. */
    setActiveChild?: (index: number) => void;
    /** Whether to the carousel controls. `true` by default. */
    showControls?: boolean;
    /** Optional overrides for the icons to use for the controls */
    controlIcons?: {
        prev: ReactNode;
        next: ReactNode;
    };
    /** Optional props to pass to the control buttons */
    controlButtonProps?: IconButtonProps;
    children: ReactNode[];
};
declare const CarouselNamespace: React.ForwardRefExoticComponent<MakeResponsive<CarouselProps> & React.RefAttributes<unknown>>;
export { CarouselNamespace as Carousel };
//# sourceMappingURL=Carousel.d.ts.map