import { CSSProperties, ReactNode } from "react";
import { GenericInputProps, GenericTextInputEventProps } from "../../../generics";
import { TextButtonProps } from "../../buttons";
import { GenericLayoutProps } from "@valence-ui/utils";
import { Option, OptionsFilter } from "../OptionContainer/OptionsFilter";
import { MakeResponsive } from "../../../responsive";
export type SelectInputEventProps = GenericTextInputEventProps & {
    /** Callback to be called when an option is selected. */
    onSelect?: (value: Option) => void;
};
export type SelectInputProps = GenericInputProps<Option> & SelectInputEventProps & {
    /** A list of options to supply for the content of this input */
    options: Option[];
    /** A filter to apply to the options as the user types. `DefaultOptionsFilter` by default */
    filter?: OptionsFilter;
    /** A message to display when no options are found */
    nothingFound?: string;
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** The placeholder text to display when this input is empty */
    placeholder?: string;
    /** An icon to display at the right side of this input */
    actionIcon?: ReactNode;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** Optional props to pass to the dropdown container */
    dropdownProps?: SelectDropdownProps;
    /** Optional props to pass to the dropdown buttons */
    dropdownButtonProps?: TextButtonProps & {
        children?: never;
    };
    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties;
    /** Optional styles to apply to the dropdown container */
    dropdownStyle?: CSSProperties;
    children?: never;
};
export type SelectDropdownProps = GenericLayoutProps & {
    /** Whether to include a shadow */
    shadow?: boolean;
    children?: never;
};
export declare const SelectInput: import("react").ForwardRefExoticComponent<MakeResponsive<SelectInputProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=SelectInput.d.ts.map