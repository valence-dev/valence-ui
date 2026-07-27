import { Meta, StoryObj } from "@storybook/react";
import { Matrix, Section, Case, Showcase, Storybook } from "../../../../storybook";
import { GlassMaterial } from "../../../utilities/materials/GlassMaterial";
import { Text } from "../../display/Text/Text";
import { Flex } from "../Flex";
import { OverflowContainer as OC, OverflowDirection } from "./OverflowContainer";

const DIRECTIONS: OverflowDirection[] = [
  "vertical",
  "horizontal",
  "both",
  "none",
];

/** Content that overflows on both axes. */
function wideAndTall(rows = 20) {
  return (
    <Flex direction="column" gap={5} width={900}>
      {Array.from({ length: rows }, (_, index) => (
        <Text key={index}>
          {index + 1}. {Storybook.longText}
        </Text>
      ))}
    </Flex>
  );
}

const meta: Meta<typeof OC> = {
  component: OC,
  title: "Core/Layout/OverflowContainer",
  argTypes: {
    direction: {
      options: DIRECTIONS,
      control: { type: "inline-radio" },
      table: { category: "Layout" },
    },
    showScrollbar: {
      control: { type: "boolean" },
      table: { category: "Appearance" },
    },
    width: { control: { type: "text" }, table: { category: "Layout" } },
    height: { control: { type: "text" }, table: { category: "Layout" } },
  },
  args: {
    width: 400,
    height: 240,
  },
};
export default meta;
type Story = StoryObj<typeof OC>;

/**
 * A scrolling box.
 *
 * `OverflowContainer` is what `PageContainer` — and therefore every page in an
 * application — scrolls inside, and it had no story of its own. Its behaviour
 * is entirely about what it does to content that does not fit, so every case
 * gives it content that does not fit.
 */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Flex material={new GlassMaterial()}>
      <OC {...args}>{wideAndTall()}</OC>
    </Flex>
  ),
};

/** Every scroll direction, against content that overflows on both axes. */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Scroll directions"
      description="The same over-wide, over-tall content in each. `none` must clip rather than scroll, and each of the single-axis modes must refuse to move on the other one."
    >
      <Matrix title="direction" values={DIRECTIONS}>
        {(direction) => (
          <Flex material={new GlassMaterial()}>
            <OC {...args} direction={direction}>
              {wideAndTall()}
            </OC>
          </Flex>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** The scrollbar, shown and hidden. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Scrollbar"
      description="Hiding the scrollbar must not stop the container scrolling — check the hidden one still responds to the wheel and to a drag."
    >
      <Section>
        <Case label="showScrollbar (default)">
          <Flex material={new GlassMaterial()}>
            <OC {...args}>{wideAndTall()}</OC>
          </Flex>
        </Case>
        <Case label="showScrollbar={false}">
          <Flex material={new GlassMaterial()}>
            <OC {...args} showScrollbar={false}>
              {wideAndTall()}
            </OC>
          </Flex>
        </Case>
        <Case label="both axes, no scrollbar">
          <Flex material={new GlassMaterial()}>
            <OC {...args} direction="both" showScrollbar={false}>
              {wideAndTall()}
            </OC>
          </Flex>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Content that does and does not overflow. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Overflow container edge cases">
      <Section>
        <Case
          label="content that fits"
          note="Should not show a scrollbar or scroll."
        >
          <Flex material={new GlassMaterial()}>
            <OC {...args}>
              <Text>One short line.</Text>
            </OC>
          </Flex>
        </Case>
        <Case label="no children">
          <Flex material={new GlassMaterial()}>
            <OC {...args} />
          </Flex>
        </Case>
        <Case label="one unbreakable word">
          <Flex material={new GlassMaterial()}>
            <OC {...args} direction="both">
              <Text>
                {"Pneumonoultramicroscopicsilicovolcanoconiosis".repeat(4)}
              </Text>
            </OC>
          </Flex>
        </Case>
        <Case label="a thousand lines">
          <Flex material={new GlassMaterial()}>
            <OC {...args}>{wideAndTall(1000)}</OC>
          </Flex>
        </Case>
        <Case label="a tiny container">
          <Flex material={new GlassMaterial()}>
            <OC {...args} width={80} height={60}>
              {wideAndTall()}
            </OC>
          </Flex>
        </Case>
      </Section>
    </Showcase>
  ),
};
