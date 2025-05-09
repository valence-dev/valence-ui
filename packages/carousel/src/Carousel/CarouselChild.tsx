export type CarouselChildProps = {
  /** Indicates whether this child is nearest to the left of the container  */
  isNearest?: boolean;
  /** Indicates whether this child is the one currently focused  */
  isActive?: boolean;
  /** Indicates whether the parent carousel is being dragged.  */
  isDragging?: boolean;
};
