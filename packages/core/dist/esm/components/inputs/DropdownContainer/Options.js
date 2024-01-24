export function getOptionValue(option) {
    if (!option)
        return "";
    if (typeof option === "string")
        return option;
    return option.value;
}
export function getOptionLabel(option) {
    var _a;
    if (!option)
        return "";
    if (typeof option === "string")
        return option;
    return (_a = option.label) !== null && _a !== void 0 ? _a : option.value;
}
export function getOptionIcon(option) {
    if (!option)
        return undefined;
    if (typeof option === "string")
        return undefined;
    return option.icon;
}
export const defaultOptionFilter = (options, search) => {
    return options.filter(option => {
        const label = getOptionLabel(option);
        return label.toLowerCase().includes(search.toLowerCase());
    });
};
