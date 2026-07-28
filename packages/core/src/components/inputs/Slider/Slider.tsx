/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { GenericInputProps } from "../../../generics";
import ReactSlider from "react-slider";
import { css, CSSObject } from "@emotion/react";
import { useValence } from "../../../ValenceProvider";
import { Flex, FlexProps } from "../../layout/Flex";
import { Text } from "../../display/Text";
import { NumberInput, NumberInputProps } from "../NumberInput";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
import { Material, SolidMaterial } from "../../../utilities";
import { HoverAnimation, TapAnimation, useAnimation } from "../../../hooks";
import { motion } from "motion/react";
import { ComponentSize } from "@valence-ui/utils";

export type SliderEventProps<T = number> = {
  /** Callback fired after a thumb has been moved. */
  onAfterChange?: (value: T, thumbIndex: number) => void;
  /** Callback fired before a thumb is starting to move. */
  onBeforeChange?: (value: T, thumbIndex: number) => void;
  /** Callback fired when the value of this input changes. */
  onChange?: (value: T, thumbIndex: number) => void;
  /** Callback fired when any part of the slider is clicked. */
  onSliderClick?: (value: number) => void;
};

export type SliderProps = GenericInputProps<number> &
  SliderEventProps & {
    /** The minimum value of this input. `0` by default. */
    min?: number;
    /** The maximum value of this input. `100` by default. */
    max?: number;
    /** The step value of this input. `1` by default. */
    step?: number;

    color?: string;
    material?: Material;

    /** Whether to show this slider's value on the thumb. `false` by default */
    showValue?: boolean;
    /** Whether to invert the direction of the slider. `false` by default. */
    invert?: boolean;

    /** Whether to include a manual input with this slider. `true` by default. */
    includeManualInput?: boolean;
    /** The position of this manual input, if shown. `"right"` by default. */
    manualInputPosition?: "left" | "right";

    /** Optional props to pass to the track component. */
    trackProps?: Omit<SliderTrackProps, "state">;
    /** Optional props to pass to the thumb component. */
    thumbProps?: Omit<SliderThumbProps, "state">;
    /** Optional props to pass to the number input */
    numberInputProps?: Omit<NumberInputProps, "value" | "setValue">;
  };

export type SliderTrackProps = FlexProps & {
  state: { index: number; value: number };

  color?: string;
  material?: Material;

  /** Whether to highlight this track. `false` by default. */
  highlight?: boolean;
};

export type SliderThumbProps = FlexProps & {
  state: { index: number; valueNow: number; value: number };

  color?: string;
  material?: Material;
  size?: ComponentSize;

  animation?: {
    hover?: HoverAnimation | HoverAnimation[];
    tap?: TapAnimation | TapAnimation[];
  };

  /** Whether to show the value of this slider. `false` by default. */
  showValue?: boolean;
};

const Slider = forwardRef(function Slider(
  props: MakeResponsive<SliderProps>,
  ref: any,
) {
  const theme = useValence();

  const {
    value,
    setValue,

    min = 0,
    max = 100,
    step = 1,

    showValue = false,
    invert = false,

    color = "black",
    material = theme.materials.input,
    size = theme.defaults.size,
    radius = theme.defaults.radius,

    height = theme.getSize("height", size),
    width = "100%",

    includeManualInput = true,
    manualInputPosition = "right",

    disabled,
    readOnly,
    required,
    loading,
    autoFocus,
    name,
    form,

    trackProps,
    thumbProps,
    numberInputProps,

    onAfterChange,
    onBeforeChange,
    onChange,
    onSliderClick,

    style,
    ...rest
  } = useResponsiveProps<SliderProps>(props);

  // Styles
  const SliderStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexGrow: 2,
    width: width,
    height: height,
  });

  return (
    <Flex
      alignSelf="stretch"
      align="center"
      gap={5}
      height={height}
      direction={manualInputPosition === "left" ? "row-reverse" : "row"}
      style={style}
      {...rest}
    >
      <ReactSlider
        min={min}
        max={max}
        step={step}
        invert={invert}
        // A read-only or loading slider must not be draggable either.
        disabled={disabled || readOnly || loading}
        value={value}
        onChange={(value, index) => {
          setValue(value);
          onChange?.(value, index);
        }}
        onAfterChange={onAfterChange}
        onBeforeChange={onBeforeChange}
        onSliderClick={onSliderClick}
        css={SliderStyle}
        ref={ref}
        renderThumb={(props, state) => (
          <SliderThumb
            state={state}
            showValue={showValue}
            material={new SolidMaterial({ color: color })}
            size={size as any}
            {...props}
            {...thumbProps}
          />
        )}
        renderTrack={(props, state) => (
          <SliderTrack
            state={state}
            margin={(height - 2) / 2}
            color={color}
            highlight={state.index === 0}
            {...props}
            {...trackProps}
          />
        )}
      />

      {includeManualInput && (
        <NumberInput
          value={value}
          setValue={setValue}
          min={min}
          max={max}
          step={step}
          size={size}
          radius={radius}
          material={material}
          // The manual input is the only real form control this component
          // renders, so the input-level props belong to it.
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          loading={loading}
          autoFocus={autoFocus}
          name={name}
          form={form}
          showControls={false}
          width="fit-content"
          grow={false}
          style={{ minWidth: 40 }}
          {...numberInputProps}
        />
      )}
    </Flex>
  );
});

