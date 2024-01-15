"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const layout_1 = require("../../layout");
const icons_react_1 = require("@tabler/icons-react");
const Text_1 = require("../Text");
const buttons_1 = require("../../buttons");
const Spoiler_1 = require("../Spoiler");
const Icon_1 = require("../Icon");
const responsive_1 = require("../../../responsive");
const AccordionContext = (0, react_1.createContext)(null);
const useAccordionContext = () => {
    const context = (0, react_1.useContext)(AccordionContext);
    if (context === null)
        throw new Error("Accordion compontents must be wrapped in <Accordion />");
    return context;
};
const Accordion = (0, react_1.forwardRef)(function Accordion(props, ref) {
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { itemList, direction = "column", justify = "flex-start", align = "stretch", children } = _a, rest = __rest(_a, ["itemList", "direction", "justify", "align", "children"]);
    const newChildren = children.map((child) => (0, react_1.cloneElement)(child, {
        opened: itemList.includes(child.props.value),
        setOpened: (opened) => {
            if (opened)
                itemList.add(child.props.value);
            else
                itemList.remove(child.props.value);
        }
    }));
    return ((0, jsx_runtime_1.jsx)(AccordionContext.Provider, { value: {
            itemList: itemList,
        }, children: (0, jsx_runtime_1.jsx)(layout_1.Flex, Object.assign({ direction: direction, justify: justify, align: align, ref: ref }, rest, { children: newChildren })) }));
});
const Item = (0, react_1.forwardRef)(function AccordionItem(props, ref) {
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { direction = "column", justify = "flex-start", align = "stretch", gap = 5, value, control, flexProps, children } = _a, rest = __rest(_a, ["direction", "justify", "align", "gap", "value", "control", "flexProps", "children"]);
    const context = useAccordionContext();
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
    return ((0, jsx_runtime_1.jsxs)(layout_1.Flex, Object.assign({ direction: direction, justify: justify, align: align, gap: 0, ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)(buttons_1.UnstyledButton, { onClick: handleOpen, style: ButtonStyle, children: (0, react_1.cloneElement)(control, { opened: context.itemList.includes(value) }) }), (0, jsx_runtime_1.jsx)(Spoiler_1.Spoiler, { show: context.itemList.includes(value), children: (0, jsx_runtime_1.jsx)(layout_1.Flex, Object.assign({ style: { marginTop: gap } }, flexProps, { children: children })) })] })));
});
const Control = (0, react_1.forwardRef)(function AccordionControl(props, ref) {
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { direction = "row", justify = "space-between", align = "center", opened = false, chevronIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconChevronLeft, {}), title, titleProps = {
        order: 3,
    }, children } = _a, rest = __rest(_a, ["direction", "justify", "align", "opened", "chevronIcon", "title", "titleProps", "children"]);
    // Styles
    const ChevronContainerStyle = {
        transform: opened ? "rotate(-90deg)" : "rotate(0deg)",
        transformOrigin: "center",
        transition: "transform 0.1s ease-in-out",
    };
    return ((0, jsx_runtime_1.jsxs)(layout_1.Flex, Object.assign({ direction: direction, justify: justify, align: align, ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)(Text_1.Title, Object.assign({}, titleProps, { children: title })), children, (0, jsx_runtime_1.jsx)("span", { style: ChevronContainerStyle, children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { color: "black", children: chevronIcon }) })] })));
});
const Panel = (0, react_1.forwardRef)(function AccordionPanel(props, ref) {
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { direction = "column", justify = "flex-start", align = "stretch", children } = _a, rest = __rest(_a, ["direction", "justify", "align", "children"]);
    return ((0, jsx_runtime_1.jsx)(layout_1.Flex, Object.assign({ direction: direction, justify: justify, align: align, ref: ref }, rest, { children: children })));
});
const AccordionNamespace = Object.assign(Accordion, {
    Item, Panel, Control
});
exports.Accordion = AccordionNamespace;
