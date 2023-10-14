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
};
export declare function Image(props: ImageProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Image.d.ts.map