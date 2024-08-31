import { RefObject, useEffect, useState } from "react";

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
 * @returns An object containing the ref object and the current width and height of the element.
 */
export function useElementSize(): UseElementSizeOutput {
  const ref = { current: null as HTMLElement | null };
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ref, ...size };
}