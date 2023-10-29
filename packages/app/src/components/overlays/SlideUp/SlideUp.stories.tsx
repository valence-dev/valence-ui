import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ValenceProvider } from "@valence-ui/core"
import { SlideUp as S } from "./SlideUp";

const meta: Meta<typeof S> = {
  component: S,
  title: "Valence/App/Overlays",
};
export default meta;
type Story = StoryObj<typeof S>;

export const SlideUp: Story = (args: any) => {
  const [opened, setOpened] = useState(args.opened);

  return (
    <ValenceProvider>
      <Button onClick={() => setOpened(true)}>Open</Button>

      <S
        {...args}
        opened={opened}
        close={() => setOpened(false)}
      />
    </ValenceProvider>
  )
};
SlideUp.args = {
  opened: true,
  children: "Hello there"
};