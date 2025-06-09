import { Meta, StoryObj } from "@storybook/react";
import { Storybook } from "../../../../storybook";
import { IconUserCircle } from "@tabler/icons-react";

import { IconButton as IB } from "./IconButton";
import { ValenceProvider } from "../../../ValenceProvider";
import {
  Button,
  Flex,
  GlassMaterial,
  PaperMaterial,
  SolidMaterial,
} from "../../..";
import { useState } from "react";
import { AirMaterial } from "../../../utilities/materials/AirMaterial";

const meta: Meta<typeof IB> = {
  component: IB,
  title: "Valence/Core/Buttons",
  argTypes: {
    size: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },
    radius: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },

    square: {
      control: { type: "boolean" },
    },
    shadow: {
      control: { type: "boolean" },
    },
    grow: {
      control: { type: "boolean" },
    },

    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },

    width: {
      control: { type: "number" },
    },
    height: {
      control: { type: "number" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof IB>;

export const Icon: Story = (args: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <ValenceProvider>
      <Button onClick={() => setLoading(!loading)}>Toggle Loading State</Button>

      <Flex center padding={40}>
        <IB {...args} size="xs" loading={loading} />
        <IB {...args} size="sm" loading={loading} />
        <IB {...args} size="md" loading={loading} />
        <IB {...args} size="lg" loading={loading} />
        <IB {...args} size="xl" loading={loading} />
      </Flex>
      <Flex center padding={40}>
        <IB {...args} material={new GlassMaterial()} loading={loading} />
        <IB {...args} material={new AirMaterial()} loading={loading} />
        <IB {...args} material={new PaperMaterial()} loading={loading} />
        <IB {...args} material={new SolidMaterial()} loading={loading} />
      </Flex>
      <Flex center padding={40}>
        <IB {...args} tooltip="hello!" loading={loading} />
      </Flex>
    </ValenceProvider>
  );
};
Icon.args = {
  children: <IconUserCircle />,
};
