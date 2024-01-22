import { CSSProperties, ReactNode, cloneElement, createContext, forwardRef, useContext } from "react";
import { Flex, FlexProps } from "../../layout";
import { IconChevronLeft } from "@tabler/icons-react";
import { Title, TitleProps } from "../Text";
import { ControlledList } from "../../../hooks/UseControlledList";
import { UnstyledButton } from "../../buttons";
import { Spoiler } from "../Spoiler";
import { Icon } from "../Icon";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";

export type AccordionProps =
  Omit<FlexProps, "children">
  & {
    /** The list of items associated with this accordion */
    itemList: ControlledList<string>;

    children: ReactNode[];
  }


export type AccordionItemProps =
  FlexProps
  & {
    /** The value of this accordion item */
    value: string;

    /** The control to display for this item */
    control: ReactNode;

    /** Props to apply to the Flex element surrounding the children */
    flexProps?: FlexProps;
  }


export type AccordionControlProps =
  FlexProps
  & {
    /** The title to display in the control */
    title: string;
    /** The icon to display in the control */
    chevronIcon?: ReactNode;

    /** Optional props to pass to the title */
    titleProps?: TitleProps;

    /** Whether the control is opened */
    opened?: boolean;
  }


export type AccordionPanelProps = FlexProps & {

}


type ContextType = {
  itemList: ControlledList<string>;
} | null;
const AccordionContext = createContext<ContextType>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (context === null)
    throw new Error("Accordion compontents must be wrapped in <Accordion />");

  return context;
}


const Accordion = forwardRef(function Accordion(
  props: MakeResponsive<AccordionProps>,
  ref: any
) {

  // Defaults
  const {
    itemList,

    direction = "column",
    justify = "flex-start",
    align = "stretch",

    children,
    ...rest
  } = useResponsiveProps<AccordionProps>(props);


  const newChildren = children.map((child: any) => cloneElement(
    child,
    {
      opened: itemList.includes(child.props.value),
      setOpened: (opened: boolean) => {
        if (opened) itemList.add(child.props.value);
        else itemList.remove(child.props.value);
      }
    }
  ));


  return (
    <AccordionContext.Provider
      value={{
        itemList: itemList,
      }}
    >
      <Flex
        direction={direction}
        justify={justify}
        align={align}

        ref={ref}
        {...rest}
      >
        {newChildren}
      </Flex>
    </AccordionContext.Provider>
  )
});


const Item = forwardRef(function AccordionItem(
  props: MakeResponsive<AccordionItemProps>,
  ref: any
) {

  // Defaults
  const {
    direction = "column",
    justify = "flex-start",
    align = "stretch",
    gap = 5,

    value,

    control,
    flexProps,
    children,
    ...rest
  } = useResponsiveProps<AccordionItemProps>(props);


  const context = useAccordionContext();

  const handleOpen = () => {
    if (context.itemList.includes(value)) context.itemList.remove(value)
    else context.itemList.add(value);
  }


  // Styles
  const ButtonStyle: CSSProperties = {
    cursor: "pointer",
  }


  return (
    <Flex
      direction={direction}
      justify={justify}
      align={align}
      gap={0}

      ref={ref}
      {...rest}
    >
      <UnstyledButton
        onClick={handleOpen}
        style={ButtonStyle}
      >
        {cloneElement(control as any, { opened: context.itemList.includes(value) })}
      </UnstyledButton>

      <Spoiler
        show={context.itemList.includes(value)}
      >
        <Flex
          style={{ marginTop: gap }}
          {...flexProps}
        >
          {children}
        </Flex>
      </Spoiler>
    </Flex>
  )
});


const Control = forwardRef(function AccordionControl(
  props: MakeResponsive<AccordionControlProps>,
  ref: any
) {
  // Defaults
  const {
    direction = "row",
    justify = "space-between",
    align = "center",

    opened = false,
    chevronIcon = <IconChevronLeft />,
    title,
    titleProps = {
      order: 3,
    },

    children,
    ...rest
  } = useResponsiveProps<AccordionControlProps>(props);


  // Styles
  const ChevronContainerStyle: CSSProperties = {
    transform: opened ? "rotate(-90deg)" : "rotate(0deg)",
    transformOrigin: "center",
    transition: "transform 0.1s ease-in-out",
  };


  return (
    <Flex

      direction={direction}
      justify={justify}
      align={align}

      ref={ref}
      {...rest}
    >
      <Title {...titleProps}>{title}</Title>

      {children}

      <span style={ChevronContainerStyle}>
        <Icon color="black">{chevronIcon}</Icon>
      </span>
    </Flex>
  )
});


const Panel = forwardRef(function AccordionPanel(
  props: MakeResponsive<AccordionPanelProps>,
  ref: any
) {

  // Defaults
  const {
    direction = "column",
    justify = "flex-start",
    align = "stretch",

    children,
    ...rest
  } = useResponsiveProps<AccordionPanelProps>(props);


  return (
    <Flex
      direction={direction}
      justify={justify}
      align={align}

      ref={ref}
      {...rest}
    >
      {children}
    </Flex>
  )
});


const AccordionNamespace = Object.assign(Accordion, {
  Item, Panel, Control
});
export { AccordionNamespace as Accordion };