import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  elevatedMaterials,
  sizingControls,
  stateControls,
} from "../../../../storybook";
import { GlassMaterial } from "../../../utilities/materials/GlassMaterial";
import { PaperMaterial } from "../../../utilities/materials/PaperMaterial";
import { PrimitiveButton } from "./PrimitiveButton";

const meta: Meta<typeof PrimitiveButton> = {
  component: PrimitiveButton,
  title: "Core/Buttons/PrimitiveButton",
  argTypes: {
    ...sizingControls,
    ...stateControls,
    square: { control: { type: "boolean" }, table: { category: "Layout" } },
    grow: { control: { type: "boolean" }, table: { category: "Layout" } },
    width: { control: { type: "number" }, table: { category: "Layout" } },
    height: { control: { type: "number" }, table: { category: "Layout" } },
  },
  args: {
    children: "Button",
  },
};
export default meta;
type Story = StoryObj<typeof PrimitiveButton>;

/** The button every other button in the library is built on. */
export const Playground: Story = {};

/** Every size, square and not. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Primitive button sizes"
      description="`size` drives height and padding together. A square button takes its width from its height."
    >
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => <PrimitiveButton {...args} size={size} />}
      </Matrix>

      <Matrix title="size, square" values={Storybook.componentSizes}>
        {(size) => (
          <PrimitiveButton {...args} size={size} square>
            1
          </PrimitiveButton>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every radius against a fixed size. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Primitive button radii">
      <Matrix title="radius, size=lg" values={Storybook.componentSizes}>
        {(radius) => <PrimitiveButton {...args} size="lg" radius={radius} />}
      </Matrix>
    </Showcase>
  ),
};

/** Every material, plain and interactive. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Primitive button materials"
      description="Materials are swapped wholesale, so each of these is the same button with a different surface."
    >
      <Section title="All materials">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <PrimitiveButton {...args} material={material} />
          </Case>
        ))}
      </Section>

      <Section title="Interactive">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <PrimitiveButton
              {...args}
              material={material.setInteractive(true)}
            />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** The elevation ramp, on both materials that carry one. */
export const Elevations: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Elevation"
      description="Elevation should read as a monotonic ramp: each step visibly above the one before it, and `unset` not looking like a sixth step."
    >
      <Section title="PaperMaterial">
        {elevatedMaterials("paper").map(([label, material]) => (
          <Case key={label} label={label}>
            <PrimitiveButton {...args} material={material} />
          </Case>
        ))}
      </Section>

      <Section title="SolidMaterial">
        {elevatedMaterials("solid").map(([label, material]) => (
          <Case key={label} label={label}>
            <PrimitiveButton {...args} material={material} />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Every palette colour applied to the material. */
export const Colors: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Material colours"
      description="Every colour in the default palette, so a contrast regression on one colour is visible against the others."
    >
      <Matrix title="GlassMaterial" values={Storybook.colors}>
        {(color) => (
          <PrimitiveButton {...args} material={new GlassMaterial({ color })} />
        )}
      </Matrix>

      <Matrix title="PaperMaterial" values={Storybook.colors}>
        {(color) => (
          <PrimitiveButton {...args} material={new PaperMaterial({ color })} />
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Disabled and loading. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Primitive button states">
      <Section>
        <Case label="default">
          <PrimitiveButton {...args} />
        </Case>
        <Case label="disabled">
          <PrimitiveButton {...args} disabled />
        </Case>
        <Case label="loading">
          <PrimitiveButton {...args} loading />
        </Case>
        <Case label="disabled + loading">
          <PrimitiveButton {...args} disabled loading />
        </Case>
      </Section>

      <Matrix title="loading, by size" values={Storybook.componentSizes}>
        {(size) => <PrimitiveButton {...args} size={size} loading />}
      </Matrix>
    </Showcase>
  ),
};

/** The transition, hover and tap animations. */
export const Animations: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Animations"
      description="Hover and press each button. The transition animation runs on mount, so reload the story to see it."
    >
      <Section>
        <Case label="none">
          <PrimitiveButton {...args} />
        </Case>
        <Case label="hover: grow">
          <PrimitiveButton {...args} animation={{ hoverAnimation: "grow" }} />
        </Case>
        <Case label="tap: bounce">
          <PrimitiveButton {...args} animation={{ tapAnimation: "bounce" }} />
        </Case>
        <Case label="transition: fade + blur + grow">
          <PrimitiveButton
            {...args}
            animation={{ transitionAnimation: ["fade", "blur", "grow"] }}
          />
        </Case>
        <Case label="all three">
          <PrimitiveButton
            {...args}
            material={new PaperMaterial()}
            animation={{
              transitionAnimation: ["fade", "blur", "grow"],
              hoverAnimation: "grow",
              tapAnimation: "bounce",
            }}
          />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** A button whose content changes size while `layout` animates the box. */
export const AnimateLayout: Story = {
  name: "Animate Layout",
  render: (args) => {
    const labels = [
      "Button",
      "Click Me",
      "Press Here",
      "Submit",
      "Action",
      "Do Something",
    ];

    const [label, setLabel] = useState(0);

    return (
      <PrimitiveButton
        {...args}
        onClick={() => setLabel((prev) => (prev + 1) % labels.length)}
        layout
      >
        <motion.div layout>{labels[label]}</motion.div>
      </PrimitiveButton>
    );
  },
};

/** A material that changes with the viewport. */
export const Responsive: Story = {
  render: (args) => (
    <PrimitiveButton
      {...args}
      material={{
        default: new GlassMaterial({ color: "red" }),
        mobile: new GlassMaterial({ color: "blue" }),
        tablet: new GlassMaterial({ color: "green" }),
        desktopLarge: new GlassMaterial({ color: "yellow" }),
        tv: new GlassMaterial({ color: "violet" }),
      }}
    >
      Resize the frame
    </PrimitiveButton>
  ),
};

/** Content and sizing a button is not designed for. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Primitive button edge cases">
      <Section column>
        <Case label="no children" note="Should keep its height and padding.">
          <PrimitiveButton {...args}>{null}</PrimitiveButton>
        </Case>
        <Case label="very long content">
          <PrimitiveButton {...args}>{Storybook.longText}</PrimitiveButton>
        </Case>
        <Case label="explicit width and height">
          <PrimitiveButton {...args} width={300} height={80} />
        </Case>
        <Case
          label="width smaller than the content"
          note="Check the overflow treatment."
        >
          <PrimitiveButton {...args} width={60}>
            {Storybook.longText}
          </PrimitiveButton>
        </Case>
        <Case label='component="a"'>
          <PrimitiveButton {...args} component="a" href="https://example.com">
            Anchor
          </PrimitiveButton>
        </Case>
      </Section>
    </Showcase>
  ),
};
