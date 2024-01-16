import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Flex, ValenceProvider } from "../../../..";

import { Avatar as A } from "./Avatar";

const meta: Meta<typeof A> = {
  component: A,
  title: "Valence/Core/Display/Images",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof A>;

export const Avatar: Story = (args: any) => (
  <ValenceProvider>
    <Flex center height="100vh">
      <A {...args} />
    </Flex>
  </ValenceProvider>
);
Avatar.args = {
  // src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  src: undefined,
  alt: "A random image",

  width: 40,
  variant: "light",
}