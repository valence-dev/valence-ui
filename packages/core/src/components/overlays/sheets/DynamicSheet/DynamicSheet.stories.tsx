import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DynamicSheet as DS } from "./DynamicSheet";
import { ValenceProvider } from "../../../../ValenceProvider";
import { useDisclosure } from "../../../../hooks";
import { Button } from "../../../buttons";

const meta: Meta<typeof DS> = {
  component: DS,
  title: "Valence/Core/Overlays/Sheets",
};
export default meta;
type Story = StoryObj<typeof DS>;

export const DynamicSheet: Story = (args: any) => {
  const disclosure = useDisclosure();

  return (
    <ValenceProvider>
      <Button onClick={() => disclosure.open()}>Open Dynamic Sheet</Button>

      <DS disclosure={disclosure} {...args} />
    </ValenceProvider>
  );
};
DynamicSheet.args = {
  title: "Dynamic Sheet title",
};
