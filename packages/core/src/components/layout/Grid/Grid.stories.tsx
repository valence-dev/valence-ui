import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
} from "../../../../storybook";
import { SolidMaterial } from "../../../utilities/materials/SolidMaterial";
import { Text } from "../../display/Text/Text";
import { Flex } from "../Flex";
import { Grid as G, GridItemProps } from "./Grid";

/**
 * One visible cell.
 *
 * `Grid.Item` carries placement only — it has no material and no background of
 * its own — so the surface has to come from something inside it. Every grid
 * story is about *where* a cell lands, which cannot be seen without one.
 */
function Cell(props: GridItemProps) {
  const { children, ...rest } = props;

  return (
    <G.Item {...rest}>
      <Flex
        material={new SolidMaterial({ color: "black" })}
        width="100%"
        height="100%"
        padding={10}
        align="center"
        justify="center"
      >
        <Text align="center" color="white">
          {children}
        </Text>
      </Flex>
    </G.Item>
  );
}

/** `count` numbered cells, for showing how a grid places its children. */
function cells(count: number): ReactNode {
  return Array.from({ length: count }, (_, index) => (
    <Cell key={index}>{index + 1}</Cell>
  ));
}

const meta: Meta<typeof G> = {
  component: G,
  title: "Core/Layout/Grid",
  argTypes: {
    rows: { control: { type: "text" }, table: { category: "Template" } },
    columns: { control: { type: "text" }, table: { category: "Template" } },
    grid: { control: { type: "text" }, table: { category: "Template" } },
    template: { control: { type: "text" }, table: { category: "Template" } },
    templateAreas: {
      control: { type: "text" },
      table: { category: "Template" },
    },
    autoRows: { control: { type: "text" }, table: { category: "Template" } },
    autoColumns: { control: { type: "text" }, table: { category: "Template" } },
    autoFlow: { control: { type: "text" }, table: { category: "Template" } },
    gap: { control: { type: "number" }, table: { category: "Layout" } },
    rowGap: { control: { type: "number" }, table: { category: "Layout" } },
    columnGap: { control: { type: "number" }, table: { category: "Layout" } },
    justifyItems: { control: { type: "text" }, table: { category: "Layout" } },
    justifyContent: { control: { type: "text" }, table: { category: "Layout" } },
    alignItems: { control: { type: "text" }, table: { category: "Layout" } },
    alignContent: { control: { type: "text" }, table: { category: "Layout" } },
  },
  args: {
    rows: 2,
    columns: 2,
    padding: 20,
    // A grid sizes to its content inside the flex row a `Case` lays out, which
    // collapses every fractional track to the width of its text — `1fr 2fr`
    // and `repeat(auto-fill, …)` then look identical to a fixed list. The
    // stories are about how the tracks divide the space, so they need space.
    width: "100%",
  },
};
export default meta;
type Story = StoryObj<typeof G>;

/** A 2×2 grid, driven entirely by the controls panel. */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => <G {...args}>{cells(4)}</G>,
};

/**
 * Row and column counts.
 *
 * `rows` and `columns` take either a count or a raw CSS track list, and the
 * two behave very differently — a number produces equal tracks, a string
 * produces whatever it says.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Templates">
      <Matrix
        title="columns, as a count"
        values={[1, 2, 3, 4, 6]}
        label={(columns) => `columns=${columns}`}
        column
      >
        {(columns) => (
          <G {...args} rows={undefined} columns={columns}>
            {cells(6)}
          </G>
        )}
      </Matrix>

      <Section title="columns, as a track list" column>
        <Case label='columns="1fr 2fr"'>
          <G {...args} rows={undefined} columns="1fr 2fr">
            {cells(4)}
          </G>
        </Case>
        <Case label='columns="repeat(auto-fill, minmax(120px, 1fr))"'>
          <G
            {...args}
            rows={undefined}
            columns="repeat(auto-fill, minmax(120px, 1fr))"
          >
            {cells(9)}
          </G>
        </Case>
        <Case label='columns="200px auto 100px"'>
          <G {...args} rows={undefined} columns="200px auto 100px">
            {cells(3)}
          </G>
        </Case>
      </Section>

      <Section title="Named areas" column>
        <Case
          label="templateAreas"
          note="Items are placed by name rather than by order."
        >
          <G
            {...args}
            rows={undefined}
            columns={undefined}
            templateAreas={'"head head" "side main" "foot foot"'}
          >
            <Cell area="head">head</Cell>
            <Cell area="side">side</Cell>
            <Cell area="main">main</Cell>
            <Cell area="foot">foot</Cell>
          </G>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** The gaps, together and separately. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Gaps"
      description="`rowGap` and `columnGap` override `gap` on their own axis, so an asymmetric grid should be possible without setting both."
    >
      <Matrix
        title="gap"
        values={[0, 5, 20, 50]}
        label={(gap) => `gap=${gap}`}
        column
      >
        {(gap) => (
          <G {...args} columns={3} rows={undefined} gap={gap}>
            {cells(6)}
          </G>
        )}
      </Matrix>

      <Section title="Separate axes" column>
        <Case label="rowGap=40 columnGap=0">
          <G {...args} columns={3} rows={undefined} rowGap={40} columnGap={0}>
            {cells(6)}
          </G>
        </Case>
        <Case label="rowGap=0 columnGap=40">
          <G {...args} columns={3} rows={undefined} rowGap={0} columnGap={40}>
            {cells(6)}
          </G>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Items that span more than one cell. */
export const Composition: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Spanning items"
      description="A `Grid.Item` can claim several tracks. The items that follow it must flow around the space it took, not overlap it."
    >
      <Section column>
        <Case label="one item spanning two columns">
          <G {...args} columns={3} rows={undefined}>
            <Cell column="span 2">span 2 columns</Cell>
            {cells(4)}
          </G>
        </Case>
        <Case label="one item spanning two rows">
          <G {...args} columns={3} rows={undefined}>
            <Cell row="span 2">span 2 rows</Cell>
            {cells(5)}
          </G>
        </Case>
        <Case label="explicit start and end">
          <G {...args} columns={4} rows={undefined}>
            <Cell columnStart={2} columnEnd={4}>
              columns 2–4
            </Cell>
            {cells(4)}
          </G>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Grids that do not divide evenly. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Grid edge cases">
      <Section column>
        <Case label="no children" note="Should still honour its padding.">
          <G {...args} />
        </Case>
        <Case
          label="more items than cells"
          note="The extra items must create implicit rows, not overflow."
        >
          <G {...args} rows={2} columns={2}>
            {cells(9)}
          </G>
        </Case>
        <Case label="fewer items than cells">
          <G {...args} rows={3} columns={3}>
            {cells(2)}
          </G>
        </Case>
        <Case label="a very long text cell">
          <G {...args} columns={2} rows={undefined}>
            <Cell>{Storybook.longText}</Cell>
            {cells(3)}
          </G>
        </Case>
        <Case label="in a narrow parent" width={240}>
          <G {...args} columns={3} rows={undefined}>
            {cells(6)}
          </G>
        </Case>
      </Section>
    </Showcase>
  ),
};
