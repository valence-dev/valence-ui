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
import { css } from "@emotion/react";
import { useFloating, useClick, useDismiss, useInteractions, offset, flip, size as sizeFn, autoUpdate, FloatingPortal, } from "@floating-ui/react";
import { ButtonWithIcon } from "../../buttons";
import { INPUT_SIZES, InputContainer } from "../InputContainer";
import { forwardRef, useContext, useEffect, useState } from "react";
import { IconCheck, IconSelector } from "@tabler/icons-react";
import { useDefaultIconProps, useDetectKeyDown } from "../../../hooks";
import { ValenceContext } from "../../../ValenceProvider";
import { Flex } from "../../layout";
import { Text } from "../../display";
export const OptionContainer = forwardRef(function OptionContainer(props, ref) {
    const theme = useContext(ValenceContext);
    const defaultIconProps = useDefaultIconProps();
    // Defaults
    const { selectedOption, options, onSelect, nothingFound = "Nothing found...", icon, rightIcon = _jsx(IconSelector, Object.assign({}, defaultIconProps.get())), size = theme.defaultSize, radius = theme.defaultRadius, variant = theme.defaultVariant, loading, disabled, required, color = "black", backgroundColor = color, padding, margin, width, height, grow, dropdownProps = {
        padding: INPUT_SIZES[size].padding,
        backgroundColor: "white",
        color: "black",
        shadow: true,
        height: 200,
    }, dropdownButtonProps, style, inputRef, children } = props, rest = __rest(props, ["selectedOption", "options", "onSelect", "nothingFound", "icon", "rightIcon", "size", "radius", "variant", "loading", "disabled", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "grow", "dropdownProps", "dropdownButtonProps", "style", "inputRef", "children"]);
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
                if (highlightedIndex === -1 || options.length === 0)
                    return;
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
        if (e.key === "Enter")
            setIsOpen(true);
    }, "Enter", !isOpen);
    useEffect(() => {
        if (!isOpen)
            return;
        if (options.length === 0)
            return setHighlightedIndex(-1);
        setHighlightedIndex(0);
    }, [isOpen, options]);
    // Handlers
    function handleSelect(option) {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(option);
        setIsOpen(false);
    }
    // Floating UI
    const { refs, floatingStyles, context } = useFloating({
        placement: "bottom-start",
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({ padding: 15 }),
            sizeFn({
                apply({ rects, elements, availableHeight }) {
                    Object.assign(elements.floating.style, {
                        maxHeight: `${availableHeight}px`,
                        width: `${rects.reference.width}px`,
                    });
                },
            })
        ]
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const { getReferenceProps, getFloatingProps, } = useInteractions([dismiss, click]);
    // Styles
    const DropdownStyle = css(Object.assign({ backgroundColor: theme.getColorHex(dropdownProps.backgroundColor, "strong"), color: theme.getColorHex(dropdownProps.color), outline: `1px solid ${theme.getColorHex(dropdownProps.color, "weak")}`, backdropFilter: "blur(5px)", maxHeight: dropdownProps.height, borderRadius: theme.sizeClasses.radius[radius] + dropdownProps.padding, padding: dropdownProps.padding, boxShadow: dropdownProps.shadow ? theme.defaultShadow : undefined, animationName: "in", animationDuration: "0.1s", overflowY: "auto", "@keyframes in": {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        }, "&::-webkit-scrollbar": {
            width: 10,
        }, "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.getColorHex(dropdownProps.color, "medium"),
            borderRadius: 5,
        } }, floatingStyles));
    return (_jsxs(_Fragment, { children: [_jsx(InputContainer, Object.assign({ icon: icon, button: rightIcon, size: size, radius: radius, variant: variant, loading: loading, disabled: disabled, required: required, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, grow: grow, style: style, inputRef: inputRef, onClick: () => setIsOpen(true), ref: refs.setReference }, getReferenceProps(), rest, { children: children })), isOpen && (_jsx(FloatingPortal, { children: _jsx("div", Object.assign({ css: DropdownStyle, ref: refs.setFloating }, getFloatingProps(), { children: options.length === 0 ?
                        _jsx(Flex, { height: theme.sizeClasses.height[size], align: "center", justify: "center", children: _jsx(Text, { align: "center", color: theme.getColorHex("black", "strong"), children: nothingFound }) })
                        : options.map((option, i) => (_jsx(ButtonWithIcon, Object.assign({ icon: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) === option.label
                                ? _jsx(IconCheck, Object.assign({}, defaultIconProps.get()))
                                : option.left, color: color, variant: highlightedIndex === i ? "light" : "subtle", radius: radius, size: size, width: "100%" }, dropdownButtonProps, { onClick: () => handleSelect(option), children: option.label }), i))) })) }))] }));
});
