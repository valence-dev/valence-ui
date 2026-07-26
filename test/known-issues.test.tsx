/**
 * Executable bug catalogue for the V4 release.
 *
 * Every case below uses `it.fails`, which passes while the described bug is
 * still present and FAILS once the bug is fixed. That is deliberate: when one
 * of these starts failing, delete it here and promote it into the real suite.
 *
 * Each case maps to an ISSUE id in docs/V4-RELEASE-FIXES.md.
 */
import { describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { renderWithValence, screen } from "./utils";
import { useValence } from "../packages/core/src/ValenceProvider";
import { Providers } from "./utils";
import {
  DEFAULT_PALETTE,
  Color,
  useColors,
} from "../packages/core/src/utilities/color";
import { SolidMaterial } from "../packages/core/src/utilities/materials/SolidMaterial";
import { useDisclosure } from "../packages/core/src/hooks/UseDisclosure";
import { useControlledList } from "../packages/core/src/hooks/UseControlledList";
import { PillSelector } from "../packages/core/src/components/inputs/PillSelector";
import { InputContainer } from "../packages/core/src/components/inputs/InputContainer";
import { Icon } from "../packages/core/src/components/display/Icon";

describe("ISSUE-03: custom colors replace the default palette", () => {
  it.fails("custom colors are appended to the default palette", () => {
    const brand: Color = {
      key: "brand",
      default: {
        base: "#123456",
        opacity: { weak: "20", medium: "40", strong: "80" },
      },
    };

    const { result } = renderHook(() => useValence(), {
      wrapper: ({ children }) => (
        <Providers colors={[brand]}>{children}</Providers>
      ),
    });

    expect(result.current.colors).toHaveLength(DEFAULT_PALETTE.length + 1);
    expect(result.current.colors.find((c) => c.key === "black")).toBeDefined();
  });
});

describe("ISSUE-06: components silently drop their remaining props", () => {
  it.fails("Slider forwards `id` to the DOM", () => {
    const { container } = renderWithValence(
      <Slider value={50} setValue={() => {}} id="volume" />,
    );
    expect(container.querySelector("#volume")).toBeInTheDocument();
  });

  it.fails("Switch honours an explicit width", () => {
    renderWithValence(<Switch value={false} setValue={() => {}} width={200} />);
    expect(getComputedStyle(screen.getByRole("button")).width).toBe("200px");
  });
});

describe("ISSUE-04: NumberInput produces NaN", () => {
  it.fails("clearing a NumberInput does not emit NaN", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <NumberInput value={5} setValue={setValue} aria-label="qty" />,
    );

    await user.clear(screen.getByLabelText("qty"));

    for (const call of setValue.mock.calls) {
      expect(Number.isNaN(call[0])).toBe(false);
    }
  });
});

describe("ISSUE-05: SelectInput matches options by reference only", () => {
  const options = [
    { value: 1, label: "One" },
    { value: 2, label: "Two" },
  ];

  it.fails("a structurally equal value still resolves to its option", () => {
    // findIndex uses ===, so a value rebuilt from state/JSON yields -1, and
    // options[-1].label then throws.
    renderWithValence(
      <SelectInput
        value={{ value: 2, label: "Two" }}
        setValue={() => {}}
        options={options}
      />,
    );

    expect(screen.getByText("Two")).toBeInTheDocument();
  });

  it.fails("the icon of the first option is used when it is selected", () => {
    const withIcons = [
      { value: 1, label: "One", icon: <span data-testid="opt-icon" /> },
      { value: 2, label: "Two" },
    ];

    renderWithValence(
      <SelectInput
        value={withIcons[0]}
        setValue={() => {}}
        options={withIcons}
      />,
    );

    // `selected ? ...` treats index 0 as falsy, so the option icon is dropped.
    expect(screen.getByTestId("opt-icon")).toBeInTheDocument();
  });
});

describe("ISSUE-07: SolidMaterial omits scrollbar styling", () => {
  it.fails(
    "SolidMaterial includes scrollbar rules like every other material",
    () => {
      const { result } = renderHook(
        () => ({ valence: useValence(), colors: useColors() }),
        { wrapper: ({ children }) => <Providers>{children}</Providers> },
      );

      const styles = new SolidMaterial().getStyles(
        result.current.valence,
        result.current.colors,
      );

      expect(styles["&::-webkit-scrollbar-thumb"]).toBeDefined();
    },
  );
});

describe("ISSUE-08: hooks update state from stale closures", () => {
  it.fails("two toggles in one batch return to the original value", () => {
    const { result } = renderHook(() => useDisclosure());

    act(() => {
      result.current.toggle();
      result.current.toggle();
    });

    expect(result.current.opened).toBe(false);
  });

  it.fails("two adds in one batch append both items", () => {
    const { result } = renderHook(() => useControlledList<string>());

    act(() => {
      result.current.add("a");
      result.current.add("b");
    });

    expect(result.current.items).toEqual(["a", "b"]);
  });
});

describe("ISSUE-09: PillSelector ignores maxSelectable when clicking pills", () => {
  it.fails("selecting past maxSelectable is rejected", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <PillSelector
        value={["alpha"]}
        setValue={setValue}
        pills={["alpha", "beta"]}
        maxSelectable={1}
      />,
    );

    await user.click(screen.getByText("beta"));
    expect(setValue).not.toHaveBeenCalled();
  });
});

describe("ISSUE-10: a disabled InputContainer still takes focus", () => {
  it.fails(
    "clicking a disabled container does not focus its input",
    async () => {
      function Harness() {
        const ref = { current: null as HTMLInputElement | null };
        return (
          <InputContainer disabled inputRef={ref}>
            <input
              aria-label="field"
              ref={(n) => {
                ref.current = n;
              }}
            />
          </InputContainer>
        );
      }

      const { user, container } = renderWithValence(<Harness />);
      await user.click(container.firstElementChild!);

      expect(screen.getByLabelText("field")).not.toHaveFocus();
    },
  );
});

describe("ISSUE-11: Icon assumes its children are elements", () => {
  it.fails("Icon tolerates a plain string child", () => {
    renderWithValence(<Icon>not an element</Icon>);
    expect(screen.getByText("not an element")).toBeInTheDocument();
  });
});
