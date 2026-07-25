import { describe, expect, it, vi } from "vitest";
import { Disclosure } from "../../hooks";
import { renderWithValence, screen } from "../../../../../test/utils";
import { Modal } from "./Modal";
import { Tooltip } from "./Tooltip";
import { BottomSheet } from "./sheets/BottomSheet";
import { SideSheet } from "./sheets/SideSheet";

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
});
