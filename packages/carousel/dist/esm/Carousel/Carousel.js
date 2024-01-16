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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Flex, Icon, IconButton, ValenceContext, useColors, useResponsiveProps } from "@valence-ui/core";
import React, { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
const Carousel = forwardRef(function Card(props, ref) {
    var _a, _b;
    const _c = useResponsiveProps(props), { allowDrag = { default: true, mobile: false }, showScrollbar = false, snapToChildren = true, changeActiveOnScroll = true, contentProps, activeChild: controlledActiveChild, setActiveChild: controlledSetActiveChild, showControls = { default: true, mobile: false }, controlIcons = {
        prev: _jsx(Icon, { children: _jsx(IconArrowLeft, {}) }),
        next: _jsx(Icon, { children: _jsx(IconArrowRight, {}) }),
    }, controlButtonProps, width = "100%", height = "fit-content", gap = 10, style, children } = _c, rest = __rest(_c, ["allowDrag", "showScrollbar", "snapToChildren", "changeActiveOnScroll", "contentProps", "activeChild", "setActiveChild", "showControls", "controlIcons", "controlButtonProps", "width", "height", "gap", "style", "children"]);
    const _d = controlButtonProps !== null && controlButtonProps !== void 0 ? controlButtonProps : {}, { color: buttonColor = "black", radius: buttonRadius = "xl" } = _d, buttonPropsRest = __rest(_d, ["color", "radius"]);
    const theme = useContext(ValenceContext);
    const colors = useColors();
    const contentRef = useRef(null);
    const parentRef = ref !== null && ref !== void 0 ? ref : useRef(null);
    // Drag handling
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [mouseCoords, setMouseCoords] = useState({ startX: 0, scrollX: 0 });
    function handleDragStart(e) {
        var _a;
        if (!parentRef.current)
            return;
        setIsMouseDown(true);
        setMouseCoords({
            //@ts-ignore
            startX: (e.pageX - contentRef.current.offsetLeft),
            scrollX: (_a = parentRef.current) === null || _a === void 0 ? void 0 : _a.scrollLeft,
        });
        e.stopPropagation();
    }
    function handleDragEnd(e) {
        setIsMouseDown(false);
        e.stopPropagation();
        if (!isDragging)
            return;
        if (snapToChildren)
            scrollToChild(nearestChild);
        if (changeActiveOnScroll)
            setActiveChild(nearestChild);
        setTimeout(() => {
            setIsDragging(false);
        }, 100);
    }
    function handleDrag(e) {
        var _a, _b;
        if (!isMouseDown || !parentRef.current)
            return;
        e.preventDefault();
        //@ts-ignore
        const x = e.pageX - ((_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.offsetLeft);
        const walkX = (x - mouseCoords.startX);
        if (Math.abs(walkX) > 5)
            setIsDragging(true);
        (_b = parentRef.current) === null || _b === void 0 ? void 0 : _b.scrollTo({
            left: mouseCoords.scrollX - walkX,
        });
    }
    useEffect(() => {
        window.addEventListener("mousemove", handleDrag, false);
        window.addEventListener("mouseup", handleDragEnd, false);
        window.addEventListener("mouseleave", handleDragEnd, false);
        window.addEventListener("touchend", handleDragEnd, false);
        window.addEventListener("touchcancel", handleDragEnd, false);
        return () => {
            window.removeEventListener("mousemove", handleDrag, false);
            window.removeEventListener("mouseup", handleDragEnd, false);
            window.removeEventListener("mouseleave", handleDragEnd, false);
            window.removeEventListener("touchend", handleDragEnd, false);
            window.removeEventListener("touchcancel", handleDragEnd, false);
        };
    });
    // Scroll handling
    const [nearestChild, setNearestChild] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);
    const [uncontrolledActiveChild, uncontrolledSetActiveChild] = useState(0);
    const activeChild = controlledActiveChild !== null && controlledActiveChild !== void 0 ? controlledActiveChild : uncontrolledActiveChild;
    const setActiveChild = controlledSetActiveChild !== null && controlledSetActiveChild !== void 0 ? controlledSetActiveChild : uncontrolledSetActiveChild;
    function scrollToChild(index) {
        var _a, _b, _c, _d;
        // @ts-ignore
        const child = (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.children[index];
        if (child) {
            setIsAutoScrolling(true);
            (_b = parentRef.current) === null || _b === void 0 ? void 0 : _b.scrollTo({
                //@ts-ignore
                left: child.offsetLeft - ((_d = (_c = contentRef.current) === null || _c === void 0 ? void 0 : _c.offsetLeft) !== null && _d !== void 0 ? _d : 0),
                behavior: "smooth",
            });
            setTimeout(() => {
                setIsAutoScrolling(false);
            }, 350);
        }
    }
    function handleScroll(e) {
        var _a;
        // Find the nearest child to the left of the container
        const scrollLeft = e.target.scrollLeft;
        // @ts-ignore
        const children = (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.children;
        if (children) {
            let nearestChild = 0;
            let nearestChildDistance = Infinity;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const distance = Math.abs(child.offsetLeft - (child.offsetWidth / 2) - scrollLeft);
                if (distance < nearestChildDistance) {
                    nearestChild = i;
                    nearestChildDistance = distance;
                }
            }
            setNearestChild(nearestChild);
            if (!isAutoScrolling
                && changeActiveOnScroll)
                setActiveChild(nearestChild);
        }
    }
    useEffect(() => {
        var _a;
        (_a = parentRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", handleScroll, false);
        return () => {
            var _a;
            (_a = parentRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("scroll", handleScroll, false);
        };
    });
    // Input handling
    function nextChild() {
        const ac = Math.min(activeChild + 1, children.length - 1);
        setActiveChild(ac);
        scrollToChild(ac);
    }
    function prevChild() {
        const ac = Math.max(activeChild - 1, 0);
        setActiveChild(ac);
        scrollToChild(ac);
    }
    // Styles
    const buttonWidth = (_b = theme.sizeClasses.height[(_a = buttonPropsRest.size) !== null && _a !== void 0 ? _a : theme.defaults.size]) !== null && _b !== void 0 ? _b : 35;
    const gapWidth = gap;
    const ContainerStyle = {
        marginLeft: showControls ?
            `calc(${-buttonWidth}px - ${gapWidth}px)`
            : undefined,
        marginRight: showControls ?
            `calc(${-buttonWidth}px - ${gapWidth}px)`
            : undefined,
        width: showControls ?
            // @ts-ignore
            `calc(${width} + ${(2 * (buttonWidth + gapWidth))}px)`
            : width,
        boxSizing: "border-box",
    };
    const ParentStyle = css(Object.assign({ overflowX: "scroll", paddingBottom: showScrollbar ? gap : undefined, cursor: allowDrag ?
            isMouseDown ? "grabbing" : "grab"
            : "unset", boxSizing: "border-box", 
        // Scrollbar
        "::-webkit-scrollbar": {
            height: 5,
            display: showScrollbar ? undefined : "none",
        }, "::-webkit-scrollbar-thumb": {
            backgroundColor: colors.getHex("black", "weak"),
            borderRadius: 5,
        }, "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: colors.getHex("black", "medium"),
        }, 
        // Children
        "& > *": {
            draggable: false,
            userSelect: "none",
        } }, style));
    return (_jsx(_Fragment, { children: _jsxs(Flex, { height: height, align: "center", style: ContainerStyle, children: [showControls &&
                    _jsx(IconButton, Object.assign({ color: buttonColor, radius: buttonRadius, onClick: prevChild, disabled: activeChild === 0 }, buttonPropsRest, { children: controlIcons.prev })), _jsx(Flex, Object.assign({ ref: parentRef, width: width, height: height, 
                    //@ts-ignore
                    style: ParentStyle }, rest, { children: _jsx(Flex, Object.assign({ width: "fit-content", height: "100%", gap: gap, 
                        // @ts-ignore
                        onMouseDown: handleDragStart, ref: contentRef }, contentProps, { children: children.map((child, i) => React.cloneElement(child, {
                            key: i,
                            isNearest: i === nearestChild,
                            isActive: i === activeChild,
                            isDragging: isDragging,
                            onClick: () => {
                                !isDragging && setActiveChild(i);
                                !isDragging && scrollToChild(i);
                            },
                        })) })) })), showControls &&
                    _jsx(IconButton, Object.assign({ color: buttonColor, radius: buttonRadius, onClick: nextChild, disabled: activeChild === children.length - 1 }, buttonPropsRest, { children: controlIcons.next }))] }) }));
});
const CarouselNamespace = Object.assign(Carousel, {});
export { CarouselNamespace as Carousel };
