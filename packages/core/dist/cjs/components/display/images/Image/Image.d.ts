/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode } from "react";
import { ComponentSize, GenericProps } from "@valence-ui/utils";
import { MakeResponsive } from "../../../../responsive";
export type GenericImageProps = {
    /** Source URI of this image */
    src: string | ArrayBuffer | undefined;
    /** Alt text for this image */
    alt: string;
    /** Sets `object-fit` css property */
    fit?: CSSProperties["objectFit"];
    /** Sets `object-position` css property */
    position?: CSSProperties["objectPosition"];
};
export type ImageProps = GenericImageProps & GenericProps & {
    /** Placeholder content for this image */
    placeholder?: ReactNode;
    /** Defines the border radius size class of this image. Defaults to the theme default radius size class. */
    radius?: ComponentSize;
    /** Sets `width` css property */
    width?: CSSProperties["width"];
    /** Sets `height` css property */
    height?: CSSProperties["height"];
    /** Shorthand for `aspect-ratio = "1/1"` */
    square?: boolean;
    /** Specifies if a shadow will be shown */
    shadow?: boolean;
    children?: never;
};
export declare const Image: import("react").ForwardRefExoticComponent<MakeResponsive<ImageProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Image.d.ts.map