import { useSyncExternalStore } from "react";

export type UseWindowSizeOutput = {
  /** The current width of the window. */
  width: number;
  /** The current height of the window. */
  height: number;
};

/**
 * The window size assumed when there is no window to measure: during server
 * rendering, and for the hydration pass that has to produce identical markup.
 *
 * `1024x768` is deliberate rather than arbitrary. It falls inside the
 * `isDefault` band of the default breakpoints (`> tabletWidth`,
 * `<= desktopLargeWidth`), so a server-rendered tree resolves responsive props
 * to their `default` variant — the same one a component falls back to when no
 * breakpoint-specific value is given. Initialising to `0` would instead have
 * put every server render in `isMobile`.
 *
 * Apps that override `breakpoints` on the `ValenceProvider` should check that
 * this width still lands where they want it to.
 */
export const SSR_WINDOW_SIZE: UseWindowSizeOutput = {
  width: 1024,
  height: 768,
};

/**
 * `useSyncExternalStore` compares snapshots by identity, so returning a fresh
 * object on every read would re-render forever. The last one is cached and
 * only replaced when the dimensions actually change.
 */
let cachedSize: UseWindowSizeOutput = SSR_WINDOW_SIZE;

function subscribe(onStoreChange: () => void) {
  window.addEventListener("resize", onStoreChange);
  return () => window.removeEventListener("resize", onStoreChange);
}

function getSnapshot(): UseWindowSizeOutput {
  if (
    cachedSize.width !== window.innerWidth ||
    cachedSize.height !== window.innerHeight
  ) {
    cachedSize = { width: window.innerWidth, height: window.innerHeight };
  }
  return cachedSize;
}

function getServerSnapshot(): UseWindowSizeOutput {
  return SSR_WINDOW_SIZE;
}

/**
 * A hook that provides the current width and height of the window.
 *
 * Safe to call while server rendering, where it reports
 * {@link SSR_WINDOW_SIZE} instead of touching `window`.
 * @returns An object containing the current width and height of the window.
 */
export function useWindowSize(): UseWindowSizeOutput {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
