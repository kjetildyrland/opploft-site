import * as React from "react";

import { cn } from "@/lib/utils";

/** Centered content column, ~1060px max, with fluid side gutters. */
export function Container({
  className,
  children,
}: React.ComponentProps<"div">) {
  return <div className={cn("site-container", className)}>{children}</div>;
}

type SectionProps = React.ComponentProps<"section"> & {
  /** Muted alternate background for rhythm between sections. */
  alt?: boolean;
};

/**
 * A full-width page section: hairline top border, generous fluid vertical
 * padding, and its content wrapped in the shared container.
 */
export function Section({
  alt = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "border-t border-border py-[var(--pad-y)]",
        alt && "bg-muted",
        className,
      )}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
