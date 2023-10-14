export type ColorScheme = "light" | "dark";
export type UseColorSchemeOutput = {
    colorScheme: ColorScheme;
    isDarkMode: boolean;
    isLightMode: boolean;
    toggle: () => void;
    setDark: () => void;
    setLight: () => void;
};
/**
 * A hook that provides the current color scheme of the user's operating system and allows toggling between light and dark modes.
 * @returns An object containing the current color scheme, whether it's dark or light mode, and functions to toggle between them.
 */
export declare function useColorScheme(): UseColorSchemeOutput;
//# sourceMappingURL=UseColorScheme.d.ts.map