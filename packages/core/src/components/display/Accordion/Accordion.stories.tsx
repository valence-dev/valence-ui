import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Text, ValenceProvider } from "../../..";
import { Accordion as A } from "./Accordion";
import { useControlledList } from "../../../hooks/UseControlledList";

const meta: Meta<typeof A> = {
  component: A,
  title: "Valence/Core/Display",
}
export default meta;
type Story = StoryObj<typeof A>;

export const Accordion: Story = (args: any) => {
  const controlledList = useControlledList(["item1", "item2"]);
  return (
    <ValenceProvider>
      <A
        itemList={controlledList}
        {...args}
      >
        <A.Item
          key="item1"
          value="item1"
          control={
            <A.Control
              title="Item 1"
            />
          }
        >
          <A.Panel>
            <Text>Panel 1</Text>
          </A.Panel>
        </A.Item>

        <A.Item
          key="item2"
          value="item2"
          control={
            <A.Control
              title="Item 2"
            />
          }
        >
          <A.Panel>
            <Text>Panel 2</Text>
          </A.Panel>
        </A.Item>

        <A.Item
          key="item3"
          value="item3"
          control={
            <A.Control
              title="Item 3"
            />
          }
        >
          <A.Panel>
            <Text>Panel 3</Text>
          </A.Panel>
        </A.Item>
      </A>
    </ValenceProvider>
  );
}
Accordion.args = {
};