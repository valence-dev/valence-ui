import { Meta, StoryObj } from "@storybook/react";
import { IconTrash, IconUserCircle } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
  stateControls,
} from "../../../../storybook";
import { IconButton as IB } from "./IconButton";

const meta: Meta<typeof IB> = {
  component: IB,
  title: "Core/Buttons/IconButton",
  argTypes: {
    ...sizingControls,
    ...stateControls,
    tooltip: {
      control: { type: "text" },
      table: { category: "Content" },
    },
    square: { control: { type: "boolean" }, table: { category: "Layout" } },
    grow: { control: { type: "boolean" }, table: { category: "Layout" } },
  },
  args: {
    children: <IconUserCircle />,
  },
};
export default meta;
type Story = StoryObj<typeof IB>;

/** One button, driven entirely by the controls panel. */
export const Playground: Story = {};

/** Every size — the button is square, so this is the icon's scale too. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Icon button sizes"
      description="An icon button is square by construction, so its width and height should stay equal at every size."
    >
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => <IB {...args} size={size} />}
      </Matrix>
    </Showcase>
  ),
};

/** Every radius, from square corners to a circle. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Icon button radii"
      description="At `xl` on a small button the radius should round to a circle rather than overshoot."
    >
      <Matrix title="radius, size=md" values={Storybook.componentSizes}>
        {(radius) => <IB {...args} size="md" radius={radius} />}
      </Matrix>

      <Matrix title="radius, size=xl" values={Storybook.componentSizes}>
        {(radius) => <IB {...args} size="xl" radius={radius} />}
      </Matrix>
    </Showcase>
  ),
};

/** Each material. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Icon button materials">
      <Section title="Default">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <IB {...args} material={material} />
          </Case>
        ))}
      </Section>

      <Section title="Interactive">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <IB {...args} material={material.setInteractive(true)} />
          </Case>
        ))}
      </Section>

      <Section title="Coloured">
        {allMaterials("red").map(([name, material]) => (
          <Case key={name} label={name}>
            <IB {...args} material={material} />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Disabled and loading. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Icon button states"
      description="The loader replaces the icon in the same square, so the button must not resize."
    >
      <Section>
        <Case label="default">
          <IB {...args} />
        </Case>
        <Case label="disabled">
          <IB {...args} disabled />
        </Case>
        <Case label="loading">
          <IB {...args} loading />
        </Case>
        <Case label="disabled + loading">
          <IB {...args} disabled loading />
        </Case>
      </Section>

      <Matrix title="loading, by size" values={Storybook.componentSizes}>
        {(size) => <IB {...args} size={size} loading />}
      </Matrix>
    </Showcase>
  ),
};

/**
 * The built-in tooltip.
 *
 * An icon button has no visible label, so the tooltip is usually the only
 * name it has — worth its own case rather than a control on the playground.
 */
export const Composition: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Tooltips"
      description="Hover or focus each button. The tooltip inherits the button's colour, and must survive the button being disabled."
    >
      <Section>
        <Case label="tooltip">
          <IB {...args} tooltip="Profile" />
        </Case>
        <Case label="tooltip, long text">
          <IB {...args} tooltip={Storybook.longText} />
        </Case>
        <Case label="tooltip, disabled">
          <IB {...args} tooltip="Profile" disabled />
        </Case>
        <Case label="tooltip, destructive">
          <IB {...args} tooltip="Delete forever">
            <IconTrash />
          </IB>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Sizing an icon button is not designed for. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Icon button edge cases">
      <Section>
        <Case label="no icon" note="Should still be a square of the right size.">
          <IB {...args}>{null}</IB>
        </Case>
        <Case label="square={false}" note="Width is free to differ from height.">
          <IB {...args} square={false} />
        </Case>
        <Case label="explicit width">
          <IB {...args} square={false} width={160} />
        </Case>
        <Case label="text as the child">
          <IB {...args}>OK</IB>
        </Case>
      </Section>
    </Showcase>
  ),
};
