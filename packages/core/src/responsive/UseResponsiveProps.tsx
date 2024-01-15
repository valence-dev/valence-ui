import { ResponsiveProps, getResponsiveProps } from "./ResponsiveProps";
import { useResponsiveBreakpoint } from "./UseResponsiveBreakpoint";

export type UseResponsivePropsReturn<T> = T;


/** A hook that returns the current responsive props based on the current breakpoint. 
 * This should be used before destructuring responsive props in a component,
 * and will automatically convert them to their mother type, considering the current
 * breakpoint.
*/
export function useResponsiveProps<T>(
  props: ResponsiveProps<T>
): UseResponsivePropsReturn<T> {
  const breakpoint = useResponsiveBreakpoint();
  const calculatedProps = getResponsiveProps(props, breakpoint);

  return  calculatedProps;
}