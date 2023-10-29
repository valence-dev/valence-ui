import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Storybook } from "../../../../storybook";
import { IconUserCircle } from "@tabler/icons-react"

import { ButtonWithIcon as BWI } from "./ButtonWithIcon";
import { ValenceProvider } from "../../../ValenceProvider";

const meta: Meta<typeof BWI> = {
  component: BWI,
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
    color: { 
      options: Storybook.colors,
      control: { type: "select" },
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
    }
  },
};
export default meta;
type Story = StoryObj<typeof BWI>;

export const WithIcon: Story = (args: any) => (
  <ValenceProvider>
    <BWI data-testId="InputField-id" {...args} />
  </ValenceProvider>
);
WithIcon.args = {
  icon: <IconUserCircle />,
  children: "Button",
  iconPosition: "left",
}