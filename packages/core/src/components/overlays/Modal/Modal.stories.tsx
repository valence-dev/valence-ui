import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import {
  Case,
  Section,
  Showcase,
  Storybook,
  radiusControl,
} from "../../../../storybook";
import { useDisclosure } from "../../../hooks";
import { GlassMaterial } from "../../../utilities/materials/GlassMaterial";
import { Button } from "../../buttons/TextButton";
import { Text } from "../../display/Text/Text";
import { Flex } from "../../layout/Flex";
import { Modal as M } from "./Modal";

/**
 * A modal and the button that opens it.
 *
 * Every case needs its own disclosure, and a disclosure is a hook — so each
 * one has to be its own component rather than an entry in a `map`.
 */
function ModalCase(props: {
  label: string;
  children?: ReactNode;
  modalProps?: Record<string, unknown>;
}) {
  const disclosure = useDisclosure();

  return (
    <Case label={props.label}>
      <Button onClick={disclosure.open}>{props.label}</Button>

      <M title={props.label} disclosure={disclosure} {...props.modalProps}>
        {props.children ?? <Text>{Storybook.longText}</Text>}
      </M>
    </Case>
  );
}

const meta: Meta<typeof M> = {
  component: M,
  title: "Core/Overlays/Modal",
  argTypes: {
    title: { control: { type: "text" }, table: { category: "Content" } },
    radius: radiusControl,
    closeOnOverlayClick: {
      control: { type: "boolean" },
      table: { category: "Behaviour" },
    },
    closeOnEscape: {
      control: { type: "boolean" },
      table: { category: "Behaviour" },
    },
    lockScroll: {
      control: { type: "boolean" },
      table: { category: "Behaviour" },
    },
    withShadow: {
      control: { type: "boolean" },
      table: { category: "Appearance" },
    },
  },
  args: {
    title: "Modal Title",
  },
};
export default meta;
type Story = StoryObj<typeof M>;

/** One modal, driven entirely by the controls panel. */
export const Playground: Story = {
  render: (args) => {
    const disclosure = useDisclosure(true);

    return (
      <Flex center direction="column" height="100vh">
        <Button onClick={disclosure.open}>Open Modal</Button>

        <M {...args} disclosure={disclosure}>
          <Button>Hi</Button>
          <Flex width="100%" height="200vh" material={new GlassMaterial()}>
            Hi
          </Flex>
        </M>
      </Flex>
    );
  },
};

/**
 * Every way of dismissing a modal, and every way of refusing to.
 *
 * These are the props most likely to be got wrong in an application — a modal
 * that cannot be escaped is a bug, and one that closes when it should not lose
 * work. Open each and try the overlay, the escape key and the close button.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase
      title="Dismissal"
      description="Try clicking the overlay, pressing escape, and using the header's close button on each of these."
    >
      <Section>
        <ModalCase label="all dismissals" />
        <ModalCase
          label="no overlay click"
          modalProps={{ closeOnOverlayClick: false }}
        />
        <ModalCase label="no escape" modalProps={{ closeOnEscape: false }} />
        <ModalCase
          label="neither"
          modalProps={{ closeOnOverlayClick: false, closeOnEscape: false }}
        />
        <ModalCase label="no scroll lock" modalProps={{ lockScroll: false }} />
      </Section>
    </Showcase>
  ),
};

/** Radius and shadow. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase title="Modal appearance">
      <Section title="radius">
        {Storybook.componentSizes.map((radius) => (
          <ModalCase key={radius} label={radius} modalProps={{ radius }} />
        ))}
      </Section>

      <Section title="shadow">
        <ModalCase label="withShadow" modalProps={{ withShadow: true }} />
        <ModalCase
          label="no shadow"
          modalProps={{ withShadow: false }}
        />
      </Section>
    </Showcase>
  ),
};

/** Content of very different heights. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase
      title="Modal content"
      description="A modal sizes to its content up to the viewport, then scrolls. Both ends of that need checking: a one-line modal must not be a full-height box, and a very tall one must not run off the screen."
    >
      <Section>
        <ModalCase label="a single line">
          <Text>Short.</Text>
        </ModalCase>

        <ModalCase label="a paragraph">
          <Text>{Storybook.longText}</Text>
        </ModalCase>

        <ModalCase label="taller than the viewport">
          <Flex direction="column" width="100%">
            {Array.from({ length: 40 }, (_, index) => (
              <Text key={index}>
                {index + 1}. {Storybook.longText}
              </Text>
            ))}
          </Flex>
        </ModalCase>

        <ModalCase label="empty">
          <></>
        </ModalCase>

        <ModalCase
          label="a very long title"
          modalProps={{ title: Storybook.longText }}
        >
          <Text>The header must wrap rather than push the close button off.</Text>
        </ModalCase>

        <ModalCase
          label="non-latin and emoji"
          modalProps={{ title: Storybook.awkwardText }}
        >
          <Text>{Storybook.awkwardText}</Text>
        </ModalCase>

        <ModalCase label="a fixed height" modalProps={{ height: 200 }}>
          <Flex width="100%" height="200vh" material={new GlassMaterial()}>
            <Text>Scrolls inside a 200px modal.</Text>
          </Flex>
        </ModalCase>
      </Section>
    </Showcase>
  ),
};

/** Two modals at once, which is where the overlay stacking shows. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: () => {
    const outer = useDisclosure();
    const inner = useDisclosure();

    return (
      <Showcase
        title="Stacked modals"
        description="Open the outer modal, then the inner one from inside it. The second overlay must sit above the first, and escape must close only the top one."
      >
        <Section>
          <Case label="nested">
            <Button onClick={outer.open}>Open the outer modal</Button>

            <M title="Outer modal" disclosure={outer}>
              <Text>{Storybook.longText}</Text>
              <Button onClick={inner.open}>Open the inner modal</Button>

              <M title="Inner modal" disclosure={inner}>
                <Text>The inner modal.</Text>
              </M>
            </M>
          </Case>
        </Section>
      </Showcase>
    );
  },
};
