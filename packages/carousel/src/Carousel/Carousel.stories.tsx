import { Meta, StoryObj } from "@storybook/react";
import { ReactNode, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import {
  Button,
  Flex,
  GlassMaterial,
  PaperMaterial,
  Text,
} from "@valence-ui/core";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
} from "@valence-ui/core/storybook";
import { Carousel as C } from "./Carousel";
import { useCarouselChild } from "./CarouselChild";

/**
 * One slide.
 *
 * The carousel publishes each slide's state through context, so a slide picks
 * up what it needs with `useCarouselChild()` and nothing is injected into it.
 * This is also the only way to see whether those flags are being set correctly.
 */
function Slide(props: { width?: number }) {
  const { width = 200, ...rest } = props;
  const { index, isActive, isNearest } = useCarouselChild();

  return (
    <Flex
      width={width}
      height={300}
      align="center"
      justify="center"
      direction="column"
      material={isActive ? new PaperMaterial() : new GlassMaterial()}
      style={{ border: isNearest ? "2px solid red" : "2px solid transparent" }}
      {...rest}
    >
      <Text size="xl" bold>
        {index}
      </Text>
      {isActive && <Text size="xs">active</Text>}
      {isNearest && <Text size="xs">nearest</Text>}
    </Flex>
  );
}

/**
 * A slide that only shows content.
 *
 * The carousel injects its flags into whatever child it is given, so a plain
 * `Flex` used as a slide receives them and forwards them to the DOM. Anything
 * passed as a slide has to absorb them, even when it does not use them.
 */
function ContentSlide(props: CarouselChildProps & { children?: ReactNode }) {
  const { isActive, isNearest, isDragging, children, ...rest } = props;

  return (
    <Flex width={250} padding={20} {...rest}>
      {children}
    </Flex>
  );
}

/** `count` slides. */
function slides(count: number, width?: number) {
  return Array.from({ length: count }, (_, index) => (
    <Slide key={index} width={width} />
  ));
}

const meta: Meta<typeof C> = {
  component: C,
  title: "Carousel/Carousel",
  argTypes: {
    allowDrag: {
      control: { type: "boolean" },
      table: { category: "Behaviour" },
    },
    snapToChildren: {
      control: { type: "boolean" },
      table: { category: "Behaviour" },
    },
    changeActiveOnScroll: {
      control: { type: "boolean" },
      table: { category: "Behaviour" },
    },
    showScrollbar: {
      control: { type: "boolean" },
      table: { category: "Appearance" },
    },
    showControls: {
      control: { type: "boolean" },
      table: { category: "Appearance" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof C>;

/** Ten slides in a 600px frame. */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Flex width="100%" justify="center">
      <Flex width={600}>
        <C {...args}>{slides(10)}</C>
      </Flex>
    </Flex>
  ),
};

/** Each behaviour flag, on and off. */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Carousel behaviour"
      description="Drag or scroll each of these. Snapping and active-on-scroll are the two that change how the carousel feels rather than how it looks."
    >
      <Section column>
        <Case label="defaults">
          <Flex width={600}>
            <C {...args}>{slides(10)}</C>
          </Flex>
        </Case>
        <Case
          label="snapToChildren={false}"
          note="Should come to rest anywhere, not on a slide."
        >
          <Flex width={600}>
            <C {...args} snapToChildren={false}>
              {slides(10)}
            </C>
          </Flex>
        </Case>
        <Case
          label="changeActiveOnScroll={false}"
          note="The active slide should only change via the controls."
        >
          <Flex width={600}>
            <C {...args} changeActiveOnScroll={false}>
              {slides(10)}
            </C>
          </Flex>
        </Case>
        <Case
          label="allowDrag={false}"
          note="Scroll only — dragging must do nothing."
        >
          <Flex width={600}>
            <C {...args} allowDrag={false}>
              {slides(10)}
            </C>
          </Flex>
        </Case>
        <Case label="showScrollbar">
          <Flex width={600}>
            <C {...args} showScrollbar>
              {slides(10)}
            </C>
          </Flex>
        </Case>
        <Case label="showControls={false}">
          <Flex width={600}>
            <C {...args} showControls={false}>
              {slides(10)}
            </C>
          </Flex>
        </Case>
        <Case label="custom control icons">
          <Flex width={600}>
            <C
              {...args}
              controlIcons={{
                prev: <IconArrowLeft />,
                next: <IconArrowRight />,
              }}
            >
              {slides(10)}
            </C>
          </Flex>
        </Case>
      </Section>
    </Showcase>
  ),
};

