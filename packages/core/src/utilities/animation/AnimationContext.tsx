import { createContext } from "react";

/** Whether a component mounting *right now* is allowed to play its entrance
 * animation.
 *
 * The rule this encodes, in one sentence: an element animates in only if it
 * mounts into an `<AnimationSection />` that has already rendered at least
 * once. A section flips this to `true` after its own first commit, so the
 * components it renders in that first commit arrive silently — as one group,
 * which is the point — while anything that shows up afterwards during the
 * section's lifetime (a toast, a modal opened by a click, an interactively
 * added list item) animates in normally.
 *
 * The default is `false` rather than `true`: with no section anywhere above
 * it, nothing is granting animation eligibility, so nothing animates in. This
 * is what makes the section the single place responsible for entrances, rather
 * than every component opting itself out. `<ValenceProvider />` renders a
 * section around its children, so an app gets the sensible default (silent
 * first paint, animated later mounts) without doing anything.
 *
 * Lives in its own module — like `ValenceContext` — so `useAnimation` can read
 * it without importing `<AnimationSection />`, which would close a require
 * cycle through the provider.
 */
export const AnimationContext = createContext<boolean>(false);
