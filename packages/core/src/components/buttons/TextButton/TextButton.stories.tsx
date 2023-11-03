import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./TextButton";
import { Storybook } from "../../../../storybook"
import { ValenceProvider } from "../../..";

const meta: Meta<typeof Button> = {
  component: Button,
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
type Story = StoryObj<typeof Button>;

export const Text: Story = (args: any) => (
  <ValenceProvider>
    <Button data-testId="InputField-id" {...args} />
  </ValenceProvider>
);
Text.args = {
  children: "Button",
}