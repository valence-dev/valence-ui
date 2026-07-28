import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Case, Section, Showcase, Storybook } from "../../../../storybook";
import { Button } from "../../buttons/TextButton";
import { Flex } from "../../layout/Flex";
import { Text } from "../Text/Text";
import { Spoiler as S } from "./Spoiler";

const meta: Meta<typeof S> = {
  component: S,
  title: "Core/Display/Spoiler",
  argTypes: {
    show: { control: { type: "boolean" }, table: { category: "State" } },
  },
  args: {
    children: "Spoiler content",
    show: true,
  },
};
export default meta;
type Story = StoryObj<typeof S>;

/** One spoiler, driven entirely by the controls panel. */
export const Playground: Story = {};

/**
 * The transition, driven by hand.
 *
 * A spoiler animates its height between `0` and `auto`, so the only case that
 * tells you anything is the transition itself — neither end state is
 * interesting on its own.
 */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const [show, setShow] = useState(true);

    return (
      <Showcase
        title="Show and hide"
        description="Toggle repeatedly, and interrupt the animation halfway. The content below must never be left with a gap, and the collapsed spoiler must be exactly zero high."
      >
        <Section column>
          <Case>
            <Button onClick={() => setShow((prev) => !prev)}>
              {show ? "Hide" : "Show"}
            </Button>
          </Case>

          <Case label="short content">
            <S {...args} show={show}>
              <Text>Spoiler content</Text>
            </S>
          </Case>

          <Case label="tall content">
            <S {...args} show={show}>
              <Flex direction="column">
                <Text>{Storybook.longText}</Text>
                <Text>{Storybook.longText}</Text>
                <Text>{Storybook.longText}</Text>
              </Flex>
            </S>
          </Case>

          <Case label="content below" note="Must not jump as the spoiler moves.">
            <Text bold>This line sits under the spoilers above.</Text>
          </Case>
        </Section>
      </Showcase>
    );
  },
};

/** Content of different shapes inside a collapsing box. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Spoiler content"
      description="The spoiler sets `overflow: hidden`, so anything that overhangs its box — a shadow, an absolutely positioned child — is clipped while it animates."
    >
      <Section column>
        <Case label="a single line">
          <S {...args}>
            <Text>One line.</Text>
          </S>
        </Case>
        <Case label="a long paragraph">
          <S {...args}>
            <Text>{Storybook.longText}</Text>
          </S>
        </Case>
        <Case label="an interactive child">
          <S {...args}>
            <Button>A button inside a spoiler</Button>
          </S>
        </Case>
        <Case label="empty" note="Should collapse to nothing.">
          <S {...args}>{null}</S>
        </Case>
      </Section>
    </Showcase>
  ),
};
