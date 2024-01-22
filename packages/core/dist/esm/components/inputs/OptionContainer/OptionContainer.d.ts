import { GenericLayoutProps } from "@valence-ui/utils";
import { TextButtonProps } from "../../buttons";
import { InputContainerProps } from "../InputContainer";
import { Option } from "./OptionsFilter";
import { CSSProperties, ReactNode } from "react";
import { MakeResponsive } from "../../../utilities/responsive";
export type OptionContainerEventProps = {
    /** Callback to be called when an option is selected. */
    onSelect?: (value: Option) => void;
};
export type OptionContainerProps = InputContainerProps & OptionContainerEventProps & {
    /** The currently selected option */
    selectedOption?: Option;
    /** A list of options to supply for the content of this input */
    options: Option[];
    /** A message to display when no options are found */
    nothingFound?: string | ReactNode;
    /** An icon to display to the right of the input */
    rightIcon?: ReactNode;
    /** Optional props to pass to the dropdown container */
    dropdownProps?: OptionDropdownProps;
    /** Optional props to pass to the dropdown buttons */
    dropdownButtonProps?: TextButtonProps & {
        children?: never;
    };
    /** Keys the user can press to select an option. Defaults to "Enter". */
    selectKeys?: string[];
    /** Keys the user can press to close the dropdown. Defaults to "Escape". */
    closeKeys?: string[];
    /** Optional styles to pass to the dropdown element */
    dropdownStyle?: CSSProperties;
};
export type OptionDropdownProps = GenericLayoutProps & {
    /** Whether to include a shadow */
    shadow?: boolean;
    children?: never;
};
export declare const OptionContainer: import("react").ForwardRefExoticComponent<MakeResponsive<OptionContainerProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=OptionContainer.d.ts.map