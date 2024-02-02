import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../..";
import { OverflowContainer as OC } from "../../..";
import { Flex } from "../Flex";

const meta: Meta<typeof OC> = {
  component: OC,
  title: "Valence/Core/Layout",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof OC>;

export const OverflowContainer: Story = (args: any) => (
  <ValenceProvider>
    <OC {...args}>
      <Flex height="200vh">
        Hello world
      </Flex>
    </OC>
  </ValenceProvider>
);
OverflowContainer.args = {
  
};