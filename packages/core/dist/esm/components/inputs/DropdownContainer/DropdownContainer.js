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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { getOptionIcon, getOptionLabel } from "./Options";
import { useDisclosure } from "../../../hooks";
import { FloatingFocusManager, FloatingPortal, autoUpdate, flip, offset, size, useClick, useDismiss, useFloating, useInteractions, useListNavigation, useRole, useTypeahead } from "@floating-ui/react";
import { css } from "@emotion/react";
import { IconCheck, IconSelector } from "@tabler/icons-react";
import { InputContainer } from "../InputContainer";
import { useValence } from "../../../ValenceProvider";
import { useColors } from "../../../utilities";
import { ButtonWithIcon } from "../../buttons";
import { Text } from "../../display";
export function DropdownContainer(props) {
    var _a;
    const theme = useValence();
    const { getHex, getFgHex } = useColors();
    // Fallback states
    const [_selected, _setSelected] = useState(null);
    const [_highlighted, _setHighlighted] = useState(null);
    // States
    const disclosure = useDisclosure();
    // Defaults
    const { options, onSelect, placeholder = "Select an option...", selected = _selected, setSelected = _setSelected, highlighted = _highlighted, setHighlighted = _setHighlighted, icon, secondaryIcon = _jsx(IconSelector, {}), 
    // Input container props
    size: inputSize = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, color = "black", backgroundColor = color, loading, disabled, required, dropdownStyle, children } = props, rest = __rest(props, ["options", "onSelect", "placeholder", "selected", "setSelected", "highlighted", "setHighlighted", "icon", "secondaryIcon", "size", "radius", "variant", "color", "backgroundColor", "loading", "disabled", "required", "dropdownStyle", "children"]);
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
                padding: 15
            })
        ]
    });
    const listRef = useRef([]);
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
        onTypingChange(isTyping) { isTypingRef.current = isTyping; },
    });
    const { getReferenceProps, getFloatingProps, getItemProps, } = useInteractions([click, dismiss, role, listNav, typeahead]);
    function handleSelect(index) {
        setSelected(index);
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(options[index]);
        disclosure.close();
    }
    const selectedItemLabel = selected !== null ? getOptionLabel(options[selected]) : undefined;
    // Styles
    const DropdownStyle = css(Object.assign(Object.assign(Object.assign({}, floatingStyles), { overflowY: "auto", minWidth: 100, backgroundColor: getHex("white", "strong"), color: getHex(color), border: `1px solid ${getHex(color, "weak")}`, backdropFilter: "blur(5px)", borderRadius: theme.sizeClasses.radius[radius] + 5, padding: 5, boxSizing: "border-box", boxShadow: theme.defaults.shadow, animationName: "in", animationDuration: "0.1s", "@keyframes in": {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        } }), dropdownStyle));
    const ItemStyle = {
        outline: "none !important",
    };
    return (_jsxs(_Fragment, { children: [_jsx(InputContainer, Object.assign({ tabIndex: 0, icon: selected ? (_a = getOptionIcon(options[selected])) !== null && _a !== void 0 ? _a : icon : icon, button: secondaryIcon, size: inputSize, radius: radius, variant: variant, color: color, backgroundColor: backgroundColor, loading: loading, disabled: disabled, required: required, ref: refs.setReference }, getReferenceProps(), rest, { children: children !== null && children !== void 0 ? children : _jsx(Text, { style: {
                        flex: 1,
                        color: getFgHex(color, variant),
                        opacity: selectedItemLabel ? 1 : 0.5,
                    }, children: selectedItemLabel !== null && selectedItemLabel !== void 0 ? selectedItemLabel : placeholder }) })), disclosure.opened && (_jsx(FloatingPortal, { children: _jsx(FloatingFocusManager, { context: context, modal: false, children: _jsx("div", Object.assign({ ref: refs.setFloating, css: DropdownStyle }, getFloatingProps(), { children: options.map((value, i) => (_jsx(ButtonWithIcon, Object.assign({ ref: (node) => {
                                listRef.current[i] = node;
                            }, icon: i === selected ?
                                _jsx(IconCheck, {}) :
                                typeof value !== "string" ? value === null || value === void 0 ? void 0 : value.icon : undefined, variant: i === highlighted ? "light" : "subtle", width: "100%", color: color, style: ItemStyle }, getItemProps({
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
                        }), { children: getOptionLabel(value) }), i))) })) }) }))] }));
}
