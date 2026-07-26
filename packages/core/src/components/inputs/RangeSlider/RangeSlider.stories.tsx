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
import { RangeSlider as S } from "./RangeSlider";

const meta: Meta<typeof S> = {
  component: S,
  title: "Core/Inputs/RangeSlider",
  argTypes: {
    ...sizingControls,
    color: colorControl,
    min: { control: { type: "number" }, table: { category: "Content" } },
    max: { control: { type: "number" }, table: { category: "Content" } },
    step: { control: { type: "number" }, table: { category: "Content" } },
    minDistance: {
      control: { type: "number" },
      table: { category: "Content" },
    },
    pearling: { control: { type: "boolean" }, table: { category: "Content" } },
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

/** Three thumbs, driven entirely by the controls panel. */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Range slider">
      <Controlled initial={[25, 50, 75]}>
        {(value, setValue) => <S {...args} value={value} setValue={setValue} />}
      </Controlled>
    </Showcase>
  ),
};

/**
 * Different numbers of thumbs.
 *
 * A range slider's value is an array, so the thumb count is a property of the
 * data rather than a prop — and the two-thumb case, which is what most callers
 * actually want, was not shown at all before.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Thumb counts"
      description="Every segment between thumbs is its own track. Check the fill alternates correctly and the thumbs stack in order."
    >
      <Matrix
        title="value"
        values={[[50], [25, 75], [25, 50, 75], [10, 30, 50, 70, 90]]}
        label={(value) => `${value.length} thumb${value.length === 1 ? "" : "s"}`}
        column
      >
        {(initial) => (
          <Controlled initial={initial}>
            {(value, setValue) => (
              <S {...args} showValue value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every size. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Range slider sizes">
      <Matrix title="size" values={Storybook.componentSizes} column>
        {(size) => (
          <Controlled initial={[25, 75]}>
            {(value, setValue) => (
              <S {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** How the thumbs behave when they meet. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Thumbs meeting"
      description="Drag one thumb into another. `pearling` decides whether it pushes its neighbour or stops against it, and `minDistance` decides how close they may get."
    >
      <Section column>
        <Case label="pearling (default)" note="The dragged thumb pushes the others.">
          <Controlled initial={[25, 50, 75]}>
            {(value, setValue) => (
              <S {...args} showValue value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="pearling={false}" note="The dragged thumb stops at its neighbour.">
          <Controlled initial={[25, 50, 75]}>
            {(value, setValue) => (
              <S
                {...args}
                pearling={false}
                showValue
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="minDistance=20">
          <Controlled initial={[20, 60]}>
            {(value, setValue) => (
              <S
                {...args}
                minDistance={20}
                showValue
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="thumbs already coincident">
          <Controlled initial={[50, 50, 50]}>
            {(value, setValue) => (
              <S {...args} showValue value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
      </Section>

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
            <Controlled initial={[25, 75]}>
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

/** Every palette colour. */
export const Colors: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Range slider colours">
      <Matrix title="color" values={Storybook.colors} column>
        {(color) => (
          <Controlled initial={[25, 75]}>
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
    <Showcase title="Range slider materials">
      <Section column>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Controlled initial={[25, 75]}>
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

/** Ranges and layouts a range slider is not usually given. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Range slider edge cases">
      <Section column>
        <Case label="both thumbs at the ends">
          <Controlled initial={[0, 100]}>
            {(value, setValue) => (
              <S {...args} showValue value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="min=-50 max=50">
          <Controlled initial={[-25, 25]}>
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
        <Case label="manualInputPosition=left">
          <Controlled initial={[25, 75]}>
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
        <Case
          label="five thumbs, no manual inputs"
          note="The manual inputs would otherwise take more room than the track."
        >
          <Controlled initial={[10, 30, 50, 70, 90]}>
            {(value, setValue) => (
              <S
                {...args}
                includeManualInput={false}
                showValue
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="in a narrow parent" width={220}>
          <Controlled initial={[25, 75]}>
            {(value, setValue) => (
              <S {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
      </Section>
    </Showcase>
  ),
};
