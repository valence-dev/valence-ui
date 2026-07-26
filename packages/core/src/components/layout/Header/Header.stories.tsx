import { Meta, StoryObj } from "@storybook/react";
import { IconMenu2, IconSettings } from "@tabler/icons-react";
import { Storybook, colorControl } from "../../../../storybook";
import { IconButton } from "../../buttons/IconButton";
import { Text } from "../../display/Text/Text";
import { Title } from "../../display/Text/Title";
import { Flex } from "../Flex";
import { Header as H } from "./Header";

/** Enough body copy to scroll the header out of a static layout. */
function longPage() {
  return (
    <Flex direction="column" padding={20}>
      {Array.from({ length: 40 }, (_, index) => (
        <Text key={index}>
          {index + 1}. {Storybook.longText}
        </Text>
      ))}
    </Flex>
  );
}

const meta: Meta<typeof H> = {
  component: H,
  title: "Core/Layout/Header",
  argTypes: {
    position: {
      options: ["sticky", "static", "fixed", "absolute", "relative"],
      control: { type: "select" },
      table: { category: "Layout" },
    },
    backgroundColor: colorControl,
    height: { control: { type: "number" }, table: { category: "Layout" } },
  },
  args: {
    children: <Title color="black">Hello world</Title>,
  },
  parameters: { valence: { layout: "fullscreen" } },
};
export default meta;
type Story = StoryObj<typeof H>;

/**
 * A header above a long page.
 *
 * A header only does anything interesting once there is something to scroll,
 * so every case here puts real content under it rather than showing the bar in
 * isolation.
 */
export const Playground: Story = {
  render: (args) => (
    <>
      <H {...args} />
      {longPage()}
    </>
  ),
};

/**
 * The positioning modes.
 *
 * `sticky` is the default and the interesting one — scroll each of these and
 * watch whether the bar stays put, and whether the content underneath starts
 * behind it or below it.
 */
export const Variants: Story = {
  render: (args) => (
    <>
      <H {...args}>
        <Title color="black">position=&quot;sticky&quot;</Title>
      </H>
      {longPage()}
      <H {...args} position="static">
        <Title color="black">position=&quot;static&quot;</Title>
      </H>
      {longPage()}
    </>
  ),
};

/** The content a header holds, and how it distributes it. */
export const Content: Story = {
  render: (args) => (
    <>
      <H {...args}>
        <Title color="black">Title only</Title>
      </H>
      {longPage()}

      <H {...args}>
        <IconButton tooltip="Menu">
          <IconMenu2 />
        </IconButton>
        <Title color="black">Title between two buttons</Title>
        <IconButton tooltip="Settings">
          <IconSettings />
        </IconButton>
      </H>
      {longPage()}

      <H {...args}>
        <Title color="black">{Storybook.longText}</Title>
      </H>
      {longPage()}

      <H {...args}>
        <Title color="black">{Storybook.awkwardText}</Title>
      </H>
      {longPage()}
    </>
  ),
};

/**
 * The shrinking behaviour on mobile.
 *
 * On mobile widths the header becomes fixed and shrinks as the page scrolls,
 * which is behaviour a desktop-width frame never shows.
 */
export const Responsive: Story = {
  render: (args) => (
    <>
      <H {...args}>
        <Title color="black">Narrow the frame, then scroll</Title>
      </H>
      {longPage()}
      {longPage()}
    </>
  ),
};

/** Backgrounds a header can be given. */
export const Colors: Story = {
  render: (args) => (
    <>
      <H {...args} backgroundColor="blue">
        <Title color="permaWhite">backgroundColor=&quot;blue&quot;</Title>
      </H>
      {longPage()}
      <H {...args} backgroundColor="transparent">
        <Title color="black">backgroundColor=&quot;transparent&quot;</Title>
      </H>
      {longPage()}
    </>
  ),
};
