import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { IconBrandThreads } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
} from "../../../../../storybook";
import { Avatar } from "../Avatar/Avatar";
import { AvatarGroup as AG } from "./AvatarGroup";

/**
 * `count` avatars.
 *
 * Every case needs a different number of them and the group clones its
 * children to inject the size and stacking order, so they are built here
 * rather than written out.
 */
function avatars(count: number, src: string | undefined = Storybook.imageSrc) {
  return Array.from({ length: count }, (_, index) => (
    <Avatar key={index} src={src} alt={`Person ${index + 1}`} />
  )) as ReactNode;
}

const meta: Meta<typeof AG> = {
  component: AG,
  title: "Core/Display/AvatarGroup",
  argTypes: {
    ...sizingControls,
    gap: {
      control: { type: "number" },
      description:
        "The overlap between avatars. Negative values stack them; the default is derived from the size.",
      table: { category: "Layout" },
    },
  },
  args: {
    children: avatars(4),
  },
};
export default meta;
type Story = StoryObj<typeof AG>;

/** Four stacked avatars, driven entirely by the controls panel. */
export const Playground: Story = {};

/** Every size — the group sizes all its children at once. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Avatar group sizes"
      description="`size` is applied to every child, overriding whatever the child was given. The overlap is derived from the size, so it should stay proportional."
    >
      <Matrix title="size" values={Storybook.componentSizes} column>
        {(size) => (
          <AG {...args} size={size}>
            {avatars(4)}
          </AG>
        )}
      </Matrix>
    </Showcase>
  ),
};

/**
 * The overlap.
 *
 * The stacking order is what makes an overlapping group readable — each avatar
 * has to sit above the one after it, so the ring reads as a stack rather than
 * as a pile.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Overlap"
      description="Each avatar must overlap the one that follows it, never the one before. At the tightest gap only the leading edge of each is visible, and the order still has to be obvious."
    >
      <Matrix
        title="gap"
        values={[-30, -20, -10, 0, 10]}
        label={(gap) => `gap=${gap}`}
        column
      >
        {(gap) => (
          <AG {...args} size="lg" gap={gap}>
            {avatars(5)}
          </AG>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every material, applied to the whole group. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Avatar group materials"
      description="The material becomes each avatar's ring, which is what separates one overlapping avatar from the next."
    >
      <Section column>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <AG {...args} size="lg" material={material}>
              {avatars(4)}
            </AG>
          </Case>
        ))}
      </Section>

      <Section title="Empty avatars" column>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <AG {...args} size="lg" material={material}>
              {avatars(4, undefined)}
            </AG>
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Counts a stacked group has to cope with. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Avatar group edge cases">
      <Section column>
        <Case label="one avatar" note="Nothing to overlap.">
          <AG {...args} size="lg">
            {avatars(1)}
          </AG>
        </Case>
        <Case label="two avatars">
          <AG {...args} size="lg">
            {avatars(2)}
          </AG>
        </Case>
        <Case label="twenty avatars" note="Check the stacking order holds.">
          <AG {...args} size="lg">
            {avatars(20)}
          </AG>
        </Case>
        <Case label="all empty">
          <AG {...args} size="lg">
            {avatars(4, undefined)}
          </AG>
        </Case>
        <Case label="with secondary icons">
          <AG {...args} size="lg" secondaryIcon={<IconBrandThreads />}>
            {avatars(4)}
          </AG>
        </Case>
        <Case label="in a narrow parent" width={160}>
          <AG {...args} size="lg">
            {avatars(8)}
          </AG>
        </Case>
      </Section>
    </Showcase>
  ),
};
