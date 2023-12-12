/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, createRef, forwardRef, useContext, useState } from "react";
import { GenericInputProps, GenericTextInputEventProps } from "../../../generics";
import { Button, IconButton, IconButtonProps, getTextColor } from "../../buttons";
import { ValenceContext } from "../../../ValenceProvider";
import { Pill, PillProps } from "../../display";
import { css } from "@emotion/react";
import { Flex, FlexProps } from "../../layout";
import { useDefaultIconProps } from "../../../hooks";
import { IconX } from "@tabler/icons-react";
import { DefaultOptionsFilter, Option, OptionContainer, OptionsFilter } from "../OptionContainer";

export type PillInputEventProps =
  GenericTextInputEventProps
  & {
    /** Callback to be called when a pill is added. */
    onPillAdd?: (value: string) => void;
    /** Callback to be called when a pill is removed. */
    onPillRemove?: (value: string) => void;
  }

export type PillInputProps =
  GenericInputProps<string[]>
  & PillInputEventProps
  & {
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
    clearButtonProps?: IconButtonProps & { children?: never };

    /** Optional props to pass to all pills */
    pillProps?: PillProps & { children?: never };
    /** Optional props to pass to the pill container */
    pillContainerProps?: FlexProps & { children?: never };

    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties;
    /** Optional styles to apply to the dropdown component */
    dropdownStyle?: CSSProperties;

    children?: never;
  }


export const PillInput = forwardRef(function PillInput(
  props: PillInputProps,
  ref: any,
) {
  const theme = useContext(ValenceContext);
  const inputRef = ref ?? createRef<HTMLInputElement>();
  const defaultIconProps = useDefaultIconProps();


  // Defaults
  const {
    value,
    setValue,
    autofillKeys = ["Tab"],
    selectKeys = [" ", "Enter"],

    options = [],
    filter = DefaultOptionsFilter,
    nothingFound,

    allowDuplicates = false,
    allowClear = true,
    allowBackspaceRemove = true,
    grow,

    maxPills = Infinity,
    minLength = 0,
    maxLength = Infinity,

    clearButtonIcon = <IconX {...defaultIconProps.get()} />,
    clearButtonProps,

    pillProps,
    pillContainerProps,

    icon,
    placeholder,
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
    height = theme.sizeClasses.height[size],

    onEnterPress,
    onKeyPress,
    onPillAdd,
    onPillRemove,

    inputStyle,
    dropdownStyle,
    style,
    ...rest
  } = props;


  // States
  const [searchValue, setSearchValue] = useState("");
  const [visibleOptions, setVisibleOptions] = useState(filterOptions(options, searchValue, value));


  // Functions
  function handleKeyDown(e: any) {
    // Blur on "Escape" key
    if (e.key === "Escape") e.currentTarget.blur();
    // Call onEnterPress on "Enter" key
    if (e.key === "Enter") onEnterPress?.(e);

    // Call handlePillAdd on actionKey
    if (selectKeys.includes(e.key)) {
      e.preventDefault();
      handlePillAdd();
    }
    // Call onKeyPress on any key
    onKeyPress?.(e);

    // Remove last pill on backspace
    if (e.key === "Backspace" && allowBackspaceRemove && searchValue.length === 0) {
      if (searchValue.length > 0) return;
      handlePillRemove(value.length - 1);
    }
  }

  function filterOptions(options: Option[], search: string, blacklist: string[]) {
    let filtered = filter(options, search);
    // Filter out options in the blacklist
    filtered = filtered.filter((option) => !blacklist.includes(option.label));
    return filtered;
  }

  function handleSearchUpdate(search: string) {
    setSearchValue(search);
    setVisibleOptions(filterOptions(options, search, value));
  }

  function handlePillAdd(v?: string) {
    const tagValue = v ?? searchValue.trim();
    if (tagValue.length < minLength
      || tagValue.length > maxLength
      || value.length >= maxPills
      || !tagValue
    ) return;
    if (!allowDuplicates && value.includes(tagValue)) {
      setSearchValue("");
      return;
    };

    const newValue = [...value, tagValue];
    setValue(newValue);
    setSearchValue("");
    onPillAdd?.(tagValue);

    // Update visible options
    setVisibleOptions(filterOptions(options, "", newValue));
  }
  function handlePillRemove(index: number) {
    const newValue = [...value];
    newValue.splice(index, 1);
    setValue(newValue);
    onPillRemove?.(value[index]);

    // Update visible options
    setVisibleOptions(filterOptions(options, "", newValue));
  }
  function clearPills() {
    setValue([]);
    setSearchValue("");

    // Update visible options
    setVisibleOptions(filterOptions(options, "", []));
  }


  // Styles
  const InputStyle = css({
    border: "none",
    outline: "none",
    background: "none",
    flexGrow: 1,

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
  const ContainerStyle: CSSProperties = {
    minHeight: height,
    height: "fit-content",
    alignItems: "center",
    ...style
  }


  return (
    <>
      <OptionContainer
        options={visibleOptions ?? []}
        onSelect={(option) => handlePillAdd(option.label)}
        selectKeys={autofillKeys}
        nothingFound={
          <Button
            width="100%"
            variant="subtle"
            color={color}
            onClick={() => handlePillAdd(searchValue)}
          >
            {`Add "${searchValue}"`}
          </Button>
        }

        icon={icon}

        size={size}
        radius={radius}
        variant={variant}
        grow={grow}

        disabled={disabled}
        required={required}
        loading={loading}

        color={color}
        backgroundColor={backgroundColor}
        padding={padding}
        margin={margin}
        width={width}
        height={height}

        dropdownStyle={dropdownStyle}
        style={ContainerStyle}
        inputRef={inputRef}

        button={allowClear && value.length > 0 &&
          <IconButton
            radius={radius}
            variant="subtle"
            color="black"
            onClick={clearPills}
            height={25}
            {...clearButtonProps}
          >
            {clearButtonIcon}
          </IconButton>
        }
      >
        <Flex
          direction="row"
          wrap="wrap"
          align="center"
          gap={5}
          width="100%"
          {...pillContainerProps}
        >
          {value.map((v, i) => (
            <Pill
              key={i}
              size={size}
              variant={variant}
              tabIndex={0}
              withRemoveButton
              onRemove={() => handlePillRemove(i)}
              {...pillProps}
            >
              {v}
            </Pill>
          ))}

          <input
            css={InputStyle}
            placeholder={placeholder}

            value={searchValue ?? ""}
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
        </Flex>
      </OptionContainer>
    </>
  )
});