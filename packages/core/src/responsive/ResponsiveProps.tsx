/**
 * This system is the natural successor to the `ReactiveProps` system, but is much
 * more powerful and better for DX. No longer do individual properties need to specify
 * that they are reactive; instead an entire type can be passed into the `Responsive<T>` 
 * type and every property will be made responsive. 
 * 
 * Additionally, when used as props, the `Responsive<T>` type can be passed into a 
 * `getResponsiveProps` function that will automatically handle the responsive logic
 * and return the correct prop for this context. 
 * 
 * Responsive props will not consider the current *platform*, and will only consider
 * the screen size. This is because platforms (such as iOS) may have different screen
 * sizes, and thus will need to adapt.
 */

import { Breakpoint } from "./UseBreakpoint";


/** A wrapper type used to denote a prop that is reactive to the screen dimensions. */
export type Responsive<T> = T | {
  mobile?: T;
  tablet?: T;
  default: T;
  desktopLarge?: T;
  tv?: T;
}

/** A wrapper type used to denote a series of responsive props. */
export type MakeResponsive<T> = {
  [K in keyof T]: Responsive<T[K]>
}


/** A method that retrieves an individual responsive prop based on the supplied
 * breakpoint.
 * @param prop The responsive prop to retrieve
 * @param breakpoint The breakpoint to use to retrieve the prop
 */
export function getResponsiveProp<T>(
  prop: Responsive<T>,
  breakpoint: Breakpoint
): T {
  if (prop && prop.hasOwnProperty("default")) {
    // @ts-ignore
    const { mobile, tablet, default: def, desktopLarge, tv } = prop;

    if (breakpoint.isMobile) return mobile ?? tablet ?? def;
    if (breakpoint.isTablet) return tablet ?? def;
    if (breakpoint.isDesktopLarge) return desktopLarge ?? def;
    if (breakpoint.isTV) return tv ?? desktopLarge ?? def;
    return def;
  }
  return prop as T;
}


/** A method that retrieves a series of responsive props based on the supplied
 * breakpoint.
 * @param props - The responsive props to retrieve
 * @param breakpoint - The breakpoint to use to retrieve the props
 */
export function getResponsiveProps<T>(
  props: MakeResponsive<T>,
  breakpoint: Breakpoint
): T {
  const responsiveProps: Partial<T> = {};
  for (const key in props) {
    // @ts-ignore
    responsiveProps[key] = getResponsiveProp(props[key], breakpoint);
  }
  return responsiveProps as T;
}