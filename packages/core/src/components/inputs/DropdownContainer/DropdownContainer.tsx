/** @jsxImportSource @emotion/react */
import { ReactNode, useRef, useState } from "react";
import { Option } from "./Options";
import { useDisclosure } from "../../../hooks";
import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import { css } from "@emotion/react";
import { IconCheck, IconSelector } from "@tabler/icons-react";
import { InputContainer, InputContainerProps } from "../InputContainer";
import { useValence } from "../../../ValenceProvider";
import { useColors } from "../../../utilities";
import { ButtonWithIcon } from "../../buttons";
import { Text, TextProps } from "../../display";
import { CSSProperties } from "styled-components";
import { AnimatePresence, motion } from "motion/react";

export type DropdownContainerEventProps<OptionType> = {
  /** A callback fired when an item is selected. */
  onSelect?: (option: Option<OptionType>) => void;
};

export type DropdownContainerProps<OptionType> = InputContainerProps &
  DropdownContainerEventProps<OptionType> & {
    /** A list of options to display. */
    options: Option<OptionType>[];
    /** The placeholder text to display when no option is selected. */
    placeholder?: string;

    /** The currently selected option. */
    selected?: number | null;
    /** A callback to set the selected option. */
    setSelected?: (option: number | null) => void;
    /** The currently highlighted option. */
    highlighted?: number | null;
    /** A callback to set the highlighted option. */
    setHighlighted?: (option: number | null) => void;

    /** An icon to display in the input container. */
    icon?: ReactNode;
    /** A secondary icon to display in the input container. */
    secondaryIcon?: ReactNode;

    /** Optionally pass props to the label */
    labelProps?: TextProps;
    /** Optional styles to pass to the dropdown. */
    dropdownStyle?: CSSProperties;
  };

export function DropdownContainer<OptionType>(
  props: DropdownContainerProps<OptionType>,
) {
  const theme = useValence();
  const { getHex, getFgHex } = useColors();

  // Fallback states
  const [_selected, _setSelected] = useState<number | null>(null);
  const [_highlighted, _setHighlighted] = useState<number | null>(null);

  // States
  const disclosure = useDisclosure();

  // Defaults
  const {
    options,
    onSelect,
    placeholder = "Select an option...",

    selected = _selected,
    setSelected = _setSelected,
    highlighted = _highlighted,
    setHighlighted = _setHighlighted,

    icon,
    secondaryIcon = <IconSelector />,

    // Input container props
    size: inputSize = theme.defaults.size,
    radius = theme.defaults.radius,
    variant = theme.defaults.variant,
    color = "black",
    backgroundColor = color,
    loading,
    disabled,
    required,

    labelProps,
    dropdownStyle,
    children,
    ...rest
  } = props;

  // Floating UI
  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-start",
    open: disclosure.opened,
    onOpenChange: disclosure.update,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            width: `${rects.reference.width}px`,
          });
        },
        padding: 15,
      }),
    ],
  });

  const listRef = useRef<Array<HTMLElement | null>>([]);
  const listContentRef = useRef(options.map((o) => o.label));
  const isTypingRef = useRef(false);

  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex: highlighted,
    selectedIndex: selected,
    onNavigate: setHighlighted,
    loop: true,
  });
  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    activeIndex: highlighted,
    selectedIndex: selected,
    onMatch: disclosure.opened ? setHighlighted : setSelected,
    onTypingChange(isTyping) {
      isTypingRef.current = isTyping;
    },
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, dismiss, role, listNav, typeahead],
  );

  function handleSelect(index: number) {
    setSelected(index);
    onSelect?.(options[index]);
    disclosure.close();
  }

  const selectedItemLabel =
    selected !== null ? options[selected].label : undefined;

  // Styles
  const DropdownStyle = css({
    ...floatingStyles,
    overflowY: "auto",
    minWidth: 100,

    backgroundColor: getHex("white", "strong"),
    color: getHex(color),
    border: `1px solid ${getHex(color, "weak")}`,
    backdropFilter: "blur(5px)",
    outline: "none !important",

    borderRadius: (theme.sizeClasses.radius[radius] as number) + 5,
    padding: 5,
    boxSizing: "border-box",
    boxShadow: theme.defaults.shadow,

    ...dropdownStyle,
  });
  const ItemStyle: CSSProperties = {
    outline: "none !important",
  };

  return (
    <>
      <InputContainer
        tabIndex={0}
        icon={selected ? (options[selected].icon ?? icon) : icon}
        button={secondaryIcon}
        size={inputSize}
        radius={radius}
        variant={variant}
        color={color}
        backgroundColor={backgroundColor}
        loading={loading}
        disabled={disabled}
        required={required}
        ref={refs.setReference}
        iconProps={{
          animation: ["grow", "blur", "fade"],
        }}
        {...getReferenceProps()}
        {...rest}
      >
        <AnimatePresence>
          {children ?? (
            <Text
              style={{
                flex: 1,
                color: getFgHex(color, variant),
                opacity: selectedItemLabel ? 1 : 0.5,
              }}
              userSelect={false}
              animation={["slide-right", "fade", "blur"]}
              {...labelProps}
            >
              {selectedItemLabel ?? placeholder}
            </Text>
          )}
        </AnimatePresence>
      </InputContainer>
      <AnimatePresence>
        {disclosure.opened && (
          <FloatingPortal>
            <motion.div
              initial={{
                opacity: 0,
                filter: "blur(2px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.1 },
              }}
              exit={{
                opacity: 0,
                filter: "blur(2px)",
                transition: { duration: 0.1 },
              }}
              ref={refs.setFloating}
              css={DropdownStyle}
              {...getFloatingProps()}
            >
              {options.map((value, i) => (
                <ButtonWithIcon
                  key={i}
                  ref={(node: any) => {
                    listRef.current[i] = node;
                  }}
                  icon={
                    i === selected ? <IconCheck /> : (value.icon ?? undefined)
                  }
                  variant={i === highlighted ? "light" : "subtle"}
                  width="100%"
                  color={color}
                  style={ItemStyle}
                  {...getItemProps({
                    // Handle pointer select.
                    onClick() {
                      handleSelect(i);
                    },
                    // Handle keyboard select.
                    onKeyDown(event) {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        handleSelect(i);
                      }

                      if (event.key === " " && !isTypingRef.current) {
                        event.preventDefault();
                        handleSelect(i);
                      }
                    },
                  })}
                  animation={{
                    transitionAnimation: ["slide-down", "fade", "blur"],
                  }}
                >
                  {value.label}
                </ButtonWithIcon>
              ))}
            </motion.div>
          </FloatingPortal>
        )}
      </AnimatePresence>
    </>
  );
}
