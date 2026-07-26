import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { IconAlertCircle } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
} from "../../../../storybook";
import { Button } from "../../buttons/TextButton";
import { Alert as A, AlertType } from "./Alert";

const ALERT_TYPES: AlertType[] = ["info", "warning", "error", "success"];

const meta: Meta<typeof A> = {
  component: A,
  title: "Core/Display/Alert",
  argTypes: {
    ...sizingControls,
    show: {
      control: { type: "boolean" },
      table: { category: "State" },
    },
  },
  args: {
    alert: {
      title: "Alert Title",
      type: "info",
      message: "Alert Message",
    },
    show: true,
  },
};
export default meta;
type Story = StoryObj<typeof A>;

/** One alert, driven entirely by the controls panel. */
export const Playground: Story = {};

/**
 * Every alert type.
 *
 * Each type supplies its own icon and colour, so this is the case that catches
 * a type whose colour no longer reads against the material.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Alert types"
      description="`type` picks both the icon and the accent colour. An error must be unmistakably an error at a glance."
    >
      <Matrix title="type" values={ALERT_TYPES} column>
        {(type) => (
          <A {...args} alert={{ ...args.alert, type, title: `${type} alert` }} />
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every size. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Alert sizes">
      <Matrix title="size" values={Storybook.componentSizes} column>
        {(size) => <A {...args} size={size} />}
      </Matrix>
    </Showcase>
  ),
};

/** Every material, at every type. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Alert materials"
      description="The type colour is drawn on top of the material, so every combination has to keep its contrast — this is the grid where that fails first."
    >
      {ALERT_TYPES.map((type) => (
        <Section key={type} title={type} column>
          {allMaterials().map(([name, material]) => (
            <Case key={name} label={name}>
              <A
                {...args}
                material={material}
                alert={{ ...args.alert, type, title: `${type} · ${name}` }}
              />
            </Case>
          ))}
        </Section>
      ))}
    </Showcase>
  ),
};

/** The parts of the content that are optional. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Alert content">
      <Section column>
        <Case label="title + message + custom icon">
          <A
            {...args}
            alert={{ ...args.alert, icon: <IconAlertCircle /> }}
          />
        </Case>
        <Case label="title only">
          <A {...args} alert={{ title: "Just a title", type: "info" }} />
        </Case>
        <Case label="very long message">
          <A
            {...args}
            alert={{ ...args.alert, message: Storybook.longText }}
          />
        </Case>
        <Case label="very long title">
          <A {...args} alert={{ ...args.alert, title: Storybook.longText }} />
        </Case>
        <Case label="non-latin and emoji">
          <A
            {...args}
            alert={{
              ...args.alert,
              title: Storybook.awkwardText,
              message: Storybook.awkwardText,
            }}
          />
        </Case>
      </Section>
    </Showcase>
  ),
};

/**
 * Mounting and unmounting.
 *
 * `show` is animated, so the interesting case is the transition rather than
 * either end of it — this one has to be driven by hand.
 */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const [show, setShow] = useState(true);

    return (
      <Showcase
        title="Show and hide"
        description="Toggle the alert and watch the transition. Nothing below it should jump when it unmounts."
      >
        <Section column>
          <Case>
            <Button onClick={() => setShow((prev) => !prev)}>
              {show ? "Hide" : "Show"}
            </Button>
          </Case>
          <Case label={`show={${show}}`}>
            <A {...args} show={show} />
          </Case>
          <Case label="always hidden" note="Must occupy no space at all.">
            <A {...args} show={false} />
          </Case>
        </Section>
      </Showcase>
    );
  },
};
