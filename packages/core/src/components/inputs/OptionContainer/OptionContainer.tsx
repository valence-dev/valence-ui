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
import { ReactNode, forwardRef, useContext, useEffect, useState } from "react";
import { IconCheck, IconSelector } from "@tabler/icons-react";
import { useDefaultIconProps, useDetectKeyDown } from "../../../hooks";
import { ValenceContext } from "../../../ValenceProvider";
import { Flex } from "../../layout";
import { Text } from "../../display";

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
    nothingFound?: string;

    /** An icon to display to the right of the input */
    rightIcon?: ReactNode;

    /** Optional props to pass to the dropdown container */
    dropdownProps?: OptionDropdownProps;
    /** Optional props to pass to the dropdown buttons */
    dropdownButtonProps?: TextButtonProps & { children?: never };
  }

export type OptionDropdownProps =
  GenericLayoutProps
  & {
    /** Whether to include a shadow */
    shadow?: boolean;

    children?: never;
  }


export const OptionContainer = forwardRef(function OptionContainer(
  props: OptionContainerProps,
  ref: any,
) {
  const theme = useContext(ValenceContext);
  const defaultIconProps = useDefaultIconProps();

  // Defaults
  const {
    selectedOption,
    options,
    onSelect,
    nothingFound = "Nothing found...",

    icon,
    rightIcon = <IconSelector {...defaultIconProps.get()} />,

    size = theme.defaultSize,
    radius = theme.defaultRadius,
    variant = theme.defaultVariant,

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

    style,
    inputRef,
    children,
    ...rest
  } = props;


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
      case "Enter": {
        if (highlightedIndex === -1 || options.length === 0) return;
        e.preventDefault();
        handleSelect(options[highlightedIndex]);
        break;
      }
      case "Escape": {
        setIsOpen(false);
        break;
      }
    }
  }, ["ArrowDown", "ArrowUp", "Enter", "Escape"], isOpen);
  useDetectKeyDown((e) => {
    if (e.key === "Enter") setIsOpen(true);
  }, "Enter", !isOpen);
  useEffect(() => { 
    setHighlightedIndex(0);
  }, [isOpen, options])


  // Handlers
  function handleSelect(option: Option) {
    onSelect?.(option);
    setIsOpen(false);
  }


  // Floating UI
  const { refs, context } = useFloating({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(15),
      flip({ padding: 15 }),
      sizeFn({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          })
        }
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
    backgroundColor: theme.getColorHex(dropdownProps.backgroundColor, "strong"),
    color: theme.getColorHex(dropdownProps.color),
    outline: `1px solid ${theme.getColorHex(dropdownProps.color, "weak")}`,
    backdropFilter: "blur(5px)",

    maxHeight: dropdownProps.height,

    borderRadius: theme.sizeClasses.radius[radius] as number + (dropdownProps.padding as number),
    padding: dropdownProps.padding,
    marginTop: 5,
    boxShadow: dropdownProps.shadow ? theme.defaultShadow : undefined,

    animationName: "in",
    animationDuration: "0.1s",
    overflowY: "auto",

    "@keyframes in": {
      from: {
        opacity: 0,
        transform: "translateY(-10px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0px)",
      },
    },

    "&::-webkit-scrollbar": {
      width: 10,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.getColorHex(dropdownProps.color, "medium"),
      borderRadius: 5,
    },
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

        onClick={() => setIsOpen(true)}

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
                <Text
                  align="center"
                  color={theme.getColorHex("black", "strong")}
                >
                  {nothingFound}
                </Text>
              </Flex>
              : options.map((option, i) => (
                <ButtonWithIcon
                  key={i}
                  icon={
                    selectedOption?.label === option.label
                      ? <IconCheck {...defaultIconProps.get()} />
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