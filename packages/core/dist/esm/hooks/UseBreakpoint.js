import { useContext } from "react";
import { useWindowSize } from "usehooks-ts";
import { ValenceContext } from "..";
export function useBreakpoint() {
    const theme = useContext(ValenceContext);
    const { width, height } = useWindowSize();
    const isDesktopThin = width <= theme.breakpoints.desktopThinWidth
        && width > theme.breakpoints.mobileWidth;
    const isMobile = width <= theme.breakpoints.mobileWidth;
    const isMobileTall = isMobile && height >= theme.breakpoints.mobileTallHeight;
    return {
        isDesktopThin: isDesktopThin,
        isMobile: isMobile,
        isMobileTall: isMobileTall,
    };
}
