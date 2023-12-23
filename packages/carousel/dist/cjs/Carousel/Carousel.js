"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Carousel = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("@emotion/react");
const core_1 = require("@valence-ui/core");
const utils_1 = require("@valence-ui/utils");
const react_2 = __importStar(require("react"));
const icons_react_1 = require("@tabler/icons-react");
const Carousel = (0, react_2.forwardRef)(function Card(props, ref) {
    var _a, _b;
    const breakpoint = (0, core_1.useBreakpoint)();
    const { allowDrag = { default: true, mobile: false }, showScrollbar = false, snapToChildren = true, contentProps, activeChild: controlledActiveChild, setActiveChild: controlledSetActiveChild, showControls = { default: true, mobile: false }, controlIcons = {
        prev: (0, jsx_runtime_1.jsx)(core_1.Icon, { children: (0, jsx_runtime_1.jsx)(icons_react_1.IconArrowLeft, {}) }),
        next: (0, jsx_runtime_1.jsx)(core_1.Icon, { children: (0, jsx_runtime_1.jsx)(icons_react_1.IconArrowRight, {}) }),
    }, controlButtonProps, width = "100%", height = "fit-content", gap = 10, style, children } = props, rest = __rest(props, ["allowDrag", "showScrollbar", "snapToChildren", "contentProps", "activeChild", "setActiveChild", "showControls", "controlIcons", "controlButtonProps", "width", "height", "gap", "style", "children"]);
    const _c = controlButtonProps !== null && controlButtonProps !== void 0 ? controlButtonProps : {}, { color: buttonColor = "black", radius: buttonRadius = "xl" } = _c, buttonPropsRest = __rest(_c, ["color", "radius"]);
    const theme = (0, react_2.useContext)(core_1.ValenceContext);
    const contentRef = (0, react_2.useRef)(null);
    const parentRef = ref !== null && ref !== void 0 ? ref : (0, react_2.useRef)(null);
    // Drag handling
    const [isMouseDown, setIsMouseDown] = (0, react_2.useState)(false);
    const [isDragging, setIsDragging] = (0, react_2.useState)(false);
    const [mouseCoords, setMouseCoords] = (0, react_2.useState)({ startX: 0, scrollX: 0 });
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
        if ((0, utils_1.getReactiveProp)(snapToChildren, breakpoint)) {
            scrollToChild(nearestChild);
            setActiveChild(nearestChild);
        }
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
    (0, react_2.useEffect)(() => {
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
    const [nearestChild, setNearestChild] = (0, react_2.useState)(0);
    const [isAutoScrolling, setIsAutoScrolling] = (0, react_2.useState)(false);
    const [uncontrolledActiveChild, uncontrolledSetActiveChild] = (0, react_2.useState)(0);
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
            if (!isAutoScrolling)
                setActiveChild(nearestChild);
        }
    }
    (0, react_2.useEffect)(() => {
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
    const buttonWidth = (_b = theme.sizeClasses.height[(_a = buttonPropsRest.size) !== null && _a !== void 0 ? _a : theme.defaultSize]) !== null && _b !== void 0 ? _b : 35;
    const gapWidth = (0, utils_1.getReactiveProp)(gap, breakpoint);
    const ContainerStyle = {
        marginLeft: (0, utils_1.getReactiveProp)(showControls, breakpoint) ?
            `calc(${-buttonWidth}px - ${gapWidth}px)`
            : undefined,
        marginRight: (0, utils_1.getReactiveProp)(showControls, breakpoint) ?
            `calc(${-buttonWidth}px - ${gapWidth}px)`
            : undefined,
        width: (0, utils_1.getReactiveProp)(showControls, breakpoint) ?
            // @ts-ignore
            `calc(${(0, utils_1.getReactiveProp)(width, breakpoint)} + ${(2 * (buttonWidth + gapWidth))}px)`
            : (0, utils_1.getReactiveProp)(width, breakpoint),
        boxSizing: "border-box",
    };
    const ParentStyle = (0, react_1.css)(Object.assign({ overflowX: "scroll", paddingBottom: (0, utils_1.getReactiveProp)(showScrollbar, breakpoint) ? (0, utils_1.getReactiveProp)(gap, breakpoint) : undefined, cursor: (0, utils_1.getReactiveProp)(allowDrag, breakpoint) ?
            isMouseDown ? "grabbing" : "grab"
            : "unset", boxSizing: "border-box", 
        // Scrollbar
        "::-webkit-scrollbar": {
            height: 5,
            display: (0, utils_1.getReactiveProp)(showScrollbar, breakpoint) ? undefined : "none",
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
        } }, (0, utils_1.getReactiveProp)(style, breakpoint)));
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(core_1.Flex, { height: height, align: "center", style: ContainerStyle, children: [(0, utils_1.getReactiveProp)(showControls, breakpoint) &&
                    (0, jsx_runtime_1.jsx)(core_1.IconButton, Object.assign({ color: buttonColor, radius: buttonRadius, onClick: prevChild, disabled: activeChild === 0 }, buttonPropsRest, { children: controlIcons.prev })), (0, jsx_runtime_1.jsx)(core_1.Flex, Object.assign({ ref: parentRef, width: width, height: height, 
                    //@ts-ignore
                    style: ParentStyle }, rest, { children: (0, jsx_runtime_1.jsx)(core_1.Flex, Object.assign({ width: "fit-content", height: "100%", gap: gap, 
                        // @ts-ignore
                        onMouseDown: handleDragStart, ref: contentRef }, contentProps, { children: children.map((child, i) => react_2.default.cloneElement(child, {
                            key: i,
                            isNearest: i === nearestChild,
                            isActive: i === activeChild,
                            isDragging: isDragging,
                            onClick: () => {
                                !isDragging && setActiveChild(i);
                                !isDragging && scrollToChild(i);
                            },
                        })) })) })), (0, utils_1.getReactiveProp)(showControls, breakpoint) &&
                    (0, jsx_runtime_1.jsx)(core_1.IconButton, Object.assign({ color: buttonColor, radius: buttonRadius, onClick: nextChild, disabled: activeChild === children.length - 1 }, buttonPropsRest, { children: controlIcons.next }))] }) }));
});
const CarouselNamespace = Object.assign(Carousel, {});
exports.Carousel = CarouselNamespace;
