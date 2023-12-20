import { CSSProperties } from "react";
import { GenericTextInputEventProps, GenericTextInputProps } from "../../../generics";
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
export declare const Textarea: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & {
    value: string;
    setValue: import("react").Dispatch<import("react").SetStateAction<string>>;
    size?: import("@valence-ui/utils").ComponentSize | undefined; /** Whether the input is subject to spell checking by the browser/OS. Defaults to `true`. */
    radius?: import("@valence-ui/utils").ComponentSize | undefined;
    variant?: import("@valence-ui/utils").FillVariant | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    autoFocus?: boolean | undefined;
    loading?: boolean | undefined;
    form?: string | undefined;
    name?: string | undefined;
} & {
    icon?: import("react").ReactNode;
    placeholder?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    pattern?: string | undefined;
    inputStyle?: CSSProperties | undefined;
    children?: undefined;
} & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils/src/generics/Events").KeyboardEvents & {
    onInput?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onChange?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onInvalid?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onEnterPress?: ((e: import("react").KeyboardEvent<Element>) => void) | undefined;
} & {
    /** Whether the value of the input can be automatically completed by the browser/OS. Defaults to `false`. */
    autoComplete?: boolean | undefined;
    /** Whether the input is subject to spell checking by the browser/OS. Defaults to `true`. */
    spellCheck?: boolean | undefined;
    /** Specifies the visible width of the input. */
    cols?: number | undefined;
    /** Specifies the visible number of lines in the input. */
    rows?: number | undefined;
    /** Specifies how the text in the input is to be wrapped. */
    wrap?: LineWrapBehaviour | undefined;
    /** Specifies how the input can be resized. Defaults to `"none"`. */
    resize?: ResizeBehaviour | undefined;
    /** The minimum height of the input */
    minHeight?: CSSProperties["minHeight"];
    /** The maximum height of the input */
    maxHeight?: CSSProperties["maxHeight"];
    /** The minimum width of the input */
    minWidth?: CSSProperties["minWidth"];
    /** The maximum width of the input */
    maxWidth?: CSSProperties["maxWidth"];
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Textarea.d.ts.map