import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Alert as A } from "./Alert";
import { IconAlertCircle } from "@tabler/icons-react";
import { ValenceProvider } from "../../..";

const meta: Meta<typeof A> = {
  component: A,
  title: "Valence/Display",
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
    <A {...args} />
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