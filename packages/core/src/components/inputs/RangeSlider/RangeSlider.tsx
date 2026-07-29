/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { GenericInputProps } from "../../../generics";
import {
  Slider,
  SliderEventProps,
  SliderThumbProps,
  SliderTrackProps,
} from "../Slider";
import { useValence } from "../../../ValenceProvider";
import { Flex } from "../../layout/Flex";
import ReactSlider from "react-slider";
import { css } from "@emotion/react";
import { NumberInput, NumberInputProps } from "../NumberInput";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { Material, SolidMaterial } from "../../../utilities";

export type RangeSliderProps = GenericInputProps<number[]> &
  SliderEventProps<number[]> & {
    /** The minimum value of this input. `0` by default. */
    min?: number;
    /** The maximum value of this input. `100` by default. */
    max?: number;
    /** The step value of this input. `1` by default. */
    step?: number;

    /** The minimum distance between the two thumbs. `0` by default. */
    minDistance?: number;
    /** Whether the active thumb will push other thumbs. `true` by default. */
    pearling?: boolean;

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

    /** Optional props to pass to track components. */
    trackProps?: Omit<SliderTrackProps, "state">;
    /** Optional props to pass to thumb components. */
    thumbProps?: Omit<SliderThumbProps, "state">;
    /** Optional props to pass to the number inputs */
    numberInputProps?: Omit<NumberInputProps, "value" | "setValue">;
  };

export const RangeSlider = forwardRef(function RangeSlider(
  props: MakeResponsive<RangeSliderProps>,
  ref: any,
) {
  const theme = useValence();

  const {
    value,
    setValue,

    min = 0,
    max = 100,
    step = 1,

    minDistance = 0,
    pearling = true,

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
  } = useResponsiveProps<RangeSliderProps>(props);

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
        minDistance={minDistance}
        pearling={pearling}
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
        renderThumb={({ key, ...props }, state) => (
          <Slider.Thumb
            key={key}
            state={state}
            showValue={showValue}
            material={new SolidMaterial({ color })}
            size={size}
            {...props}
            {...thumbProps}
          />
        )}
        renderTrack={({ key, ...props }, state) => (
          <Slider.Track
            key={key}
            state={state}
            margin={(height - 2) / 2}
            color={color}
            highlight={state.index !== 0 && state.index !== state.value.length}
            {...props}
            {...trackProps}
          />
        )}
      />

      {includeManualInput && (
        <Flex gap={5}>
          {value.map((v, i) => (
            <NumberInput
              key={i}
              value={v}
              setValue={(v) => {
                const newValue = [...value];
                // @ts-ignore
                newValue[i] = v;
                setValue(newValue);
              }}
              min={i === 0 ? min : value[i - 1] + step}
              max={i === value.length - 1 ? max : value[i + 1] - step}
              step={step}
              size={size}
              radius={radius}
              material={material}
              // The manual inputs are the only real form controls this
              // component renders, so the input-level props belong to them.
              // Both share `name`, so a form submits both ends of the range
              // under it, the way same-named controls always do.
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              loading={loading}
              autoFocus={autoFocus && i === 0}
              name={name}
              form={form}
              showControls={false}
              width="fit-content"
              grow={false}
              style={{ minWidth: 40 }}
              {...numberInputProps}
            />
          ))}
        </Flex>
      )}
    </Flex>
  );
});
