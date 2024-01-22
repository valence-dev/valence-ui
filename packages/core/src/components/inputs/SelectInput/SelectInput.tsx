import { CSSProperties, ReactNode, forwardRef } from "react";
import { GenericInputProps, GenericTextInputEventProps } from "../../../generics";
import { useValence } from "../../../ValenceProvider";
import { IconSelector } from "@tabler/icons-react";
import { GenericLayoutProps } from "@valence-ui/utils";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { DropdownContainer } from "../DropdownContainer";
import { Option } from "../DropdownContainer/Options";


export type SelectInputEventProps =
  GenericTextInputEventProps
  & {
    /** Callback to be called when an option is selected. */
    onSelect?: (value: Option | null) => void;
  }

export type SelectInputProps =
  Omit<GenericInputProps<Option | null>, "children">
  & SelectInputEventProps
  & {
    /** A list of options to supply for the content of this input */
    options: Option[];

    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** The placeholder text to display when this input is empty */
    placeholder?: string;
    /** An icon to display at the right side of this input */
    actionIcon?: ReactNode;

    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;

    /** Optional styles to apply to the dropdown container */
    dropdownStyle?: CSSProperties;
  }


export type SelectDropdownProps =
  GenericLayoutProps
  & {
    /** Whether to include a shadow */
    shadow?: boolean;

    children?: never;
  }


export const SelectInput = forwardRef(function SelectInput(
  props: MakeResponsive<SelectInputProps>,
  ref: any,
) {
  const theme = useValence();


  // Defaults
  const {
    value,
    setValue,
    options,
    onSelect,

    icon,
    placeholder = "Select an option...",
    actionIcon = <IconSelector />,

    ...rest
  } = useResponsiveProps<SelectInputProps>(props);



  return (
    <>
      <DropdownContainer
        options={options}
        selected={value ? options.findIndex(o => o === value) : null}
        setSelected={i => setValue(i !== null ? options[i] : null)}

        onSelect={onSelect}
        icon={icon}
        secondaryIcon={actionIcon}
        placeholder={placeholder}

        {...rest}
      />
    </>
  )
});