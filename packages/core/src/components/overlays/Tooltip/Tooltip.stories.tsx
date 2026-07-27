import { Meta, StoryObj } from "@storybook/react";
import { IconTool } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
} from "../../../../storybook";
import { useDisclosure } from "../../../hooks";
import { Button } from "../../buttons/TextButton";
import { IconButton } from "../../buttons/IconButton";
import { Text } from "../../display/Text/Text";
import { Flex } from "../../layout/Flex";
import { Tooltip as T } from "./Tooltip";

const PLACEMENTS = [
  "top",
  "top-start",
  "top-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
] as const;

const meta: Meta<typeof T> = {
  component: T,
  title: "Core/Overlays/Tooltip",
  argTypes: {
    placement: {
      options: PLACEMENTS,
      control: { type: "select" },
      table: { category: "Layout" },
    },
    offset: { control: { type: "number" }, table: { category: "Layout" } },
  },
};
export default meta;
type Story = StoryObj<typeof T>;

/** One tooltip, driven entirely by the controls panel. */
export const Playground: Story = {
  render: (args) => (
    <T {...args}>
      <T.Trigger>
        <Button>Hover me</Button>
      </T.Trigger>
      <T.Content>Tooltip content</T.Content>
    </T>
  ),
};

/**
 * Every placement.
 *
 * A tooltip flips itself when it would leave the viewport, so the interesting
 * check is that each placement is where it says it is *until* it has to move —
 * scroll this story so a row is against an edge and watch what happens.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Placement"
      description="Hover each. Every placement should be exactly where its name says while there is room, and flip to the opposite side when there is not."
    >
      <Matrix title="placement" values={PLACEMENTS} caseWidth={140}>
        {(placement) => (
          <T {...args} placement={placement}>
            <T.Trigger>
              <Button size="xs">{placement}</Button>
            </T.Trigger>
            <T.Content>{placement}</T.Content>
          </T>
        )}
      </Matrix>

      <Matrix
        title="offset"
        values={[0, 5, 20, 50]}
        label={(offset) => `offset=${offset}`}
      >
        {(offset) => (
          <T {...args} offset={offset}>
            <T.Trigger>
              <Button size="xs">{offset}</Button>
            </T.Trigger>
            <T.Content>offset {offset}</T.Content>
          </T>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Controlled and uncontrolled. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const controlled = useDisclosure();

    return (
      <Showcase
        title="Controlled and uncontrolled"
        description="An uncontrolled tooltip opens on hover and focus. A controlled one opens only when its disclosure says so — including staying open while the pointer is elsewhere."
      >
        <Section>
          <Case label="uncontrolled" note="Hover or tab to it.">
            <T {...args}>
              <T.Trigger>
                <Button>Uncontrolled</Button>
              </T.Trigger>
              <T.Content>Opens on hover</T.Content>
            </T>
          </Case>

          <Case label="controlled" note="Click to toggle.">
            <T {...args} disclosure={controlled}>
              <T.Trigger>
                <Button onClick={() => controlled.update(!controlled.opened)}>
                  {controlled.opened ? "Close" : "Open"}
                </Button>
              </T.Trigger>
              <T.Content>
                <Text align="center">Controlled content</Text>
              </T.Content>
            </T>
          </Case>
        </Section>
      </Showcase>
    );
  },
};

/** Triggers of different kinds. */
export const Composition: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Triggers"
      description="`Tooltip.Trigger` clones its single child to attach the handlers, so anything that forwards a ref can be a trigger — including plain text, which has no hover affordance of its own."
    >
      <Section>
        <Case label="a button">
          <T {...args}>
            <T.Trigger>
              <Button>Button</Button>
            </T.Trigger>
            <T.Content>A button trigger</T.Content>
          </T>
        </Case>
        <Case label="an icon button">
          <T {...args}>
            <T.Trigger>
              <IconButton>
                <IconTool />
              </IconButton>
            </T.Trigger>
            <T.Content>An icon button trigger</T.Content>
          </T>
        </Case>
        <Case label="plain text">
          <T {...args}>
            <T.Trigger>
              <Text>Some text</Text>
            </T.Trigger>
            <T.Content>A text trigger</T.Content>
          </T>
        </Case>
        <Case label="a disabled button" note="Should still show its tooltip.">
          <T {...args}>
            <T.Trigger>
              <Button disabled>Disabled</Button>
            </T.Trigger>
            <T.Content>A disabled trigger</T.Content>
          </T>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Every material on the tooltip's own surface. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Tooltip materials"
      description="A tooltip floats over arbitrary content, so its surface has to be opaque enough to read against anything — the translucent materials are the risk."
    >
      <Section>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <T {...args}>
              <T.Trigger>
                <Button size="xs">{name}</Button>
              </T.Trigger>
              <T.Content material={material}>A {name} tooltip</T.Content>
            </T>
          </Case>
        ))}
      </Section>

      <Section title="Over a busy background">
        <Case>
          <Flex
            padding={20}
            gap={10}
            style={{
              backgroundImage: `url(${Storybook.imageSrc})`,
              backgroundSize: "cover",
            }}
          >
            {allMaterials().map(([name, material]) => (
              <T key={name} {...args}>
                <T.Trigger>
                  <Button size="xs">{name}</Button>
                </T.Trigger>
                <T.Content material={material}>A {name} tooltip</T.Content>
              </T>
            ))}
          </Flex>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Content a tooltip is not meant to hold. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Tooltip edge cases">
      <Section>
        <Case label="a very long tooltip">
          <T {...args}>
            <T.Trigger>
              <Button>Long</Button>
            </T.Trigger>
            <T.Content>{Storybook.longText}</T.Content>
          </T>
        </Case>
        <Case label="empty content">
          <T {...args}>
            <T.Trigger>
              <Button>Empty</Button>
            </T.Trigger>
            <T.Content>{""}</T.Content>
          </T>
        </Case>
        <Case label="non-latin and emoji">
          <T {...args}>
            <T.Trigger>
              <Button>Awkward</Button>
            </T.Trigger>
            <T.Content>{Storybook.awkwardText}</T.Content>
          </T>
        </Case>
        <Case label="rich content">
          <T {...args}>
            <T.Trigger>
              <Button>Rich</Button>
            </T.Trigger>
            <T.Content>
              <Flex direction="column" gap={5}>
                <Text bold>A heading</Text>
                <Text size="xs">And a second line.</Text>
              </Flex>
            </T.Content>
          </T>
        </Case>
        <Case label="against the right edge" grow>
          <Flex justify="flex-end" width="100%">
            <T {...args} placement="right">
              <T.Trigger>
                <Button>Must flip</Button>
              </T.Trigger>
              <T.Content>There is no room to the right</T.Content>
            </T>
          </Flex>
        </Case>
      </Section>
    </Showcase>
  ),
};
