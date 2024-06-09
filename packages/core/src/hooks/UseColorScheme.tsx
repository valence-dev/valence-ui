import { useState } from 'react'
import { useMediaQuery, useUpdateEffect } from 'usehooks-ts'
import { useValence } from '../ValenceProvider';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

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
}

/**
 * A hook that provides the current color scheme of the user's operating system and allows toggling between light and dark modes.
 * @returns An object containing the current color scheme, whether it's dark or light mode, and functions to toggle between them.
 */
export function useColorScheme(): UseColorSchemeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const theme = useValence();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(getColorScheme());

  function getColorScheme(): ColorScheme {
    if (theme.preferredColorScheme === "system") return isDarkOS ? "dark" : "light";
    return theme.preferredColorScheme;
  }

  // Update darkMode if os prefers changes
  useUpdateEffect(() => {
    setColorScheme(getColorScheme());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS, theme.preferredColorScheme])

  return {
    colorScheme: colorScheme,
    isDarkMode: colorScheme === "dark",
    isLightMode: colorScheme === "light",
    isFollowingSystem: theme.preferredColorScheme === "system"
  }
}