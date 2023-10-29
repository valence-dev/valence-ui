/// <reference types="react" />
import { GenericProps } from "..";
export type PolymorphicTextProps = GenericProps & {
    /** Sets the component type to render */
    component?: PolymorphicTextComponents;
    css?: any;
};
export type PolymorphicTextComponents = "p" | "link" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
export declare const PolymorphicText: import("react").ForwardRefExoticComponent<GenericProps & {
    /** Sets the component type to render */
    component?: PolymorphicTextComponents | undefined;
    css?: any;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PolymorphicText.d.ts.map