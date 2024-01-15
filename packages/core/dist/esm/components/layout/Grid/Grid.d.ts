/// <reference types="react" />
/** @jsxImportSource @emotion/react */
import { GenericGridItemProps, GenericGridProps, PolymorphicLayoutProps } from "@valence-ui/utils";
import { MakeResponsive } from "../../../responsive";
export type GridProps = GenericGridProps & PolymorphicLayoutProps;
export type GridItemProps = GenericGridItemProps & PolymorphicLayoutProps;
declare const GridNamespace: import("react").ForwardRefExoticComponent<MakeResponsive<GridProps> & import("react").RefAttributes<unknown>> & {
    Item: import("react").ForwardRefExoticComponent<MakeResponsive<GridItemProps> & import("react").RefAttributes<unknown>>;
};
export { GridNamespace as Grid };
//# sourceMappingURL=Grid.d.ts.map