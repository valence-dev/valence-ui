import { Meta, StoryObj } from "@storybook/react";
import { SideSheet as SS } from "./SideSheet";
import { useDisclosure } from "../../../../hooks";
import { ValenceProvider } from "../../../../ValenceProvider";
import { Button } from "../../../buttons";
import { Flex } from "../../../layout";
import { GlassMaterial } from "../../../../utilities";

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
      <Button onClick={() => disclosure.toggle()}>Toggle Side Sheet</Button>

      <SS disclosure={disclosure} {...args}>
        <Flex width="100%" height="200vh" material={new GlassMaterial()}>
          Hi
        </Flex>
      </SS>
    </ValenceProvider>
  );
};
SideSheet.args = {
  title: "Side Sheet title",
};
