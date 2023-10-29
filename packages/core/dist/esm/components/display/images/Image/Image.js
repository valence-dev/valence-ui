import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import { getReactiveProp } from "@valence-ui/utils";
import { ValenceContext } from "../../../../ValenceProvider";
import { useBreakpoint } from "../../../../hooks";
import { css } from "@emotion/react";
export function Image(props) {
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults
    const { src, alt, placeholder, radius = theme.defaultRadius, fit = "cover", position = "center", square = false, height = "fit-content", width = square ? height : "auto", shadow = false, style, id, } = props;
    // Styles
    const ContainerStyle = css(Object.assign({ height: getReactiveProp(height, breakpoint), width: getReactiveProp(width, breakpoint), minWidth: getReactiveProp(width, breakpoint), borderRadius: theme.sizeClasses.radius[getReactiveProp(radius, breakpoint)], aspectRatio: square ? "1/1" : undefined, overflow: "hidden", boxShadow: getReactiveProp(shadow, breakpoint) ? theme.defaultShadow : "none" }, getReactiveProp(style, breakpoint)));
    const ImageStyle = css({
        width: "100%",
        height: "100%",
        objectFit: getReactiveProp(fit, breakpoint),
        objectPosition: getReactiveProp(position, breakpoint)
    });
    return (_jsx("div", { css: ContainerStyle, children: props.src ?
            _jsx("img", { css: ImageStyle, id: id, src: src, alt: alt })
            :
                placeholder }));
}
