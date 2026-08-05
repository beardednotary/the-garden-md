import type { ReactNode } from "react";

export function SidebarPanel({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border border-border bg-paper-light p-4 shadow-panel">
      <h2 className="border-b border-border pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">
        {title}
      </h2>
      <div className="mt-3 text-sm leading-6 text-ink">{children}</div>
    </section>
  );
}
