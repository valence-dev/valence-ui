import { Meta, StoryObj } from "@storybook/react";
import { BottomSheet as BS } from "./BottomSheet";
import { useDisclosure } from "../../../../hooks";
import { ValenceProvider } from "../../../../ValenceProvider";
import { Flex, FlexCenter } from "../../../layout";
import { Button } from "../../../buttons";
import { GlassMaterial } from "../../../../utilities";

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

      <BS disclosure={disclosure} {...args}>
        <Flex width="100%" height="200vh" material={new GlassMaterial()}>
          Hi
        </Flex>
      </BS>
    </ValenceProvider>
  );
};
BottomSheet.args = {
  title: "Bottom Sheet title",
  allowInnerScrolling: true,
};
