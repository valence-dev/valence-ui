import { Meta, StoryObj } from "@storybook/react";
import {
  Case,
  Controlled,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  colorControl,
  sizingControls,
} from "../../../../storybook";
import { Slider as S } from "./Slider";

const meta: Meta<typeof S> = {
  component: S,
  title: "Core/Inputs/Slider",
  argTypes: {
    ...sizingControls,
    color: colorControl,
    min: { control: { type: "number" }, table: { category: "Content" } },
    max: { control: { type: "number" }, table: { category: "Content" } },
    step: { control: { type: "number" }, table: { category: "Content" } },
    showValue: { control: { type: "boolean" }, table: { category: "Content" } },
    invert: { control: { type: "boolean" }, table: { category: "Content" } },
    includeManualInput: {
      control: { type: "boolean" },
      table: { category: "Content" },
    },
    manualInputPosition: {
      options: ["left", "right"],
      control: { type: "inline-radio" },
      table: { category: "Layout" },
    },
    disabled: { control: { type: "boolean" }, table: { category: "State" } },
    readOnly: { control: { type: "boolean" }, table: { category: "State" } },
    loading: { control: { type: "boolean" }, table: { category: "State" } },
  },
};
export default meta;
type Story = StoryObj<typeof S>;

/** One slider, driven entirely by the controls panel. */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Slider">
      <Controlled initial={25}>
        {(value, setValue) => <S {...args} value={value} setValue={setValue} />}
      </Controlled>
    </Showcase>
  ),
};

/** Every size. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Slider sizes"
      description="The thumb, the track and the manual input all scale from `size`. The thumb must stay centred on the track at every one."
    >
      <Matrix title="size" values={Storybook.componentSizes} column>
        {(size) => (
          <Controlled initial={25}>
            {(value, setValue) => (
              <S {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/**
 * The positions the value can be at.
 *
 * The ends are where a slider breaks: at `min` the filled track is zero wide,
 * and at `max` the thumb has to stay inside the track rather than overhanging
 * it.
 */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Values and states"
      description="Check both ends of the track, then the disabled and loading variants of each."
    >
      <Matrix
        title="value"
        values={[0, 1, 50, 99, 100]}
        label={(value) => `value=${value}`}
        column
      >
        {(initial) => (
          <Controlled initial={initial}>
            {(value, setValue) => (
              <S {...args} value={value} setValue={setValue} showValue />
            )}
          </Controlled>
        )}
      </Matrix>

      <Section title="Disabled and loading" column>
        {(
          [
            ["default", {}],
            ["disabled", { disabled: true }],
            ["readOnly", { readOnly: true }],
            ["loading", { loading: true }],
          ] as const
        ).map(([label, props]) => (
          <Case key={label} label={label}>
            <Controlled initial={40}>
              {(value, setValue) => (
                <S {...args} {...props} value={value} setValue={setValue} />
              )}
            </Controlled>
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** The manual number input, and the value label on the thumb. */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Slider layout">
      <Section column>
        <Case label="default (manual input on the right)">
          <Controlled initial={25}>
            {(value, setValue) => (
              <S {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="manualInputPosition=left">
          <Controlled initial={25}>
            {(value, setValue) => (
              <S
                {...args}
                manualInputPosition="left"
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="includeManualInput={false}">
          <Controlled initial={25}>
            {(value, setValue) => (
              <S
                {...args}
                includeManualInput={false}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="showValue" note="The value rides on the thumb.">
          <Controlled initial={25}>
            {(value, setValue) => (
              <S {...args} showValue value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="invert" note="Drag right — the value must go down.">
          <Controlled initial={25}>
            {(value, setValue) => (
              <S {...args} invert showValue value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Every palette colour. */
export const Colors: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Slider colours"
      description="The colour fills the track behind the thumb, so it has to stay distinguishable from the unfilled remainder."
    >
      <Matrix title="color" values={Storybook.colors} column>
        {(color) => (
          <Controlled initial={60}>
            {(value, setValue) => (
              <S {...args} color={color} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every material. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Slider materials">
      <Section column>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Controlled initial={40}>
              {(value, setValue) => (
                <S
                  {...args}
                  material={material}
                  value={value}
                  setValue={setValue}
                />
              )}
            </Controlled>
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Ranges and steps a slider is not usually given. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Slider edge cases">
      <Section column>
        <Case label="min=-50 max=50">
          <Controlled initial={0}>
            {(value, setValue) => (
              <S
                {...args}
                min={-50}
                max={50}
                showValue
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="step=25" note="Only five positions are reachable.">
          <Controlled initial={50}>
            {(value, setValue) => (
              <S
                {...args}
                step={25}
                showValue
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="a very large range">
          <Controlled initial={500_000}>
            {(value, setValue) => (
              <S
                {...args}
                min={0}
                max={1_000_000}
                step={1000}
                showValue
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case
          label="a value outside the range"
          note="Must clamp rather than push the thumb off the track."
        >
          <Controlled initial={500}>
            {(value, setValue) => (
              <S {...args} min={0} max={100} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="in a narrow parent" width={200}>
          <Controlled initial={40}>
            {(value, setValue) => (
              <S {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
      </Section>
    </Showcase>
  ),
};
