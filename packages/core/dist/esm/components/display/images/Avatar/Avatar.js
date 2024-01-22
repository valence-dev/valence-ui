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
import { forwardRef } from "react";
import { Image } from "../Image";
import { useValence } from "../../../../ValenceProvider";
import { IconUserCircle } from "@tabler/icons-react";
import { Flex } from "../../../layout";
import { Icon } from "../../Icon";
import { useResponsiveProps } from "../../../../utilities/responsive";
import { useColors } from "../../../../utilities/color";
export const Avatar = forwardRef(function Avatar(props, ref) {
    const theme = useValence();
    const colors = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { placeholderColor = theme.primaryColor, variant = theme.defaults.variant, placeholder = _jsx(IconUserCircle, {}), square = true, radius = "xl", style } = _a, rest = __rest(_a, ["placeholderColor", "variant", "placeholder", "square", "radius", "style"]);
    // Styles
    const imageStyle = Object.assign({ backgroundColor: colors.getBgHex(placeholderColor, variant, false), color: colors.getFgHex(placeholderColor, variant) }, style);
    return (_jsx(Image, Object.assign({ style: imageStyle, radius: radius, square: square, placeholder: _jsx(Flex, { align: "center", justify: "center", height: "100%", width: "100%", children: _jsx(Icon, { children: placeholder }) }), ref: ref }, rest)));
});
