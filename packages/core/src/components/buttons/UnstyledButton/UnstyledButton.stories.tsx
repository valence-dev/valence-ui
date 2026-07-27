import { Meta, StoryObj } from "@storybook/react";
import { IconHeart } from "@tabler/icons-react";
import { Case, Section, Showcase, Storybook } from "../../../../storybook";
import { GlassMaterial } from "../../../utilities/materials/GlassMaterial";
import { Icon } from "../../display/Icon";
import { Text } from "../../display/Text/Text";
import { Flex } from "../../layout/Flex";
import { UnstyledButton as UB } from "./UnstyledButton";

const meta: Meta<typeof UB> = {
  component: UB,
  title: "Core/Buttons/UnstyledButton",
  args: {
    children: "Unstyled button",
  },
};
export default meta;
type Story = StoryObj<typeof UB>;

/**
 * A button with the browser's styling stripped and nothing put back.
 *
 * `UnstyledButton` is what `PrimitiveButton` is built on, and until now it had
 * no story at all — which for a component whose whole contract is "looks like
 * nothing, behaves like a button" is the exact case worth being able to see.
 */
export const Playground: Story = {};

/**
 * What the component removes.
 *
 * The point of the comparison is that these two should be indistinguishable
 * apart from the pointer: a native `button` brings a background, a border,
 * padding and a font the surrounding text does not have.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Against a native button"
      description="The unstyled button should be visually identical to the plain text beside it, while still being focusable and clickable."
    >
      <Section>
        <Case label="UnstyledButton">
          <UB {...args} />
        </Case>
        <Case label="a native <button>">
          <button>Unstyled button</button>
        </Case>
        <Case label="plain text, for reference">
          <Text>Unstyled button</Text>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Children of every kind, since the component imposes no layout of its own. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Content"
      description="The component adds no padding or layout, so whatever it is given is exactly what is rendered — including a whole composed block."
    >
      <Section>
        <Case label="text">
          <UB {...args} />
        </Case>
        <Case label="an icon">
          <UB {...args}>
            <Icon>
              <IconHeart />
            </Icon>
          </UB>
        </Case>
        <Case label="a composed block">
          <UB {...args}>
            <Flex
              direction="column"
              padding={15}
              gap={5}
              material={new GlassMaterial({ interactive: true })}
            >
              <Text bold>A clickable card</Text>
              <Text size="xs">Built out of an unstyled button.</Text>
            </Flex>
          </UB>
        </Case>
        <Case label="no children">
          <UB {...args}>{null}</UB>
        </Case>
        <Case label="non-latin and emoji">
          <UB {...args}>{Storybook.awkwardText}</UB>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Animations, which are the only styling the component offers. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Animations"
      description="Unlike `PrimitiveButton`, this has no default hover or tap animation — it stays inert unless asked. Hover and press each to confirm."
    >
      <Section>
        <Case label="none (the default)">
          <UB {...args} />
        </Case>
        <Case label="hover: grow">
          <UB {...args} animation={{ hoverAnimation: "grow" }} />
        </Case>
        <Case label="tap: bounce">
          <UB {...args} animation={{ tapAnimation: "bounce" }} />
        </Case>
        <Case label="transition: fade">
          <UB {...args} animation={{ transitionAnimation: "fade" }} />
        </Case>
        <Case label="disabled">
          <UB {...args} disabled />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** The tag underneath. */
export const Composition: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Polymorphism"
      description="As an anchor it must lose the underline and the visited colour along with everything else, while still navigating."
    >
      <Section>
        <Case label='component="button"'>
          <UB {...args} />
        </Case>
        <Case label='component="a"'>
          <UB {...args} component="a" href="https://example.com">
            An unstyled link
          </UB>
        </Case>
      </Section>
    </Showcase>
  ),
};
