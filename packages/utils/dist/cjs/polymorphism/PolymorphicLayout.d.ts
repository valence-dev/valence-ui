/// <reference types="react" />
import { GenericClickableProps, GenericProps, MouseEvents, PolymorphicElementProps } from "..";
export type PolymorphicLayoutProps = PolymorphicElementProps & {
    /** Sets Emotion styling content on the component */
    css?: any;
};
export declare const PolymorphicLayout: import("react").ForwardRefExoticComponent<PolymorphicElementProps & {
    /** Sets Emotion styling content on the component */
    css?: any;
} & GenericProps & import("..").MouseClickEvents & MouseEvents & import("..").PointerEvents & import("..").FocusEvents & GenericClickableProps & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PolymorphicLayout.d.ts.map