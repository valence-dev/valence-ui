import { ReactNode } from "react";
import { FlexProps } from "../../layout";
import { TitleProps } from "../Text";
import { ControlledList } from "../../../hooks/UseControlledList";
import { MakeResponsive } from "../../../responsive";
export type AccordionProps = FlexProps & {
    /** The list of items associated with this accordion */
    itemList: ControlledList<string>;
    children: ReactNode[];
};
export type AccordionItemProps = FlexProps & {
    /** The value of this accordion item */
    value: string;
    /** The control to display for this item */
    control: ReactNode;
    /** Props to apply to the Flex element surrounding the children */
    flexProps?: FlexProps;
};
export type AccordionControlProps = FlexProps & {
    /** The title to display in the control */
    title: string;
    /** The icon to display in the control */
    chevronIcon?: ReactNode;
    /** Optional props to pass to the title */
    titleProps?: TitleProps;
    /** Whether the control is opened */
    opened?: boolean;
};
export type AccordionPanelProps = FlexProps & {};
declare const AccordionNamespace: import("react").ForwardRefExoticComponent<MakeResponsive<AccordionProps> & import("react").RefAttributes<unknown>> & {
    Item: import("react").ForwardRefExoticComponent<MakeResponsive<AccordionItemProps> & import("react").RefAttributes<unknown>>;
    Panel: import("react").ForwardRefExoticComponent<MakeResponsive<AccordionPanelProps> & import("react").RefAttributes<unknown>>;
    Control: import("react").ForwardRefExoticComponent<MakeResponsive<AccordionControlProps> & import("react").RefAttributes<unknown>>;
};
export { AccordionNamespace as Accordion };
//# sourceMappingURL=Accordion.d.ts.map