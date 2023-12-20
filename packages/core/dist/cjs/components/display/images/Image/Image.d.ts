/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode } from "react";
import { ComponentSize, GenericReactiveProps, ReactiveProp } from "@valence-ui/utils";
export type GenericImageProps = {
    /** Source URI of this image */
    src: string | ArrayBuffer | undefined;
    /** Alt text for this image */
    alt: string;
    /** **[REACTIVE]** Sets `object-fit` css property */
    fit?: ReactiveProp<CSSProperties["objectFit"]>;
    /** **[REACTIVE]** Sets `object-position` css property */
    position?: ReactiveProp<CSSProperties["objectPosition"]>;
};
export type ImageProps = GenericImageProps & GenericReactiveProps & {
    /** Placeholder content for this image */
    placeholder?: ReactNode;
    /** **[REACTIVE]** Defines the border radius size class of this image. Defaults to the theme default radius size class. */
    radius?: ReactiveProp<ComponentSize>;
    /** **[REACTIVE]** Sets `width` css property */
    width?: ReactiveProp<CSSProperties["width"]>;
    /** **[REACTIVE]** Sets `height` css property */
    height?: ReactiveProp<CSSProperties["height"]>;
    /** **[REACTIVE]** Shorthand for `aspect-ratio = "1/1"` */
    square?: ReactiveProp<boolean>;
    /** **[REACTIVE]** Specifies if a shadow will be shown */
    shadow?: ReactiveProp<boolean>;
    children?: never;
};
export declare const Image: import("react").ForwardRefExoticComponent<GenericImageProps & import("@valence-ui/utils").GenericProps & {
    /** **[REACTIVE]** Shorthand for `aspect-ratio = "1/1"` */
    style?: ReactiveProp<CSSProperties> | undefined;
    tabIndex?: ReactiveProp<number> | undefined;
} & {
    /** Placeholder content for this image */
    placeholder?: ReactNode;
    /** **[REACTIVE]** Defines the border radius size class of this image. Defaults to the theme default radius size class. */
    radius?: ReactiveProp<ComponentSize> | undefined;
    /** **[REACTIVE]** Sets `width` css property */
    width?: ReactiveProp<CSSProperties["width"]>;
    /** **[REACTIVE]** Sets `height` css property */
    height?: ReactiveProp<CSSProperties["height"]>;
    /** **[REACTIVE]** Shorthand for `aspect-ratio = "1/1"` */
    square?: ReactiveProp<boolean> | undefined;
    /** **[REACTIVE]** Specifies if a shadow will be shown */
    shadow?: ReactiveProp<boolean> | undefined;
    children?: undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Image.d.ts.map