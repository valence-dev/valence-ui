import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
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
import { Button } from "../../buttons/TextButton";
import { Text as Te } from "./Text";

const meta: Meta<typeof Te> = {
  component: Te,
  title: "Core/Display/Text",
  argTypes: {
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
    maxLines: { control: { type: "number" }, table: { category: "Layout" } },
    children: textControl("The text, including any markdown."),
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
};
export default meta;
type Story = StoryObj<typeof Te>;

/** One string, driven entirely by the controls panel. */
export const Playground: Story = {};

/** Every size. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Text sizes">
      <Matrix title="size" values={Storybook.componentSizes} column>
        {(size) => <Te {...args} size={size} />}
      </Matrix>
    </Showcase>
  ),
};

/** Every shorthand and the properties behind them. */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Styling">
      <Section title="Shorthands" column>
        <Case label="default">
          <Te {...args} />
        </Case>
        <Case label="bold">
          <Te {...args} bold />
        </Case>
        <Case label="italic">
          <Te {...args} italic />
        </Case>
        <Case label="monospace">
          <Te {...args} monospace />
        </Case>
        <Case label="bold + italic + monospace">
          <Te {...args} bold italic monospace />
        </Case>
      </Section>

      <Matrix title="transform" values={Storybook.textTransforms} column>
        {(transform) => <Te {...args} transform={transform} />}
      </Matrix>

      <Matrix title="align" values={Storybook.textAligns} column>
        {(align) => (
          <Te {...args} align={align} style={{ width: "100%" }}>
            {Storybook.longText}
          </Te>
        )}
      </Matrix>

      <Matrix
        title="weight"
        values={[100, 300, 400, 500, 700, 900]}
        column
      >
        {(weight) => <Te {...args} weight={weight} />}
      </Matrix>
    </Showcase>
  ),
};

/** Every palette colour, plus the highlight. */
export const Colors: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Text colours"
      description="Body text needs more contrast than a fill does, so a colour that works on a swatch may fail here."
    >
      <Matrix title="color" values={Storybook.colors}>
        {(color) => (
          <Te {...args} color={color} size="lg">
            {color}
          </Te>
        )}
      </Matrix>

      <Matrix title="highlightColor" values={Storybook.colors}>
        {(color) => (
          <Te {...args} highlightColor={color} size="lg">
            {`<hl>${color}</hl>`}
          </Te>
        )}
      </Matrix>
    </Showcase>
  ),
};

/**
 * The markdown subset the component parses.
 *
 * This is the part of `Text` most likely to break silently: a regression in a
 * pattern shows up as literal asterisks rather than as an error.
 */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Markdown"
      description="Each of these should render as formatting, never as the literal markers."
    >
      <Section column>
        <Case label="**bold**">
          <Te {...args}>{"Some **bold** text"}</Te>
        </Case>
        <Case label="*italic*">
          <Te {...args}>{"Some *italic* text"}</Te>
        </Case>
        <Case label="***bold italic***">
          <Te {...args}>{"Some ***bold italic*** text"}</Te>
        </Case>
        <Case label="`monospace`">
          <Te {...args}>{"Some `monospace` text"}</Te>
        </Case>
        <Case label="&lt;hl&gt;highlight&lt;/hl&gt;">
          <Te {...args}>{"Some <hl>highlighted</hl> text"}</Te>
        </Case>
        <Case label="\\n newlines">
          <Te {...args}>{"First line \n Second line \n\n After a gap"}</Te>
        </Case>
        <Case label="all of them at once">
          <Te {...args}>
            {
              "The text component accepts a number of <hl>markdown styles</hl>, including **bold**, *italic*, and `monospace`. \n\n It additionally supports the `\\n` newline character and the same styles apply to the Title component."
            }
          </Te>
        </Case>
        <Case
          label="unclosed markers"
          note="Should render literally rather than swallowing the rest of the string."
        >
          <Te {...args}>{"An **unclosed bold and an *unclosed italic"}</Te>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Truncation and overflow. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Text edge cases">
      <Section column>
        <Case label="empty string" note="Should occupy a line's height, not zero.">
          <Te {...args}>{""}</Te>
        </Case>
        <Case label="maxLines=1" width={300}>
          <Te {...args} maxLines={1}>
            {Storybook.longText}
          </Te>
        </Case>
        <Case label="maxLines=2" width={300}>
          <Te {...args} maxLines={2}>
            {Storybook.longText}
          </Te>
        </Case>
        <Case label="a single unbreakable word" width={300}>
          <Te {...args}>Pneumonoultramicroscopicsilicovolcanoconiosis</Te>
        </Case>
        <Case label="non-latin and emoji">
          <Te {...args}>{Storybook.awkwardText}</Te>
        </Case>
        <Case label="markdown inside a truncated line" width={300}>
          <Te {...args} maxLines={1}>
            {`A **bold** start to ${Storybook.longText}`}
          </Te>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** The animation that runs when the text content changes. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const phrases = [
      "The quick brown fox",
      "jumps over",
      "the lazy dog",
      "and keeps going for quite a long time",
    ];
    const [index, setIndex] = useState(0);

    return (
      <Showcase
        title="Change animations"
        description="The animation is keyed on the rendered text, so it should fire on every change — including one that only alters the length."
      >
        <Section column>
          <Case>
            <Button onClick={() => setIndex((i) => (i + 1) % phrases.length)}>
              Next phrase
            </Button>
          </Case>
          <Case label="no animation">
            <Te {...args}>{phrases[index]}</Te>
          </Case>
          <Case label="fade">
            <Te {...args} animation="fade">
              {phrases[index]}
            </Te>
          </Case>
          <Case label="blur + slide-up">
            <Te {...args} animation={["blur", "slide-up"]}>
              {phrases[index]}
            </Te>
          </Case>
        </Section>
      </Showcase>
    );
  },
};
