import { Meta, StoryObj } from "@storybook/react";
import { Icon123, IconHeart, IconShare } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  elevatedMaterials,
  sizingControls,
} from "../../../../storybook";
import { IconButton } from "../../buttons/IconButton";
import { Text } from "../../display/Text/Text";
import { Title } from "../../display/Text/Title";
import { Card as C } from "./Card";

const meta: Meta<typeof C> = {
  component: C,
  title: "Core/Layout/Card",
  argTypes: {
    ...sizingControls,
    gap: { control: { type: "number" }, table: { category: "Layout" } },
  },
};
export default meta;
type Story = StoryObj<typeof C>;

/** An image, a body and a button row. */
export const Playground: Story = {
  render: (args) => (
    <C {...args}>
      <C.Image src={Storybook.imageSrc} alt="A landscape" />
      <C.Section>
        <Title order={4}>A card</Title>
        <Text>Some body copy that explains what the card is about.</Text>
      </C.Section>
      <C.Buttons>
        <IconButton tooltip="Like">
          <IconHeart />
        </IconButton>
        <IconButton tooltip="Share">
          <IconShare />
        </IconButton>
      </C.Buttons>
    </C>
  ),
};

/**
 * Every size.
 *
 * A card's width comes from its size class rather than from its content, so
 * this row also shows how much text each size can actually hold.
 */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Card sizes"
      description="Width steps from 150px at `xs` to 350px at `xl`. The same content in each shows where it starts to be squeezed."
    >
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => (
          <C {...args} size={size}>
            <C.Image src={Storybook.imageSrc} alt="A landscape" />
            <C.Section>
              <Text align="center">Size {size}</Text>
            </C.Section>
          </C>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every radius. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Card radii"
      description="The image is clipped by the card's corners, so its top corners must follow the radius rather than staying square."
    >
      <Matrix title="radius" values={Storybook.componentSizes}>
        {(radius) => (
          <C {...args} size="xs" radius={radius}>
            <C.Image src={Storybook.imageSrc} alt="A landscape" />
            <C.Section>
              <Text align="center">{radius}</Text>
            </C.Section>
          </C>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every material, and the elevation ramp. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Card materials">
      <Section title="All materials">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <C {...args} size="xs" material={material}>
              <C.Section>
                <Text align="center">{name}</Text>
              </C.Section>
            </C>
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** The elevation ramp, which is what separates a card from its background. */
export const Elevations: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Card elevation">
      <Section title="PaperMaterial">
        {elevatedMaterials("paper").map(([label, material]) => (
          <Case key={label} label={label}>
            <C {...args} size="xs" material={material}>
              <C.Section>
                <Text align="center">{label}</Text>
              </C.Section>
            </C>
          </Case>
        ))}
      </Section>

      <Section title="SolidMaterial">
        {elevatedMaterials("solid").map(([label, material]) => (
          <Case key={label} label={label}>
            <C {...args} size="xs" material={material}>
              <C.Section>
                <Text align="center">{label}</Text>
              </C.Section>
            </C>
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** The sub-components, present and absent. */
export const Composition: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Card composition"
      description="`Card.Image` bleeds to the card's edges while `Card.Section` is inset, so the two must not be mistaken for one another when only one is present."
    >
      <Section>
        <Case label="image + section + buttons">
          <C {...args} size="sm">
            <C.Image src={Storybook.imageSrc} alt="A landscape" />
            <C.Section>
              <Text>Everything.</Text>
            </C.Section>
            <C.Buttons>
              <IconButton>
                <Icon123 />
              </IconButton>
            </C.Buttons>
          </C>
        </Case>
        <Case label="section only">
          <C {...args} size="sm">
            <C.Section>
              <Text>Just a section.</Text>
            </C.Section>
          </C>
        </Case>
        <Case label="image only">
          <C {...args} size="sm">
            <C.Image src={Storybook.imageSrc} alt="A landscape" />
          </C>
        </Case>
        <Case label="two sections">
          <C {...args} size="sm">
            <C.Section>
              <Title order={5}>First</Title>
            </C.Section>
            <C.Section>
              <Text>Second.</Text>
            </C.Section>
          </C>
        </Case>
        <Case label="buttons only">
          <C {...args} size="sm">
            <C.Buttons>
              <IconButton>
                <IconHeart />
              </IconButton>
              <IconButton>
                <IconShare />
              </IconButton>
            </C.Buttons>
          </C>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Clickable and static cards. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Clickable cards"
      description="A card with `onClick` becomes a button. Its own buttons must still work without also firing the card's click."
    >
      <Section>
        <Case label="static">
          <C {...args} size="sm">
            <C.Section>
              <Text>Not clickable.</Text>
            </C.Section>
          </C>
        </Case>
        <Case label="onClick">
          <C {...args} size="sm" onClick={() => alert("Card clicked")}>
            <C.Section>
              <Text>Click me.</Text>
            </C.Section>
          </C>
        </Case>
        <Case label="onClick + its own buttons">
          <C {...args} size="sm" onClick={() => alert("Card clicked")}>
            <C.Section>
              <Text>Click the card, then the button.</Text>
            </C.Section>
            <C.Buttons>
              <IconButton onClick={() => alert("Button clicked")}>
                <IconHeart />
              </IconButton>
            </C.Buttons>
          </C>
        </Case>
        <Case label="disabled">
          <C {...args} size="sm" onClick={() => alert("Card clicked")} disabled>
            <C.Section>
              <Text>Disabled.</Text>
            </C.Section>
          </C>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Content a fixed-width card has to hold. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Card edge cases">
      <Section>
        <Case label="empty">
          <C {...args} size="sm" />
        </Case>
        <Case label="a very long body">
          <C {...args} size="sm">
            <C.Section>
              <Text>{Storybook.longText}</Text>
            </C.Section>
          </C>
        </Case>
        <Case label="a broken image">
          <C {...args} size="sm">
            <C.Image src={Storybook.brokenImageSrc} alt="Missing" />
            <C.Section>
              <Text>The image above did not load.</Text>
            </C.Section>
          </C>
        </Case>
        <Case label="many buttons">
          <C {...args} size="sm">
            <C.Section>
              <Text>Six buttons.</Text>
            </C.Section>
            <C.Buttons>
              {Array.from({ length: 6 }, (_, index) => (
                <IconButton key={index}>
                  <Icon123 />
                </IconButton>
              ))}
            </C.Buttons>
          </C>
        </Case>
        <Case label="non-latin and emoji">
          <C {...args} size="sm">
            <C.Section>
              <Text>{Storybook.awkwardText}</Text>
            </C.Section>
          </C>
        </Case>
      </Section>
    </Showcase>
  ),
};
