/// <reference types="react" />
import { Placement } from "@floating-ui/react";
import { Disclosure } from "./UseDisclosure";
export type TooltipOptions = {
    /** The placement of the tooltip relative to the target */
    placement?: Placement;
    /** The offset between the tooltip and the target */
    offset?: number;
    /** An optional disclosure to handle the state of this tooltip */
    disclosure?: Disclosure;
};
export declare function useTooltip({ placement, offset, disclosure }?: TooltipOptions): {
    placement: Placement;
    strategy: import("@floating-ui/utils").Strategy;
    middlewareData: import("@floating-ui/core").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: import("react").CSSProperties;
    refs: {
        reference: import("react").MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
        floating: import("react").MutableRefObject<HTMLElement | null>;
        setReference: (node: import("@floating-ui/react-dom").ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
    elements: {
        reference: import("@floating-ui/react-dom").ReferenceType | null;
        floating: HTMLElement | null;
    } & import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    context: {
        update: () => void;
        x: number;
        y: number;
        placement: Placement;
        strategy: import("@floating-ui/utils").Strategy;
        middlewareData: import("@floating-ui/core").MiddlewareData;
        isPositioned: boolean;
        floatingStyles: import("react").CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event | undefined) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: import("react").MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
    getReferenceProps: (userProps?: import("react").HTMLProps<Element> | undefined) => Record<string, unknown>;
    getFloatingProps: (userProps?: import("react").HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    getItemProps: (userProps?: import("react").HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    opened: boolean;
    setUpdate: (value: boolean) => void;
};
//# sourceMappingURL=UseTooltip.d.ts.map