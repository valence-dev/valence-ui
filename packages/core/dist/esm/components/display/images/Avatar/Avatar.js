var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { Image } from "../Image";
import { ValenceContext } from "../../../../ValenceProvider";
import { IconUserCircle } from "@tabler/icons-react";
import { useDefaultIconProps } from "../../../../hooks";
import { getBackgroundColor, getTextColor } from "../../../buttons";
import { Flex } from "../../../layout";
export function Avatar(props) {
    const theme = useContext(ValenceContext);
    const defaultIconProps = useDefaultIconProps();
    // Defaults
    const { placeholderIcon, placeholderColor = theme.primaryColor, fillVariant = theme.defaultVariant, placeholder = _jsx(Flex, { align: "center", justify: "center", height: "100%", width: "100%", children: _jsx(IconUserCircle, Object.assign({}, defaultIconProps.get())) }), square = true, radius = "xl", style } = props, rest = __rest(props, ["placeholderIcon", "placeholderColor", "fillVariant", "placeholder", "square", "radius", "style"]);
    // Styles
    const imageStyle = Object.assign({ backgroundColor: getBackgroundColor(placeholderColor, fillVariant, false, theme), color: getTextColor(placeholderColor, fillVariant, theme) }, style);
    return (_jsx(Image, Object.assign({ style: imageStyle, radius: radius, square: square, placeholder: placeholder }, rest)));
}
