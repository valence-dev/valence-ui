import { Meta, StoryObj } from "@storybook/react";
import { Alert as A } from "./Alert";
import { IconAlertCircle } from "@tabler/icons-react";
import {
  FlexCenter,
  GlassMaterial,
  PaperMaterial,
  SolidMaterial,
  ValenceProvider,
} from "../../..";
import { AirMaterial } from "../../../utilities/materials/AirMaterial";

const meta: Meta<typeof A> = {
  component: A,
  title: "Valence/Core/Display",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof A>;

export const Alert: Story = (args: any) => (
  <ValenceProvider>
    <FlexCenter>
      <A {...args} />
      <A {...args} material={new AirMaterial()} />
      <A {...args} material={new GlassMaterial()} />
      <A {...args} material={new PaperMaterial()} />
      <A {...args} material={new SolidMaterial()} />
    </FlexCenter>
  </ValenceProvider>
);
Alert.args = {
  alert: {
    title: "Alert Title",
    type: "info",
    message: "Alert Message",
    icon: <IconAlertCircle />,
  },
  show: true,
};
