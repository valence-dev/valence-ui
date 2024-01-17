/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  useFloating,
  useClick,
  useDismiss,
  useInteractions,
  offset,
  flip,
  size as sizeFn,
  autoUpdate,
  FloatingPortal,
} from "@floating-ui/react";
import { GenericLayoutProps } from "@valence-ui/utils";
import { ButtonWithIcon, TextButtonProps } from "../../buttons";
import { INPUT_SIZES, InputContainer, InputContainerProps } from "../InputContainer";
import { Option } from "./OptionsFilter";
import { CSSProperties, ReactNode, forwardRef, useEffect, useState } from "react";
import { IconCheck, IconSelector } from "@tabler/icons-react";
import { useValence } from "../../../ValenceProvider";
import { Flex } from "../../layout";
import { Icon, Text } from "../../display";
import { useDetectKeyDown } from "../../../hooks";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";

export type OptionContainerEventProps = {
  /** Callback to be called when an option is selected. */
  onSelect?: (value: Option) => void;
}

export type OptionContainerProps =
  InputContainerProps
  & OptionContainerEventProps
  & {
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
    dropdownButtonProps?: TextButtonProps & { children?: never };

    /** Keys the user can press to select an option. Defaults to "Enter". */
    selectKeys?: string[];
    /** Keys the user can press to close the dropdown. Defaults to "Escape". */
    closeKeys?: string[];

    /** Optional styles to pass to the dropdown element */
    dropdownStyle?: CSSProperties;
  }

export type OptionDropdownProps =
  GenericLayoutProps
  & {
    /** Whether to include a shadow */
    shadow?: boolean;

    children?: never;
  }


export const OptionContainer = forwardRef(function OptionContainer(
  props: MakeResponsive<OptionContainerProps>,
  ref: any,
) {
  const theme = useValence();
  const { getHex } = useColors();

  // Defaults
  const {
    selectedOption,
    options,
    onSelect,
    nothingFound = "Nothing found...",

    selectKeys = ["Enter"],
    closeKeys = ["Escape"],

    icon,
    rightIcon = <IconSelector />,

    size = theme.defaults.size,
    radius = theme.defaults.radius,
    variant = theme.defaults.variant,

    loading, disabled, required,

    color = "black",
    backgroundColor = color,
    padding, margin, width, height, grow,

    dropdownProps = {
      padding: INPUT_SIZES[size].padding,
      backgroundColor: "white",
      color: "black",
      shadow: true,
      height: 200,
    },
    dropdownButtonProps,

    dropdownStyle,
    style,
    inputRef,
    children,
    ...rest
  } = useResponsiveProps<OptionContainerProps>(props);


  // States
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);


  // Hooks
  useDetectKeyDown((e) => {
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        setHighlightedIndex((i) => (i + 1) % options.length);
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        setHighlightedIndex((i) => (i - 1 + options.length) % options.length);
        break;
      }
    }
    console.log("Hi", e.key);

    if (selectKeys.includes(e.key)) {
      if (highlightedIndex === -1 || options.length === 0) return;
      e.preventDefault();
      handleSelect(options[highlightedIndex]);
    }
    if (closeKeys.includes(e.key)) {
      setIsOpen(false);
    }
  }, ["ArrowDown", "ArrowUp", ...selectKeys, ...closeKeys], isOpen);
  useEffect(() => {
    if (!isOpen) return;
    if (options.length === 0) return setHighlightedIndex(-1);
    setHighlightedIndex(0);
  }, [isOpen, options])

  useEffect(() => {
    if (document.activeElement === inputRef.current) setIsOpen(true);
    else setIsOpen(false);
  }, [document.activeElement, inputRef]);


  // Handlers
  function handleSelect(option: Option) {
    onSelect?.(option);
  }


  // Floating UI
  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 15 }),
      sizeFn({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            width: `${rects.reference.width}px`,
          })
        },
      })
    ]
  });
  const click = useClick(context);
  const dismiss = useDismiss(context);

  const {
    getReferenceProps,
    getFloatingProps,
  } = useInteractions([dismiss, click]);


  // Styles
  const DropdownStyle = css({
    backgroundColor: getHex(dropdownProps.backgroundColor, "strong"),
    color: getHex(dropdownProps.color),
    outline: `1px solid ${getHex(dropdownProps.color, "weak")}`,
    backdropFilter: "blur(5px)",

    maxHeight: dropdownProps.height,

    borderRadius: theme.sizeClasses.radius[radius] as number + (dropdownProps.padding as number),
    padding: dropdownProps.padding,
    boxShadow: dropdownProps.shadow ? theme.defaults.shadow : undefined,

    animationName: "in",
    animationDuration: "0.1s",
    overflowY: "auto",

    "@keyframes in": {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },

    "&::-webkit-scrollbar": {
      width: 10,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: getHex(dropdownProps.color, "medium"),
      borderRadius: 5,
    },

    ...dropdownStyle,
    ...floatingStyles
  });


  return (
    <>
      <InputContainer
        icon={icon}
        button={rightIcon}

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

        style={style}
        inputRef={inputRef}

        ref={refs.setReference}
        {...getReferenceProps()}
        {...rest}
      >
        {children}
      </InputContainer>

      {isOpen && (
        <FloatingPortal>
          <div
            css={DropdownStyle}
            ref={refs.setFloating}
            {...getFloatingProps()}
          >
            {options.length === 0 ?
              <Flex
                height={theme.sizeClasses.height[size]}
                align="center"
                justify="center"
              >
                {typeof nothingFound === "string" ?
                  <Text
                    align="center"
                    color={getHex("black", "strong")}
                  >
                    {nothingFound}
                  </Text>
                  :
                  nothingFound
                }
              </Flex>
              : options.map((option, i) => (
                <ButtonWithIcon
                  key={i}
                  icon={
                    selectedOption?.label === option.label
                      ? <Icon><IconCheck /></Icon>
                      : option.left
                  }

                  color={color}
                  variant={highlightedIndex === i ? "light" : "subtle"}
                  radius={radius}
                  size={size}

                  width="100%"
                  {...dropdownButtonProps}

                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </ButtonWithIcon>
              ))}
          </div>
        </FloatingPortal>
      )}
    </>
  )
});