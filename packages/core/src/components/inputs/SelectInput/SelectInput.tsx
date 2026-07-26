import { CSSProperties, ReactNode, forwardRef } from "react";
import {
  GenericInputProps,
  GenericTextInputEventProps,
} from "../../../generics";
import { useValence } from "../../../ValenceProvider";
import { IconSelector } from "@tabler/icons-react";
import { GenericLayoutProps } from "@valence-ui/utils";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { DropdownContainer } from "../DropdownContainer";
import { Option } from "../DropdownContainer/Options";

export type SelectInputEventProps<OptionType> = GenericTextInputEventProps & {
  /** Callback to be called when an option is selected. */
  onSelect?: (value: Option<OptionType> | null) => void;
};

export type SelectInputProps<OptionType> = Omit<
  GenericInputProps<Option<OptionType> | null>,
  "children"
> &
  SelectInputEventProps<OptionType> & {
    /** A list of options to supply for the content of this input */
    options: Option<OptionType>[];

    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** The placeholder text to display when this input is empty */
    placeholder?: string;
    /** An icon to display at the right side of this input */
    actionIcon?: ReactNode;

    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;

    /**
     * Determines which option `value` refers to. By default options are matched
     * on their `value` property, which handles a `value` rebuilt from state,
     * props or JSON. Supply this when `value` is not comparable that way.
     */
    compare?: (
      option: Option<OptionType>,
      value: Option<OptionType>,
    ) => boolean;

    /** Optional styles to apply to the dropdown container */
    dropdownStyle?: CSSProperties;
  };

export type SelectDropdownProps = GenericLayoutProps & {
  /** Whether to include a shadow */
  shadow?: boolean;

  children?: never;
};

export const SelectInput = forwardRef(function SelectInput(
  props: MakeResponsive<SelectInputProps<any>>,
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
    compare,

    ...rest
  } = useResponsiveProps<SelectInputProps<any>>(props);

  // Matching on `value` rather than by reference, so an option rebuilt from
  // state, props or JSON still resolves. `-1` means "no match", which is not a
  // valid index for the dropdown.
  const selectedIndex = value
    ? options.findIndex((o) =>
        compare ? compare(o, value) : o.value === value.value,
      )
    : -1;

  return (
    <>
      <DropdownContainer
        options={options}
        selected={selectedIndex === -1 ? null : selectedIndex}
        setSelected={(i) => setValue(i !== null ? (options[i] ?? null) : null)}
        onSelect={onSelect}
        icon={icon}
        secondaryIcon={actionIcon}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </>
  );
});
