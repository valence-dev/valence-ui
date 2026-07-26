import { RefObject, useEffect, useState, useRef } from "react";

export type UseElementSizeOutput = {
  /** A ref object that should be attached to the element you want to measure. */
  ref: RefObject<HTMLElement>;
  /** The current width of the element. */
  width: number;
  /** The current height of the element. */
  height: number;
};

/**
 * A hook that provides the current width and height of an element.
 *
 * Observes the element itself, so it reports changes that have nothing to do
 * with the viewport — content growing, a sibling collapsing, a class change —
 * and not only window resizes.
 * @returns An object containing the ref object and the current width and height of the element.
 */
export function useElementSize(): UseElementSizeOutput {
  const ref = useRef<HTMLElement>(null as any);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const measure = () => {
      // `getBoundingClientRect` rather than the observer's `contentRect`, to
      // keep reporting the border box as this hook always has.
      const { width, height } = element.getBoundingClientRect();

      // Bail out when nothing moved: a callback that always set state could
      // re-render, resize the element, and call itself again.
      setSize((size) =>
        size.width === width && size.height === height
          ? size
          : { width, height },
      );
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, ...size };
}
