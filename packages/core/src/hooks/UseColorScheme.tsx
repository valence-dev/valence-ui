import { useSyncExternalStore } from "react";
import { useValence } from "../ValenceProvider/ValenceContext";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

/**
 * The system preference assumed when there is no `matchMedia` to ask: during
 * server rendering, and for the hydration pass that has to match it. Light is
 * the conventional default, and the one a browser reports when it has no
 * preference either.
 */
const SSR_PREFERS_DARK = false;

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia(COLOR_SCHEME_QUERY);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getSnapshot(): boolean {
  return window.matchMedia(COLOR_SCHEME_QUERY).matches;
}

function getServerSnapshot(): boolean {
  return SSR_PREFERS_DARK;
}

export type ColorScheme = "light" | "dark";
export type PreferrableColorScheme = ColorScheme | "system";
export type UseColorSchemeOutput = {
  /** The color scheme. */
  colorScheme: ColorScheme;
  /** Is the color scheme `"dark"`? */
  isDarkMode: boolean;
  /** Is the color scheme `"light"`? */
  isLightMode: boolean;
  /** Is the color scheme following the system theme? */
  isFollowingSystem: boolean;
};

/**
 * A hook that provides the current color scheme of the user's operating system and allows toggling between light and dark modes.
 *
 * Safe to call while server rendering, where the system preference reads as
 * light rather than touching `window.matchMedia`.
 * @returns An object containing the current color scheme, whether it's dark or light mode, and functions to toggle between them.
 */
export function useColorScheme(): UseColorSchemeOutput {
  const theme = useValence();
  const isDarkTheme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const colorScheme =
    theme.preferredColorScheme !== "system"
      ? theme.preferredColorScheme
      : isDarkTheme
        ? "dark"
        : "light";

  return {
    colorScheme: colorScheme,
    isDarkMode: colorScheme === "dark",
    isLightMode: colorScheme === "light",
    isFollowingSystem: theme.preferredColorScheme === "system",
  };
}
