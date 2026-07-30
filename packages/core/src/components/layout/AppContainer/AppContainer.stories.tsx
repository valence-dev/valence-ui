import { Meta, StoryObj } from "@storybook/react";
import {
  IconBolt,
  IconCategory,
  IconLayoutSidebarRightCollapse,
  IconLayoutSidebarRightExpand,
  IconLogout,
  IconUserCircle,
} from "@tabler/icons-react";
import { BrowserRouter } from "react-router-dom";
import { Storybook } from "../../../../storybook";
import { useDisclosure } from "../../../hooks";
import { GlassMaterial } from "../../../utilities/materials/GlassMaterial";
import { SolidMaterial } from "../../../utilities/materials/SolidMaterial";
import { Button } from "../../buttons/TextButton";
import { ButtonWithIcon } from "../../buttons/ButtonWithIcon";
import { Text } from "../../display/Text/Text";
import { Title } from "../../display/Text/Title";
import { AppNav } from "../../navigation";
import { SideSheet } from "../../overlays";
import { Flex } from "../Flex";
import { Header } from "../Header";
import { PageContainer } from "../PageContainer";
import { AppContainer as AC } from "./AppContainer";

const NAV = (
  <AppNav
    buttons={[
      {
        id: "apps",
        children: <IconCategory />,
        highlighted: true,
        to: "/dashboard",
        show: { default: true, mobile: false },
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
);

/** Body content long enough that the page actually scrolls. */
function body(lines = 30) {
  return (
    <Flex direction="column" width="100%">
      {Array.from({ length: lines }, (_, index) => (
        <Text key={index}>
          {index + 1}. {Storybook.longText}
        </Text>
      ))}
    </Flex>
  );
}

const meta: Meta<typeof AC> = {
  component: AC,
  title: "Core/Layout/AppContainer",
  argTypes: {
    showNav: { control: { type: "boolean" }, table: { category: "Content" } },
  },
  args: {
    nav: NAV,
  },
  // The app container *is* the page: it sizes itself to the viewport and puts
  // the nav against its edge, so it cannot be centred or padded by the story
  // frame without misrepresenting how it behaves in an application.
  parameters: { valence: { layout: "fullscreen" } },
  decorators: [
    // `AppNav`'s buttons are router links, so every story needs a router
    // above them or the component throws on mount. The v7 flags are opted
    // into so the router stops warning about them on every story.
    (Story) => (
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Story />
      </BrowserRouter>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof AC>;

/** The whole application shell: nav, header, page, and a side sheet. */
export const Playground: Story = {
  render: (args) => {
    const sideSheet = useDisclosure();

    return (
      <AC {...args}>
        <ButtonWithIcon
          onClick={() => sideSheet.update(!sideSheet.opened)}
          float={{
            position: "absolute",
            positionHorizontal: "right",
            positionVertical: "bottom",
          }}
          material={new SolidMaterial({ elevation: 2 })}
          radius="xl"
          icon={
            sideSheet.opened ? (
              <IconLayoutSidebarRightCollapse />
            ) : (
              <IconLayoutSidebarRightExpand />
            )
          }
          iconPosition="right"
        >
          {sideSheet.opened ? "Collapse" : "Expand"}
        </ButtonWithIcon>

        <PageContainer
          exemptContent={
            <Header>
              <Title>Page Title</Title>
            </Header>
          }
        >
          <Button onClick={() => sideSheet.update(!sideSheet.opened)}>
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
    );
  },
};

/**
 * The shell with the nav hidden.
 *
 * `showNav` is what a signed-out or full-bleed route uses, and the page has to
 * reclaim the nav's gutter rather than leaving a strip of empty background.
 */
export const States: Story = {
  render: (args) => (
    <AC {...args} showNav={false}>
      <PageContainer
        exemptContent={
          <Header>
            <Title>No navigation</Title>
          </Header>
        }
      >
        {body()}
      </PageContainer>
    </AC>
  ),
};

/**
 * The mobile layout.
 *
 * Below the tablet breakpoint the nav moves to the bottom of the screen and
 * some of its buttons hide themselves — behaviour that is invisible at a
 * desktop-width frame.
 */
export const Responsive: Story = {
  render: (args) => (
    <AC {...args}>
      <PageContainer
        exemptContent={
          <Header>
            <Title>Narrow the frame</Title>
          </Header>
        }
      >
        <Text>
          The nav moves to the bottom of the screen at mobile widths, and the
          `apps` button hides itself entirely.
        </Text>
        {body()}
      </PageContainer>
    </AC>
  ),
};

/** Contents the shell has to survive. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  render: (args) => (
    <AC {...args}>
      <PageContainer>
        <Title>No header</Title>
        <Text>
          A page with no `exemptContent` should still scroll correctly under the
          nav.
        </Text>
        {body(60)}
      </PageContainer>
    </AC>
  ),
};

/** The shell with no page inside it at all. */
export const Composition: Story = {
  render: (args) => <AC {...args} />,
};
