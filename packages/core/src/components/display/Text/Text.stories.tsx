import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Storybook } from "../../../../storybook"

import { Text as Te } from "./Text";
import { ValenceProvider } from "../../..";

const meta: Meta<typeof Te> = {
  component: Te,
  title: "Valence/Core/Display/Text",
  argTypes: {
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
type Story = StoryObj<typeof Te>;

export const Text: Story = (args: any) => (
  <ValenceProvider>
    <Te data-testId="Text-id" {...args} />
  </ValenceProvider>
);
Text.args = {
  children: "The text component accepts a number of markdown styles, including **bold**, *italic*, and `monospace`. \n\n It additionally supports the `\\n` newline character and the same styles apply to the Title component.",
}