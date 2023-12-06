var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement, createContext, forwardRef, useContext } from "react";
import { Flex } from "../../layout";
import { useBreakpoint, useDefaultIconProps } from "../../../hooks";
import { IconChevronLeft } from "@tabler/icons-react";
import { Title } from "../Text";
import { UnstyledButton } from "../../buttons";
import { Spoiler } from "../Spoiler";
import { getReactiveProp } from "@valence-ui/utils";
const AccordionContext = createContext(null);
const useAccordionContext = () => {
    const context = useContext(AccordionContext);
    if (context === null)
        throw new Error("Accordion compontents must be wrapped in <Accordion />");
    return context;
};
const Accordion = forwardRef(function Accordion(props, ref) {
    // Defaults
    const { itemList, direction = "column", justify = "flex-start", align = "stretch", children } = props, rest = __rest(props, ["itemList", "direction", "justify", "align", "children"]);
    const newChildren = children.map((child) => cloneElement(child, {
        opened: itemList.includes(child.props.value),
        setOpened: (opened) => {
            if (opened)
                itemList.add(child.props.value);
            else
                itemList.remove(child.props.value);
        }
    }));
    return (_jsx(AccordionContext.Provider, { value: {
            itemList: itemList,
        }, children: _jsx(Flex, Object.assign({ direction: direction, justify: justify, align: align, ref: ref }, rest, { children: newChildren })) }));
});
const Item = forwardRef(function AccordionItem(props, ref) {
    // Defaults
    const { direction = "column", justify = "flex-start", align = "stretch", gap = 5, value, control, flexProps, children } = props, rest = __rest(props, ["direction", "justify", "align", "gap", "value", "control", "flexProps", "children"]);
    const context = useAccordionContext();
    const breakpoint = useBreakpoint();
    const handleOpen = () => {
        if (context.itemList.includes(value))
            context.itemList.remove(value);
        else
            context.itemList.add(value);
    };
    // Styles
    const ButtonStyle = {
        cursor: "pointer",
    };
    return (_jsxs(Flex, Object.assign({ direction: direction, justify: justify, align: align, gap: 0, ref: ref }, rest, { children: [_jsx(UnstyledButton, { onClick: handleOpen, style: ButtonStyle, children: cloneElement(control, { opened: context.itemList.includes(value) }) }), _jsx(Spoiler, { show: context.itemList.includes(value), children: _jsx(Flex, Object.assign({ style: { marginTop: getReactiveProp(gap, breakpoint) } }, flexProps, { children: children })) })] })));
});
const Control = forwardRef(function AccordionControl(props, ref) {
    const defaultIconProps = useDefaultIconProps();
    // Defaults
    const { direction = "row", justify = "space-between", align = "center", opened = false, chevronIcon = _jsx(IconChevronLeft, Object.assign({}, defaultIconProps.get())), title, titleProps = {
        order: 3,
    }, children } = props, rest = __rest(props, ["direction", "justify", "align", "opened", "chevronIcon", "title", "titleProps", "children"]);
    // Styles
    const ChevronContainerStyle = {
        transform: opened ? "rotate(-90deg)" : "rotate(0deg)",
        transformOrigin: "center",
        transition: "transform 0.1s ease-in-out",
    };
    return (_jsxs(Flex, Object.assign({ direction: direction, justify: justify, align: align, ref: ref }, rest, { children: [_jsx(Title, Object.assign({}, titleProps, { children: title })), children, _jsx("span", { style: ChevronContainerStyle, children: chevronIcon })] })));
});
const Panel = forwardRef(function AccordionPanel(props, ref) {
    // Defaults
    const { direction = "column", justify = "flex-start", align = "stretch", children } = props, rest = __rest(props, ["direction", "justify", "align", "children"]);
    return (_jsx(Flex, Object.assign({ direction: direction, justify: justify, align: align, ref: ref }, rest, { children: children })));
});
const AccordionNamespace = Object.assign(Accordion, {
    Item, Panel, Control
});
export { AccordionNamespace as Accordion };