const SliderTrack = forwardRef(function SliderTrack(
  //@ts-ignore
  props: SliderTrackProps & HTMLPropsWithRefCallback<HTMLDivElement>,
  ref: any,
) {
  // Hooks
  const theme = useValence();
  const colors = useColors();

  const {
    state,
    highlight,

    radius = "xl",

    width,
    height = 2,
    padding = 0,

    color = "black",
    // No default material, unlike the thumb: one would paint over the
    // highlight/dim treatment below and change how every slider looks. Applied
    // after that treatment so a caller who does supply one actually wins.
    material,

    style,
    ...rest
  } = props;

  // Styles
  const TrackStyle: CSSObject = {
    backgroundColor: colors.getHex(highlight ? color : "black"),
    opacity: highlight ? 1 : 0.25,
    borderRadius: theme.getSize("radius", radius),

    ...material?.getStyles(theme, colors),
    ...style,
  };

  return (
    <Flex
      width={width}
      height={height}
      padding={padding}
      style={TrackStyle}
      ref={ref}
      {...rest}
    />
  );
});

const SliderThumb = forwardRef(function SliderThumb(
  //@ts-ignore
  props: SliderThumbProps & HTMLPropsWithRefCallback<HTMLDivElement>,
  ref: any,
) {
  // Hooks
  const theme = useValence();
  const colors = useColors();

  const {
    state,
    showValue = false,

    animation = {
      hover: "grow",
      tap: "shrink",
    },

    material = new SolidMaterial(),
    size = theme.defaults.size,
    width = showValue
      ? theme.getSize("height", size)
      : theme.getSize("height", size) / 2,
    height = theme.getSize("height", size) / 2,
    radius = "xl",

    color = "black",

    align = "center",
    justify = "center",

    style,
    ...rest
  } = props;
  // `initial` is pulled out on its own because it may be `false`, which is
  // valid as the `initial` prop directly but not as a `variants` map entry
  // (Motion's `Variants` type only accepts real targets, never `false`).
  const { initial, ...variants } = useAnimation({
    transitionAnimation: undefined,
    hoverAnimation: animation.hover,
    tapAnimation: animation.tap,
  });

  // Styles
  const ThumbStyle = css({
    cursor: "grab",
    top: theme.getSize("height", size) / 2 - (height as number) / 2,

    width: width,
    height: height,
    borderRadius: theme.getSize("radius", radius),

    display: "flex",
    alignItems: align,
    justifyContent: justify,

    ...material.getStyles(theme, colors),
    ...style,
  });

  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate="animate"
      exit="exit"
      whileHover="whileHover"
      whileTap="whileTap"
      css={ThumbStyle}
      ref={ref}
      {...rest}
    >
      {showValue && (
        <Text monospace color={"white"}>
          {state.valueNow}
        </Text>
      )}
    </motion.div>
  );
});

const SliderNamespace = Object.assign(Slider, {
  Track: SliderTrack,
  Thumb: SliderThumb,
});
export { SliderNamespace as Slider };
