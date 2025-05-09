import { CSSProperties } from "react";
import { MakeResponsive, useResponsiveProps } from "../utilities";

export type PositionHorizontal = "left" | "right" | "center";
export type PositionVertical = "top" | "bottom" | "center";

export type FloatingOffset =
  | number
  | {
      horizontal: CSSProperties["left"];
      vertical: CSSProperties["top"];
    }
  | {
      top: CSSProperties["top"];
      right: CSSProperties["right"];
      bottom: CSSProperties["bottom"];
      left: CSSProperties["left"];
    };
export type UseFloatingProps = {
  /** The horizontal position of the element. */
  positionHorizontal?: PositionHorizontal;
  /** The vertical position of the element. */
  positionVertical?: PositionVertical;
  /** The offset of the element. */
  offset?: FloatingOffset;
  /** Whether to calculate the offset based on the safe area. */
  calculateOffset?: boolean;
};
export type UseFloatingOutput = {
  style: CSSProperties;
};

function getOffset(
  offset: FloatingOffset,
  position: PositionHorizontal | PositionVertical
): any {
  let offsetValue: any = offset;

  if (typeof offset === "number") offsetValue = offset;
  else if (
    offset.hasOwnProperty("horizontal") &&
    (position === "left" || position === "right")
  )
    // @ts-ignore
    offsetValue = offset.horizontal;
  else if (
    offset.hasOwnProperty("vertical") &&
    (position === "top" || position === "bottom")
  )
    // @ts-ignore
    offsetValue = offset.vertical;
  else if (offset.hasOwnProperty("top") && position === "top")
    // @ts-ignore
    offsetValue = offset.top;
  else if (offset.hasOwnProperty("right") && position === "right")
    // @ts-ignore
    offsetValue = offset.right;
  else if (offset.hasOwnProperty("bottom") && position === "bottom")
    // @ts-ignore
    offsetValue = offset.bottom;
  else if (offset.hasOwnProperty("left") && position === "left")
    // @ts-ignore
    offsetValue = offset.left;
  else offsetValue = 0;

  if (typeof offsetValue === "number") return `${offsetValue}px`;
  else return offsetValue;
}

export function useFloating(
  props: MakeResponsive<UseFloatingProps>
): UseFloatingOutput {
  const {
    positionHorizontal = "left",
    positionVertical = "top",
    offset = 15,
    calculateOffset = true,
  } = useResponsiveProps<UseFloatingProps>(props);

  var offsetTop: any;
  var offsetRight: any;
  var offsetBottom: any;
  var offsetLeft: any;

  // Calculate offset
  if (positionVertical === "center") offsetTop = "50%";
  else offsetTop = getOffset(offset, "top");
  if (positionHorizontal === "center") offsetLeft = "50%";
  else offsetLeft = getOffset(offset, "left");
  offsetRight = getOffset(offset, "right");
  offsetBottom = getOffset(offset, "bottom");

  if (calculateOffset) {
    offsetTop = `calc(var(--safe-area-inset-top) + ${offsetTop})`;
    offsetRight = `calc(var(--safe-area-inset-right) + ${offsetRight})`;
    offsetBottom = `calc(var(--safe-area-inset-bottom) + ${offsetBottom})`;
    offsetLeft = `calc(var(--safe-area-inset-left) + ${offsetLeft})`;
  }

  // Calculate transform
  let transformFunction: string = "";
  if (positionHorizontal === "center") transformFunction += "translateX(-50%) ";
  if (positionVertical === "center") transformFunction += "translateY(-50%)";

  const style: CSSProperties = {
    top:
      positionVertical === "top" || positionVertical === "center"
        ? offsetTop
        : undefined,
    right: positionHorizontal === "right" ? offsetRight : undefined,
    bottom: positionVertical === "bottom" ? offsetBottom : undefined,
    left:
      positionHorizontal === "left" || positionHorizontal === "center"
        ? offsetLeft
        : undefined,

    transform: transformFunction ?? undefined,
  };

  return { style };
}
