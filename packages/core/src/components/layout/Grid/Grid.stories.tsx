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
        type: "text"
      }
    },
    gap: {
      control: {
        type: "number"
      }
    },
    rowGap: {
      control: {
        type: "number"
      }
    },
    columnGap: {
      control: {
        type: "number"
      }
    },

    template: {
      control: {
        type: "text"
      }
    },
    templateRows: {
      control: {
        type: "text"
      }
    },
    templateColumns: {
      control: {
        type: "text"
      }
    },

    templateAreas: {
      control: {
        type: "text"
      }
    },
    autoRows: {
      control: {
        type: "text"
      }
    },
    autoColumns: {
      control: {
        type: "text"
      }
    },

    autoFlow: {
      control: {
        type: "text"
      }
    },
    justifyItems: {
      control: {
        type: "text"
      }
    },
    justifyContent: {
      control: {
        type: "text"
      }
    },
    
    alignItems: {
      control: {
        type: "text"
      }
    },
    alignContent: {
      control: {
        type: "text"
      }
    },
  }
}
export default meta;
type Story = StoryObj<typeof G>;

export const Grid: Story = (args: any) => (
  <ValenceProvider>
    <G {...args}>
      <G.Item style={{ backgroundColor: "lightgray" }}>
        <Text align="center">GridItem</Text>
      </G.Item>
      <G.Item style={{ backgroundColor: "lightgray" }}>
        <Text align="center">GridItem</Text>
      </G.Item>
      <G.Item style={{ backgroundColor: "lightgray" }}>
        <Text align="center">GridItem</Text>
      </G.Item>
      <G.Item style={{ backgroundColor: "lightgray" }}>
        <Text align="center">GridItem</Text>
      </G.Item>
    </G>
  </ValenceProvider>
);
Grid.args = {
  
}