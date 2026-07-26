/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, useRef, useState } from "react";
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
import { css, CSSObject } from "@emotion/react";
import { IconCheck, IconSelector } from "@tabler/icons-react";
import { InputContainer, InputContainerProps } from "../InputContainer";
import { Icon } from "../../display/Icon";
import { useValence } from "../../../ValenceProvider";
import { GlassMaterial, PaperMaterial, useColors } from "../../../utilities";
import { ButtonWithIcon } from "../../buttons/ButtonWithIcon";
import { Text, TextProps } from "../../display/Text";
import { AnimatePresence, motion } from "motion/react";
import { AirMaterial } from "../../../utilities/materials/AirMaterial";

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
  const colors = useColors();

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
    material = theme.materials.input,
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

  const selectedOption = selected !== null ? options[selected] : undefined;
  const selectedItemLabel = selectedOption?.label;

  // Styles
  const DropdownStyle = css({
    ...floatingStyles,
    overflowY: "auto",
    minWidth: 100,

    ...new PaperMaterial({ blur: "strong", elevation: 4 }).getStyles(
      theme,
      colors,
    ),
    outline: "none !important",

    borderRadius: (theme.sizeClasses.radius[radius] as number) + 5,
    padding: 5,
    boxSizing: "border-box",

    ...dropdownStyle,
  });
  const ItemStyle: CSSObject = {
    outline: "none !important",
  };

  return (
    <>
      <InputContainer
        tabIndex={0}
        icon={selectedOption?.icon ?? icon}
        button={<Icon>{secondaryIcon}</Icon>}
        size={inputSize}
        radius={radius}
        material={material}
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
                ...(!selectedItemLabel
                  ? {
                      opacity: 0.5,
                      fontStyle: "italic",
                    }
                  : {}),
              }}
              userSelect={false}
              animation={["slide-right", "blur"]}
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
                  material={
                    i === selected
                      ? new GlassMaterial({ color: "black" })
                      : new AirMaterial({ color: "black" })
                  }
                  width="100%"
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
