import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IconButton, ValenceProvider } from "../../..";
import { Card as C } from "./Card";
import { Text } from "../../display";
import { Icon123 } from "@tabler/icons-react";
import { Storybook } from "../../../../storybook";

const meta: Meta<typeof C> = {
  component: C,
  title: "Valence/Core/Layout",
  argTypes: {
    size: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },
  }
}
export default meta;
type Story = StoryObj<typeof C>;

export const Card: Story = (args: any) => (
  <ValenceProvider>
    <C {...args}>
      <C.Image
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="A random image"
      />
      <C.Section>
        <Text align="center">Column</Text>
      </C.Section>
      <C.Buttons>
        <IconButton>
          <Icon123 />
        </IconButton>
      </C.Buttons>
    </C>
  </ValenceProvider>
);
Card.args = {
  component: "div",
  buttonProps: {
    onClick: () => alert("Clicked"),
  }
}