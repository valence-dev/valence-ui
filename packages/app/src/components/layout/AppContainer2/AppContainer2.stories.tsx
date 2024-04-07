import React, { ReactNode } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, Space, Text, ValenceProvider } from "@valence-ui/core";

import { AppContainer as AC } from "./AppContainer";
import { Drawer } from "../../layout";
import { NavRail } from "../../navigation";
import { IconBolt, IconCategory, IconLogout, IconUserCircle } from "@tabler/icons-react";
import { BrowserRouter } from "react-router-dom";
import { useAppContainerContext } from "../../../contexts";

const meta: Meta<typeof AC> = {
  component: AC,
  title: "Valence/App/Layout",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof AC>;

export const AppContainer2: Story = (args: any) => {
  return (
    <BrowserRouter>
      <ValenceProvider>
        <AC {...args}>
          <Children />
        </AC>
      </ValenceProvider>
    </BrowserRouter>
  )
};
function Children(): ReactNode {
  const containerContext = useAppContainerContext();

  return (
    <>
      <Text>
        Hi there!
      </Text>

      <Button
        onClick={() => containerContext.drawerDisclosure.opened ?
          containerContext.drawerDisclosure.close()
          : containerContext.drawerDisclosure.open()
        }
      >
        Show/hide drawer
      </Button>

      <Space height="100vh" />

      <Text>
        More content
      </Text>
    </>
  )
}

AppContainer2.args = {
  navRail: (
    <NavRail
      favicon="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
      buttons={[
        {
          id: "apps",
          children: <IconCategory />,
          highlighted: true,
          to: "/dashboard",
          show: {
            default: true,
            mobile: false,
          }
        },
        {
          id: "account",
          children: <IconUserCircle />,
          to: "/account",
        },
        {
          id: "power",
          children: <IconBolt />,
          to: "/power",
        },
        {
          id: "signOut",
          position: "bottom",
          children: <IconLogout />,
          onClick: () => alert("Sign out"),
        }
      ]}
    />
  ),
  drawer: (
    <Drawer>
      <Text>
        Hi there!
      </Text>
    </Drawer>
  )
};