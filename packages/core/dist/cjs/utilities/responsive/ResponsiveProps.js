"use strict";
/**
 * This system is the natural successor to the `ReactiveProps` system, but is much
 * more powerful and better for DX. No longer do individual properties need to specify
 * that they are reactive; instead an entire type can be passed into the `Responsive<T>`
 * type and every property will be made responsive.
 *
 * Additionally, when used as props, the `Responsive<T>` type can be passed into a
 * `getResponsiveProps` function that will automatically handle the responsive logic
 * and return the correct prop for this context.
 *
 * Responsive props will not consider the current *platform*, and will only consider
 * the screen size. This is because platforms (such as iOS) may have different screen
 * sizes, and thus will need to adapt.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponsive = void 0;
/** A method that retrieves an individual responsive prop based on the supplied
 * breakpoint.
 * @param prop The responsive prop to retrieve
 * @param breakpoint The breakpoint to use to retrieve the prop
 */
function getResponsiveProp(prop, breakpoint) {
    var _a, _b;
    if (prop && prop.hasOwnProperty("default")) {
        // @ts-ignore
        const { mobile, tablet, default: def, desktopLarge, tv } = prop;
        if (breakpoint.isMobile)
            return (_a = mobile !== null && mobile !== void 0 ? mobile : tablet) !== null && _a !== void 0 ? _a : def;
        if (breakpoint.isTablet)
            return tablet !== null && tablet !== void 0 ? tablet : def;
        if (breakpoint.isDesktopLarge)
            return desktopLarge !== null && desktopLarge !== void 0 ? desktopLarge : def;
        if (breakpoint.isTV)
            return (_b = tv !== null && tv !== void 0 ? tv : desktopLarge) !== null && _b !== void 0 ? _b : def;
        return def;
    }
    return prop;
}
/** A method that retrieves a series of responsive props based on the supplied
 * breakpoint.
 * @param props - The responsive props to retrieve
 * @param breakpoint - The breakpoint to use to retrieve the props
 */
function getResponsiveProps(props, breakpoint) {
    const responsiveProps = {};
    for (const key in props) {
        // @ts-ignore
        responsiveProps[key] = getResponsiveProp(props[key], breakpoint);
    }
    return responsiveProps;
}
/** Returns the correct prop or props based on the supplied breakpoint.
 * @param props - The responsive prop/s to retrieve
 * @param breakpoint - The breakpoint to use to retrieve the prop
 */
function getResponsive(props, breakpoint) {
    // @ts-ignore
    if (props && props.hasOwnProperty("default"))
        return getResponsiveProp(props, breakpoint);
    // @ts-ignore
    else
        return getResponsiveProps(props, breakpoint);
}
exports.getResponsive = getResponsive;
