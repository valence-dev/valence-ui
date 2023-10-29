import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MultipartButton as MPB } from "./MultipartButton";
import { Storybook } from "../../../../storybook"
import { IconApps } from "@tabler/icons-react";
import { ValenceProvider } from "../../..";

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

    aspectRatio: {
      control: { type: "text" },
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
    <MPB data-testId="InputField-id" {...args} />
  </ValenceProvider>
);
Multipart.args = {
  title: "Multipart button",
  subtitle: "With a great subtitle",
  leftIcon: <IconApps />
}