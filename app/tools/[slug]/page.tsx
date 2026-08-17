import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AffiliateButton } from "@/components/AffiliateButton";
import { FieldNote } from "@/components/FieldNote";
import { SidebarPanel } from "@/components/SidebarPanel";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { tools, getTool, getSource, isDefined, siteUrl } from "@/lib/content";

export function generateStaticParams() {
  return tools.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  return tool
    ? { title: tool.name, description: tool.description, alternates: { canonical: `/tools/${tool.slug}` } }
    : {};
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  const breadcrumbItems = [{ href: "/", label: "Home" }, { href: "/tools", label: "Tools" }, { label: tool.name }];
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems, siteUrl);
  const relatedSources = (tool.sources ?? []).map((id) => getSource(id)).filter(isDefined);

  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <Breadcrumbs items={breadcrumbItems} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article className="grid gap-10 lg:grid-cols-[minmax(0,760px)_320px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">{tool.category}</p>
          <h1 className="mt-3 font-serif text-4xl text-green-dark">{tool.name}</h1>
          <p className="mt-4 text-lg text-muted">{tool.description}</p>
          <section className="mt-8 grid gap-4 md:grid-cols-2">
            <FieldNote title="Typical Price" body={tool.typicalPrice} />
            <FieldNote title="Best Use" body={tool.useCases[0]} />
          </section>
          <section className="mt-6 border border-border bg-paper-light p-5 shadow-panel">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">Our Pick</div>
            <p className="mt-2 text-lg">{tool.featuredProduct}</p>
            <div className="mt-4">
              <AffiliateButton href={tool.affiliateUrl} />
            </div>
            <p className="mt-3 text-xs text-muted">
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

          {tool.context && (
            <section className="mt-8 border border-border bg-paper-light p-5 shadow-panel">
              <h2 className="font-serif text-2xl text-green-dark">Why this matters</h2>
              <p className="mt-3 text-[15px] leading-7">{tool.context}</p>
              {relatedSources.length > 0 && (
                <p className="mt-4 text-sm text-muted">
                  Source:{" "}
                  {relatedSources.map((source, index) => (
                    <span key={source.id}>
                      {index > 0 ? ", " : ""}
                      <a href={source.url} className="underline-offset-4 hover:underline">
                        {source.organization}
                      </a>
                    </span>
                  ))}
                </p>
              )}
            </section>
          )}
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
          {tool.relatedContent && tool.relatedContent.length > 0 && (
            <SidebarPanel title="Related Reading">
              <ul className="space-y-2">
                {tool.relatedContent.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="underline-offset-4 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SidebarPanel>
          )}
        </aside>
      </article>
    </div>
  );
}
