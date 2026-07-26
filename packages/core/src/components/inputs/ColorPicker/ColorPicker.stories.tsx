import { Meta, StoryObj } from "@storybook/react";
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
import { ColorPicker as CP } from "./ColorPicker";

const meta: Meta<typeof CP> = {
  component: CP,
  title: "Core/Inputs/ColorPicker",
  argTypes: {
    ...sizingControls,
    gap: { control: { type: "number" }, table: { category: "Layout" } },
    wrap: {
      options: ["nowrap", "wrap"],
      control: { type: "inline-radio" },
      table: { category: "Layout" },
    },
    disabled: { control: { type: "boolean" }, table: { category: "State" } },
    readOnly: { control: { type: "boolean" }, table: { category: "State" } },
    loading: { control: { type: "boolean" }, table: { category: "State" } },
  },
};
export default meta;
type Story = StoryObj<typeof CP>;

/** The theme palette, driven entirely by the controls panel. */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Colour picker">
      <Controlled<string> initial="">
        {(value, setValue) => <CP {...args} value={value} setValue={setValue} />}
      </Controlled>
    </Showcase>
  ),
};

/** Every size. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Colour picker sizes"
      description="Each swatch is an icon button, so the whole row scales together. At `xs` the selected indicator must still be visible."
    >
      <Matrix title="size" values={Storybook.componentSizes} column>
        {(size) => (
          <Controlled<string> initial="blue">
            {(value, setValue) => (
              <CP {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Nothing selected, and every colour selected in turn. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Selection"
      description="The selected swatch is marked on top of its own colour, so the marker has to stay visible against all of them — including the darkest and the lightest."
    >
      <Section title="Nothing selected" column>
        <Case>
          <Controlled<string> initial="">
            {(value, setValue) => (
              <CP {...args} wrap="wrap" value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
      </Section>

      <Matrix
        title="each colour selected"
        values={["pink", "red", "yellow", "green", "cyan", "blue", "grape"]}
        label={(color) => `value=${color}`}
        column
      >
        {(color) => (
          <Controlled<string> initial={color}>
            {(value, setValue) => (
              <CP {...args} wrap="wrap" value={value} setValue={setValue} />
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
            <Controlled<string> initial="blue">
              {(value, setValue) => (
                <CP {...args} {...props} value={value} setValue={setValue} />
              )}
            </Controlled>
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Every material behind the swatches. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Colour picker materials">
      <Section column>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Controlled<string> initial="blue">
              {(value, setValue) => (
                <CP
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

/** Which colours are offered, and how the row is laid out. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Palette and layout"
      description="`excludeColors` has a non-empty default — the near-black and near-white entries are hidden unless the caller asks for them back."
    >
      <Section column>
        <Case label="default palette">
          <Controlled<string> initial="">
            {(value, setValue) => (
              <CP {...args} wrap="wrap" value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="excludeColors={[]}" note="Every colour, including the greys.">
          <Controlled<string> initial="">
            {(value, setValue) => (
              <CP
                {...args}
                excludeColors={[]}
                wrap="wrap"
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="gap=0">
          <Controlled<string> initial="">
            {(value, setValue) => (
              <CP
                {...args}
                gap={0}
                wrap="wrap"
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="gap=20">
          <Controlled<string> initial="">
            {(value, setValue) => (
              <CP
                {...args}
                gap={20}
                wrap="wrap"
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case
          label='wrap="nowrap" in a narrow parent'
          width={240}
          note="The default — the row overflows rather than wrapping."
        >
          <Controlled<string> initial="">
            {(value, setValue) => (
              <CP {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label='wrap="wrap" in a narrow parent' width={240}>
          <Controlled<string> initial="">
            {(value, setValue) => (
              <CP {...args} wrap="wrap" value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
      </Section>
    </Showcase>
  ),
};
