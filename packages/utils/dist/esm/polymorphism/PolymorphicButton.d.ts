/// <reference types="react" />
import { GenericProps } from "..";
export type PolymorphicButtonProps = GenericProps & {
    /** Sets the component type to render */
    component?: PolymorphicButtonComponents;
    css?: any;
};
export type PolymorphicButtonComponents = "a" | "button" | "link" | "span" | "div" | "input";
export declare const PolymorphicButton: import("framer-motion").CustomDomComponent<GenericProps & {
    /** Sets the component type to render */
    component?: PolymorphicButtonComponents | undefined;
    css?: any;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PolymorphicButton.d.ts.map