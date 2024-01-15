/// <reference types="react" />
import { FlexProps } from "../Flex";
import { GridProps } from "../Grid";
import { GenericLayoutProps } from "@valence-ui/utils";
import { MakeResponsive } from "../../../responsive";
export type ColumnProps = FlexProps;
export type ColumnContainerProps = GridProps & GenericLayoutProps & {
    /** Sets the number of columns in the grid. `2` by default */
    columns?: number;
    /** Sets the number of rows in the grid. `1` by default */
    rows?: number;
};
declare const ColumnNamespace: import("react").ForwardRefExoticComponent<MakeResponsive<FlexProps> & import("react").RefAttributes<unknown>> & {
    Container: import("react").ForwardRefExoticComponent<MakeResponsive<ColumnContainerProps> & import("react").RefAttributes<unknown>>;
};
export { ColumnNamespace as Column };
//# sourceMappingURL=Column.d.ts.map