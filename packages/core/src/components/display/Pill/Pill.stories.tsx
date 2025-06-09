import { Meta, StoryObj } from "@storybook/react";
import { Storybook } from "../../../../storybook";
import {
  Flex,
  GlassMaterial,
  PaperMaterial,
  SolidMaterial,
  ValenceProvider,
} from "../../..";

import { Pill as P } from "../../..";
import { AirMaterial } from "../../../utilities/materials/AirMaterial";

const meta: Meta<typeof P> = {
  component: P,
  title: "Valence/Core/Display",
  argTypes: {
    size: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof P>;

export const Pill: Story = (args: any) => (
  <ValenceProvider>
    <Flex center height="100vh" direction="column">
      <Flex direction="row">
        <P {...args} size="xs" />
        <P {...args} size="sm" />
        <P {...args} size="md" />
        <P {...args} size="lg" />
        <P {...args} size="xl" />
      </Flex>
      <Flex direction="row">
        <P {...args} material={new GlassMaterial()} />
        <P {...args} material={new AirMaterial()} />
        <P {...args} material={new PaperMaterial()} />
        <P {...args} material={new SolidMaterial()} />
      </Flex>
      <Flex direction="row">
        <P {...args} material={new GlassMaterial()} withRemoveButton />
        <P {...args} material={new AirMaterial()} withRemoveButton />
        <P {...args} material={new PaperMaterial()} withRemoveButton />
        <P {...args} material={new SolidMaterial()} withRemoveButton />
      </Flex>
    </Flex>
  </ValenceProvider>
);
Pill.args = {
  // withRemoveButton: true,
  children: "Hi there",
};
