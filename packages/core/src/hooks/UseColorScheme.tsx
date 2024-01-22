import { useState } from 'react'
import { useMediaQuery, useUpdateEffect } from 'usehooks-ts'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

export type ColorScheme = "light" | "dark";
export type UseColorSchemeOutput = {
  /** The color scheme. */
  colorScheme: ColorScheme;
  /** Is the color scheme `"dark"`? */
  isDarkMode: boolean;
  /** Is the color scheme `"light"`? */
  isLightMode: boolean;
  /** Toggle the color scheme. */
  toggle: () => void;
  /** Set the color scheme to `"dark"`. */
  setDark: () => void;
  /** Set the color scheme to `"light"`. */
  setLight: () => void;
}

/**
 * A hook that provides the current color scheme of the user's operating system and allows toggling between light and dark modes.
 * @returns An object containing the current color scheme, whether it's dark or light mode, and functions to toggle between them.
 */
export function useColorScheme(): UseColorSchemeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [colorScheme, setColorScheme] = useState<ColorScheme>(getColorScheme());

  function getColorScheme(): ColorScheme {
    return isDarkOS ? "dark" : "light";
  }

  // Update darkMode if os prefers changes
  useUpdateEffect(() => {
    setColorScheme(getColorScheme());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS])

  return {
    colorScheme: colorScheme,
    isDarkMode: colorScheme === "dark",
    isLightMode: colorScheme === "light",
    toggle: () => setColorScheme(colorScheme === "dark" ? "light" : "dark"),
    setDark: () => setColorScheme("dark"),
    setLight: () => setColorScheme("light"),
  }
}