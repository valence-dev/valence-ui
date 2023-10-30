import { ReactiveProp } from "@valence-ui/utils";
import { FlexProps } from "../Flex";
import { CSSProperties } from "react";
export type GenericColumnProps = FlexProps;
export type ColumnProps = GenericColumnProps;
export type ColumnContainerProps = FlexProps & {
    /** **[REACTIVE]** Defines `flex-flow` css property */
    flow?: ReactiveProp<CSSProperties["flexFlow"]>;
};
export declare const Column: {
    (props: ColumnProps): import("react/jsx-runtime").JSX.Element;
    Container(props: ColumnContainerProps): import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=Column.d.ts.map