import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { PrimitiveButton } from "./PrimitiveButton";
import { Storybook } from "../../../../storybook"
import { ValenceProvider } from "../../..";

const meta: Meta<typeof PrimitiveButton> = {
  component: PrimitiveButton,
  title: "Valence/Buttons",
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
type Story = StoryObj<typeof PrimitiveButton>;

export const Primitive: Story = (args: any) => (
  <ValenceProvider>
    <PrimitiveButton data-testId="InputField-id" {...args} />
  </ValenceProvider>
);
Primitive.args = {
  children: "Button",
}