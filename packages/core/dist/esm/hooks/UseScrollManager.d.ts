import { RefObject, UIEvent } from "react";
export type ScrollManager = {
    /** Whether the user is currently scrolling */
    scrolling: boolean;
    /** Whether the scroll is at the beginning of its bounds */
    isAtStart: boolean;
    /** Whether the scroll is at the end of its bounds */
    isAtEnd: boolean;
    /** The closest child to the left (`direction = x`) or top (`direction = y`) to the parent container */
    nearestChild: number;
    /** Whether the mouse is currently down */
    isMouseDown: boolean;
    methods: {
        handleScroll?: (e: UIEvent<HTMLDivElement, UIEvent>) => void;
        handleScrollEnd?: (e: UIEvent<HTMLDivElement, UIEvent>) => void;
        handleScrollStart?: (e: UIEvent<HTMLDivElement, UIEvent>) => void;
    };
};
export declare function useScrollManager(parentRef: RefObject<HTMLDivElement>, childRef: RefObject<HTMLDivElement>, callbacks: {
    onScroll?: (e: UIEvent<HTMLDivElement, UIEvent>) => void;
    onScrollStart?: (e: UIEvent<HTMLDivElement, UIEvent>) => void;
    onScrollEnd?: (e: UIEvent<HTMLDivElement, UIEvent>) => void;
}, allowDrag?: boolean, direction?: "x" | "y"): ScrollManager;
//# sourceMappingURL=UseScrollManager.d.ts.map