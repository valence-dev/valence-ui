import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Flex, ValenceProvider } from "../../../..";

import { AvatarGroup as AG } from "./AvatarGroup";
import { Avatar } from "../..";
import { IconBrandThreads } from "@tabler/icons-react";

const meta: Meta<typeof AG> = {
  component: AG,
  title: "Valence/Core/Display/Images",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof AG>;

export const AvatarGroup: Story = (args: any) => (
  <ValenceProvider>
    <Flex center height="100vh">
      <AG
        {...args}
      >
        <Avatar
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="A random image"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="A random image"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="A random image"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="A random image"
        />
      </AG>
    </Flex>
  </ValenceProvider>
);
AvatarGroup.args = {
  variant: "light",
  secondaryIcon: <IconBrandThreads />,
  outline: true,
}