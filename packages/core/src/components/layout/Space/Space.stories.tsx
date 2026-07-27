import { Meta, StoryObj } from "@storybook/react";
import { Case, Matrix, Section, Showcase } from "../../../../storybook";
import { GlassMaterial } from "../../../utilities/materials/GlassMaterial";
import { Text } from "../../display/Text/Text";
import { Flex, FlexProps } from "../Flex";
import { Space as S } from "./Space";

const BOX: FlexProps = {
  align: "center",
  justify: "center",
  height: 60,
  width: 60,
  material: new GlassMaterial(),
};

const meta: Meta<typeof S> = {
  component: S,
  title: "Core/Layout/Space",
  argTypes: {
    height: { control: { type: "text" }, table: { category: "Layout" } },
    width: { control: { type: "text" }, table: { category: "Layout" } },
    grow: { control: { type: "boolean" }, table: { category: "Layout" } },
  },
  args: {
    height: "100px",
  },
};
export default meta;
type Story = StoryObj<typeof S>;

/**
 * A gap between two boxes.
 *
 * `Space` renders nothing at all, so every case has to put it between
 * something — the boxes are the only way to see what it did.
 */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Flex direction="column" align="stretch" gap={0}>
      <Flex {...BOX} width={undefined}>
        <Text>1</Text>
      </Flex>
      <S {...args} />
      <Flex {...BOX} width={undefined}>
        <Text>2</Text>
      </Flex>
    </Flex>
  ),
};

/** Fixed heights and widths. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Space sizes">
      <Matrix
        title="height, in a column"
        values={["0px", "10px", "40px", "100px"]}
        label={(height) => `height=${height}`}
        column
      >
        {(height) => (
          <Flex direction="column" align="stretch" gap={0}>
            <Flex {...BOX} width={undefined} height={40}>
              <Text>1</Text>
            </Flex>
            <S {...args} height={height} />
            <Flex {...BOX} width={undefined} height={40}>
              <Text>2</Text>
            </Flex>
          </Flex>
        )}
      </Matrix>

      <Matrix
        title="width, in a row"
        values={["0px", "10px", "40px", "100px"]}
        label={(width) => `width=${width}`}
        column
      >
        {(width) => (
          <Flex gap={0}>
            <Flex {...BOX}>
              <Text>1</Text>
            </Flex>
            <S {...args} height={undefined} width={width} />
            <Flex {...BOX}>
              <Text>2</Text>
            </Flex>
          </Flex>
        )}
      </Matrix>
    </Showcase>
  ),
};

/**
 * `grow`, which is the reason to reach for `Space` over a margin.
 *
 * A growing space takes whatever room is left, which is how a row gets one
 * item pinned left and another pinned right without either knowing the
 * container's width.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Growing">
      <Section column>
        <Case label="grow, in a row" note="Pushes 2 to the far edge.">
          <Flex gap={0} width="100%">
            <Flex {...BOX}>
              <Text>1</Text>
            </Flex>
            <S {...args} height={undefined} grow />
            <Flex {...BOX}>
              <Text>2</Text>
            </Flex>
          </Flex>
        </Case>
        <Case label="two growing spaces" note="Centres the middle box.">
          <Flex gap={0} width="100%">
            <Flex {...BOX}>
              <Text>1</Text>
            </Flex>
            <S {...args} height={undefined} grow />
            <Flex {...BOX}>
              <Text>2</Text>
            </Flex>
            <S {...args} height={undefined} grow />
            <Flex {...BOX}>
              <Text>3</Text>
            </Flex>
          </Flex>
        </Case>
        <Case label="grow, in a column" width={200}>
          <Flex direction="column" align="stretch" gap={0} height={240}>
            <Flex {...BOX} width={undefined} height={40}>
              <Text>1</Text>
            </Flex>
            <S {...args} height={undefined} grow />
            <Flex {...BOX} width={undefined} height={40}>
              <Text>2</Text>
            </Flex>
          </Flex>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Sizes that should do nothing at all. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Space edge cases"
      description="A space with no dimensions is legitimate — it should simply take up none, rather than collapsing the flex around it."
    >
      <Section column>
        <Case label="no props at all">
          <Flex gap={0}>
            <Flex {...BOX}>
              <Text>1</Text>
            </Flex>
            <S />
            <Flex {...BOX}>
              <Text>2</Text>
            </Flex>
          </Flex>
        </Case>
        <Case label="height in a row" note="Has no horizontal effect.">
          <Flex gap={0}>
            <Flex {...BOX}>
              <Text>1</Text>
            </Flex>
            <S {...args} />
            <Flex {...BOX}>
              <Text>2</Text>
            </Flex>
          </Flex>
        </Case>
        <Case label="a percentage height">
          <Flex direction="column" align="stretch" gap={0} height={200}>
            <Flex {...BOX} width={undefined} height={40}>
              <Text>1</Text>
            </Flex>
            <S {...args} height="50%" />
            <Flex {...BOX} width={undefined} height={40}>
              <Text>2</Text>
            </Flex>
          </Flex>
        </Case>
      </Section>
    </Showcase>
  ),
};
