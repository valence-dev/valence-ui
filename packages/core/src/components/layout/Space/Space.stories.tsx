import { Meta, StoryObj } from "@storybook/react";
import { GlassMaterial, ValenceProvider } from "../../..";
import { Space as S } from "./Space";
import { Flex, FlexCenter, FlexProps } from "../Flex";
import { Text } from "../../display";

const meta: Meta<typeof S> = {
  component: S,
  title: "Valence/Core/Layout",
  argTypes: {
    height: { control: { type: "text" } },
    width: { control: { type: "text" } },
    grow: { control: { type: "boolean" } },
  },
};
export default meta;
type Story = StoryObj<typeof S>;

const flexProps: FlexProps = {
  align: "center",
  justify: "center",
  height: 100,
  grow: true,
  material: new GlassMaterial(),
};

export const Space: Story = (args: any) => (
  <ValenceProvider>
    <FlexCenter innerProps={{ direction: "column", align: "stretch" }}>
      <Flex {...flexProps}>
        <Text>1</Text>
      </Flex>
      <S {...args} />
      <Flex {...flexProps}>
        <Text>2</Text>
      </Flex>
      <Flex {...flexProps}>
        <Text>3</Text>
      </Flex>
    </FlexCenter>
  </ValenceProvider>
);
Space.args = {
  height: "100px",
  grow: false,
};
