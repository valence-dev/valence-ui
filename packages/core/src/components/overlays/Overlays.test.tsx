import { describe, expect, it, vi } from "vitest";
import { useState } from "react";
import { Disclosure } from "../../hooks";
import { renderWithValence, screen } from "../../../../../test/utils";
import { Modal } from "./Modal";
import { Tooltip } from "./Tooltip";
import { BottomSheet } from "./sheets/BottomSheet";
import { SideSheet } from "./sheets/SideSheet";
import { Text } from "../display/Text";

/** An overlay's contents mount in the first commit of the section it puts
 * around them, so they arrive with it rather than each playing their own
 * entrance (ISSUE-47). jsdom has no Motion runtime to drive an animation
 * forward, so a `fade` that *was* allowed to play stays at its `initial`
 * `opacity: 0`, while a suppressed one mounts straight into `animate`.
 */
function expectArrivedWithOverlay(text: string) {
  expect(screen.getByText(text)).toHaveStyle({ opacity: "1" });
}

/** A disclosure stub whose state is fixed, so overlays render deterministically. */
function disclosureOf(opened: boolean, close = vi.fn()): Disclosure {
  return {
    opened,
    open: vi.fn(),
    close,
    toggle: vi.fn(),
    update: vi.fn(),
  };
}

describe("Modal", () => {
  it("renders nothing while closed", () => {
    renderWithValence(
      <Modal disclosure={disclosureOf(false)} title="Settings">
        <span>body</span>
      </Modal>,
    );

    expect(screen.queryByText("body")).not.toBeInTheDocument();
    expect(screen.queryByText("Settings")).not.toBeInTheDocument();
  });

  it("renders its title and body while open", () => {
    renderWithValence(
      <Modal disclosure={disclosureOf(true)} title="Settings">
        <span>body</span>
      </Modal>,
    );

    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("body")).toBeInTheDocument();
  });

  it("renders the title as a level-2 heading", () => {
    renderWithValence(
      <Modal disclosure={disclosureOf(true)} title="Settings">
        <span>body</span>
      </Modal>,
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "Settings" }),
    ).toBeInTheDocument();
  });

  it("closes when the header close button is pressed", async () => {
    const close = vi.fn();
    const { user } = renderWithValence(
      <Modal disclosure={disclosureOf(true, close)} title="Settings">
        <span>body</span>
      </Modal>,
    );

    await user.click(screen.getByRole("button"));
    expect(close).toHaveBeenCalled();
  });

  it("closes on Escape when closeOnEscape is enabled", async () => {
    const close = vi.fn();
    const { user } = renderWithValence(
      <Modal disclosure={disclosureOf(true, close)} title="Settings">
        <span>body</span>
      </Modal>,
    );

    await user.keyboard("{Escape}");
    expect(close).toHaveBeenCalled();
  });

  it("ignores Escape when closeOnEscape is disabled", async () => {
    const close = vi.fn();
    const { user } = renderWithValence(
      <Modal
        disclosure={disclosureOf(true, close)}
        title="Settings"
        closeOnEscape={false}
      >
        <span>body</span>
      </Modal>,
    );

    await user.keyboard("{Escape}");
    expect(close).not.toHaveBeenCalled();
  });

  it("brings its contents in with it rather than animating each one (ISSUE-47)", () => {
    renderWithValence(
      <Modal disclosure={disclosureOf(true)} title="Settings">
        <Text animation="fade">body</Text>
      </Modal>,
    );

    expectArrivedWithOverlay("body");
  });

  it("animates content mounted after it opened", async () => {
    function Harness() {
      const [show, setShow] = useState(false);
      return (
        <Modal disclosure={disclosureOf(true)} title="Settings">
          <button onClick={() => setShow(true)}>reveal</button>
          {show && <Text animation="fade">later</Text>}
        </Modal>
      );
    }

    const { user } = renderWithValence(<Harness />);
    await user.click(screen.getByRole("button", { name: "reveal" }));

    // The modal's section has been open since it mounted, so this is a
    // genuine later entrance and still plays.
    expect(screen.getByText("later")).toHaveStyle({ opacity: "0" });
  });

  it("accepts a custom header renderer", () => {
    renderWithValence(
      <Modal
        disclosure={disclosureOf(true)}
        title="Settings"
        header={({ title }) => <h3>custom {title}</h3>}
      >
        <span>body</span>
      </Modal>,
    );

    expect(screen.getByText("custom Settings")).toBeInTheDocument();
  });
});

