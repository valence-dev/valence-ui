import { Meta, StoryObj } from "@storybook/react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  colorControl,
  sizeControl,
  textControl,
} from "../../../../storybook";
import { Title as Ti } from "./Title";

const ORDERS = [1, 2, 3, 4, 5, 6] as const;

const meta: Meta<typeof Ti> = {
  component: Ti,
  title: "Core/Display/Title",
  argTypes: {
    order: {
      options: ORDERS,
      control: { type: "select" },
      table: { category: "Appearance" },
    },
    size: sizeControl,
    color: colorControl,
    family: {
      options: Storybook.fontFamilies,
      control: { type: "select" },
      table: { category: "Appearance" },
    },
    weight: { control: { type: "number" }, table: { category: "Appearance" } },
    align: {
      options: Storybook.textAligns,
      control: { type: "select" },
      table: { category: "Appearance" },
    },
    transform: {
      options: Storybook.textTransforms,
      control: { type: "select" },
      table: { category: "Appearance" },
    },
    italic: { control: { type: "boolean" }, table: { category: "Appearance" } },
    bold: { control: { type: "boolean" }, table: { category: "Appearance" } },
    monospace: {
      control: { type: "boolean" },
      table: { category: "Appearance" },
    },
    children: textControl("The heading text, including any markdown."),
  },
  args: {
    children: "The quick brown fox",
  },
};
export default meta;
type Story = StoryObj<typeof Ti>;

/** One heading, driven entirely by the controls panel. */
export const Playground: Story = {};

/**
 * The full heading scale.
 *
 * `order` sets both the tag and the type size from the theme, so this is the
 * case that shows whether the scale still reads as a hierarchy.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Heading orders"
      description="Each order renders the matching `h1`–`h6` tag and takes its size from the theme's `titles`. The steps between them should be visible without being measured."
    >
      <Matrix
        title="order"
        values={ORDERS}
        label={(order) => `order=${order} (h${order})`}
        column
      >
        {(order) => (
          <Ti {...args} order={order}>
            Heading level {order}
          </Ti>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** The same heading in a realistic stack. */
export const Composition: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="A document outline"
      description="Headings are rarely seen alone. Nested like this, each level must be distinguishable from the one above and below it."
    >
      <Section column>
        <Case>
          <Ti {...args} order={1}>
            A page title
          </Ti>
          <Ti {...args} order={2}>
            A section
          </Ti>
          <Ti {...args} order={3}>
            A subsection
          </Ti>
          <Ti {...args} order={4}>
            A sub-subsection
          </Ti>
          <Ti {...args} order={5}>
            Deeper still
          </Ti>
          <Ti {...args} order={6}>
            The smallest heading
          </Ti>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Markdown, which a title parses exactly as `Text` does. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Markdown in headings"
      description="A title is a `Text`, so it takes the same markdown — and has to keep the heading weight while doing it."
    >
      <Section column>
        <Case label="highlight">
          <Ti {...args}>{"<hl>This</hl> is a highlighted title"}</Ti>
        </Case>
        <Case label="italic and monospace">
          <Ti {...args}>
            {"This is a *markdown-supporting* `Title` component"}
          </Ti>
        </Case>
        <Case label="bold inside an already-bold heading">
          <Ti {...args}>{"A **bolder** word in a heading"}</Ti>
        </Case>
        <Case label="newlines">
          <Ti {...args}>{"A heading \n across two lines"}</Ti>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Every palette colour at heading weight. */
export const Colors: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Heading colours">
      <Matrix title="color" values={Storybook.colors}>
        {(color) => (
          <Ti {...args} order={3} color={color}>
            {color}
          </Ti>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Headings that do not fit. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Title edge cases">
      <Section column>
        <Case label="very long, order=1" width={400}>
          <Ti {...args} order={1}>
            {Storybook.longText}
          </Ti>
        </Case>
        <Case label="maxLines=1" width={400}>
          <Ti {...args} order={2} maxLines={1}>
            {Storybook.longText}
          </Ti>
        </Case>
        <Case label="a single unbreakable word" width={300}>
          <Ti {...args} order={2}>
            Pneumonoultramicroscopicsilicovolcanoconiosis
          </Ti>
        </Case>
        <Case label="non-latin and emoji">
          <Ti {...args} order={2}>
            {Storybook.awkwardText}
          </Ti>
        </Case>
        <Case label="empty">
          <Ti {...args}>{""}</Ti>
        </Case>
      </Section>
    </Showcase>
  ),
};