/**
 * Controlled from outside the carousel.
 *
 * The carousel works uncontrolled as well, and the original story had the
 * controlled path commented out — so the mode most applications actually use
 * was never exercised at all.
 */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const [activeChild, setActiveChild] = useState(0);

    return (
      <Showcase
        title="Controlled"
        description="Setting the active slide from outside must scroll the carousel, and scrolling it must report the new index back."
      >
        <Section column>
          <Case label={`activeChild=${activeChild}`}>
            <Flex width={600}>
              <C
                {...args}
                activeChild={activeChild}
                setActiveChild={setActiveChild}
              >
                {slides(10)}
              </C>
            </Flex>
          </Case>
          <Case>
            <Button onClick={() => setActiveChild(0)}>First</Button>
            <Button onClick={() => setActiveChild(5)}>Middle</Button>
            <Button onClick={() => setActiveChild(9)}>Last</Button>
            <Button onClick={() => setActiveChild(99)}>Out of range</Button>
          </Case>
        </Section>
      </Showcase>
    );
  },
};

/** Slide counts and widths. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Slides">
      <Matrix
        title="slide count"
        values={[1, 2, 3, 20]}
        label={(count) => `${count} slide${count === 1 ? "" : "s"}`}
        column
      >
        {(count) => (
          <Flex width={600}>
            <C {...args}>{slides(count)}</C>
          </Flex>
        )}
      </Matrix>

      <Matrix
        title="slide width"
        values={[80, 200, 400, 700]}
        label={(width) => `width=${width}`}
        column
      >
        {(width) => (
          <Flex width={600}>
            <C {...args}>{slides(6, width)}</C>
          </Flex>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Frames and contents the carousel is not designed for. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Carousel edge cases">
      <Section column>
        <Case
          label="fewer slides than fit"
          note="Nothing to scroll — the controls should say so."
        >
          <Flex width={600}>
            <C {...args}>{slides(2)}</C>
          </Flex>
        </Case>
        <Case label="a single slide">
          <Flex width={600}>
            <C {...args}>{slides(1)}</C>
          </Flex>
        </Case>
        <Case label="a slide wider than the frame">
          <Flex width={400}>
            <C {...args}>{slides(4, 700)}</C>
          </Flex>
        </Case>
        <Case label="a very narrow frame" width={200}>
          <Flex width={200}>
            <C {...args}>{slides(6)}</C>
          </Flex>
        </Case>
        <Case label="mixed slide widths">
          <Flex width={600}>
            <C {...args}>
              {[100, 300, 150, 400, 200].map((width, index) => (
                <Slide key={index} width={width} />
              ))}
            </C>
          </Flex>
        </Case>
        <Case label="a hundred slides">
          <Flex width={600}>
            <C {...args}>{slides(100)}</C>
          </Flex>
        </Case>
        <Case label="text content">
          <Flex width={600}>
            <C {...args}>
              {Array.from({ length: 5 }, (_, index) => (
                <ContentSlide key={index}>
                  <Text>
                    {index + 1}. {Storybook.longText}
                  </Text>
                </ContentSlide>
              ))}
            </C>
          </Flex>
        </Case>
      </Section>
    </Showcase>
  ),
};
