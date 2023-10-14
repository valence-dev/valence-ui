/// <reference types="react" />
import { GenericProps } from "..";
export type PolymorphicLayoutProps = GenericProps & {
    /** Sets the component type to render */
    component?: PolymorphicLayoutComponents;
};
export type PolymorphicLayoutComponents = "div" | "span" | "section" | "aside" | "form";
export declare const PolymorphicLayout: import("react").ForwardRefExoticComponent<GenericProps & {
    /** Sets the component type to render */
    component?: PolymorphicLayoutComponents | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PolymorphicLayout.d.ts.map