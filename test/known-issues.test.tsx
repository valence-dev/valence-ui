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
import { useDisclosure } from "../packages/core/src/hooks/UseDisclosure";
import { useControlledList } from "../packages/core/src/hooks/UseControlledList";
import { PillSelector } from "../packages/core/src/components/inputs/PillSelector";
import { Icon } from "../packages/core/src/components/display/Icon";

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

describe("ISSUE-11: Icon assumes its children are elements", () => {
  it.fails("Icon tolerates a plain string child", () => {
    renderWithValence(<Icon>not an element</Icon>);
    expect(screen.getByText("not an element")).toBeInTheDocument();
  });
});
