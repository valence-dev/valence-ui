import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SideSheet as SS } from "./SideSheet";
import { useDisclosure } from "../../../../hooks";
import { ValenceProvider } from "../../../../ValenceProvider";
import { Button } from "../../../buttons";
import { StyledFlex } from "../../../layout";

const meta: Meta<typeof SS> = {
  component: SS,
  title: "Valence/Core/Overlays/Sheets",
};
export default meta;
type Story = StoryObj<typeof SS>;

export const SideSheet: Story = (args: any) => {
  const disclosure = useDisclosure();

  return (
    <ValenceProvider>
      <Button onClick={() => disclosure.open()}>Open Side Sheet</Button>

      <SS
        disclosure={disclosure}
        {...args}
      >
        <StyledFlex
          width="100%"
          height="200vh"
        >
          Hi
        </StyledFlex>
      </SS>
    </ValenceProvider>
  )
};
SideSheet.args = {
  title: "Side Sheet title",
};