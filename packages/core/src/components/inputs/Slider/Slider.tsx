/** @jsxImportSource @emotion/react */
import { CSSProperties, forwardRef } from "react";
import { GenericInputProps } from "../../../generics";
import ReactSlider from "react-slider";
import { css } from "@emotion/react";
import { useValence } from "../../../ValenceProvider";
import { Flex, StyledFlex, StyledFlexProps } from "../../layout";
import { getBackgroundColor } from "../../buttons";
import { Text } from "../../display";
import { NumberInput } from "../NumberInput";
import { MakeResponsive, useResponsiveProps } from "../../../responsive";

export type SliderEventProps<T = number> = {
  /** Callback fired after a thumb has been moved. */
  onAfterChange?: (value: T, thumbIndex: number) => void;
  /** Callback fired before a thumb is starting to move. */
  onBeforeChange?: (value: T, thumbIndex: number) => void;
  /** Callback fired when the value of this input changes. */
  onChange?: (value: T, thumbIndex: number) => void;
  /** Callback fired when any part of the slider is clicked. */
  onSliderClick?: (value: number) => void;
}

export type SliderProps =
  GenericInputProps<number>
  & SliderEventProps
  & {
    /** The minimum value of this input. `0` by default. */
    min?: number;
    /** The maximum value of this input. `100` by default. */
    max?: number;
    /** The step value of this input. `1` by default. */
    step?: number;

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
  }

export type SliderTrackProps =
  StyledFlexProps
  & {
    state: { index: number, value: number }

    /** Whether to highlight this track. `false` by default. */
    highlight?: boolean
  }

export type SliderThumbProps =
  StyledFlexProps
  & {
    state: { index: number, valueNow: number, value: number }

    /** Whether to show the value of this slider. `false` by default. */
    showValue?: boolean;
  }


const Slider = forwardRef(function Slider(
  props: MakeResponsive<SliderProps>,
  ref: any
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
    size = theme.defaults.size,
    radius = theme.defaults.radius,
    variant = theme.defaults.variant,

    height = theme.getSize("height", size),
    width = "100%",

    includeManualInput = true,
    manualInputPosition = "right",

    trackProps,
    thumbProps,

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
      align="center"
      gap={5}
      height={height}
      direction={manualInputPosition === "left" ? "row-reverse" : "row"}
    >
      <ReactSlider
        min={min}
        max={max}
        step={step}
        invert={invert}

        value={value}
        onChange={(value, index) => { setValue(value); onChange?.(value, index) }}
        onAfterChange={onAfterChange}
        onBeforeChange={onBeforeChange}
        onSliderClick={onSliderClick}

        css={SliderStyle}
        ref={ref}

        renderThumb={(props, state) =>
          <SliderThumb
            state={state}
            showValue={showValue}
            color={color}
            size={size}
            {...props}
            {...thumbProps}
          />
        }
        renderTrack={(props, state) =>
          <SliderTrack
            state={state}
            color={color}
            margin={(height - 2) / 2}
            highlight={state.index === 0}
            {...props}
            {...trackProps}
          />
        }
      />

      {includeManualInput &&
        <NumberInput
          value={value}
          setValue={setValue}

          min={min}
          max={max}
          step={step}

          size={size}
          radius={radius}
          variant={variant}
          color={color}

          showControls={false}
          width="fit-content"

          grow={false}
        />
      }
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


  const {
    state,
    highlight,

    radius = "xl",
    size = theme.defaults.size,

    width,
    height = 2,
    padding = 0,

    color = "black",

    variant = highlight ? "filled" : "light",

    style,
    ...rest
  } = props;


  // Styles
  const TrackStyle: CSSProperties = {
    backgroundColor: getBackgroundColor(
      highlight ? color : "black",
      variant, false, theme
    ),
    borderRadius: theme.getSize("radius", radius),

    ...style,
  }


  return (
    <Flex
      width={width}
      height={height}
      padding={padding}

      style={TrackStyle}
      ref={ref}
      {...rest}
    />
  )
});


const SliderThumb = forwardRef(function SliderThumb(
  //@ts-ignore
  props: SliderThumbProps & HTMLPropsWithRefCallback<HTMLDivElement>,
  ref: any,
) {
  // Hooks
  const theme = useValence();


  const {
    state,
    showValue = false,

    variant = "filled",
    size = theme.defaults.size,
    width = showValue ? theme.getSize("height", size) : theme.getSize("height", size) / 2,
    height = theme.getSize("height", size) / 2,
    radius = "xl",

    color = "black",
    padding = showValue ? "1px 5px" : 0,


    align = "center",
    justify = "center",

    style,
    ...rest
  } = props;


  // Styles
  const ThumbStyle: CSSProperties = {
    cursor: "grab",
    top: theme.getSize("height", size) / 2 - height / 2,

    ...style
  }


  return (
    <StyledFlex
      width={width}
      height={height}
      radius={radius}

      color={color}
      padding={padding}
      variant={variant}

      align={align}
      justify={justify}

      style={ThumbStyle}


      ref={ref}
      {...rest}
    >
      {showValue &&
        <Text
          monospace
          color={"white"}
        >
          {state.valueNow}
        </Text>
      }
    </StyledFlex>
  )
});


const SliderNamespace = Object.assign(Slider, {
  Track: SliderTrack,
  Thumb: SliderThumb,
});
export { SliderNamespace as Slider };