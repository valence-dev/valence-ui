import { Disclosure, Flex, MakeResponsive, useColors, useResponsiveProps } from "@valence-ui/core";
import { CSSProperties, ReactNode, forwardRef, useEffect, useState } from "react";
import { PanInfo, motion, useDragControls } from "framer-motion";
import { useWindowSize } from 'usehooks-ts';

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

  const { getHex } = useColors();
  const windowSize = useWindowSize();
  const dragControls = useDragControls();

  const [randomState, setRandomState] = useState(Math.random());
  const [targetPosition, setTargetPosition] = useState(0);


  // Styles
  const FrontContainerStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    touchAction: "none",
    width: "100%",
    height: "100%",
  }
  const BehindContainerStyle: CSSProperties = {
    userSelect: "none",
    touchAction: "none",
    width: `calc(100% - ${rightOffset + 5}px)`,
    height: "100%",
  }


  // Logic
  function handleDrag(info: PanInfo) {
    console.log(info);
    if (Math.abs(info.offset.x) > windowSize.width / 3
      || Math.abs(info.velocity.x) > 300
    ) {
      if (info.offset.x < 0) {
        disclosure.close();
        setRandomState(Math.random());
      } else {
        disclosure.open();
        setRandomState(Math.random());
      }
    } else {
      // Keep current state; change random position
      setRandomState(Math.random());
    }
  }
  useEffect(() => {
    if (disclosure.opened) {
      setTargetPosition(windowSize.width - rightOffset + (Math.random() / 100));
    } else {
      setTargetPosition(0 + (Math.random() / 100));
    }
  }, [randomState, disclosure.opened, windowSize.width, rightOffset])



  return (
    <>
      <Flex
        direction="row"
        width="100%"
        height="100%"
        ref={ref}
      >
        <Flex
          style={BehindContainerStyle}

          // @ts-ignore
          onPointerDown={(event) => { dragControls.start(event, { snapToCursor: false }) }}
        >
          {behind}
        </Flex>

        <motion.div
          style={FrontContainerStyle}
          drag="x"
          dragConstraints={{ left: 0, right: windowSize.width - rightOffset }}
          dragControls={dragControls}
          onDragEnd={(_, info) => handleDrag(info)}
          animate={{ x: targetPosition }}
          dragElastic={0.2}
        >
          {front}
        </motion.div>
      </Flex>
    </>
  )
});