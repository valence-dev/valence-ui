import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { NotificationRenderer as NR } from "./NotificationRenderer";
import { Button, FlexCenter, ValenceProvider } from "@valence-ui/core";
import { NotificationsProvider, useNotifications } from "../../NotificationsProvider";
import { IconConfetti } from "@tabler/icons-react";

const meta: Meta<typeof NR> = {
  component: NR,
  title: "Valence/Notifications/Components",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof NR>;


export const NotificationRenderer: Story = (args: any) => {

  return (
    <ValenceProvider>
      <NotificationsProvider>
        <NR
          {...args}
        />

        <Children />
      </NotificationsProvider>
    </ValenceProvider>
  );
}
NotificationRenderer.args = {
  positionHorizontal: "center",
}


function Children() {
  const { addNotification } = useNotifications();

  function handleAdd() {
    const id = crypto.randomUUID();
    addNotification({
      id: id,
      title: "Hello " + id,
      icon: (<IconConfetti />),
      onClick: () => console.log("Clicked" + id),
      color: "black",
      closeTimeout: 3000,
    });
  }

  return (
    <FlexCenter>
      <Button onClick={handleAdd}>
        Add Notification
      </Button>
    </FlexCenter>
  )
}