// Pulls jest-dom's `declare module "vitest"` augmentation into the program of
// every test that imports this file, so matchers like `toBeInTheDocument` type
// correctly regardless of which tsconfig an editor resolves the test against.
import "@testing-library/jest-dom/vitest";

import { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  ValenceProvider,
  ValenceProviderProps,
} from "../packages/core/src/ValenceProvider";

/** Wraps children in a ValenceProvider so components can read theme context. */
export function Providers(
  props: { children?: ReactNode } & Omit<ValenceProviderProps, "children">,
) {
  const { children, ...rest } = props;
  return <ValenceProvider {...rest}>{children}</ValenceProvider>;
}

export type RenderWithValenceOptions = Omit<RenderOptions, "wrapper"> & {
  /** Props forwarded to the wrapping `ValenceProvider`. */
  providerProps?: Omit<ValenceProviderProps, "children">;
};

/**
 * Renders `ui` inside a `ValenceProvider` and returns the usual Testing
 * Library result plus a pre-configured `user-event` instance.
 */
export function renderWithValence(
  ui: ReactElement,
  options: RenderWithValenceOptions = {},
) {
  const { providerProps, ...renderOptions } = options;

  const result = render(ui, {
    wrapper: ({ children }) => (
      <Providers {...providerProps}>{children}</Providers>
    ),
    ...renderOptions,
  });

  return { ...result, user: userEvent.setup() };
}

/** Sets the reported viewport width and dispatches a resize event. */
export function setViewportWidth(width: number) {
  Object.defineProperty(window, "innerWidth", { writable: true, value: width });
  window.dispatchEvent(new Event("resize"));
}

export * from "@testing-library/react";
export { userEvent };
