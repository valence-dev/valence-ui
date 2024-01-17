/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FocusEvents, KeyboardEvents, MouseClickEvents, MouseEvents, PointerEvents } from "@valence-ui/utils";
import { GenericInputProps } from "../../../generics";
import { ReactNode, forwardRef, useState } from "react";
import { Button, IconButton, IconButtonProps, TextButtonProps } from "../../buttons";
import { Flex, FlexProps } from "../../layout";
import { useValence } from "../../../ValenceProvider";
import { IconPlus, IconX } from "@tabler/icons-react";
import { CSSProperties } from "styled-components";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
import { TextInput, TextInputProps } from "../TextInput";

export type PillSelectorEventProps =
  MouseClickEvents & MouseEvents & PointerEvents & FocusEvents & KeyboardEvents
  & {
    /** Callback to be called when a pill is selected. */
    onPillSelected?: (value: string) => void;
    /** Callback to be called when a pill is deselected. */
    onPillDeselected?: (value: string) => void;
  }

export type PillSelectorProps =
  GenericInputProps<string[]>
  & PillSelectorEventProps
  & {
    /** A list of pills to display */
    pills: string[];
    /** Optional callback to complete the state */
    setPills?: (pills: string[]) => void;

    /** Whether to allow pills to be cleared. `true` by default. */
    allowClear?: boolean;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** Sets the gaps between everything. `5` by default */
    gap?: number;

    /** The maxmimum number of pills that can be selected. `Infinity` by default. */
    maxSelectable?: number;

    /** An icon to use for the clear button. Defaults to `IconX`. */
    clearButtonIcon?: ReactNode;
    /** Optional props to pass to the clear button */
    clearButtonProps?: Omit<IconButtonProps, "children">;

    /** How the pills should wrap within their container. Defaults to `"nowrap"`. */
    wrap?: CSSProperties["flexWrap"];

    /** Optional props to pass to all pills */
    pillProps?: Omit<TextButtonProps, "children">;
    /** Optional props to pass to selected pills. Will override attributes from pillProps */
    selectedPillProps?: Omit<TextButtonProps, "children">;
    /** Optional props to pass to the pill container */
    pillContainerProps?: Omit<FlexProps, "children">;


    /** Whether to allow the creation of new pills or deletion of old ones. */
    allowEditing?: boolean;
    /** Placeholder text to display in the input. Will only show if `allowNew = true`. */
    placeholder?: string;
    /** Optional styles to pass to the input */
    inputProps?: Omit<TextInputProps, "value" | "setValue">;
    /** Optional props to pass to the add button */
    addButtonProps?: Omit<IconButtonProps, "children">;
    /** Optional icon to use for the add button */
    addButtonIcon?: ReactNode;


    children?: never;
  }


