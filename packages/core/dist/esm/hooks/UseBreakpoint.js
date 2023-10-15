import { useContext } from "react";
import { useWindowSize } from "usehooks-ts";
import { ValenceContext } from "..";
export function useBreakpoint() {
    const theme = useContext(ValenceContext);
    const { width, height } = useWindowSize();
    const isMobile = width <= theme.breakpoints.mobileWidth;
    const isMobileTall = isMobile && height >= theme.breakpoints.mobileTallHeight;
    return {
        isMobile: isMobile,
        isMobileTall: isMobileTall,
    };
}
