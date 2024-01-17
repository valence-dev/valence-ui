/** @jsxImportSource @emotion/react */
import { ReactNode, useRef, useState } from "react";
import { Option, getOptionIcon, getOptionLabel, getOptionValue } from "./Options";
import { useDisclosure } from "../../../hooks";
import { FloatingFocusManager, FloatingPortal, autoUpdate, flip, offset, size, useClick, useDismiss, useFloating, useInteractions, useListNavigation, useRole, useTypeahead } from "@floating-ui/react";
import { css } from "@emotion/react";
import { IconCheck, IconSelector } from "@tabler/icons-react";
import { InputContainer, InputContainerProps } from "../InputContainer";
import { useValence } from "../../../ValenceProvider";
import { useColors } from "../../../utilities";
import { ButtonWithIcon } from "../../buttons";
import { Text } from "../../display";
import { CSSProperties } from "styled-components";


export type DropdownContainerEventProps = {
  onSelect?: (option: Option) => void;
}

export type DropdownContainerProps =
  InputContainerProps
  & DropdownContainerEventProps
  & {
    options: Option[];
    placeholder?: string;

    selected?: number | null;
    setSelected?: (option: number | null) => void;
    highlighted?: number | null;
    setHighlighted?: (option: number | null) => void;

    icon?: ReactNode;
    secondaryIcon?: ReactNode;

    dropdownStyle?: CSSProperties;
  }


export function DropdownContainer(props: DropdownContainerProps) {
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
    loading, disabled, required,

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
          })
        },
        padding: 15
      })
    ]
  });

  const listRef = useRef<Array<HTMLElement | null>>([]);
  const listContentRef = useRef(options.map((o) => getOptionLabel(o)));
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
    onTypingChange(isTyping) { isTypingRef.current = isTyping },
  });

  const {
    getReferenceProps,
    getFloatingProps,
    getItemProps,
  } = useInteractions([click, dismiss, role, listNav, typeahead]);


  function handleSelect(index: number) {
    setSelected(index);
    onSelect?.(options[index]);
    disclosure.close();
  }

  const selectedItemLabel = selected !== null ? getOptionLabel(options[selected]) : undefined;


  // Styles
  const DropdownStyle = css({
    ...floatingStyles,
    overflowY: "auto",
    minWidth: 100,

    backgroundColor: getHex("backgroundColor", "strong"),
    color: getHex(color),
    outline: `1px solid ${getHex(color, "weak")}`,
    backdropFilter: "blur(5px)",

    borderRadius: theme.sizeClasses.radius[radius] as number + 5,
    padding: 5,
    boxSizing: "border-box",
    boxShadow: theme.defaults.shadow,

    animationName: "in",
    animationDuration: "0.1s",
    "@keyframes in": {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },

    ...dropdownStyle
  });
  const ItemStyle: CSSProperties = { 
    outline: "none !important",
  }


  return (
    <>
      <InputContainer
        tabIndex={0}
        icon={selected ? getOptionIcon(options[selected]) ?? icon : icon}
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
        {...getReferenceProps()}
        {...rest}
      >
        {children ??
          <Text
            style={{
              flex: 1,
              color: getFgHex(color, variant),
              opacity: selectedItemLabel ? 1 : 0.5,
            }}
          >
            {selectedItemLabel ?? placeholder}
          </Text>
        }
      </InputContainer>
      {disclosure.opened && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
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

                  icon={i === selected ?
                    <IconCheck /> :
                    typeof value !== "string" ? value?.icon : undefined
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
                >
                  {getOptionLabel(value)}
                </ButtonWithIcon>
              ))}
            </div>
          </FloatingFocusManager>
        </FloatingPortal >
      )
      }
    </>
  )
}