import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MultipartButton as MPB } from "./MultipartButton";
import { Storybook } from "../../../../storybook"
import { IconApps } from "@tabler/icons-react";
import { Flex, ValenceProvider } from "../../..";

const meta: Meta<typeof MPB> = {
  component: MPB,
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
    },

    color: {
      control: { type: "text" }
    }
  },
};
export default meta;
type Story = StoryObj<typeof MPB>;

export const Multipart: Story = (args: any) => (
  <ValenceProvider>
    <Flex
      direction="column"
      height="100vh"
      center
      padding={20}
    >
      <MPB {...args} size="xs" />
      <MPB {...args} size="sm" />
      <MPB {...args} size="md" />
      <MPB {...args} size="lg" />
      <MPB {...args} size="xl" />
    </Flex>
  </ValenceProvider>
);
Multipart.args = {
  title: "Multipart button",
  subtitle: "With a great subtitle that is very long and multi-line",
  leftIcon: (
    <Flex gap={5}>
      <IconApps />
      <IconApps />
      <IconApps />
    </Flex>
  ),
}