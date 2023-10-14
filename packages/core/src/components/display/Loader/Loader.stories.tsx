import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Storybook } from "../../../../storybook";
import { ValenceProvider } from "../../.."

import { Loader as L } from "./Loader";

const meta: Meta<typeof L> = {
  component: L,
  title: "Valence/Display",
  argTypes: {
    size: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof L>;

export const Loader: Story = (args: any) => (
  <ValenceProvider>
    <L data-testId="Loader-id" {...args} />
  </ValenceProvider>
);
Loader.args = {
};