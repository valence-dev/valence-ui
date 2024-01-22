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
};
/**
 * A hook that provides the current color scheme of the user's operating system and allows toggling between light and dark modes.
 * @returns An object containing the current color scheme, whether it's dark or light mode, and functions to toggle between them.
 */
export declare function useColorScheme(): UseColorSchemeOutput;
//# sourceMappingURL=UseColorScheme.d.ts.map