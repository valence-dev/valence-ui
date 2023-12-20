import { useWindowSize } from "usehooks-ts"
import { useValence } from "..";
import { Breakpoint } from "@valence-ui/utils";


export function useBreakpoint(): Breakpoint {
  const theme = useValence();
  const { width, height } = useWindowSize();

  const isDesktopThin: boolean = width <= theme.breakpoints.desktopThinWidth
    && width > theme.breakpoints.mobileWidth;
  const isMobile: boolean = width <= theme.breakpoints.mobileWidth;
  const isMobileTall: boolean = isMobile && height >= theme.breakpoints.mobileTallHeight;

  return {
    isDesktopThin: isDesktopThin,
    isMobile: isMobile,
    isMobileTall: isMobileTall,
  }
}