import { Meta, StoryObj } from "@storybook/react";
import { IconChevronDown, IconChevronUp, IconNumber } from "@tabler/icons-react";
import {
  Case,
  Controlled,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
} from "../../../../storybook";
import { NumberInput as NI } from "./NumberInput";

const meta: Meta<typeof NI> = {
  component: NI,
  title: "Core/Inputs/NumberInput",
  argTypes: {
    ...sizingControls,
    min: { control: { type: "number" }, table: { category: "Content" } },
    max: { control: { type: "number" }, table: { category: "Content" } },
    step: { control: { type: "number" }, table: { category: "Content" } },
    showControls: {
      control: { type: "boolean" },
      table: { category: "Content" },
    },
    disabled: { control: { type: "boolean" }, table: { category: "State" } },
    readOnly: { control: { type: "boolean" }, table: { category: "State" } },
    required: { control: { type: "boolean" }, table: { category: "State" } },
    loading: { control: { type: "boolean" }, table: { category: "State" } },
  },
  args: {
    placeholder: "Type a number...",
    icon: <IconNumber />,
  },
};
export default meta;
type Story = StoryObj<typeof NI>;

/** One input, driven entirely by the controls panel. */
export const Playground: Story = {
  render: (args) => (
    <Controlled initial={0}>
      {(value, setValue) => <NI {...args} value={value} setValue={setValue} />}
    </Controlled>
  ),
};

/** Every size, with and without the stepper buttons. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Number input sizes"
      description="The stepper buttons are stacked inside the input's height, so at `xs` they must still be big enough to hit."
    >
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => (
          <Controlled initial={42}>
            {(value, setValue) => (
              <NI {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>

      <Matrix title="size, showControls" values={Storybook.componentSizes}>
        {(size) => (
          <Controlled initial={42}>
            {(value, setValue) => (
              <NI
                {...args}
                size={size}
                showControls
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** The stepper controls. */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Stepper controls"
      description="Hold a stepper down. It must respect `min`, `max` and `step` rather than running past them."
    >
      <Section>
        <Case label="none">
          <Controlled initial={5}>
            {(value, setValue) => (
              <NI {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="showControls">
          <Controlled initial={5}>
            {(value, setValue) => (
              <NI {...args} showControls value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="custom icons">
          <Controlled initial={5}>
            {(value, setValue) => (
              <NI
                {...args}
                showControls
                controlIcons={{
                  up: <IconChevronUp />,
                  down: <IconChevronDown />,
                }}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
      </Section>

      <Section title="Bounds and step">
        <Case label="min=0 max=10">
          <Controlled initial={5}>
            {(value, setValue) => (
              <NI
                {...args}
                showControls
                min={0}
                max={10}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="step=5">
          <Controlled initial={0}>
            {(value, setValue) => (
              <NI
                {...args}
                showControls
                step={5}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="step=0.1">
          <Controlled initial={0}>
            {(value, setValue) => (
              <NI
                {...args}
                showControls
                step={0.1}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="negatives allowed">
          <Controlled initial={0}>
            {(value, setValue) => (
              <NI
                {...args}
                showControls
                min={-100}
                max={100}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Every state. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const states = [
      ["default", {}],
      ["disabled", { disabled: true }],
      ["readOnly", { readOnly: true }],
      ["required", { required: true }],
      ["loading", { loading: true }],
    ] as const;

    return (
      <Showcase
        title="Number input states"
        description="A disabled input's stepper buttons must be disabled too — the buttons are a second way in that is easy to forget."
      >
        <Section>
          {states.map(([label, props]) => (
            <Case key={label} label={label}>
              <Controlled initial={42}>
                {(value, setValue) => (
                  <NI
                    {...args}
                    {...props}
                    showControls
                    value={value}
                    setValue={setValue}
                  />
                )}
              </Controlled>
            </Case>
          ))}
        </Section>
      </Showcase>
    );
  },
};

/** Every material. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Number input materials">
      <Section>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Controlled initial={42}>
              {(value, setValue) => (
                <NI
                  {...args}
                  material={material}
                  showControls
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

/** Values a numeric field has to survive. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Number input edge cases"
      description="A number input is a text field underneath, so the interesting cases are the ones where what is typed is not a number."
    >
      <Section column>
        <Case
          label="starting above max"
          note="Should clamp on the next interaction, not silently accept."
        >
          <Controlled initial={999}>
            {(value, setValue) => (
              <NI
                {...args}
                min={0}
                max={10}
                showControls
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="a very large number">
          <Controlled initial={9_007_199_254_740_991}>
            {(value, setValue) => (
              <NI {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="a long decimal">
          <Controlled initial={3.14159265358979}>
            {(value, setValue) => (
              <NI {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case
          label="type a partial number"
          note="Typing `-` or `1.` must not be rewritten out from under the caret."
        >
          <Controlled initial={0}>
            {(value, setValue) => (
              <NI {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="a very long placeholder">
          <Controlled initial={NaN}>
            {(value, setValue) => (
              <NI
                {...args}
                placeholder={Storybook.longText}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
      </Section>
    </Showcase>
  ),
};
