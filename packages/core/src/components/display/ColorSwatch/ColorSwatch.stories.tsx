import { Meta, StoryObj } from "@storybook/react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  colorControl,
  sizingControls,
} from "../../../../storybook";
import { ColorSwatch as CS } from "./ColorSwatch";

const OPACITIES = ["weak", "medium", "strong"] as const;

const meta: Meta<typeof CS> = {
  component: CS,
  title: "Core/Display/ColorSwatch",
  argTypes: {
    ...sizingControls,
    color: colorControl,
    opacity: {
      options: OPACITIES,
      control: { type: "select" },
      table: { category: "Appearance" },
    },
    withOutline: {
      control: { type: "boolean" },
      table: { category: "Appearance" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof CS>;

/** One swatch, driven entirely by the controls panel. */
export const Playground: Story = {};

/** Every size. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Swatch sizes">
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => <CS {...args} size={size} />}
      </Matrix>
    </Showcase>
  ),
};

/** Every radius, from a square to the default circle. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Swatch radii"
      description="A swatch defaults to `xl`, which should read as a circle at every size."
    >
      <Matrix title="radius, size=lg" values={Storybook.componentSizes}>
        {(radius) => <CS {...args} radius={radius} size="lg" />}
      </Matrix>
    </Showcase>
  ),
};

/**
 * The whole palette.
 *
 * This is the swatch's real job — it exists to show a colour, so the case that
 * matters most is every colour it can be asked to show.
 */
export const Colors: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="The palette"
      description="Every colour, at every opacity. The outline is what keeps a white swatch visible on a white page — check it survives all three opacities."
    >
      {OPACITIES.map((opacity) => (
        <Matrix
          key={opacity}
          title={`opacity=${opacity}`}
          values={Storybook.colors}
        >
          {(color) => (
            <CS {...args} color={color} opacity={opacity} size="lg" />
          )}
        </Matrix>
      ))}

      <Matrix title="fully opaque" values={Storybook.colors}>
        {(color) => <CS {...args} color={color} size="lg" />}
      </Matrix>
    </Showcase>
  ),
};

/** With and without the outline, on the colours that need it most. */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Outline"
      description="`withOutline` is what stops a white or transparent swatch from disappearing. These are the colours where its absence shows."
    >
      <Section title="withOutline (default)">
        {["white", "permaWhite", "black", "pink"].map((color) => (
          <Case key={color} label={color}>
            <CS {...args} color={color} size="lg" />
          </Case>
        ))}
      </Section>

      <Section title="withOutline={false}">
        {["white", "permaWhite", "black", "pink"].map((color) => (
          <Case key={color} label={color}>
            <CS {...args} color={color} size="lg" withOutline={false} />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Colours the palette does not define. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Swatch edge cases"
      description="A swatch takes any CSS colour, not only a palette key — and has to do something sensible with a key that does not exist."
    >
      <Section>
        <Case label="unset">
          <CS {...args} size="lg" />
        </Case>
        <Case label="hex">
          <CS {...args} color="#ff6600" size="lg" />
        </Case>
        <Case label="rgba">
          <CS {...args} color="rgba(0, 128, 255, 0.4)" size="lg" />
        </Case>
        <Case label="transparent">
          <CS {...args} color="transparent" size="lg" />
        </Case>
        <Case label="unknown palette key">
          <CS {...args} color="not-a-color" size="lg" />
        </Case>
      </Section>
    </Showcase>
  ),
};
