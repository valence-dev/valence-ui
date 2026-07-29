import { createContext, useContext } from "react";

export type CarouselChildProps = {
  /** Indicates whether this child is nearest to the left of the container  */
  isNearest?: boolean;
  /** Indicates whether this child is the one currently focused  */
  isActive?: boolean;
  /** Indicates whether the parent carousel is being dragged.  */
  isDragging?: boolean;
};

export type CarouselChildState = Required<CarouselChildProps> & {
  /** This child's position within the carousel. `-1` outside of one. */
  index: number;
};

/** The state a child sees when it is rendered outside of a `Carousel`. */
const defaultState: CarouselChildState = {
  index: -1,
  isActive: false,
  isNearest: false,
  isDragging: false,
};

export const CarouselChildContext =
  createContext<CarouselChildState>(defaultState);

/** Reads the state the enclosing `Carousel` publishes for this slide.
 *
 * The carousel used to clone every child to inject these flags as props, which
 * meant a slide that didn't know to absorb them forwarded them to the DOM and
 * React rejected them. Reading them here instead makes the flags opt-in, so an
 * ordinary element works as a slide with nothing to swallow.
 *
 * ```tsx
 * function Slide() {
 *   const { isActive } = useCarouselChild();
 *   return <Flex material={isActive ? paper : glass} />;
 * }
 * ```
 */
export function useCarouselChild(): CarouselChildState {
  return useContext(CarouselChildContext);
}
