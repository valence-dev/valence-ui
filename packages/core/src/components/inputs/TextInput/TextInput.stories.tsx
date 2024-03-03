import React, { useRef } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, FlexCenter, ValenceProvider } from "../../..";

import { TextInput as TI } from "./TextInput";
import { IconSearch } from "@tabler/icons-react";

const meta: Meta<typeof TI> = {
  component: TI,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof TI>;


export const TextInput: Story = (args: any) => {
  const [value, setValue] = React.useState("");

  const ref = useRef<HTMLInputElement>(null);

  return (
    <ValenceProvider>
      <FlexCenter>
        <TI
          {...args}
          value={value}
          setValue={setValue}
          ref={ref}
          autoComplete="username"
        />

        <Button
          onClick={() => {
            ref.current?.focus();
          }}
        >
          Focus
        </Button>
      </FlexCenter>
    </ValenceProvider>
  );
}
TextInput.args = {
  placeholder: "Placeholder...",
  icon: <IconSearch />,
}