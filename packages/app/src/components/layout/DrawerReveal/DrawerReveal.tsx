import { Disclosure, Flex, MakeResponsive, useResponsiveProps } from "@valence-ui/core";
import { CSSProperties, ReactNode, forwardRef, useEffect, useRef} from "react";

export type DrawerRevealProps = {
  /** The content to appear in front of the behind content */
  front: ReactNode;
  /** The content to appear behind the front content */
  behind: ReactNode;

  /** The disclosure to handle drawer state */
  disclosure: Disclosure;

  /** How far from the right the front content should appear when opened. `20` by default. */
  rightOffset?: number;
}

export const DrawerReveal = forwardRef(function DrawerReveal(
  props: MakeResponsive<DrawerRevealProps>,
  ref: any,
) {
  const {
    front,
    behind,
    disclosure,

    rightOffset = 20,
  } = useResponsiveProps<DrawerRevealProps>(props);

  const outerRef = ref ?? useRef<HTMLDivElement>(null);
  const behindRef = useRef<HTMLDivElement>(null);

  // Styles
  const FrontContainerStyle: CSSProperties = {
    width: "100vw",
    height: "100%",
  }
  const BehindContainerStyle: CSSProperties = {
    width: `calc(100vw - ${rightOffset + 5}px)`,
    height: "100%",
  }
  const OuterContainerStyle: CSSProperties = {
    overflowX: "scroll",
    scrollBehavior: "smooth",

    scrollbarWidth: "none",
    msOverflowStyle: "none",
    // @ts-ignore
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }


  // Logic
  useEffect(() => { 
    if (disclosure.opened) 
      outerRef.current?.scrollTo({ left: behindRef.current?.offsetWidth, behavior: "smooth" });
    else
      outerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  })



  return (
    <>
      <Flex
        direction="row"
        width="100vw"
        height="100%"
        style={OuterContainerStyle}
        ref={outerRef}
      >
        <Flex
          direction="row"
          width="fit-content"
          height="100%"
          gap={5}
        >
          <Flex
            style={BehindContainerStyle}
            ref={behindRef}
          >
            {behind}
          </Flex>

          <Flex
            style={FrontContainerStyle}
          >
            {front}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
});