import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Flex, ValenceProvider } from "../../..";
import { Storybook } from "../../../../storybook"

import { Title as Ti } from "./Title";

const meta: Meta<typeof Ti> = {
  component: Ti,
  title: "Valence/Core/Display/Text",
  argTypes: {
    order: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: "select" },
    },
    family: {
      options: Storybook.fontFamilies,
      control: { type: "select" },
    },
    weight: {
      control: { type: "number" }
    },
    align: {
      options: Storybook.textAligns,
      control: { type: "select" },
    },
    transform: {
      options: Storybook.textTransforms,
      control: { type: "select" },
    },

    size: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },

    italic: {
      control: { type: "boolean" },
    },
    bold: {
      control: { type: "boolean" },
    },
    monospace: {
      control: { type: "boolean" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Ti>;

export const Title: Story = (args: any) => (
  <ValenceProvider>
    <Flex center height="100vh">
      <Ti {...args} />
    </Flex>
  </ValenceProvider>
);
Title.args = {
  children: "<hl>This</hl> is a *markdown-supporting* `Title` component",
}