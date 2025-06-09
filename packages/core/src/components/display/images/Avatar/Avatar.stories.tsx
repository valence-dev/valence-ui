import { Meta, StoryObj } from "@storybook/react";
import {
  Flex,
  GlassMaterial,
  PaperMaterial,
  SolidMaterial,
  ValenceProvider,
} from "../../../..";

import { Avatar as A } from "./Avatar";
import { IconBrandThreads } from "@tabler/icons-react";
import { AirMaterial } from "../../../../utilities/materials/AirMaterial";

const meta: Meta<typeof A> = {
  component: A,
  title: "Valence/Core/Display/Images",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof A>;

export const Avatar: Story = (args: any) => (
  <ValenceProvider>
    <Flex center direction="column" height="100vh">
      <Flex direction="row">
        <A {...args} size="xs" />
        <A {...args} size="sm" />
        <A {...args} size="md" />
        <A {...args} size="lg" />
        <A {...args} size="xl" />
      </Flex>
      <Flex direction="row">
        <A {...args} size="xs" secondaryIcon={<IconBrandThreads />} />
        <A {...args} size="sm" secondaryIcon={<IconBrandThreads />} />
        <A {...args} size="md" secondaryIcon={<IconBrandThreads />} />
        <A {...args} size="lg" secondaryIcon={<IconBrandThreads />} />
        <A {...args} size="xl" secondaryIcon={<IconBrandThreads />} />
      </Flex>
      <Flex direction="row">
        <A {...args} material={new GlassMaterial()} />
        <A {...args} material={new AirMaterial()} />
        <A {...args} material={new PaperMaterial()} />
        <A {...args} material={new SolidMaterial()} />
      </Flex>
      <Flex direction="row">
        <A
          {...args}
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        />
        <A
          {...args}
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          material={new PaperMaterial()}
        />
        <A
          {...args}
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          material={new SolidMaterial()}
        />
      </Flex>
    </Flex>
  </ValenceProvider>
);
Avatar.args = {
  alt: "A random image",
};
