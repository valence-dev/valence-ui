import { ResponsiveProps } from "./ResponsiveProps";
export type UseResponsivePropsReturn<T> = T;
/** A hook that returns the current responsive props based on the current breakpoint.
 * This should be used before destructuring responsive props in a component,
 * and will automatically convert them to their mother type, considering the current
 * breakpoint.
*/
export declare function useResponsiveProps<T>(props: ResponsiveProps<T>): UseResponsivePropsReturn<T>;
//# sourceMappingURL=UseResponsiveProps.d.ts.map