import { useEffect, useState } from "react";
export function useScrollManager(parentRef, childRef, callbacks, allowDrag = true, direction = "x") {
    // Native scroll
    const [scrollManager, setScrollManager] = useState({
        scrolling: false,
        isAtStart: true,
        isAtEnd: false,
        nearestChild: 0,
        isMouseDown: false,
        methods: {
            handleScroll: handleScroll,
            handleScrollEnd: handleScrollEnd,
            handleScrollStart: handleScrollStart,
        }
    });
    function handleScroll(e) {
        var _a;
        if (!scrollManager.scrolling)
            handleScrollStart(e);
        const scrollFromStart = direction === "x" ? e.currentTarget.scrollLeft : e.currentTarget.scrollTop;
        const scrollSize = direction === "x" ? e.currentTarget.scrollWidth : e.currentTarget.scrollHeight;
        const offsetSize = direction === "x" ? e.currentTarget.offsetWidth : e.currentTarget.offsetHeight;
        const isAtStart = scrollFromStart === 0;
        const isAtEnd = scrollFromStart + offsetSize >= scrollSize;
        // Find the nearest child to the left of the container
        const children = (_a = childRef.current) === null || _a === void 0 ? void 0 : _a.children;
        if (children) {
            let nearestChild = 0;
            let nearestChildDistance = Infinity;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const childScrollFromStart = direction === "x" ? child.offsetLeft : child.offsetTop;
                const childOffsetSize = direction === "x" ? child.offsetWidth : child.offsetHeight;
                const distance = Math.abs(childScrollFromStart - (childOffsetSize / 2) - scrollFromStart);
                if (distance < nearestChildDistance && distance > 0) {
                    nearestChild = i;
                    nearestChildDistance = distance;
                }
            }
            setScrollManager({
                scrolling: true,
                isAtStart: isAtStart,
                isAtEnd: isAtEnd,
                nearestChild: nearestChild,
                isMouseDown: isMouseDown,
                methods: scrollManager.methods,
            });
        }
        if (callbacks.onScroll)
            callbacks.onScroll(e);
    }
    function handleScrollEnd(e) {
        setScrollManager({
            scrolling: false,
            isAtStart: scrollManager.isAtStart,
            isAtEnd: scrollManager.isAtEnd,
            nearestChild: scrollManager.nearestChild,
            isMouseDown: isMouseDown,
            methods: {
                handleScroll: handleScroll,
                handleScrollEnd: handleScrollEnd,
                handleScrollStart: handleScrollStart,
            }
        });
        if (callbacks.onScrollEnd)
            callbacks.onScrollEnd(e);
    }
    function handleScrollStart(e) {
        setScrollManager({
            scrolling: true,
            isAtStart: scrollManager.isAtStart,
            isAtEnd: scrollManager.isAtEnd,
            nearestChild: scrollManager.nearestChild,
            isMouseDown: isMouseDown,
            methods: scrollManager.methods,
        });
        if (callbacks.onScrollStart)
            callbacks.onScrollStart(e);
    }
    // Drag scroll
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseCoords, setMouseCoords] = useState({ startDistance: 0, scrollDistance: 0 });
    function handleDragStart(e) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        setIsMouseDown(true);
        setMouseCoords({
            startDistance: direction === "x" ?
                (e.pageX - ((_b = (_a = childRef.current) === null || _a === void 0 ? void 0 : _a.offsetLeft) !== null && _b !== void 0 ? _b : 0))
                : (e.pageY - ((_d = (_c = childRef.current) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0)),
            scrollDistance: direction === "x" ?
                (_f = (_e = parentRef.current) === null || _e === void 0 ? void 0 : _e.scrollLeft) !== null && _f !== void 0 ? _f : 0
                : (_h = (_g = parentRef.current) === null || _g === void 0 ? void 0 : _g.scrollTop) !== null && _h !== void 0 ? _h : 0,
        });
        handleScrollStart(e);
    }
    function handleDragEnd(e) {
        setIsMouseDown(false);
        handleScrollEnd(e);
    }
    function handleDrag(e) {
        var _a, _b, _c, _d, _e;
        if (!isMouseDown)
            return;
        e.preventDefault();
        const distance = direction === "x" ?
            e.pageX - ((_b = (_a = childRef.current) === null || _a === void 0 ? void 0 : _a.offsetLeft) !== null && _b !== void 0 ? _b : 0)
            : e.pageY - ((_d = (_c = childRef.current) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0);
        const walkDistance = (distance - mouseCoords.startDistance);
        (_e = parentRef.current) === null || _e === void 0 ? void 0 : _e.scrollTo({
            left: direction === "x" ? mouseCoords.scrollDistance - walkDistance : 0,
            top: direction === "y" ? mouseCoords.scrollDistance - walkDistance : 0,
        });
    }
    // Component event listeners
    useEffect(() => {
        var _a, _b;
        (_a = parentRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", handleScroll, false);
        (_b = childRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener("mousedown", handleDragStart, false);
        return () => {
            var _a, _b;
            (_a = parentRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("scroll", handleScroll, false);
            (_b = childRef.current) === null || _b === void 0 ? void 0 : _b.removeEventListener("mousedown", handleDragStart, false);
        };
    }, [parentRef.current, childRef.current]);
    // Global event listeners
    useEffect(() => {
        window.addEventListener("mouseup", handleDragEnd, false);
        window.addEventListener("mouseleave", handleDragEnd, false);
        window.addEventListener("mousemove", handleDrag, false);
        window.addEventListener("touchend", handleDragEnd, false);
        window.addEventListener("touchcancel", handleDragEnd, false);
        return () => {
            window.removeEventListener("mouseup", handleDragEnd, false);
            window.removeEventListener("mouseleave", handleDragEnd, false);
            window.removeEventListener("mousemove", handleDrag, false);
            window.removeEventListener("touchend", handleDragEnd, false);
            window.removeEventListener("touchcancel", handleDragEnd, false);
        };
    }, [window]);
    // Scroll event listeners
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (scrollManager.scrolling && !isMouseDown) handleScrollEnd({} as any);
    //   }, 100);
    //   return () => clearInterval(interval);
    // }, [scrollManager.scrolling]);
    return scrollManager;
}
