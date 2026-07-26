/** @jsxImportSource @emotion/react */
import { FocusEvents } from "@valence-ui/utils";
import { CSSProperties, forwardRef, useId } from "react";
import { useValence } from "../../../ValenceProvider";
import { Text, TextProps } from "../../display/Text";
import { GenericInputProps } from "../../../generics";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
import { Material, SolidMaterial } from "../../../utilities";
import { motion } from "motion/react";
import { css } from "@emotion/react";
import { Flex, FlexProps } from "../../layout/Flex";

export type SwitchProps = GenericInputProps<boolean> &
  FocusEvents & {
    /** The label associated with this input */
    label?: string;

    /** The material of this input */
    materials?: {
      buttonNormal: Material;
      buttonActive: Material;
      handleNormal: Material;
      handleActive: Material;
    };

    /** Optional props to pass to the container `Flex` component */
    containerProps?: Omit<FlexProps, "children">;
    /** Optional props to pass to the `Text` label component */
    labelProps?: Omit<TextProps, "children">;
  };

export const Switch = forwardRef(function Switch(
  props: MakeResponsive<SwitchProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  // Defaults
  const {
    value,
    setValue,
    label,

    materials = {
      buttonNormal: theme.materials.button.setColor("black"),
      buttonActive: new SolidMaterial(),
      handleNormal: new SolidMaterial({ color: "black" }),
      handleActive: new SolidMaterial({ color: "white" }),
    },
    size = theme.defaults.size,
    radius = "xl",

    disabled,
    readOnly,
    loading,
    required,

    onFocus,
    onBlur,

    containerProps,
    labelProps,

    padding = 4,
    margin = 0,
    width,
    height,

    style,
    id,
    ...rest
  } = useResponsiveProps<SwitchProps>(props);

  // A `<button>` is not a labelable element, so `htmlFor` would not associate
  // anything and wrapping it in a `<label>` would not either. `aria-labelledby`
  // is what actually names the control for assistive technology; the `<label>`
  // element and its click handler below are the pointer affordance.
  const labelId = `${useId()}-label`;

  // `aria-labelledby` outranks `aria-label` in the accessible name calculation,
  // so pointing it at our own label would silently override a caller who named
  // the control themselves. Theirs wins.
  const named = rest as Record<string, unknown>;
  const hasCallerLabel =
    named["aria-label"] !== undefined || named["aria-labelledby"] !== undefined;

  // Handlers
  function handleClick() {
    if (disabled || readOnly || loading) return;

    setValue(!value);
  }

  // Styles
  const trackHeight = height ?? theme.getSize("height", size);
  const buttonCSS = css({
    height: trackHeight,
    width: width ?? (theme.getSize("height", size) as number) * 2.5,
    padding: padding,
    margin: margin,

    borderRadius: theme.getSize("radius", radius),
    alignItems: "center",

    display: "inline-flex",

    ...(value
      ? materials.buttonActive.setInteractive(true).getStyles(theme, colors)
      : materials.buttonNormal.setInteractive(true).getStyles(theme, colors)),

    ...style,
  });
  const buttonStyle: CSSProperties = {
    justifyContent: value ? "flex-end" : "flex-start",
  };

  const handleCSS = css({
    height: "100%",
    aspectRatio: "1.5 / 1",
    borderRadius:
      (theme.getSize("radius", radius) as number) - (padding as number),

    ...(value
      ? materials.handleActive.getStyles(theme, colors)
      : materials.handleNormal.getStyles(theme, colors)),
  });

  return (
    <Flex align="center" {...containerProps}>
      {label && (
        <label
          id={labelId}
          onClick={handleClick}
          style={{
            cursor: disabled || readOnly || loading ? "inherit" : "pointer",
          }}
        >
          <Text color="black" size={size} {...labelProps}>
            {label}
          </Text>
        </label>
      )}

      {/* Everything the switch does not name itself — `aria-*`, `data-*`,
          `name`, `form`, `className` — belongs on the control, not the
          wrapper, which has `containerProps` of its own. It is spread first so
          the switch's own wiring cannot be clobbered. */}
      <motion.button
        {...rest}
        id={id}
        ref={ref}
        role="switch"
        aria-checked={value}
        aria-labelledby={label && !hasCallerLabel ? labelId : undefined}
        onClick={handleClick}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled || readOnly || loading}
        aria-required={required || undefined}
        css={buttonCSS}
        style={buttonStyle}
      >
        <motion.div
          css={handleCSS}
          layout
          transition={{
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        ></motion.div>
      </motion.button>
    </Flex>
  );
});
