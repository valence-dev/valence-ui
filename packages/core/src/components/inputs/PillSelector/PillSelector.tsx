/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FocusEvents, KeyboardEvents, MouseClickEvents, MouseEvents, PointerEvents } from "@valence-ui/utils";
import { GenericInputProps } from "../../../generics";
import { ReactNode, forwardRef, useContext, useState } from "react";
import { Button, IconButton, IconButtonProps, TextButtonProps } from "../../buttons";
import { Flex, FlexProps } from "../../layout";
import { ValenceContext } from "../../../ValenceProvider";
import { useDefaultIconProps } from "../../../hooks";
import { IconX } from "@tabler/icons-react";
import { CSSProperties } from "styled-components";

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
    clearButtonProps?: IconButtonProps & { children?: never };

    /** Optional props to pass to all pills */
    pillProps?: TextButtonProps & { children?: never };
    /** Optional props to pass to selected pills. Will override attributes from pillProps */
    selectedPillProps?: TextButtonProps & { children?: never };
    /** Optional props to pass to the pill container */
    pillContainerProps?: FlexProps & { children?: never };

    children?: never;
  }


export const PillSelector = forwardRef(function PillSelector(
  props: PillSelectorProps,
  ref: any,
) {
  const theme = useContext(ValenceContext);
  const defaultIconProps = useDefaultIconProps();


  // Defaults
  const {
    value,
    setValue,

    pills,
    allowClear = true,
    gap = 5,

    maxSelectable = Infinity,

    clearButtonIcon = <IconX {...defaultIconProps.get()} />,
    clearButtonProps,

    pillProps,
    selectedPillProps = pillProps,
    pillContainerProps,

    size = theme.defaultSize,
    radius = theme.defaultRadius,
    variant = theme.defaultVariant,

    loading,
    autoFocus,
    disabled,
    readOnly = disabled,
    required,

    color = "black",
    backgroundColor = color,
    padding,
    margin,
    width,
    height = "auto",
    grow = true,

    onPillSelected,
    onPillDeselected,

    style,
    ...rest
  } = props;

  const {
    style: pillContainerStyle,
    ...pillContainerPropsRest
  } = pillContainerProps ?? {};

  const {
    style: clearButtonStyle,
    ...clearButtonPropsRest
  } = clearButtonProps ?? {};


  // States
  const [pillList, setPillList] = useState<string[]>(sortPills(pills));


  // Functions
  function sortPills(pills: string[], v = value) {
    const selectedPills = pills.filter(pill => v.includes(pill));
    const unselectedPills = pills.filter(pill => !v.includes(pill));
    return [...selectedPills.sort(), ...unselectedPills.sort()]
  }

  function handlePillClick(pill: string) {
    let v = [...value];
    if (value.includes(pill)) {
      onPillDeselected?.(pill);
      v = value.filter(v => v !== pill);
    } else {
      onPillSelected?.(pill);
      v = [...value, pill];
    }

    setPillList(sortPills(pillList, v));
    setValue(v);
  }
  function handleClearPills() {
    setValue([]);
    setPillList(sortPills(pillList, []));
  }


  // Styles
  const ContainerStyle: CSSProperties = {
    padding: padding,
    margin: margin,
    width: width,
    height: height,
    flexGrow: grow ? 1 : undefined,

    ...style,
  };
  const PillContainerStyle = css({
    padding: `${gap}px 0px`,
    overflowX: "auto",
    width: "100%",

    "&::-webkit-scrollbar": {
      height: 2,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.getColorHex(color, "medium"),
      borderRadius: 5,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: theme.getColorHex(color, "strong"),
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
      style={ContainerStyle}
      gap={gap}
      ref={ref}
      {...rest}
    >
      <Flex
        gap={gap}
        css={PillContainerStyle}
        {...pillContainerPropsRest}
      >
        {pillList.map((pill, index) => {
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
  )
});