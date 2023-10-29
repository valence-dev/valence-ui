/// <reference types="react" />
import { GenericProps } from "..";
export type PolymorphicLayoutProps = GenericProps & {
    /** Sets the component type to render */
    component?: PolymorphicLayoutComponents;
    css?: any;
};
export type PolymorphicLayoutComponents = "div" | "span" | "section" | "aside" | "form";
export declare const PolymorphicLayout: import("react").ForwardRefExoticComponent<GenericProps & {
    /** Sets the component type to render */
    component?: PolymorphicLayoutComponents | undefined;
    css?: any;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PolymorphicLayout.d.ts.map