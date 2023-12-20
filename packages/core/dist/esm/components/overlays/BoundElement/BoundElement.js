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
import React, { createContext, forwardRef, useContext } from "react";
import { useDisclosure, useTooltip } from "../../../hooks";
import { FloatingPortal, useMergeRefs } from "@floating-ui/react";
const BoundElementContext = createContext(null);
const useBoundElementContext = () => {
    const context = useContext(BoundElementContext);
    if (context === null)
        throw new Error("BoundElement compontents must be wrapped in <BoundElement />");
    return context;
};
function BoundElement(props) {
    const { children, disclosure = useDisclosure() } = props, options = __rest(props, ["children", "disclosure"]);
    const tooltip = useTooltip(Object.assign(Object.assign({}, options), { disclosure }));
    return (_jsx(BoundElementContext.Provider, { value: tooltip, children: children }));
}
const Trigger = forwardRef(function Trigger(props, propRef) {
    const { children } = props;
    const context = useBoundElementContext();
    const childrenRef = children.ref;
    const ref = useMergeRefs([context.refs.setReference, childrenRef, propRef]);
    return React.cloneElement(children, context.getReferenceProps(Object.assign(Object.assign({ ref }, children.props), { "data-state": context.opened ? "open" : "closed" })));
});
const Content = forwardRef(function Content(props, ref) {
    const { children } = props;
    const context = useBoundElementContext();
    return (_jsx(FloatingPortal, { children: _jsx("div", Object.assign({ ref: ref, style: context.floatingStyles }, context.getFloatingProps(), { children: children })) }));
});
const BoundElementNamespace = Object.assign(BoundElement, { Trigger, Content });
export { BoundElementNamespace as BoundElement };
