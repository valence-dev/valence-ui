import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FlexCenter, ValenceProvider } from "@valence-ui/core";
import { NotificationComponent as NC } from "./Notification";
import { IconConfetti } from "@tabler/icons-react";
import { NotificationsProvider } from "../../NotificationsProvider";

const meta: Meta<typeof NC> = {
  component: NC,
  title: "Valence/Notifications/Components",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof NC>;

export const Notification: Story = (args: any) => (
  <ValenceProvider>
    <NotificationsProvider>
      <FlexCenter height="100%" innerProps={{ align: "center" }}>
        <NC{...args} />
      </FlexCenter>
    </NotificationsProvider>
  </ValenceProvider>
);
Notification.args = {
  notification: {
    title: "Notification Title",
    // message: "Notification Message",
    icon: (<IconConfetti />),
    onClick: () => alert("Notification Clicked!"),
    onClose: () => alert("Notification Closed!"),
  }
};