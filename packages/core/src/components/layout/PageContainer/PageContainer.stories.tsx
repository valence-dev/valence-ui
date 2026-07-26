import { Meta, StoryObj } from "@storybook/react";
import { Storybook } from "../../../../storybook";
import { GlassMaterial } from "../../../utilities/materials/GlassMaterial";
import { Text } from "../../display/Text/Text";
import { Title } from "../../display/Text/Title";
import { Flex } from "../Flex";
import { Header } from "../Header";
import { PageContainer as PC } from "./PageContainer";

/** Body copy long enough that the page actually scrolls. */
function body(lines = 30) {
  return Array.from({ length: lines }, (_, index) => (
    <Text key={index}>
      {index + 1}. {Storybook.longText}
    </Text>
  ));
}

const meta: Meta<typeof PC> = {
  component: PC,
  title: "Core/Layout/PageContainer",
  argTypes: {
    innerWidth: { control: { type: "text" }, table: { category: "Layout" } },
  },
  // A page container is the page: it fills its parent and scrolls inside
  // itself, so framing it would misrepresent what it does.
  parameters: { valence: { layout: "fullscreen" } },
};
export default meta;
type Story = StoryObj<typeof PC>;

/**
 * A page with a header and a long body.
 *
 * `PageContainer` is the wrapper every route in an application sits in, and
 * had no story of its own. Its whole job is the interaction between a piece of
 * content exempt from the width limit — the header — and a body that is
 * centred and capped, so both have to be present to see anything.
 */
export const Playground: Story = {
  render: (args) => (
    <PC
      {...args}
      exemptContent={
        <Header>
          <Title>Page Title</Title>
        </Header>
      }
    >
      {body()}
    </PC>
  ),
};

/**
 * The content width cap.
 *
 * The body is capped at `min(100%, 700px)` by default and centred; the header
 * passed as `exemptContent` is not. That difference is the component.
 */
export const Variants: Story = {
  render: (args) => (
    <PC
      {...args}
      exemptContent={
        <Header>
          <Title>The header runs full width</Title>
        </Header>
      }
    >
      <Flex width="100%" material={new GlassMaterial()} padding={10}>
        <Text>
          This block is inside the body, so it stops at the container&apos;s
          inner width. The header above it does not.
        </Text>
      </Flex>
      {body()}
    </PC>
  ),
};

/** A narrower and a wider cap. */
export const Sizes: Story = {
  render: (args) => (
    <PC
      {...args}
      innerWidth="min(100%, 380px)"
      exemptContent={
        <Header>
          <Title>innerWidth = min(100%, 380px)</Title>
        </Header>
      }
    >
      {body()}
    </PC>
  ),
};

/** A page with nothing exempt from the cap. */
export const Composition: Story = {
  render: (args) => <PC {...args}>{body()}</PC>,
};

/** Content the container has to survive. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  render: (args) => (
    <PC
      {...args}
      exemptContent={
        <Header>
          <Title>{Storybook.longText}</Title>
        </Header>
      }
    >
      <Text>A single short line, in a page taller than its content.</Text>
      <Flex width={1400} material={new GlassMaterial()} padding={10}>
        <Text>
          A child wider than the inner width — the page must scroll or clip it
          rather than letting it push the whole layout sideways.
        </Text>
      </Flex>
      <Text>{Storybook.awkwardText}</Text>
      <Text>{"Pneumonoultramicroscopicsilicovolcanoconiosis".repeat(4)}</Text>
    </PC>
  ),
};
