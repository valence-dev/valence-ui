import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { PrimitiveButton } from "./PrimitiveButton";
import { Storybook } from "../../../../storybook";
import { Flex, ValenceProvider } from "../../..";

const meta: Meta<typeof PrimitiveButton> = {
  component: PrimitiveButton,
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
      control: { type: "select" },
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
      control: { type: "number" },
    },
    height: {
      control: { type: "number" },
    },

    color: {
      control: { type: "text" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof PrimitiveButton>;

export const Primitive: Story = (args: any) => (
  <ValenceProvider>
    <Flex center height="100vh">
      <PrimitiveButton
        {...args}
        component="a"
        href="barcelona://create?text=Hello%20World%0A%0A%0ANice"
      />
    </Flex>
  </ValenceProvider>
);
Primitive.args = {
  children: "Button",
  color: {
    default: "red",
    mobile: "blue",
    tablet: "green",
    desktopLarge: "yellow",
    tv: "violet",
  },
};
