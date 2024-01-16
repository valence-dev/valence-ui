import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Alert as A } from "./Alert";
import { IconAlertCircle } from "@tabler/icons-react";
import { Flex, ValenceProvider } from "../../..";

const meta: Meta<typeof A> = {
  component: A,
  title: "Valence/Core/Display",
  argTypes: {
    variant: {
      options: ["filled", "light", "subtle"],
      control: { type: "radio" },
    }
  },
}
export default meta;
type Story = StoryObj<typeof A>;

export const Alert: Story = (args: any) => (
  <ValenceProvider>
    <Flex
      center
      height="100vh"
      padding={20}
    >
      <A {...args} />
    </Flex>
  </ValenceProvider>
);
Alert.args = {
  alert: {
    title: "Alert Title",
    message: "Alert Message",
    icon: <IconAlertCircle />,
  },
  show: true,
};