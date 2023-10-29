import { GenericInputEventHandlerProps, GenericInputProps } from "../InputContainer";
import { CSSProperties, Dispatch, SetStateAction } from "react";
export type LineWrapBehaviour = "soft" | "hard" | "off";
export type ResizeBehaviour = "none" | "both" | "horizontal" | "vertical";
export type TextareaProps = GenericInputProps & GenericInputEventHandlerProps & {
    /** The value of the input */
    value: string;
    /** Sets the value of the input */
    setValue: Dispatch<SetStateAction<string>>;
    /** Whether the value of the input can be automatically completed by the browser. Defaults to `false`. */
    autoComplete?: boolean;
    /** Whether the input is subject to spell checking by the browser/OS. Defaults to `true`. */
    spellCheck?: boolean;
    /** The minimum length of the input */
    minLength?: number;
    /** The maximum length of the input */
    maxLength?: number;
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
};
export declare function Textarea(props: TextareaProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Textarea.d.ts.map