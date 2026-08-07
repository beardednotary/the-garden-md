import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SidebarPanel } from "@/components/SidebarPanel";
import { getSystem, getTool, isDefined, siteUrl, systems } from "@/lib/content";

export function generateStaticParams() {
  return systems.map((entry) => ({ slug: entry.slug }));
}

export default async function SystemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const system = getSystem(slug);

  if (!system) {
    notFound();
  }

  const relatedTools = system.relatedTools.map((toolSlug) => getTool(toolSlug)).filter(isDefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: system.name,
    description: system.summary,
    url: `${siteUrl}/systems/${system.slug}`,
    author: { "@type": "Person", name: "Sam Ellery" },
    publisher: { "@type": "Organization", name: "GardenMD", url: siteUrl }
  };

  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/systems", label: "Systems" }, { label: system.name }]} />
      <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,760px)_320px]">
        <article className="border border-border bg-paper-light p-6 shadow-panel">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">System Guide</p>
          <h1 className="mt-3 font-serif text-4xl text-green-dark">{system.name}</h1>
          <p className="mt-4 text-lg text-muted">{system.summary}</p>
          <div className="mt-8">
            <h2 className="font-serif text-2xl text-green-dark">Best for</h2>
            <ul className="mt-4 space-y-3">
              {system.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="font-serif text-2xl text-green-dark">Watch for</h2>
            <ul className="mt-4 space-y-3">
              {system.watchFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </article>
        <aside className="space-y-5">
          <SidebarPanel title="Related Tools">
            <ul className="space-y-3">
              {relatedTools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className="font-semibold underline-offset-4 hover:underline">
                    {tool.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted">{tool.description}</p>
                </li>
              ))}
            </ul>
          </SidebarPanel>
        </aside>
      </div>
    </div>
  );
}
