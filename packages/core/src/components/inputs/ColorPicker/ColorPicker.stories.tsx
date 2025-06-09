import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ColorPicker as CP } from "./ColorPicker";
import {
  Button,
  FlexCenter,
  PaperMaterial,
  SolidMaterial,
  ValenceProvider,
} from "../../..";
import { AirMaterial } from "../../../utilities/materials/AirMaterial";

const meta: Meta<typeof CP> = {
  component: CP,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof CP>;

export const ColorPicker: Story = (args: any) => {
  const [color, setColor] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <ValenceProvider>
      <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>

      <FlexCenter height="100vh">
        <CP {...args} value={color} setValue={setColor} loading={loading} />
        <CP
          {...args}
          value={color}
          setValue={setColor}
          material={new AirMaterial()}
          loading={loading}
        />
        <CP
          {...args}
          value={color}
          setValue={setColor}
          material={new PaperMaterial()}
          loading={loading}
        />
        <CP
          {...args}
          value={color}
          setValue={setColor}
          material={new SolidMaterial()}
          loading={loading}
        />
      </FlexCenter>
    </ValenceProvider>
  );
};
ColorPicker.args = {};
