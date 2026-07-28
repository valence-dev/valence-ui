import { Meta, StoryObj } from "@storybook/react";
import { IconSearch, IconX } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
} from "../../../../storybook";
import { IconButton } from "../../buttons/IconButton";
import { InputContainer as IC } from "./InputContainer";

const meta: Meta<typeof IC> = {
  component: IC,
  title: "Core/Inputs/InputContainer",
  argTypes: {
    ...sizingControls,
    grow: { control: { type: "boolean" }, table: { category: "Layout" } },
    disabled: { control: { type: "boolean" }, table: { category: "State" } },
    required: { control: { type: "boolean" }, table: { category: "State" } },
    loading: { control: { type: "boolean" }, table: { category: "State" } },
  },
  args: {
    icon: <IconSearch />,
    children: <input />,
  },
};
export default meta;
type Story = StoryObj<typeof IC>;

/**
 * The chrome every text-like input is built inside.
 *
 * `InputContainer` is not used directly by applications — it is what
 * `TextInput`, `NumberInput` and `SelectInput` all wrap themselves in — so its
 * stories exist to check the shared frame in isolation from any one input.
 */
export const Playground: Story = {};

/** Every size, empty and with content. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Input container sizes"
      description="The icon, the required marker and the trailing button all have to stay vertically centred on the container's height."
    >
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => <IC {...args} size={size} />}
      </Matrix>

      <Matrix title="size, with a button" values={Storybook.componentSizes}>
        {(size) => (
          <IC
            {...args}
            size={size}
            button={
              <IconButton size={size}>
                <IconX />
              </IconButton>
            }
          />
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every radius. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Input container radii">
      <Matrix title="radius" values={Storybook.componentSizes}>
        {(radius) => <IC {...args} radius={radius} />}
      </Matrix>
    </Showcase>
  ),
};

/** Every material. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Input container materials">
      <Section>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <IC {...args} material={material} />
          </Case>
        ))}
      </Section>

      <Section title="Coloured">
        {allMaterials("cyan").map(([name, material]) => (
          <Case key={name} label={name}>
            <IC {...args} material={material} />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Every state. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Input container states"
      description="`loading` replaces the icon with a loader in the same slot, so the container must not change width."
    >
      <Section>
        <Case label="default">
          <IC {...args} />
        </Case>
        <Case label="disabled">
          <IC {...args} disabled />
        </Case>
        <Case label="required">
          <IC {...args} required />
        </Case>
        <Case label="loading">
          <IC {...args} loading />
        </Case>
        <Case label="disabled + required + loading">
          <IC {...args} disabled required loading />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** The slots the container exposes. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Slots"
      description="An icon on the left, a button on the right, and a required marker between them. Every combination has to leave the input itself the remaining space."
    >
      <Section column>
        <Case label="icon only">
          <IC {...args} />
        </Case>
        <Case label="no icon">
          <IC {...args} icon={undefined} />
        </Case>
        <Case label="icon + button">
          <IC
            {...args}
            button={
              <IconButton>
                <IconX />
              </IconButton>
            }
          />
        </Case>
        <Case label="button only">
          <IC
            {...args}
            icon={undefined}
            button={
              <IconButton>
                <IconX />
              </IconButton>
            }
          />
        </Case>
        <Case label="icon + required + button">
          <IC
            {...args}
            required
            button={
              <IconButton>
                <IconX />
              </IconButton>
            }
          />
        </Case>
        <Case label="nothing but the input">
          <IC {...args} icon={undefined} />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Widths the container has to survive. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Input container edge cases">
      <Section column>
        <Case label="grow inside a wide parent">
          <IC {...args} grow />
        </Case>
        <Case
          label="in a very narrow parent"
          width={120}
          note="The icon must not squeeze the input out of existence."
        >
          <IC
            {...args}
            grow
            button={
              <IconButton>
                <IconX />
              </IconButton>
            }
          />
        </Case>
        <Case label="an explicit width">
          <IC {...args} width={400} />
        </Case>
        <Case label="a non-input child">
          <IC {...args}>
            <span>{Storybook.awkwardText}</span>
          </IC>
        </Case>
      </Section>
    </Showcase>
  ),
};
