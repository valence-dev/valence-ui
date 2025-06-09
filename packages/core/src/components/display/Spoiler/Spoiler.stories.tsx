import { Meta, StoryObj } from "@storybook/react";

import { Spoiler as S } from "./Spoiler";
import { Flex, ValenceProvider } from "../../..";

const meta: Meta<typeof S> = {
  component: S,
  title: "Valence/Core/Display",
  argTypes: {
    show: {
      control: { type: "boolean" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof S>;

export const Spoiler: Story = (args: any) => (
  <ValenceProvider>
    <Flex center height="100vh" direction="column">
      <S {...args}>{args.children}</S>
    </Flex>
  </ValenceProvider>
);
Spoiler.args = {
  children: "Spoiler content",
  show: true,
};
