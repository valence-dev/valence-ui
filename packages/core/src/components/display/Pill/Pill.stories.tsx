import { Meta, StoryObj } from "@storybook/react";
import { IconTrash } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
  textControl,
} from "../../../../storybook";
import { GlassMaterial } from "../../../utilities/materials/GlassMaterial";
import { Pill as P } from "./Pill";

const meta: Meta<typeof P> = {
  component: P,
  title: "Core/Display/Pill",
  argTypes: {
    ...sizingControls,
    children: textControl("The pill's label."),
    withRemoveButton: {
      control: { type: "boolean" },
      table: { category: "Content" },
    },
  },
  args: {
    children: "Hi there",
  },
};
export default meta;
type Story = StoryObj<typeof P>;

/** One pill, driven entirely by the controls panel. */
export const Playground: Story = {};

/** Every size, with and without the remove button. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Pill sizes"
      description="The remove button is sized from the pill. Check it stays a circle inside the pill's height rather than stretching it."
    >
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => <P {...args} size={size} />}
      </Matrix>

      <Matrix title="size, withRemoveButton" values={Storybook.componentSizes}>
        {(size) => <P {...args} size={size} withRemoveButton />}
      </Matrix>
    </Showcase>
  ),
};

/** Every radius. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Pill radii">
      <Matrix title="radius" values={Storybook.componentSizes}>
        {(radius) => <P {...args} radius={radius} size="lg" />}
      </Matrix>
    </Showcase>
  ),
};

/** Every material, with and without the remove button. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Pill materials">
      <Section title="Default">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <P {...args} material={material} />
          </Case>
        ))}
      </Section>

      <Section title="With remove button">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <P {...args} material={material} withRemoveButton />
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
    <Showcase
      title="Pill colours"
      description="Pills are usually used to label a category, so they are shown en masse — one colour that misreads is obvious here."
    >
      <Matrix title="GlassMaterial color" values={Storybook.colors}>
        {(color) => (
          <P {...args} material={new GlassMaterial({ color })}>
            {color}
          </P>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** The remove button's variations. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Remove button">
      <Section>
        <Case label="none">
          <P {...args} />
        </Case>
        <Case label="withRemoveButton">
          <P {...args} withRemoveButton />
        </Case>
        <Case label="custom icon">
          <P {...args} withRemoveButton removeButtonIcon={<IconTrash />} />
        </Case>
        <Case label="onRemove" note="Click to fire the callback.">
          <P
            {...args}
            withRemoveButton
            onRemove={() => alert("Removed")}
          />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Labels a pill was not sized for. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Pill edge cases">
      <Section column>
        <Case label="empty label">
          <P {...args}>{""}</P>
        </Case>
        <Case label="single character">
          <P {...args}>1</P>
        </Case>
        <Case label="very long label">
          <P {...args}>{Storybook.longText}</P>
        </Case>
        <Case
          label="very long label, with remove button"
          note="The remove button must not be pushed off the end."
        >
          <P {...args} withRemoveButton>
            {Storybook.longText}
          </P>
        </Case>
        <Case label="non-latin and emoji">
          <P {...args}>{Storybook.awkwardText}</P>
        </Case>
      </Section>

      <Section title="A wrapping row of pills" >
        {[
          "design",
          "engineering",
          "product",
          "research",
          "operations",
          "marketing",
          "support",
          "finance",
        ].map((label) => (
          <P key={label} {...args} withRemoveButton>
            {label}
          </P>
        ))}
      </Section>
    </Showcase>
  ),
};
