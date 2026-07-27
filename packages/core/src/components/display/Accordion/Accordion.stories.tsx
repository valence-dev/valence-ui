import { Meta, StoryObj } from "@storybook/react";
import { IconPlus } from "@tabler/icons-react";
import {
  Case,
  Section,
  Showcase,
  Storybook,
  allMaterials,
} from "../../../../storybook";
import { useControlledList } from "../../../hooks/UseControlledList";
import { Text } from "../Text/Text";
import { Accordion as A } from "./Accordion";

const meta: Meta<typeof A> = {
  component: A,
  title: "Core/Display/Accordion",
};
export default meta;
type Story = StoryObj<typeof A>;

/**
 * Three items, two of them open.
 *
 * The accordion's open set is a `ControlledList` owned by the caller, so every
 * story has to build one — there is no uncontrolled mode to fall back on.
 */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const itemList = useControlledList(["item1", "item2"]);

    return (
      <Showcase title="Accordion">
        <A {...args} itemList={itemList}>
          {[1, 2, 3].map((n) => (
            <A.Item
              key={`item${n}`}
              value={`item${n}`}
              control={<A.Control title={`Item ${n}`} />}
            >
              <A.Panel>
                <Text>Panel {n}</Text>
              </A.Panel>
            </A.Item>
          ))}
        </A>
      </Showcase>
    );
  },
};

/** Every combination of open and closed, side by side. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const allOpen = useControlledList(["a", "b"]);
    const noneOpen = useControlledList<string>([]);
    const oneOpen = useControlledList(["a"]);

    const items = (
      <>
        <A.Item value="a" control={<A.Control title="First" />}>
          <A.Panel>
            <Text>The first panel.</Text>
          </A.Panel>
        </A.Item>
        <A.Item value="b" control={<A.Control title="Second" />}>
          <A.Panel>
            <Text>The second panel.</Text>
          </A.Panel>
        </A.Item>
      </>
    );

    return (
      <Showcase
        title="Open and closed"
        description="The chevron must point consistently with the panel's state, and a closed accordion must take up no more room than its controls."
      >
        <Section column>
          <Case label="all open">
            <A {...args} itemList={allOpen}>
              {items}
            </A>
          </Case>
          <Case label="one open">
            <A {...args} itemList={oneOpen}>
              {items}
            </A>
          </Case>
          <Case label="none open">
            <A {...args} itemList={noneOpen}>
              {items}
            </A>
          </Case>
        </Section>
      </Showcase>
    );
  },
};

/** The accordion's own surface, and the panels' inside it. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const itemList = useControlledList(["a"]);

    return (
      <Showcase
        title="Accordion materials"
        description="The accordion is a `Flex`, so it takes a material like any other container."
      >
        <Section column>
          {allMaterials().map(([name, material]) => (
            <Case key={name} label={name}>
              <A {...args} itemList={itemList} material={material} padding={10}>
                <A.Item value="a" control={<A.Control title="Open" />}>
                  <A.Panel>
                    <Text>A panel on a {name} surface.</Text>
                  </A.Panel>
                </A.Item>
                <A.Item value="b" control={<A.Control title="Closed" />}>
                  <A.Panel>
                    <Text>Hidden.</Text>
                  </A.Panel>
                </A.Item>
              </A>
            </Case>
          ))}
        </Section>
      </Showcase>
    );
  },
};

/** Titles, icons and panel bodies that vary. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const itemList = useControlledList(["long", "custom", "rich"]);

    return (
      <Showcase title="Accordion content">
        <A {...args} itemList={itemList}>
          <A.Item
            value="long"
            control={<A.Control title={Storybook.longText} />}
          >
            <A.Panel>
              <Text>A title long enough to wrap must not push the chevron out of the control.</Text>
            </A.Panel>
          </A.Item>

          <A.Item
            value="custom"
            control={
              <A.Control title="Custom chevron" chevronIcon={<IconPlus />} />
            }
          >
            <A.Panel>
              <Text>The chevron is replaceable.</Text>
            </A.Panel>
          </A.Item>

          <A.Item value="rich" control={<A.Control title="A tall panel" />}>
            <A.Panel>
              <Text>{Storybook.longText}</Text>
              <Text>{Storybook.longText}</Text>
              <Text>{Storybook.awkwardText}</Text>
            </A.Panel>
          </A.Item>

          <A.Item value="empty" control={<A.Control title="An empty panel" />}>
            <A.Panel />
          </A.Item>
        </A>
      </Showcase>
    );
  },
};

/** Sizes and counts an accordion is not usually given. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const single = useControlledList(["only"]);
    const many = useControlledList<string>([]);

    return (
      <Showcase title="Accordion edge cases">
        <Section column>
          <Case label="a single item">
            <A {...args} itemList={single}>
              <A.Item value="only" control={<A.Control title="The only item" />}>
                <A.Panel>
                  <Text>Nothing to collapse against.</Text>
                </A.Panel>
              </A.Item>
            </A>
          </Case>

          <Case
            label="twenty items"
            note="All closed — the list must stay scannable."
          >
            <A {...args} itemList={many}>
              {Array.from({ length: 20 }, (_, index) => (
                <A.Item
                  key={index}
                  value={`item${index}`}
                  control={<A.Control title={`Item ${index + 1}`} />}
                >
                  <A.Panel>
                    <Text>Panel {index + 1}</Text>
                  </A.Panel>
                </A.Item>
              ))}
            </A>
          </Case>

          <Case label="in a narrow parent" width={240}>
            <A {...args} itemList={single} width="100%">
              <A.Item value="only" control={<A.Control title={Storybook.longText} />}>
                <A.Panel>
                  <Text>{Storybook.longText}</Text>
                </A.Panel>
              </A.Item>
            </A>
          </Case>
        </Section>
      </Showcase>
    );
  },
};
