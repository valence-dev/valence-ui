import { CSSProperties } from "react";
import { GenericTextInputEventProps, GenericTextInputProps } from "../../../generics";
import { MakeResponsive } from "../../../responsive";
export type LineWrapBehaviour = "soft" | "hard" | "off";
export type ResizeBehaviour = "none" | "both" | "horizontal" | "vertical";
export type TextareaProps = GenericTextInputProps & GenericTextInputEventProps & {
    /** Whether the value of the input can be automatically completed by the browser/OS. Defaults to `false`. */
    autoComplete?: boolean;
    /** Whether the input is subject to spell checking by the browser/OS. Defaults to `true`. */
    spellCheck?: boolean;
    /** Specifies the visible width of the input. */
    cols?: number;
    /** Specifies the visible number of lines in the input. */
    rows?: number;
    /** Specifies how the text in the input is to be wrapped. */
    wrap?: LineWrapBehaviour;
    /** Specifies how the input can be resized. Defaults to `"none"`. */
    resize?: ResizeBehaviour;
    /** The minimum height of the input */
    minHeight?: CSSProperties["minHeight"];
    /** The maximum height of the input */
    maxHeight?: CSSProperties["maxHeight"];
    /** The minimum width of the input */
    minWidth?: CSSProperties["minWidth"];
    /** The maximum width of the input */
    maxWidth?: CSSProperties["maxWidth"];
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
};
export declare const Textarea: import("react").ForwardRefExoticComponent<MakeResponsive<TextareaProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Textarea.d.ts.map