import { CSSProperties, ReactNode } from "react";
import { FlexProps } from "../../layout";
import { TitleProps } from "../Text";
import { ControlledList } from "../../../hooks/UseControlledList";
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
declare const AccordionNamespace: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: import("@valence-ui/utils").ReactiveProp<CSSProperties> | undefined;
    tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
} & {
    backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    direction?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
    align?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignItems | undefined>;
    justify?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
    alignSelf?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
    gap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
    grow?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
    wrap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexWrap | undefined>; /** Optional props to pass to the title */
} & {
    /** The list of items associated with this accordion */
    itemList: ControlledList<string>;
    children: ReactNode[];
} & import("react").RefAttributes<unknown>> & {
    Item: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
        style?: import("@valence-ui/utils").ReactiveProp<CSSProperties> | undefined;
        tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
    } & {
        backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
        color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
        padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
        margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
        width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
        height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
    } & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & {
        direction?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
        align?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignItems | undefined>;
        justify?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
        alignSelf?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
        gap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
        grow?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
        wrap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexWrap | undefined>; /** Optional props to pass to the title */
    } & {
        /** The value of this accordion item */
        value: string;
        /** The control to display for this item */
        control: ReactNode;
        /** Props to apply to the Flex element surrounding the children */
        flexProps?: FlexProps | undefined;
    } & import("react").RefAttributes<unknown>>;
    Panel: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
        style?: import("@valence-ui/utils").ReactiveProp<CSSProperties> | undefined;
        tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
    } & {
        backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
        color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
        padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
        margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
        width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
        height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
    } & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & {
        direction?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
        align?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignItems | undefined>;
        justify?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
        alignSelf?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
        gap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
        grow?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
        wrap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexWrap | undefined>; /** Optional props to pass to the title */
    } & import("react").RefAttributes<unknown>>;
    Control: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
        style?: import("@valence-ui/utils").ReactiveProp<CSSProperties> | undefined;
        tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
    } & {
        backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
        color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
        padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
        margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
        width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
        height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
    } & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & {
        direction?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
        align?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignItems | undefined>;
        justify?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
        alignSelf?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
        gap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
        grow?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
        wrap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexWrap | undefined>; /** Optional props to pass to the title */
    } & {
        /** The title to display in the control */
        title: string;
        /** The icon to display in the control */
        chevronIcon?: ReactNode;
        /** Optional props to pass to the title */
        titleProps?: TitleProps | undefined;
        /** Whether the control is opened */
        opened?: boolean | undefined;
    } & import("react").RefAttributes<unknown>>;
};
export { AccordionNamespace as Accordion };
//# sourceMappingURL=Accordion.d.ts.map