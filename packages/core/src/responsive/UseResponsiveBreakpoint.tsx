import { useValence } from "../ValenceProvider";
import { useWindowSize } from "usehooks-ts";

export type ResponsiveBreakpoint = { 
  isMobile: boolean;
  isTablet: boolean;
  isDefault: boolean;
  isDesktopLarge: boolean;
  isTV: boolean;
}


/** A hook that returns the current responsive breakpoint. This hook
 * is the replacement for the now-depreciated `UseBreakpoint` hook from
 * previous versions of Valence. 
 * 
 * This hook will use breakpoints defined in the `ValenceProvider` to
 * determine the current breakpoint.
*/
export function useResponsiveBreakpoint(): ResponsiveBreakpoint { 
  const { breakpoints } = useValence();
  const { width } = useWindowSize();


  const isMobile: boolean = width <= breakpoints.mobileWidth;
  const isTablet: boolean = width <= breakpoints.tabletWidth
    && width > breakpoints.mobileWidth;
  const isDefault: boolean = width <= breakpoints.desktopLargeWidth
    && width > breakpoints.tabletWidth;
  const isDesktopLarge: boolean = width <= breakpoints.tvWidth
    && width > breakpoints.desktopLargeWidth;
  const isTV: boolean = width > breakpoints.tvWidth;


  const breakpoint: ResponsiveBreakpoint = { 
    isMobile,
    isTablet,
    isDefault,
    isDesktopLarge,
    isTV,
  }

  return breakpoint;
}