/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CSSProperties, ReactNode, createRef, forwardRef, useContext, useState } from "react";
import { GenericInputProps, GenericTextInputEventProps } from "../../../generics";
import { ValenceContext } from "../../../ValenceProvider";
import { useDefaultIconProps } from "../../../hooks";
import { IconSelector } from "@tabler/icons-react";
import { INPUT_SIZES } from "../InputContainer";
import { TextButtonProps, getTextColor } from "../../buttons";
import { GenericLayoutProps } from "@valence-ui/utils";
import { DefaultOptionsFilter, Option, OptionsFilter } from "../OptionContainer/OptionsFilter";
import { OptionContainer } from "../OptionContainer";


export type SelectInputEventProps =
  GenericTextInputEventProps
  & {
    /** Callback to be called when an option is selected. */
    onSelect?: (value: Option) => void;
  }

export type SelectInputProps =
  GenericInputProps<Option>
  & SelectInputEventProps
  & {
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
    dropdownButtonProps?: TextButtonProps & { children?: never };

    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties;
    /** Optional styles to apply to the dropdown container */
    dropdownStyle?: CSSProperties;

    children?: never;
  }


export type SelectDropdownProps =
  GenericLayoutProps
  & {
    /** Whether to include a shadow */
    shadow?: boolean;

    children?: never;
  }


export const SelectInput = forwardRef(function SelectInput(
  props: SelectInputProps,
  ref: any,
) {
  const theme = useContext(ValenceContext);
  const inputRef = ref ?? createRef<HTMLInputElement>();
  const defaultIconProps = useDefaultIconProps();


  // Defaults
  const {
    value,
    setValue,
    options,
    onSelect,

    filter = DefaultOptionsFilter,
    nothingFound = "Nothing found...",

    icon,
    placeholder,
    actionIcon = <IconSelector {...defaultIconProps.get()} />,

    size = theme.defaultSize,
    radius = theme.defaultRadius,
    variant = theme.defaultVariant,

    loading,
    autoFocus,
    disabled,
    readOnly = loading,
    required,

    color = "black",
    backgroundColor = color,
    padding,
    margin,
    width,
    height,
    grow,

    onEnterPress,
    onKeyPress,

    dropdownProps = {
      padding: INPUT_SIZES[size].padding,
      backgroundColor: "white",
      color: "black",
      shadow: true,
      height: 200,
    },
    dropdownButtonProps,

    inputStyle,
    dropdownStyle,
    style,
    ...rest
  } = props;


  // States
  const [searchValue, setSearchValue] = useState("");
  const [visibleOptions, setVisibleOptions] = useState(options);


  // Functions
  function handleKeyDown(e: any) {
    // Blur on "Escape" key
    if (e.key === "Escape") e.currentTarget.blur();
    // Call onEnterPress on "Enter" key
    if (e.key === "Enter") {
      e.preventDefault();
      onEnterPress?.(e);
    }

    // Call onKeyPress on any key
    onKeyPress?.(e);
  }
  function handleSearchUpdate(search: string) {
    setSearchValue(search);
    setVisibleOptions(filter(options, search));
  }


  // Styles
  const InputStyle = css({
    border: "none",
    outline: "none",
    background: "none",
    flexGrow: 1,

    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    cursor: disabled ? "not-allowed" : "text",

    fontSize: theme.sizeClasses.fontSize[size],
    fontFamily: theme.getFont("default"),
    color: getTextColor(color, variant, theme),

    "&::placeholder": {
      color: `${getTextColor(color, variant, theme)}80`,
    },

    // Remove awful autofill color
    "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` },

    ...inputStyle
  });


  return (
    <>
      <OptionContainer
        selectedOption={value}
        options={visibleOptions}
        onSelect={(option) => {
          setValue(option);
          setSearchValue(option.label);
          onSelect?.(option);
        }}
        nothingFound={nothingFound}

        icon={icon}
        button={actionIcon}

        size={size}
        radius={radius}
        variant={variant}

        loading={loading}
        disabled={disabled}
        required={required}

        color={color}
        backgroundColor={backgroundColor}
        padding={padding}
        margin={margin}
        width={width}
        height={height}
        grow={grow}

        dropdownStyle={dropdownStyle}
        style={style}
        inputRef={inputRef}
      >
        <input
          css={InputStyle}
          placeholder={placeholder}

          value={searchValue}
          onChange={(e) => handleSearchUpdate(e.target.value)}

          type="text"
          autoComplete="off"

          autoFocus={autoFocus}
          disabled={disabled}
          readOnly={readOnly}
          required={required}

          onKeyDown={handleKeyDown}

          ref={inputRef}
          {...rest}
        />
      </OptionContainer>
    </>
  )
});