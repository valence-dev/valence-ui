import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FlexCenter, Space, Text, ValenceProvider } from "../../..";

import { PillSelector as PS } from "../../..";

const meta: Meta<typeof PS> = {
  component: PS,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof PS>;

export const PillSelector: Story = (args: any) => {
  const [value, setValue] = React.useState(["hello", "world", "amet"]);
  const [pills, setPills] = React.useState(args.pills);

  return (
    <ValenceProvider>
      <FlexCenter innerProps={{ direction: "column" }}>
        <Text>Wrapped pill container</Text>

        <PS
          {...args}
          value={value}
          setValue={setValue}
          pills={pills}
          setPills={setPills}
          wrap="wrap"
          allowEditing
        />

        <Space height={20} />

        <Text>Regular pill container</Text>

        <PS value={value} setValue={setValue} pills={pills} />

        <Space height={20} />
      </FlexCenter>
    </ValenceProvider>
  );
};
PillSelector.args = {
  pills: [
    "hello",
    "world",
    "foo",
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
  ],
};
