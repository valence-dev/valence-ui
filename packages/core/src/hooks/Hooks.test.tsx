import { describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { Providers } from "../../../../test/utils";
import { useDisclosure } from "./UseDisclosure";
import { useControlledList } from "./UseControlledList";
import { useColorScheme } from "./UseColorScheme";
import { useWindowSize } from "./UseWindowSize";
import { useAnimation } from "./UseAnimation";

describe("useDisclosure", () => {
  it("is closed by default", () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.opened).toBe(false);
  });

  it("honours an explicit default value", () => {
    const { result } = renderHook(() => useDisclosure(true));
    expect(result.current.opened).toBe(true);
  });

  it("opens, closes and toggles", () => {
    const { result } = renderHook(() => useDisclosure());

    act(() => result.current.open());
    expect(result.current.opened).toBe(true);

    act(() => result.current.close());
    expect(result.current.opened).toBe(false);

    act(() => result.current.toggle());
    expect(result.current.opened).toBe(true);
  });

  it("is idempotent when opened twice", () => {
    const { result } = renderHook(() => useDisclosure());

    act(() => {
      result.current.open();
      result.current.open();
    });
    expect(result.current.opened).toBe(true);
  });

  it("applies two toggles in one batch independently", () => {
    const { result } = renderHook(() => useDisclosure());

    act(() => {
      result.current.toggle();
      result.current.toggle();
    });
    expect(result.current.opened).toBe(false);
  });

  it("keeps its callbacks stable across renders", () => {
    const { result, rerender } = renderHook(() => useDisclosure());
    const first = result.current;

    act(() => result.current.open());
    rerender();

    expect(result.current.open).toBe(first.open);
    expect(result.current.close).toBe(first.close);
    expect(result.current.toggle).toBe(first.toggle);
    expect(result.current.update).toBe(first.update);
  });

  it("sets an explicit value via update()", () => {
    const { result } = renderHook(() => useDisclosure());

    act(() => result.current.update(true));
    expect(result.current.opened).toBe(true);

    act(() => result.current.update(false));
    expect(result.current.opened).toBe(false);
  });
});

describe("useControlledList", () => {
  it("starts empty by default and seeds from a default value", () => {
    expect(renderHook(() => useControlledList()).result.current.items).toEqual(
      [],
    );
    expect(
      renderHook(() => useControlledList(["a", "b"])).result.current.items,
    ).toEqual(["a", "b"]);
  });

  it("adds and removes items", () => {
    const { result } = renderHook(() => useControlledList<string>());

    act(() => result.current.add("a"));
    expect(result.current.items).toEqual(["a"]);

    act(() => result.current.add("b"));
    expect(result.current.items).toEqual(["a", "b"]);

    act(() => result.current.remove("a"));
    expect(result.current.items).toEqual(["b"]);
  });

  it("removing an absent item is a no-op", () => {
    const { result } = renderHook(() => useControlledList(["a"]));
    act(() => result.current.remove("nope"));
    expect(result.current.items).toEqual(["a"]);
  });

  it("applies two adds in one batch independently", () => {
    const { result } = renderHook(() => useControlledList<string>());

    act(() => {
      result.current.add("a");
      result.current.add("b");
    });
    expect(result.current.items).toEqual(["a", "b"]);
  });

  it("applies two removes in one batch independently", () => {
    const { result } = renderHook(() => useControlledList(["a", "b", "c"]));

    act(() => {
      result.current.remove("a");
      result.current.remove("b");
    });
    expect(result.current.items).toEqual(["c"]);
  });

  it("keeps its mutating callbacks stable across renders", () => {
    const { result } = renderHook(() => useControlledList<string>());
    const first = result.current;

    act(() => result.current.add("a"));

    expect(result.current.add).toBe(first.add);
    expect(result.current.remove).toBe(first.remove);
    expect(result.current.update).toBe(first.update);
    expect(result.current.clear).toBe(first.clear);
  });

  it("replaces the whole list via update() and empties it via clear()", () => {
    const { result } = renderHook(() => useControlledList(["a"]));

    act(() => result.current.update(["x", "y"]));
    expect(result.current.items).toEqual(["x", "y"]);

    act(() => result.current.clear());
    expect(result.current.items).toEqual([]);
  });

  it("reports membership", () => {
    const { result } = renderHook(() => useControlledList(["a"]));
    expect(result.current.includes("a")).toBe(true);
    expect(result.current.includes("b")).toBe(false);
  });
});

