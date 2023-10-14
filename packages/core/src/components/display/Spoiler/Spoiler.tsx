import { motion } from "framer-motion";
import { GenericProps } from "@valence-ui/utils";

export type SpoilerProps = GenericProps & {
  /** Whether to show or hide the spoiler content. Defaults to `true`. */
  show?: boolean;
}

/** A simple wrapper component used to show or hide content at will. */
export function Spoiler(props: SpoilerProps) { 

  const { 
    show = true,
    id,
    style,
    children,
  } = props;

  return ( 
    <motion.div
      id={id}
      animate={{ height: show ? "auto" : 0 }}
      style={{
        overflow: "hidden",
        ...style
      }}
    >
      {children}
    </motion.div>
  )
}