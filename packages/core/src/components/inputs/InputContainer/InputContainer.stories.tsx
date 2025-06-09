import { Meta, StoryObj } from "@storybook/react";
import { Button, FlexCenter, ValenceProvider } from "../../..";

import { InputContainer as IC } from "./InputContainer";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const meta: Meta<typeof IC> = {
  component: IC,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof IC>;

export const InputContainer: Story = (args: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <ValenceProvider>
      <Button onClick={() => setLoading(!loading)}>Toggle Loading State</Button>
      <FlexCenter>
        <IC {...args} loading={loading} />
      </FlexCenter>
    </ValenceProvider>
  );
};
InputContainer.args = {
  icon: <IconSearch />,
  children: <input />,
};
