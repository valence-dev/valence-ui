import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Storybook } from "../../../../storybook"
import { IconUserCircle } from "@tabler/icons-react"

import { IconButton as IB } from "./IconButton";
import { ValenceProvider } from "../../../ValenceProvider";
import { Flex } from "../../..";

const meta: Meta<typeof IB> = {
  component: IB,
  title: "Valence/Core/Buttons",
  argTypes: {
    variant: {
      options: Storybook.buttonVariants,
      control: { type: "select" },
    },
    size: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },
    radius: {
      options: Storybook.componentSizes,
      control: { type: "select" }
    },

    square: {
      control: { type: "boolean" },
    },
    shadow: {
      control: { type: "boolean" },
    },
    grow: {
      control: { type: "boolean" },
    },

    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },

    width: {
      control: { type: "number" }
    },
    height: {
      control: { type: "number" }
    }
  },
};
export default meta;
type Story = StoryObj<typeof IB>;

export const Icon: Story = (args: any) => (
  <ValenceProvider>
    <Flex center height="100vh">
      <IB {...args} size="xs" />
      <IB {...args} size="sm" />
      <IB {...args} size="md" />
      <IB {...args} size="lg" />
      <IB {...args} size="xl" />
    </Flex>
  </ValenceProvider>
);
Icon.args = {
  children: <IconUserCircle />,
}