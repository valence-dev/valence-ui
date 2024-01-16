import { MakeResponsive, Responsive } from "./ResponsiveProps";
/** A hook that returns the current responsive props based on the current breakpoint.
 * This should be used before destructuring responsive props in a component,
 * and will automatically convert them to their mother type, considering the current
 * breakpoint.
*/
export declare function useResponsiveProps<T>(props: MakeResponsive<T>): T;
export declare function useResponsiveProp<T>(prop: Responsive<T>): T;
//# sourceMappingURL=UseResponsiveProps.d.ts.map