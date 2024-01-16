import { MakeResponsive, Responsive, getResponsiveProp, getResponsiveProps } from "./ResponsiveProps";
import { useBreakpoint } from "./UseBreakpoint";


/** A hook that returns the current responsive props based on the current breakpoint. 
 * This should be used before destructuring responsive props in a component,
 * and will automatically convert them to their mother type, considering the current
 * breakpoint.
*/
export function useResponsiveProps<T>(
  props: MakeResponsive<T>
): T {
  const breakpoint = useBreakpoint();
  const calculatedProps = getResponsiveProps(props, breakpoint);

  return calculatedProps;
}


export function useResponsiveProp<T>(
  prop: Responsive<T>,
): T {
  const breakpoint = useBreakpoint();
  const calculatedProp = getResponsiveProp(prop, breakpoint);

  return calculatedProp;
}