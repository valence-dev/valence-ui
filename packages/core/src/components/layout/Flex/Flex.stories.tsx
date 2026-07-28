import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  elevatedMaterials,
  radiusControl,
} from "../../../../storybook";
import { GlassMaterial } from "../../../utilities/materials/GlassMaterial";
import { Text } from "../../display/Text/Text";
import { Flex as Fl, FlexProps } from "./Flex";

const DIRECTIONS = ["row", "row-reverse", "column", "column-reverse"] as const;
const ALIGNMENTS = ["flex-start", "center", "flex-end", "stretch"] as const;
const JUSTIFICATIONS = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
] as const;

const CHILD: FlexProps = {
  align: "center",
  justify: "center",
  height: 60,
  width: 60,
  material: new GlassMaterial(),
};

/** `count` labelled boxes, for showing how a flex arranges its children. */
function boxes(count = 3, props: FlexProps = {}): ReactNode {
  return Array.from({ length: count }, (_, index) => (
    <Fl key={index} {...CHILD} {...props}>
      <Text>{index + 1}</Text>
    </Fl>
  ));
}

const meta: Meta<typeof Fl> = {
  component: Fl,
  title: "Core/Layout/Flex",
  argTypes: {
    direction: {
      options: DIRECTIONS,
      control: { type: "select" },
      table: { category: "Layout" },
    },
    align: {
      options: ALIGNMENTS,
      control: { type: "select" },
      table: { category: "Layout" },
    },
    justify: {
      options: JUSTIFICATIONS,
      control: { type: "select" },
      table: { category: "Layout" },
    },
    wrap: {
      options: ["nowrap", "wrap", "wrap-reverse"],
      control: { type: "select" },
      table: { category: "Layout" },
    },
    gap: { control: { type: "number" }, table: { category: "Layout" } },
    grow: { control: { type: "boolean" }, table: { category: "Layout" } },
    center: { control: { type: "boolean" }, table: { category: "Layout" } },
    radius: radiusControl,
    width: { control: { type: "text" }, table: { category: "Layout" } },
    height: { control: { type: "text" }, table: { category: "Layout" } },
    padding: { control: { type: "text" }, table: { category: "Layout" } },
    margin: { control: { type: "text" }, table: { category: "Layout" } },
  },
  args: {
    width: "100%",
  },
};
export default meta;
type Story = StoryObj<typeof Fl>;

/** Three boxes in a flex, driven entirely by the controls panel. */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => <Fl {...args}>{boxes()}</Fl>,
};

