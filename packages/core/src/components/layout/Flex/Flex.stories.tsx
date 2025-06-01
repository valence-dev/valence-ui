import { Meta, StoryObj } from "@storybook/react";
import { GlassMaterial, ValenceProvider } from "../../..";
import { Flex as Fl, FlexProps } from "./Flex";
import { Text } from "../../display";

const meta: Meta<typeof Fl> = {
  component: Fl,
  title: "Valence/Core/Layout",
  argTypes: {
    direction: {
      options: ["row", "column", "row-reverse", "column-reverse"],
      control: { type: "select" },
    },
    align: {
      options: ["flex-start", "center", "flex-end", "stretch"],
      control: { type: "select" },
    },
    justify: {
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
      ],
      control: { type: "select" },
    },
    alignSelf: {
      options: ["flex-start", "center", "flex-end", "stretch"],
      control: { type: "select" },
    },
    gap: {
      control: { type: "number" },
    },
    grow: {
      control: { type: "boolean" },
    },

    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
    padding: {
      control: { type: "text" },
    },
    margin: {
      control: { type: "text" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Fl>;

const ChildFlexProps: FlexProps = {
  align: "center",
  justify: "center",
  height: 100,
  material: new GlassMaterial(),
  grow: true,
};

export const Flex: Story = (args: any) => (
  <ValenceProvider>
    <Fl data-testId="InputField-id" {...args} />
  </ValenceProvider>
);
Flex.args = {
  children: (
    <>
      <Fl {...ChildFlexProps}>
        <Text>1</Text>
      </Fl>
      <Fl {...ChildFlexProps}>
        <Text>2</Text>
      </Fl>
      <Fl {...ChildFlexProps}>
        <Text>3</Text>
      </Fl>
    </>
  ),
  width: "100%",
};