describe("useColorScheme", () => {
  const render = (preferredColorScheme?: "light" | "dark" | "system") =>
    renderHook(() => useColorScheme(), {
      wrapper: ({ children }) => (
        <Providers preferredColorScheme={preferredColorScheme}>
          {children}
        </Providers>
      ),
    }).result;

  it("follows the system preference by default", () => {
    const { current } = render();
    expect(current.isFollowingSystem).toBe(true);
    // jsdom reports `prefers-color-scheme: dark` as not matching.
    expect(current.colorScheme).toBe("light");
  });

  it("respects a forced dark preference", () => {
    const { current } = render("dark");
    expect(current.colorScheme).toBe("dark");
    expect(current.isDarkMode).toBe(true);
    expect(current.isLightMode).toBe(false);
    expect(current.isFollowingSystem).toBe(false);
  });

  it("respects a forced light preference", () => {
    const { current } = render("light");
    expect(current.colorScheme).toBe("light");
    expect(current.isLightMode).toBe(true);
  });
});

describe("useWindowSize", () => {
  it("reports the current window dimensions and tracks resizes", () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toBe(window.innerWidth);

    act(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        value: 640,
      });
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.width).toBe(640);
  });

  it("removes its resize listener on unmount", () => {
    const remove = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useWindowSize());

    unmount();
    expect(remove).toHaveBeenCalledWith("resize", expect.any(Function));
    remove.mockRestore();
  });
});

describe("useAnimation", () => {
  it("returns empty variants when nothing is requested", () => {
    const { result } = renderHook(() => useAnimation({}));
    expect(result.current).toEqual({
      initial: {},
      animate: {},
      exit: {},
      whileHover: {},
      whileTap: {},
    });
  });

  it("builds fade variants", () => {
    const { result } = renderHook(() =>
      useAnimation({ transitionAnimation: "fade" }),
    );
    expect(result.current.initial).toEqual({ opacity: 0 });
    expect(result.current.animate).toEqual({ opacity: 1 });
    expect(result.current.exit).toEqual({ opacity: 0 });
  });

  it("merges an array of transition animations", () => {
    const { result } = renderHook(() =>
      useAnimation({ transitionAnimation: ["fade", "grow"] }),
    );
    expect(result.current.initial).toEqual({ opacity: 0, scale: 0.8 });
    expect(result.current.animate).toEqual({ opacity: 1, scale: 1 });
  });

  it("maps directional slides to opposing enter/exit offsets", () => {
    const { result } = renderHook(() =>
      useAnimation({ transitionAnimation: "slide-up" }),
    );
    expect(result.current.initial).toEqual({ y: 10 });
    expect(result.current.animate).toEqual({ y: 0 });
    expect(result.current.exit).toEqual({ y: -10 });
  });

  it("builds hover and tap variants", () => {
    const { result } = renderHook(() =>
      useAnimation({ hoverAnimation: "grow", tapAnimation: "bounce" }),
    );
    expect(result.current.whileHover).toEqual({ scale: 1.1 });
    expect(result.current.whileTap).toEqual({ y: 2 });
  });

  it("merges arrays of hover animations", () => {
    const { result } = renderHook(() =>
      useAnimation({ hoverAnimation: ["grow", "raise"] }),
    );
    expect(result.current.whileHover).toEqual({ scale: 1.1, y: -2 });
  });
});
