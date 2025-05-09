import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Text, ValenceProvider } from "../../..";
import { Grid as G } from "./Grid";

const meta: Meta<typeof G> = {
  component: G,
  title: "Valence/Core/Layout",
  argTypes: {
    grid: {
      control: {
        type: "text",
      },
    },
    gap: {
      control: {
        type: "number",
      },
    },
    rowGap: {
      control: {
        type: "number",
      },
    },
    columnGap: {
      control: {
        type: "number",
      },
    },

    template: {
      control: {
        type: "text",
      },
    },
    rows: {
      control: {
        type: "number",
      },
    },
    columns: {
      control: {
        type: "number",
      },
    },

    templateAreas: {
      control: {
        type: "text",
      },
    },
    autoRows: {
      control: {
        type: "text",
      },
    },
    autoColumns: {
      control: {
        type: "text",
      },
    },

    autoFlow: {
      control: {
        type: "text",
      },
    },
    justifyItems: {
      control: {
        type: "text",
      },
    },
    justifyContent: {
      control: {
        type: "text",
      },
    },

    alignItems: {
      control: {
        type: "text",
      },
    },
    alignContent: {
      control: {
        type: "text",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof G>;

export const Grid: Story = (args: any) => (
  <ValenceProvider>
    <G {...args} padding={20}>
      <G.Item backgroundColor="black">
        <Text align="center" color="white">
          GridItem
        </Text>
      </G.Item>
      <G.Item backgroundColor="black">
        <Text align="center" color="white">
          GridItem
        </Text>
      </G.Item>
      <G.Item backgroundColor="black">
        <Text align="center" color="white">
          GridItem
        </Text>
      </G.Item>
      <G.Item backgroundColor="black">
        <Text align="center" color="white">
          GridItem
        </Text>
      </G.Item>
    </G>
  </ValenceProvider>
);
Grid.args = {
  rows: 2,
  columns: 2,
};
