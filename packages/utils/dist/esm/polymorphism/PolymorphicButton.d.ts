/// <reference types="react" />
import { GenericClickableProps, GenericProps, PolymorphicElementProps } from "..";
export type PolymorphicButtonProps = PolymorphicElementProps & {
    /** Sets Emotion styling content on the component */
    css?: any;
};
export declare const PolymorphicButton: import("framer-motion").CustomDomComponent<PolymorphicElementProps & {
    /** Sets Emotion styling content on the component */
    css?: any;
} & GenericProps & import("..").MouseClickEvents & import("..").MouseEvents & import("..").PointerEvents & import("..").FocusEvents & GenericClickableProps & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PolymorphicButton.d.ts.map