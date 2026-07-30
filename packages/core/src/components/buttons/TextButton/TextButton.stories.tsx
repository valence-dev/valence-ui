import { Meta, StoryObj } from "@storybook/react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
  stateControls,
  textControl,
} from "../../../../storybook";
import { Button } from "./TextButton";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Core/Buttons/Button",
  argTypes: {
    ...sizingControls,
    ...stateControls,
    children: textControl("The button's label."),
    square: { control: { type: "boolean" }, table: { category: "Layout" } },
    grow: { control: { type: "boolean" }, table: { category: "Layout" } },
  },
  args: {
    children: "Button",
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

/** One button, driven entirely by the controls panel. */
export const Playground: Story = {};

/** Every size class, so the type and the box scale together. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Button sizes"
      description="Height, horizontal padding and font size all key off `size`. Check the label stays vertically centred at every step."
    >
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => <Button {...args} size={size} />}
      </Matrix>

      <Matrix
        title="size, square"
        description="A square button takes its width from its height, so a long label is clamped to one line and ellipsised rather than overflowing the box — that is what this case is for."
        values={Storybook.componentSizes}
      >
        {(size) => <Button {...args} size={size} square />}
      </Matrix>
    </Showcase>
  ),
};

/** Every radius class, at two sizes, to show the two are independent. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Button radii"
      description="`radius` is independent of `size`: an `xs` radius on an `xl` button should stay tight."
    >
      <Matrix
        title="radius, size=md"
        values={Storybook.componentSizes}
      >
        {(radius) => <Button {...args} size="md" radius={radius} />}
      </Matrix>

      <Matrix
        title="radius, size=xl"
        values={Storybook.componentSizes}
      >
        {(radius) => <Button {...args} size="xl" radius={radius} />}
      </Matrix>
    </Showcase>
  ),
};

/** Each material, plain, interactive and coloured. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Button materials"
      description="The theme gives buttons a glass material by default. Hover the interactive row to check the hover treatment survives the material swap."
    >
      <Section title="Default">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Button {...args} material={material} />
          </Case>
        ))}
      </Section>

      <Section title="Interactive">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Button {...args} material={material.setInteractive(true)} />
          </Case>
        ))}
      </Section>

      <Section title="Coloured">
        {allMaterials("blue").map(([name, material]) => (
          <Case key={name} label={name}>
            <Button {...args} material={material} />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Disabled and loading, alone and together. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Button states"
      description="`loading` swaps the label for a loader without resizing the button, and `disabled` must block the click in both."
    >
      <Section>
        <Case label="default">
          <Button {...args} />
        </Case>
        <Case label="disabled">
          <Button {...args} disabled />
        </Case>
        <Case label="loading">
          <Button {...args} loading />
        </Case>
        <Case label="disabled + loading">
          <Button {...args} disabled loading />
        </Case>
      </Section>

      <Matrix
        title="loading, by size"
        description="The loader is sized from the button, so it should never change the button's height."
        values={Storybook.componentSizes}
      >
        {(size) => <Button {...args} size={size} loading />}
      </Matrix>
    </Showcase>
  ),
};

/** The same tag swapped out from under the styling. */
export const Composition: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Polymorphism"
      description="`component` changes the tag without changing the styling. The anchor must still look and focus like a button."
    >
      <Section>
        <Case label='component="button"'>
          <Button {...args} />
        </Case>
        <Case label='component="a"'>
          <Button {...args} component="a" href="https://example.com">
            Link button
          </Button>
        </Case>
        <Case label="disabled anchor" note="Must not be focusable.">
          <Button {...args} component="a" href="https://example.com" disabled>
            Link button
          </Button>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Labels that do not behave. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Button edge cases"
      description="The content a button is given in the wild, rather than the content it is designed for."
    >
      <Section column>
        <Case label="empty label" note="Should keep its padding, not collapse.">
          <Button {...args}>{""}</Button>
        </Case>
        <Case
          label="very long label"
          note="Width is `fit-content`, so this grows rather than wraps."
        >
          <Button {...args}>{Storybook.longText}</Button>
        </Case>
        <Case
          label="long label in a narrow parent"
          width={200}
          note="Constrained by the parent — check the overflow treatment."
        >
          <Button {...args} width="100%">
            {Storybook.longText}
          </Button>
        </Case>
        <Case label="non-latin and emoji">
          <Button {...args}>{Storybook.awkwardText}</Button>
        </Case>
      </Section>
    </Showcase>
  ),
};
