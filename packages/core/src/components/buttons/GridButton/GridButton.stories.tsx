import { Meta, StoryObj } from "@storybook/react";

import { GridButton as GB } from "./GridButton";
import { Icon123 } from "@tabler/icons-react";
import { ValenceProvider } from "../../../ValenceProvider";
import { Flex } from "../../layout";
import { Button } from "..";
import { useState } from "react";
import {
  GlassMaterial,
  PaperMaterial,
  SolidMaterial,
} from "../../../utilities";
import { AirMaterial } from "../../../utilities/materials/AirMaterial";

const meta: Meta<typeof GB> = {
  component: GB,
  title: "Valence/Core/Buttons/GridButton",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof GB>;

export const GridButton: Story = (args: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <ValenceProvider>
      <Button onClick={() => setLoading(!loading)}>Toggle Loading State</Button>

      <Flex center padding={40}>
        <GB {...args} size="xs" loading={loading} />
        <GB {...args} size="sm" loading={loading} />
        <GB {...args} size="md" loading={loading} />
        <GB {...args} size="lg" loading={loading} />
        <GB {...args} size="xl" loading={loading} />
      </Flex>
      <Flex center padding={40}>
        <GB {...args} material={new GlassMaterial()} loading={loading} />
        <GB {...args} material={new AirMaterial()} loading={loading} />
        <GB {...args} material={new PaperMaterial()} loading={loading} />
        <GB {...args} material={new SolidMaterial()} loading={loading} />
      </Flex>
    </ValenceProvider>
  );
};
GridButton.args = {
  icon: <Icon123 />,
  children: "Post count",
};
