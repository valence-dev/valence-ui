import { useEffect, useState } from "react";
import { useValence } from "../ValenceProvider";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

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
 * @returns An object containing the current color scheme, whether it's dark or light mode, and functions to toggle between them.
 */
export function useColorScheme(): UseColorSchemeOutput {
  const theme = useValence();
  const getCurrentTheme = () => window.matchMedia(COLOR_SCHEME_QUERY).matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e: MediaQueryListEvent) => setIsDarkTheme(e.matches);

  useEffect(() => {
    const mq = window.matchMedia(COLOR_SCHEME_QUERY);
    mq.addEventListener("change", mqListener);
    return () => mq.removeEventListener("change", mqListener);
  }, []);

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
