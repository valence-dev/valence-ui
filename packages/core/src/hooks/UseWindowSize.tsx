import { useEffect, useState } from "react";

export type UseWindowSizeOutput = {
  /** The current width of the window. */
  width: number;
  /** The current height of the window. */
  height: number;
}

/**
 * A hook that provides the current width and height of the window.
 * @returns An object containing the current width and height of the window.
 */
export function useWindowSize(): UseWindowSizeOutput {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}