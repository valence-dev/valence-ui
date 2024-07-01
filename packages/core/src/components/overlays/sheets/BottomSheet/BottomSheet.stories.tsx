import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, FlexCenter, StyledFlex, ValenceProvider, useDisclosure } from "@valence-ui/core"
import { BottomSheet as BS } from "./BottomSheet";

const meta: Meta<typeof BS> = {
  component: BS,
  title: "Valence/Core/Overlays/Sheets",
};
export default meta;
type Story = StoryObj<typeof BS>;

export const BottomSheet: Story = (args: any) => {
  const disclosure = useDisclosure();

  return (
    <ValenceProvider>

      <FlexCenter>
        <Button onClick={() => disclosure.open()}>Open Bottom Sheet</Button>
      </FlexCenter>

      <BS
        disclosure={disclosure}
        {...args}
      >
        <StyledFlex
          width="100%"
          height="200vh"
        >
          Hi
        </StyledFlex>
      </BS>
    </ValenceProvider>
  )
};
BottomSheet.args = {
  title: "Bottom Sheet title",
  allowInnerScrolling: true,
};