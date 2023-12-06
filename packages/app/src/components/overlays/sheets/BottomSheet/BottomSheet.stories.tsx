import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ValenceProvider, useDisclosure } from "@valence-ui/core"
import { BottomSheet as BS } from "./BottomSheet";

const meta: Meta<typeof BS> = {
  component: BS,
  title: "Valence/App/Overlays/Sheets",
};
export default meta;
type Story = StoryObj<typeof BS>;

export const BottomSheet: Story = (args: any) => {
  const disclosure = useDisclosure();

  return (
    <ValenceProvider>
      <Button onClick={() => disclosure.open()}>Open Bottom Sheet</Button>

      <BS
        disclosure={disclosure}
        {...args}
      />
    </ValenceProvider>
  )
};
BottomSheet.args = {
  title: "Bottom Sheet title",
};