describe("Tooltip", () => {
  it("renders only the trigger while closed", () => {
    renderWithValence(
      <Tooltip disclosure={disclosureOf(false)}>
        <Tooltip.Trigger>
          <button>trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content>hint</Tooltip.Content>
      </Tooltip>,
    );

    expect(screen.getByText("trigger")).toBeInTheDocument();
    expect(screen.queryByText("hint")).not.toBeInTheDocument();
  });

  it("renders its content while open", () => {
    renderWithValence(
      <Tooltip disclosure={disclosureOf(true)}>
        <Tooltip.Trigger>
          <button>trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content>hint</Tooltip.Content>
      </Tooltip>,
    );

    expect(screen.getByText("hint")).toBeInTheDocument();
  });

  it("accepts arbitrary nodes as content", () => {
    renderWithValence(
      <Tooltip disclosure={disclosureOf(true)}>
        <Tooltip.Trigger>
          <button>trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <span data-testid="rich">rich content</span>
        </Tooltip.Content>
      </Tooltip>,
    );

    expect(screen.getByTestId("rich")).toBeInTheDocument();
  });

  it("brings its contents in with it rather than animating each one (ISSUE-47)", () => {
    renderWithValence(
      <Tooltip disclosure={disclosureOf(true)}>
        <Tooltip.Trigger>
          <button>trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <Text animation="fade">hint</Text>
        </Tooltip.Content>
      </Tooltip>,
    );

    expectArrivedWithOverlay("hint");
  });

  it("throws when a sub-component is used outside a Tooltip", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() =>
      renderWithValence(<Tooltip.Content>hint</Tooltip.Content>),
    ).toThrow(/must be wrapped in <Tooltip \/>/);

    consoleError.mockRestore();
  });
});

describe("BottomSheet", () => {
  it("renders nothing while closed", () => {
    renderWithValence(
      <BottomSheet disclosure={disclosureOf(false)} title="Filters">
        <span>body</span>
      </BottomSheet>,
    );
    expect(screen.queryByText("body")).not.toBeInTheDocument();
  });

  it("renders its title and body while open", () => {
    renderWithValence(
      <BottomSheet disclosure={disclosureOf(true)} title="Filters">
        <span>body</span>
      </BottomSheet>,
    );

    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByText("body")).toBeInTheDocument();
  });

  it("brings its contents in with it rather than animating each one (ISSUE-47)", () => {
    renderWithValence(
      <BottomSheet disclosure={disclosureOf(true)} title="Filters">
        <Text animation="fade">body</Text>
      </BottomSheet>,
    );

    expectArrivedWithOverlay("body");
  });
});

describe("SideSheet", () => {
  it("renders nothing while closed", () => {
    renderWithValence(
      <SideSheet disclosure={disclosureOf(false)} title="Menu">
        <span>body</span>
      </SideSheet>,
    );
    expect(screen.queryByText("body")).not.toBeInTheDocument();
  });

  it("renders its title and body while open", () => {
    renderWithValence(
      <SideSheet disclosure={disclosureOf(true)} title="Menu">
        <span>body</span>
      </SideSheet>,
    );

    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("body")).toBeInTheDocument();
  });

  it("brings its contents in with it rather than animating each one (ISSUE-47)", () => {
    renderWithValence(
      <SideSheet disclosure={disclosureOf(true)} title="Menu">
        <Text animation="fade">body</Text>
      </SideSheet>,
    );

    expectArrivedWithOverlay("body");
  });
});
