import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AffiliateButton } from "@/components/AffiliateButton";
import { FieldNote } from "@/components/FieldNote";
import { tools, getTool } from "@/lib/content";

export function generateStaticParams() {
  return tools.map((entry) => ({ slug: entry.slug }));
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/tools", label: "Tools" }, { label: tool.name }]} />
      <article className="grid gap-10 lg:grid-cols-[minmax(0,760px)_320px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">{tool.category}</p>
          <h1 className="mt-3 font-serif text-4xl text-green-dark">{tool.name}</h1>
          <p className="mt-4 text-lg text-muted">{tool.description}</p>
          <section className="mt-8 grid gap-4 md:grid-cols-2">
            <FieldNote title="Typical Price" body={tool.typicalPrice} />
            <FieldNote title="Best Use" body={tool.useCases[0]} />
          </section>
          <section className="mt-6">
            <AffiliateButton href={tool.affiliateUrl} />
            <p className="mt-2 text-xs text-muted">
              As an Amazon Associate we earn from qualifying purchases. See our{" "}
              <Link href="/affiliate-disclosure" className="underline-offset-4 hover:underline">
                affiliate disclosure
              </Link>
              .
            </p>
          </section>
          <section className="mt-8 border border-border bg-paper-light p-5 shadow-panel">
            <h2 className="font-serif text-2xl text-green-dark">What to look for</h2>
            <ul className="mt-4 space-y-3">
              {tool.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        </div>
        <aside className="space-y-5">
          <section className="border border-border bg-paper-light p-4 shadow-panel">
            <h2 className="border-b border-border pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">
              Works For
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {tool.worksFor.map((item) => (
                <li key={item}>{item.replaceAll("-", " ")}</li>
              ))}
            </ul>
          </section>
          <section className="border border-border bg-paper-light p-4 shadow-panel">
            <h2 className="border-b border-border pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">
              Avoid If
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {tool.avoidIf.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </aside>
      </article>
    </div>
  );
}
