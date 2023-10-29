/** @jsxImportSource @emotion/react */
import { ReactNode, SyntheticEvent } from "react";
import { ComponentSize, GenericLayoutProps } from "@valence-ui/utils";
export type GenericInputEventHandlerProps = {
    /** Called when this input fails validation on form submission */
    onInvalid?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
    /** Called when this input is selected and edited */
    onSelect?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
    /** Called when the `Enter` key is pressed while focus is on this input */
    onEnterPress?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
    /** Called when any key is pressed while focus is on this input */
    onKeyPress?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
    /** Called when this input is focused */
    onFocus?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
    /** Called when this input is blurred */
    onBlur?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
};
export type GenericInputProps = GenericLayoutProps & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** Placeholder text for this input. Defaults to blank */
    placeholder?: string;
    /** Sets the size class. Defaults to theme default */
    size?: ComponentSize;
    /** Sets the radius size class. Defaults to theme default */
    radius?: ComponentSize;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** Specifies if this input will be focused on mount */
    autoFocus?: boolean;
    /** Specifies if this input is disabled */
    disabled?: boolean;
    /** Specifies if this input is read only */
    readOnly?: boolean;
    /** Specifies if this input is required */
    required?: boolean;
    /** If set, this input will be `readOnly` and its icon replaced with a loader */
    loading?: boolean;
    /** The ID of the `<form>` element this input belongs to */
    form?: string;
    /** The name of this input when submitted within a form. */
    name?: string;
    /** The `tabIndex` html property of this input. Useful for keyboard-only navigation and accessibility. */
    tabIndex?: number;
};
export type InputContainerProps = GenericInputProps & {
    children: ReactNode;
};
export declare function InputContainer(props: InputContainerProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=InputContainer.d.ts.map