import { ReactNode, useEffect, useState } from "react";
import { AnimationContext } from "./AnimationContext";

export type AnimationSectionProps = {
  children?: ReactNode;

  /** Whether the components rendered in this section's *own* first commit may
   * animate in. `false` by default: a section exists to make a set of
   * components — a page, a tab, a modal's contents — arrive together rather
   * than each popping in on its own.
   *
   * Set it to `true` for a section whose contents should animate as they
   * appear, such as one that is itself mounted in response to a user action.
   * Either way, anything that mounts *later* inside the section animates
   * normally; this prop only governs the first commit.
   */
  initial?: boolean;
};

/** Groups a set of components so they arrive on screen together, without each
 * one playing its own entrance animation.
 *
 * Everything rendered in the section's first commit — at any depth — mounts
 * silently. From then on the section is "open": components that mount inside
 * it during its lifetime animate in as normal.
 *
 * ```tsx
 * <AnimationSection>
 *   <Page />
 * </AnimationSection>
 * ```
 *
 * A section is scoped to its own subtree, so pages, tabs and scenes each get
 * their own. Giving one a `key` that changes re-mounts it, which re-arms the
 * behaviour — `<AnimationSection key={pathname} />` treats every route as a
 * fresh group. Where sections nest, the innermost one wins.
 *
 * `<ValenceProvider />` already wraps its children in a section, so an app
 * that never uses this component still gets a silent first paint with
 * animated later mounts.
 */
export function AnimationSection(props: AnimationSectionProps) {
  const { children, initial = false } = props;

  // Seeded from `initial` rather than branched on later: an `initial` section
  // is simply one that starts out already open. Flips to `true` after this
  // section's first commit — React runs effects bottom-up once the *entire*
  // subtree has rendered, so every descendant's first render observes the
  // pre-flip value no matter how deep it sits.
  const [animate, setAnimate] = useState(initial);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <AnimationContext.Provider value={animate}>
      {children}
    </AnimationContext.Provider>
  );
}
