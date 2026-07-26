import { Meta, StoryObj } from "@storybook/react";
import { IconBrandThreads, IconUser } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
} from "../../../../../storybook";
import { Text } from "../../Text/Text";
import { Avatar as A } from "./Avatar";

const meta: Meta<typeof A> = {
  component: A,
  title: "Core/Display/Avatar",
  argTypes: {
    ...sizingControls,
  },
  args: {
    src: Storybook.imageSrc,
    alt: "A person",
  },
};
export default meta;
type Story = StoryObj<typeof A>;

/** One avatar, driven entirely by the controls panel. */
export const Playground: Story = {};

/** Every size, with and without the secondary icon. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Avatar sizes"
      description="The secondary icon is sized from the avatar. At `xs` it must still be recognisable rather than a dot."
    >
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => <A {...args} size={size} />}
      </Matrix>

      <Matrix title="size, with secondaryIcon" values={Storybook.componentSizes}>
        {(size) => (
          <A {...args} size={size} secondaryIcon={<IconBrandThreads />} />
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every radius, from a square to the usual circle. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Avatar radii">
      <Matrix title="radius, size=xl" values={Storybook.componentSizes}>
        {(radius) => <A {...args} size="xl" radius={radius} />}
      </Matrix>
    </Showcase>
  ),
};

/** Loaded, empty and broken. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Avatar states"
      description="An avatar without a picture is the common case, not the exception — a user who has never uploaded one still has to look like a user."
    >
      <Section>
        <Case label="loaded">
          <A {...args} size="xl" />
        </Case>
        <Case label="no src">
          <A {...args} size="xl" src={undefined} />
        </Case>
        <Case label="broken src">
          <A {...args} size="xl" src={Storybook.brokenImageSrc} />
        </Case>
        <Case label="icon placeholder">
          <A {...args} size="xl" src={undefined} placeholder={<IconUser />} />
        </Case>
        <Case label="initials placeholder">
          <A {...args} size="xl" src={undefined} placeholder={<Text>IS</Text>} />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Every material, loaded and empty. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Avatar materials">
      <Section title="Empty">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <A {...args} size="xl" src={undefined} material={material} />
          </Case>
        ))}
      </Section>

      <Section title="Loaded">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <A {...args} size="xl" material={material} />
          </Case>
        ))}
      </Section>

      <Section title="Coloured, empty">
        {allMaterials("grape").map(([name, material]) => (
          <Case key={name} label={name}>
            <A {...args} size="xl" src={undefined} material={material} />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** The secondary icon on its own axis. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Secondary icon"
      description="The badge overhangs the avatar's circle, so it must not be clipped by the avatar's own overflow — nor push the avatar out of a row."
    >
      <Section>
        <Case label="none">
          <A {...args} size="xl" />
        </Case>
        <Case label="secondaryIcon">
          <A {...args} size="xl" secondaryIcon={<IconBrandThreads />} />
        </Case>
        <Case label="on an empty avatar">
          <A
            {...args}
            size="xl"
            src={undefined}
            secondaryIcon={<IconBrandThreads />}
          />
        </Case>
        <Case label="in a tight row" note="The badges must not overlap.">
          <A {...args} secondaryIcon={<IconBrandThreads />} />
          <A {...args} secondaryIcon={<IconBrandThreads />} />
          <A {...args} secondaryIcon={<IconBrandThreads />} />
        </Case>
      </Section>
    </Showcase>
  ),
};
