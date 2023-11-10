import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Storybook } from "../../../../storybook";
import { ValenceProvider } from "../../.."

import { Pill as P } from "../../..";

const meta: Meta<typeof P> = {
  component: P,
  title: "Valence/Core/Display",
  argTypes: {
    size: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof P>;

export const Pill: Story = (args: any) => (
  <ValenceProvider>
    <P {...args}>
      Hi there
    </P>
  </ValenceProvider>
);
Pill.args = {
  // withRemoveButton: true,
};