export const PillSelector = forwardRef(function PillSelector(
  props: MakeResponsive<PillSelectorProps>,
  ref: any,
) {
  const theme = useValence();
  const { getHex } = useColors();


  // Defaults
  const {
    value,
    setValue,

    pills: _pills,
    setPills: _setPills,
    allowClear = true,
    gap = 5,

    maxSelectable = Infinity,

    clearButtonIcon = <IconX />,
    clearButtonProps,

    wrap = "nowrap",

    pillProps,
    selectedPillProps = pillProps,
    pillContainerProps,


    allowEditing = false,
    placeholder = "Add a pill...",
    inputProps,
    addButtonProps,
    addButtonIcon = <IconPlus />,


    size = theme.defaults.size,
    radius = theme.defaults.radius,
    variant = theme.defaults.variant,

    loading,
    autoFocus,
    disabled,
    readOnly = disabled,
    required,

    color = "black",
    backgroundColor = color,
    padding,
    margin,
    width = "100%",
    height = "auto",
    grow = true,

    onPillSelected,
    onPillDeselected,

    style,
    ...rest
  } = useResponsiveProps<PillSelectorProps>(props);

  const {
    style: pillContainerStyle,
    ...pillContainerPropsRest
  } = pillContainerProps ?? {};

  const {
    style: clearButtonStyle,
    ...clearButtonPropsRest
  } = clearButtonProps ?? {};


  // States
  const [__pills, __setPills] = useState<string[]>([]);
  const pills = sortPills(_pills ?? __pills);
  const setPills = _setPills ?? __setPills;

  const [inputValue, setInputValue] = useState("");
  const [newPills, setNewPills] = useState<string[]>([]);


  // Functions
  function sortPills(pills: string[], v = value) {
    const selectedPills = pills.filter(pill => v.includes(pill));
    const unselectedPills = pills.filter(pill => !v.includes(pill));
    return [...selectedPills.sort(), ...unselectedPills.sort()]
  }

  function handlePillClick(pill: string) {
    let v = [...value];
    let pillList = [...pills];
    if (value.includes(pill)) {
      onPillDeselected?.(pill);
      v = value.filter(v => v !== pill);
      pillList = removePill(pill);
    } else {
      onPillSelected?.(pill);
      v = [...value, pill];
    }

    setPills(sortPills(pillList, v));
    setValue(v);
  }
  function handleClearPills() {
    setValue([]);
    setPills(sortPills(pills, []));
  }


  // Input functions
  function addPill() {
    if (inputValue === "") return;

    if (value.length >= maxSelectable) return;
    if (value.includes(inputValue)) return setInputValue("");
    if (pills.includes(inputValue)) {
      handlePillClick(inputValue);
      setInputValue("");
      return;
    }

    const newValue = [...value, inputValue];
    const newPillList = sortPills([...pills, inputValue], newValue);
    setPills(newPillList);
    setValue(newValue);

    setNewPills([...newPills, inputValue]);

    setInputValue("");
  }
  function removePill(pill: string): string[] {
    // If the pill has been removed and it is on the new pill list,
    // delete it from the new pill list and the pill list
    if (newPills.includes(pill)) {
      setNewPills(newPills.filter(p => p !== pill));
      return pills.filter(p => p !== pill);
    }
    return pills;
  }


  // Styles
  const ContainerStyle: CSSProperties = {
    padding: padding,
    margin: margin,
    width: width,
    height: height,
    flexGrow: grow ? 1 : undefined,

    alignItems: "center",

    ...style,
  };
  const PillContainerStyle = css({
    padding: `${gap}px 0px`,
    overflowX: "auto",
    width: "100%",

    flexWrap: wrap,

    "&::-webkit-scrollbar": {
      height: 2,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: getHex(color, "medium"),
      borderRadius: 5,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: getHex(color, "strong"),
      borderRadius: 5,
    },


    ...pillContainerStyle as any,
  });
  const ButtonStyle: CSSProperties = {
    margin: `${gap}px 0px`,
    ...clearButtonStyle
  }


  return (
    <Flex
      direction="column"
      gap={gap}
      style={ContainerStyle}
      ref={ref}
      {...rest}
    >
      {allowEditing &&
        <Flex
          width="100%"
          gap={gap}
        >
          <TextInput
            value={inputValue}
            setValue={setInputValue}
            onEnterPress={() => addPill()}

            placeholder={placeholder}

            variant={variant}
            size={size}
            radius={radius}
            color={color}
            backgroundColor={backgroundColor}

            loading={loading}
            disabled={disabled}
            readOnly={readOnly}
            required={required}

            {...inputProps}
          />

          <IconButton
            size={size}
            radius={radius}
            color={color}
            variant="subtle"
            onClick={() => addPill()}
            {...addButtonProps}
          >
            {addButtonIcon}
          </IconButton>
        </Flex>
      }
      <Flex
        gap={gap}
        width="100%"
        height="fit-content"
        align="center"
      >
        <Flex
          gap={gap}
          css={PillContainerStyle}
          {...pillContainerPropsRest}
        >
          {pills.map((pill, index) => {
            const isSelected = value.includes(pill);

            return (
              <Button
                key={index}

                size={size}
                radius={radius}
                variant={isSelected ?
                  variant === "filled" ? "light" : "filled"
                  : variant
                }
                color={color}

                onClick={() => handlePillClick(pill)}

                {...pillProps}
                {...(isSelected ? selectedPillProps : undefined)}
              >
                {pill}
              </Button>
            )
          })}
        </Flex>

        <IconButton
          size={size}
          radius={radius}
          color={color}
          variant="subtle"
          onClick={() => handleClearPills()}
          style={ButtonStyle}
          {...clearButtonPropsRest}
        >
          {clearButtonIcon}
        </IconButton>
      </Flex>
    </Flex>
  )
});