/**
 * Every direction, alignment and justification.
 *
 * `Flex` is a thin wrapper over the flexbox properties, so the cases that
 * matter are the property values themselves — laid out together, a value that
 * has stopped mapping through is obvious.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Flexbox properties">
      <Matrix
        title="direction"
        values={DIRECTIONS}
        caseWidth={280}
        column={false}
      >
        {(direction) => (
          <Fl {...args} direction={direction} material={new GlassMaterial()} padding={10}>
            {boxes()}
          </Fl>
        )}
      </Matrix>

      <Matrix title="justify" values={JUSTIFICATIONS} column>
        {(justify) => (
          <Fl {...args} justify={justify} material={new GlassMaterial()} padding={10}>
            {boxes()}
          </Fl>
        )}
      </Matrix>

      <Matrix title="align, in a 160px-tall row" values={ALIGNMENTS} caseWidth={280}>
        {(align) => (
          <Fl
            {...args}
            align={align}
            height={160}
            material={new GlassMaterial()}
            padding={10}
          >
            {boxes(3, { height: undefined })}
          </Fl>
        )}
      </Matrix>

      <Matrix title="gap" values={[0, 5, 20, 50]} label={(gap) => `gap=${gap}`} column>
        {(gap) => (
          <Fl {...args} gap={gap} material={new GlassMaterial()} padding={10}>
            {boxes()}
          </Fl>
        )}
      </Matrix>

      <Section title="Shorthands" column>
        <Case label="center" note="Sets both align and justify to center.">
          <Fl {...args} center height={140} material={new GlassMaterial()}>
            {boxes(1)}
          </Fl>
        </Case>
        <Case label="grow on the second child">
          <Fl {...args} material={new GlassMaterial()} padding={10}>
            <Fl {...CHILD}>
              <Text>1</Text>
            </Fl>
            <Fl {...CHILD} grow width={undefined}>
              <Text>2 grows</Text>
            </Fl>
            <Fl {...CHILD}>
              <Text>3</Text>
            </Fl>
          </Fl>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Wrapping, which is what a flex does when it runs out of room. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Wrapping"
      description="Twelve boxes in a 400px container. `nowrap` — the default — should overflow rather than shrink them."
    >
      <Matrix
        title="wrap"
        values={["nowrap", "wrap", "wrap-reverse"] as const}
        column
      >
        {(wrap) => (
          <Fl
            {...args}
            wrap={wrap}
            width={400}
            material={new GlassMaterial()}
            padding={10}
          >
            {boxes(12)}
          </Fl>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every material and radius on the container itself. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Flex materials"
      description="`Flex` is the library's generic surface, so it is where a material is seen with nothing else on top of it."
    >
      <Section title="All materials">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Fl
              {...args}
              width={140}
              height={80}
              center
              material={material}
              padding={10}
            >
              <Text>{name}</Text>
            </Fl>
          </Case>
        ))}
      </Section>

      <Matrix title="radius" values={Storybook.componentSizes}>
        {(radius) => (
          <Fl
            {...args}
            width={100}
            height={80}
            center
            radius={radius}
            material={new GlassMaterial()}
          >
            <Text>{radius}</Text>
          </Fl>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** The elevation ramp on both materials that carry one. */
export const Elevations: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Elevation">
      <Section title="PaperMaterial">
        {elevatedMaterials("paper").map(([label, material]) => (
          <Case key={label} label={label}>
            <Fl {...args} width={100} height={80} center material={material}>
              <Text>{label}</Text>
            </Fl>
          </Case>
        ))}
      </Section>

      <Section title="SolidMaterial">
        {elevatedMaterials("solid").map(([label, material]) => (
          <Case key={label} label={label}>
            <Fl {...args} width={100} height={80} center material={material}>
              <Text>{label}</Text>
            </Fl>
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Props that vary with the viewport. */
export const Responsive: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Responsive props"
      description="Every `Flex` prop accepts a breakpoint object as well as a value. Resize the frame — this row becomes a column below the tablet breakpoint."
    >
      <Fl
        {...args}
        direction={{ default: "row", tablet: "column" }}
        material={new GlassMaterial()}
        padding={{ default: 20, mobile: 5 }}
        gap={{ default: 20, mobile: 5 }}
      >
        {boxes(4, { width: undefined, grow: true })}
      </Fl>
    </Showcase>
  ),
};

/** Contents a flex container is not usually given. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Flex edge cases">
      <Section column>
        <Case label="no children" note="Should still honour its own height.">
          <Fl {...args} height={60} material={new GlassMaterial()} />
        </Case>
        <Case label="one child">
          <Fl {...args} material={new GlassMaterial()} padding={10}>
            {boxes(1)}
          </Fl>
        </Case>
        <Case label="fifty children, no wrap" width={400}>
          <Fl {...args} material={new GlassMaterial()} padding={10}>
            {boxes(50)}
          </Fl>
        </Case>
        <Case label="a child taller than the container">
          <Fl
            {...args}
            height={40}
            material={new GlassMaterial()}
            padding={10}
          >
            {boxes(2, { height: 120 })}
          </Fl>
        </Case>
        <Case label="a very long text child" width={300}>
          <Fl {...args} material={new GlassMaterial()} padding={10}>
            <Text>{Storybook.longText}</Text>
          </Fl>
        </Case>
      </Section>
    </Showcase>
  ),
};
