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
import { Flex, IconButton, ValenceContext, useBreakpoint, useDefaultIconProps } from "@valence-ui/core";
import { getReactiveProp } from "@valence-ui/utils";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
const Carousel = forwardRef(function Card(props, ref) {
    const defaultIconProps = useDefaultIconProps();
    const breakpoint = useBreakpoint();
    const { allowDrag = { default: true, mobile: false }, showScrollbar = false, snapToChildren = true, // FIX THIS
    contentProps, showControls = { default: true, mobile: false }, controlIcons = {
        prev: _jsx(IconArrowLeft, Object.assign({}, defaultIconProps.get())),
        next: _jsx(IconArrowRight, Object.assign({}, defaultIconProps.get())),
    }, controlButtonProps, width = "100%", height = "fit-content", gap = 10, style, children } = props, rest = __rest(props, ["allowDrag", "showScrollbar", "snapToChildren", "contentProps", "showControls", "controlIcons", "controlButtonProps", "width", "height", "gap", "style", "children"]);
    const _a = controlButtonProps !== null && controlButtonProps !== void 0 ? controlButtonProps : {}, { color: buttonColor = "black", radius: buttonRadius = "xl" } = _a, buttonPropsRest = __rest(_a, ["color", "radius"]);
    const theme = useContext(ValenceContext);
    const contentRef = useRef(null);
    const containerRef = ref !== null && ref !== void 0 ? ref : useRef(null);
    // Drag handling
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseCoords, setMouseCoords] = useState({ startX: 0, scrollX: 0 });
    function handleDragStart(e) {
        var _a;
        if (!containerRef.current)
            return;
        setIsMouseDown(true);
        setMouseCoords({
            //@ts-ignore
            startX: (e.pageX - contentRef.current.offsetLeft),
            scrollX: (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.scrollLeft,
        });
    }
    function handleDragEnd(e) {
        setIsMouseDown(false);
        if (getReactiveProp(snapToChildren, breakpoint)) {
            scrollToChild(activeChild);
        }
    }
    function handleDrag(e) {
        var _a, _b;
        if (!isMouseDown || !containerRef.current)
            return;
        e.preventDefault();
        //@ts-ignore
        const x = e.pageX - ((_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.offsetLeft);
        const walkX = (x - mouseCoords.startX);
        (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.scrollTo({
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
    // Child handling
    const [activeChild, setActiveChild] = useState(0);
    function scrollToChild(index) {
        var _a, _b, _c, _d;
        // @ts-ignore
        const child = (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.children[index];
        if (child) {
            (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.scrollTo({
                //@ts-ignore
                left: child.offsetLeft - ((_d = (_c = contentRef.current) === null || _c === void 0 ? void 0 : _c.offsetLeft) !== null && _d !== void 0 ? _d : 0),
                behavior: "smooth",
            });
        }
    }
    function scrollToNextChild() {
        scrollToChild(activeChild + 1);
    }
    function scrollToPrevChild() {
        scrollToChild(activeChild - 1);
    }
    function handleScroll(e) {
        var _a, _b;
        // Find the nearest child to the left of the container
        const scrollLeft = e.target.scrollLeft;
        console.log(scrollLeft, e.target.offsetWidth, (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth);
        // @ts-ignore
        const children = (_b = contentRef.current) === null || _b === void 0 ? void 0 : _b.children;
        if (children) {
            let nearestChild = 0;
            let nearestChildDistance = Infinity;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const distance = Math.abs(child.offsetLeft - (child.offsetWidth / 2) - scrollLeft);
                if (distance < nearestChildDistance && distance > 0) {
                    nearestChild = i;
                    nearestChildDistance = distance;
                }
            }
            setActiveChild(nearestChild);
        }
    }
    useEffect(() => {
        var _a;
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", handleScroll, false);
        return () => {
            var _a;
            (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("scroll", handleScroll, false);
        };
    });
    // Styles
    const ContainerStyle = css(Object.assign({ overflowX: "scroll", paddingBottom: getReactiveProp(showScrollbar, breakpoint) ? getReactiveProp(gap, breakpoint) : undefined, cursor: getReactiveProp(allowDrag, breakpoint) ?
            isMouseDown ? "grabbing" : "grab"
            : "unset", 
        // Scrollbar
        "::-webkit-scrollbar": {
            height: 5,
            display: getReactiveProp(showScrollbar, breakpoint) ? undefined : "none",
        }, "::-webkit-scrollbar-thumb": {
            backgroundColor: theme.getColorHex("black", "weak"),
            borderRadius: 5,
        }, "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: theme.getColorHex("black", "medium"),
        }, 
        // Children
        "& > *": {
            draggable: false,
            userSelect: "none",
        } }, getReactiveProp(style, breakpoint)));
    return (_jsx(_Fragment, { children: _jsxs(Flex, { width: getReactiveProp(showControls, breakpoint) ?
                // @ts-ignore
                `calc(${getReactiveProp(width, breakpoint)} + ${(2 * (35 + getReactiveProp(gap, breakpoint)))}px)`
                : width, height: height, align: "center", style: {
                marginLeft: getReactiveProp(showControls, breakpoint) ? -45 : undefined,
            }, children: [getReactiveProp(showControls, breakpoint) &&
                    _jsx(IconButton, Object.assign({ color: buttonColor, radius: buttonRadius, onClick: scrollToPrevChild, disabled: activeChild === 0 }, buttonPropsRest, { children: controlIcons.prev })), _jsx(Flex, Object.assign({ ref: containerRef, width: width, height: height, 
                    //@ts-ignore
                    style: ContainerStyle }, rest, { children: _jsx(Flex, Object.assign({ width: "fit-content", height: "100%", gap: gap, 
                        // @ts-ignore
                        onMouseDown: handleDragStart, ref: contentRef }, contentProps, { children: children })) })), getReactiveProp(showControls, breakpoint) &&
                    _jsx(IconButton, Object.assign({ color: buttonColor, radius: buttonRadius, onClick: scrollToNextChild }, buttonPropsRest, { children: controlIcons.next }))] }) }));
});
const CarouselNamespace = Object.assign(Carousel, {});
export { CarouselNamespace as Carousel };
