import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { getReactiveProp } from "@valence-ui/utils";
import { ValenceContext } from "../../../../ValenceProvider";
import styled from "styled-components";
import { useBreakpoint } from "../../../../hooks";
export function Image(props) {
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults
    const { src, alt, placeholder, radius = theme.defaultRadius, fit = "cover", position = "center", square = false, height = "fit-content", width = square ? height : "auto", shadow = false, style, id, } = props;
    // Styles
    const StyledContainer = styled.div(Object.assign({ height: getReactiveProp(height, breakpoint), width: getReactiveProp(width, breakpoint), minWidth: getReactiveProp(width, breakpoint), borderRadius: theme.sizeClasses.radius[getReactiveProp(radius, breakpoint)], aspectRatio: square ? "1/1" : undefined, overflow: "hidden", boxShadow: getReactiveProp(shadow, breakpoint) ? theme.defaultShadow : "none" }, style));
    const StyledImage = styled.img({
        width: "100%",
        height: "100%",
        objectFit: getReactiveProp(fit, breakpoint),
        objectPosition: getReactiveProp(position, breakpoint)
    });
    return (_jsx(StyledContainer, { children: props.src ?
            _jsx(StyledImage, { id: id, src: src, alt: alt })
            :
                placeholder }));
}
