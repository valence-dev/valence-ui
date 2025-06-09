import { Meta, StoryObj } from "@storybook/react";
import { Storybook } from "../../../../storybook";
import { IconUserCircle } from "@tabler/icons-react";

import { ButtonWithIcon as BWI } from "./ButtonWithIcon";
import { ValenceProvider } from "../../../ValenceProvider";
import { Flex } from "../../layout";
import {
  GlassMaterial,
  PaperMaterial,
  SolidMaterial,
} from "../../../utilities";
import { useState } from "react";
import { Button } from "../TextButton";

const meta: Meta<typeof BWI> = {
  component: BWI,
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
type Story = StoryObj<typeof BWI>;

export const WithIcon: Story = (args: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <ValenceProvider>
      <Button onClick={() => setLoading(!loading)}>Toggle Loading State</Button>

      <Flex center padding={40}>
        <BWI {...args} size="xs" loading={loading} />
        <BWI {...args} size="sm" loading={loading} />
        <BWI {...args} size="md" loading={loading} />
        <BWI {...args} size="lg" loading={loading} />
        <BWI {...args} size="xl" loading={loading} />
      </Flex>
      <Flex center padding={40}>
        <BWI {...args} size="xs" loading={loading} iconPosition="right" />
        <BWI {...args} size="sm" loading={loading} iconPosition="right" />
        <BWI {...args} size="md" loading={loading} iconPosition="right" />
        <BWI {...args} size="lg" loading={loading} iconPosition="right" />
        <BWI {...args} size="xl" loading={loading} iconPosition="right" />
      </Flex>
      <Flex center padding={40}>
        <BWI {...args} material={new GlassMaterial()} loading={loading} />
        <BWI {...args} material={new PaperMaterial()} loading={loading} />
        <BWI {...args} material={new SolidMaterial()} loading={loading} />
      </Flex>
    </ValenceProvider>
  );
};
WithIcon.args = {
  icon: <IconUserCircle />,
  children: "Button",
  iconPosition: "left",
};
