import { Meta, StoryObj } from "@storybook/react";

import { AppContainer as AC } from "./AppContainer";
import { AppNav } from "../../navigation";
import {
  IconBolt,
  IconCategory,
  IconLogout,
  IconUserCircle,
} from "@tabler/icons-react";
import { BrowserRouter } from "react-router-dom";
import { SideSheet } from "../../overlays";
import { Flex, Header, PageContainer } from "..";
import { ValenceProvider } from "../../../ValenceProvider";
import { Title } from "../../display";
import { Button } from "../../buttons";
import { useDisclosure } from "../../../hooks";
import { GlassMaterial } from "../../../utilities";

const meta: Meta<typeof AC> = {
  component: AC,
  title: "Valence/Core/Layout",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof AC>;

export const AppContainer: Story = (args: any) => {
  const sideSheet = useDisclosure();

  return (
    <BrowserRouter>
      <ValenceProvider>
        <AC {...args}>
          <Button
            onClick={() => {
              sideSheet.update(!sideSheet.opened);
            }}
            float={{
              position: "absolute",
              positionHorizontal: "right",
              positionVertical: "bottom",
            }}
          >
            Toggle Side Sheet
          </Button>

          <PageContainer
            exemptContent={
              <Header>
                <Title> Page Title </Title>
              </Header>
            }
          >
            <Button
              onClick={() => {
                sideSheet.update(!sideSheet.opened);
              }}
            >
              Toggle Side Sheet
            </Button>

            <SideSheet title="Side sheet" disclosure={sideSheet}>
              Hi there
            </SideSheet>

            <Flex height="300vh" width="100%" material={new GlassMaterial()}>
              Hi there
            </Flex>
          </PageContainer>
        </AC>
      </ValenceProvider>
    </BrowserRouter>
  );
};
AppContainer.args = {
  nav: (
    <AppNav
      buttons={[
        {
          id: "apps",
          children: <IconCategory />,
          highlighted: true,
          to: "/dashboard",
          show: {
            default: true,
            mobile: false,
          },
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
      ]}
      bottomButtons={[
        {
          id: "signOut",
          children: <IconLogout />,
          onClick: () => alert("Sign out"),
        },
      ]}
    />
  ),
};
