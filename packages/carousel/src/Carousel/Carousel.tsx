/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Flex, FlexProps, Icon, IconButton, IconButtonProps, ValenceContext, useBreakpoint } from "@valence-ui/core";
import { ReactiveProp, getReactiveProp } from "@valence-ui/utils";
import React, { CSSProperties, ReactNode, forwardRef, useContext, useEffect, useRef, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export type CarouselProps =
  FlexProps
  & {
    /** Whether to allow the carousel content to be dragged on desktop. `true` on desktop devices by default. */
    allowDrag?: ReactiveProp<boolean>;
    /** Whether to show the horizontal scrollbar. `false` by default. */
    showScrollbar?: ReactiveProp<boolean>;
    /** Whether to snap to the nearest child when no longer scrolling. `true` by default. */
    snapToChildren?: ReactiveProp<boolean>;
    /** Whether the active child should be changed during scroll. `true` by default. */
    changeActiveOnScroll?: ReactiveProp<boolean>;

    /** Optional props to pass to the content flex component */
    contentProps?: FlexProps;

    /** The active child of this carousel. For use when controlled. */
    activeChild?: number;
    /** Sets the active child of this carousel. For use when controlled. */
    setActiveChild?: (index: number) => void;


    /** Whether to the carousel controls. `true` by default. */
    showControls?: ReactiveProp<boolean>;
    /** Optional overrides for the icons to use for the controls */
    controlIcons?: {
      prev: ReactNode;
      next: ReactNode;
    }
    /** Optional props to pass to the control buttons */
    controlButtonProps?: IconButtonProps;

    children: ReactNode[];
  }

const Carousel = forwardRef(function Card(
  props: CarouselProps,
  ref: any
) {
  const breakpoint = useBreakpoint();

  const {
    allowDrag = { default: true, mobile: false },
    showScrollbar = false,
    snapToChildren = true,
    changeActiveOnScroll = true,
    contentProps,

    activeChild: controlledActiveChild,
    setActiveChild: controlledSetActiveChild,

    showControls = { default: true, mobile: false },
    controlIcons = {
      prev: <Icon><IconArrowLeft /></Icon>,
      next: <Icon><IconArrowRight /></Icon>,
    },
    controlButtonProps,

    width = "100%",
    height = "fit-content",
    gap = 10,


    style,
    children,
    ...rest
  } = props;
  const {
    color: buttonColor = "black",
    radius: buttonRadius = "xl",
    ...buttonPropsRest
  } = controlButtonProps ?? {};

  const theme = useContext(ValenceContext);
  const contentRef = useRef(null);
  const parentRef = ref ?? useRef(null);


  // Drag handling
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [mouseCoords, setMouseCoords] = useState({ startX: 0, scrollX: 0 });

  function handleDragStart(e: any) {
    if (!parentRef.current) return;
    setIsMouseDown(true);
    setMouseCoords({
      //@ts-ignore
      startX: (e.pageX - contentRef.current.offsetLeft),
      scrollX: parentRef.current?.scrollLeft,
    });
    e.stopPropagation();
  }
  function handleDragEnd(e: any) {
    setIsMouseDown(false);
    e.stopPropagation();
    if (!isDragging) return;

    if (getReactiveProp(snapToChildren, breakpoint))
      scrollToChild(nearestChild);
    if (getReactiveProp(changeActiveOnScroll, breakpoint))
      setActiveChild(nearestChild);

    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  }
  function handleDrag(e: any) {
    if (!isMouseDown || !parentRef.current) return;
    e.preventDefault();
    //@ts-ignore
    const x = e.pageX - contentRef.current?.offsetLeft;

    const walkX = (x - mouseCoords.startX);

    if (Math.abs(walkX) > 5) setIsDragging(true);

    parentRef.current?.scrollTo({
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
    }
  })


  // Scroll handling
  const [nearestChild, setNearestChild] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const [uncontrolledActiveChild, uncontrolledSetActiveChild] = useState(0);
  const activeChild = controlledActiveChild ?? uncontrolledActiveChild;
  const setActiveChild = controlledSetActiveChild ?? uncontrolledSetActiveChild;

  function scrollToChild(index: number) {
    // @ts-ignore
    const child = contentRef.current?.children[index];
    if (child) {
      setIsAutoScrolling(true);
      parentRef.current?.scrollTo({
        //@ts-ignore
        left: child.offsetLeft - (contentRef.current?.offsetLeft ?? 0),
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsAutoScrolling(false);
      }, 350);
    }
  }

  function handleScroll(e: any) {
    // Find the nearest child to the left of the container
    const scrollLeft = e.target.scrollLeft;

    // @ts-ignore
    const children = contentRef.current?.children;

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
        && getReactiveProp(changeActiveOnScroll, breakpoint))
        setActiveChild(nearestChild);
    }
  }

  useEffect(() => {
    parentRef.current?.addEventListener("scroll", handleScroll, false);
    return () => {
      parentRef.current?.removeEventListener("scroll", handleScroll, false);
    }
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
  const buttonWidth = theme.sizeClasses.height[buttonPropsRest.size ?? theme.defaultSize] ?? 35;
  const gapWidth = getReactiveProp(gap, breakpoint);
  const ContainerStyle: CSSProperties = {
    marginLeft: getReactiveProp(showControls, breakpoint) ?
      `calc(${-buttonWidth}px - ${gapWidth}px)`
      : undefined,
    marginRight: getReactiveProp(showControls, breakpoint) ?
      `calc(${-buttonWidth}px - ${gapWidth}px)`
      : undefined,

    width: getReactiveProp(showControls, breakpoint) ?
      // @ts-ignore
      `calc(${getReactiveProp(width, breakpoint)} + ${(2 * (buttonWidth + gapWidth))}px)`
      : getReactiveProp(width, breakpoint),

    boxSizing: "border-box",
  }
  const ParentStyle = css({
    overflowX: "scroll",
    paddingBottom: getReactiveProp(showScrollbar, breakpoint) ? getReactiveProp(gap, breakpoint) : undefined,
    cursor: getReactiveProp(allowDrag, breakpoint) ?
      isMouseDown ? "grabbing" : "grab"
      : "unset",
    boxSizing: "border-box",

    // Scrollbar
    "::-webkit-scrollbar": {
      height: 5,
      display: getReactiveProp(showScrollbar, breakpoint) ? undefined : "none",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: theme.getColorHex("black", "weak"),
      borderRadius: 5,
    },
    "::-webkit-scrollbar-thumb:hover": {
      backgroundColor: theme.getColorHex("black", "medium"),
    },

    // Children
    "& > *": {
      draggable: false,
      userSelect: "none",
    },

    ...getReactiveProp(style, breakpoint),
  });


  return (
    <>
      <Flex
        height={height}
        align="center"
        style={ContainerStyle}
      >
        {getReactiveProp(showControls, breakpoint) &&
          <IconButton
            color={buttonColor}
            radius={buttonRadius}
            onClick={prevChild}
            disabled={activeChild === 0}

            {...buttonPropsRest}
          >
            {controlIcons.prev}
          </IconButton>
        }

        {/* Parent */}
        <Flex
          ref={parentRef}
          width={width}
          height={height}
          //@ts-ignore
          style={ParentStyle}

          {...rest}
        >
          {/* Content */}
          <Flex
            width="fit-content"
            height="100%"
            gap={gap}

            // @ts-ignore
            onMouseDown={handleDragStart}

            ref={contentRef}
            {...contentProps}
          >
            {children.map((child, i) =>
              React.cloneElement(child as any, {
                key: i,
                isNearest: i === nearestChild,
                isActive: i === activeChild,
                isDragging: isDragging,
                onClick: () => {
                  !isDragging && setActiveChild(i);
                  !isDragging && scrollToChild(i);
                },
              })
            )}
          </Flex>
        </Flex>

        {getReactiveProp(showControls, breakpoint) &&
          <IconButton
            color={buttonColor}
            radius={buttonRadius}
            onClick={nextChild}
            disabled={activeChild === children.length - 1}

            {...buttonPropsRest}
          >
            {controlIcons.next}
          </IconButton>
        }
      </Flex>
    </>
  )
})


const CarouselNamespace = Object.assign(Carousel, {
});
export { CarouselNamespace as Carousel }