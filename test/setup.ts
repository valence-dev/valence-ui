import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, vi } from "vitest";

afterEach(() => cleanup());

beforeAll(() => {
  // useColorScheme() reads matchMedia during render; jsdom does not implement it.
  if (!window.matchMedia) {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    });
  }

  // @floating-ui and useElementSize rely on ResizeObserver.
  if (!globalThis.ResizeObserver) {
    globalThis.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    } as any;
  }

  // motion/react probes these during layout animations.
  if (!Element.prototype.animate) {
    Element.prototype.animate = (() => ({
      cancel: () => {},
      finish: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      finished: Promise.resolve(),
    })) as any;
  }

  // jsdom has no layout engine; give components a deterministic viewport.
  Object.defineProperty(window, "innerWidth", { writable: true, value: 1280 });
  Object.defineProperty(window, "innerHeight", { writable: true, value: 800 });
});
