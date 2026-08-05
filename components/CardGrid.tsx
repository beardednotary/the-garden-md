import Link from "next/link";

type CardGridProps = {
  items: Array<{
    href: string;
    title: string;
    description: string;
    meta?: string;
    action?: string;
  }>;
};

export function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.href} className="border border-border bg-paper-light p-5 shadow-panel">
          <h3 className="font-serif text-2xl text-green-dark">
            <Link href={item.href} className="underline-offset-4 hover:underline">
              {item.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm uppercase tracking-[0.14em] text-muted">{item.meta}</p>
          <p className="mt-3 text-[15px] leading-7 text-ink">{item.description}</p>
          <Link href={item.href} className="mt-4 inline-block text-sm text-green-dark underline-offset-4 hover:underline">
            {item.action ?? "Read more"}
          </Link>
        </article>
      ))}
    </div>
  );
}
