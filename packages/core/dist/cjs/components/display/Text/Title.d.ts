/// <reference types="react" />
import { TextProps } from "./Text";
import { MakeResponsive } from "../../..";
export type TitleProps = TextProps & {
    /** Sets the order of the title */
    order?: 1 | 2 | 3 | 4 | 5 | 6;
};
export declare const Title: import("react").ForwardRefExoticComponent<MakeResponsive<TitleProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Title.d.ts.map