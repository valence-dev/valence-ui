import { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Flex,
  FlexCenter,
  GlassMaterial,
  ValenceProvider,
  useDisclosure,
} from "../../..";
import { Modal as M } from "../../..";

const meta: Meta<typeof M> = {
  component: M,
  title: "Valence/Core/Overlays",
  argTypes: {
    title: { control: { type: "text" } },
    closeOnOverlayClick: { control: { type: "boolean" } },
    closeOnEscape: { control: { type: "boolean" } },
    lockScroll: { control: { type: "boolean" } },
    withShadow: { control: { type: "boolean" } },
    radius: { control: { type: "text" } },
  },
};
export default meta;
type Story = StoryObj<typeof M>;

export const Modal: Story = (args: any) => {
  const disclosure = useDisclosure(true);

  return (
    <ValenceProvider>
      <FlexCenter>
        <Button onClick={disclosure.open}>Open Modal</Button>
      </FlexCenter>

      <M disclosure={disclosure} {...args}>
        <Button>Hi</Button>
        <Flex width="100%" height="200vh" material={new GlassMaterial()}>
          Hi
        </Flex>
      </M>
    </ValenceProvider>
  );
};
Modal.args = {
  title: "Modal Title",
  height: 200,
};
