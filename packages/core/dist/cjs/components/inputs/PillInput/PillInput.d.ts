/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode } from "react";
import { GenericInputProps, GenericTextInputEventProps } from "../../../generics";
import { IconButtonProps } from "../../buttons";
import { PillProps } from "../../display";
import { FlexProps } from "../../layout";
import { Option, OptionsFilter } from "../OptionContainer";
import { MakeResponsive } from "../../../utilities/responsive";
export type PillInputEventProps = GenericTextInputEventProps & {
    /** Callback to be called when a pill is added. */
    onPillAdd?: (value: string) => void;
    /** Callback to be called when a pill is removed. */
    onPillRemove?: (value: string) => void;
};
export type PillInputProps = GenericInputProps<string[]> & PillInputEventProps & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** The placeholder text to display when this input is empty */
    placeholder?: string;
    /** Keys used to autofill a pill. Defaults to `Tab` */
    autofillKeys?: string[];
    /** Keys used to select an option. Defaults to `Enter` and `Space` */
    selectKeys?: string[];
    /** A list of options to supply for the content of this input */
    options?: Option[];
    /** A filter to apply to the options as the user types. `DefaultOptionsFilter` by default */
    filter?: OptionsFilter;
    /** A message to display when no options are found */
    nothingFound?: string | ReactNode;
    /** Whether to allow duplicate pills. `false` by default. */
    allowDuplicates?: boolean;
    /** Whether to allow pills to be cleared. `true` by default. */
    allowClear?: boolean;
    /** Whether to allow the user to remove pills with backspace. `true` by default. */
    allowBackspaceRemove?: boolean;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** The maximum number of pills allowed. `Infinity` by default. */
    maxPills?: number;
    /** The minimum length of this input. `0` by default. */
    minLength?: number;
    /** The maximum length of this input. `Infinity` by default. */
    maxLength?: number;
    /** An icon to use for the clear button. Defaults to `IconX`. */
    clearButtonIcon?: ReactNode;
    /** Optional props to pass to the clear button */
    clearButtonProps?: IconButtonProps & {
        children?: never;
    };
    /** Optional props to pass to all pills */
    pillProps?: PillProps & {
        children?: never;
    };
    /** Optional props to pass to the pill container */
    pillContainerProps?: FlexProps & {
        children?: never;
    };
    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties;
    /** Optional styles to apply to the dropdown component */
    dropdownStyle?: CSSProperties;
    children?: never;
};
export declare const PillInput: import("react").ForwardRefExoticComponent<MakeResponsive<PillInputProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PillInput.d.ts.map