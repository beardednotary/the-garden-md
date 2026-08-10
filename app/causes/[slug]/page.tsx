import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContentImage } from "@/components/ContentImage";
import { SidebarPanel } from "@/components/SidebarPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { causes, getCause, getSolution, getSource, getTool, isDefined, siteUrl } from "@/lib/content";

export function generateStaticParams() {
  return causes.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cause = getCause(slug);
  return cause
    ? { title: cause.name, description: cause.description, alternates: { canonical: `/causes/${cause.slug}` } }
    : {};
}

export default async function CausePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cause = getCause(slug);

  if (!cause) {
    notFound();
  }

  const relatedSolutions = cause.fixes.map((solutionSlug) => getSolution(solutionSlug)).filter(isDefined);
  const relatedTools = cause.tools.map((toolSlug) => getTool(toolSlug)).filter(isDefined);
  const relatedSources = cause.sources.map((id) => getSource(id)).filter(isDefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cause.name,
    description: cause.description,
    url: `${siteUrl}/causes/${cause.slug}`,
    author: { "@type": "Person", name: "Sam Ellery" },
    publisher: { "@type": "Organization", name: "GardenMD", url: siteUrl }
  };

  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/causes", label: "Causes" }, { label: cause.name }]} />
      <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,760px)_320px]">
        <article>
          <SectionHeading eyebrow={cause.category} title={cause.name} description={cause.description} />
          {cause.image && (
            <div className="mb-8">
              <ContentImage image={cause.image} />
            </div>
          )}
          <section className="border border-border bg-paper-light p-5 shadow-panel">
            <h2 className="font-serif text-2xl text-green-dark">How to confirm it</h2>
            <ul className="mt-4 space-y-3">
              {cause.confirmationSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>
          <section className="mt-8">
            <SectionHeading eyebrow="Next Steps" title="Fixes connected to this cause" />
            <div className="space-y-4">
              {relatedSolutions.map((solution) => (
                <article key={solution.slug} className="border border-border bg-paper-light p-5 shadow-panel">
                  <h2 className="font-serif text-2xl text-green-dark">
                    <Link href={`/solutions/${solution.slug}`} className="underline-offset-4 hover:underline">
                      {solution.name}
                    </Link>
                  </h2>
                  <p className="mt-2">{solution.summary}</p>
                </article>
              ))}
            </div>
          </section>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </article>
        <aside className="space-y-5">
          <SidebarPanel title="Symptoms Caused">
            <ul className="space-y-2">
              {cause.symptoms.map((symptomSlug) => (
                <li key={symptomSlug}>
                  <Link href={`/diagnose/${symptomSlug}`} className="underline-offset-4 hover:underline">
                    {symptomSlug.replaceAll("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarPanel>
          <SidebarPanel title="Helpful Tools">
            <ul className="space-y-3">
              {relatedTools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className="font-semibold underline-offset-4 hover:underline">
                    {tool.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted">{tool.typicalPrice}</p>
                </li>
              ))}
            </ul>
          </SidebarPanel>
          <SidebarPanel title="Sources">
            <ul className="space-y-3">
              {relatedSources.map((source) => (
                <li key={source.id}>
                  <a href={source.url} className="font-semibold underline-offset-4 hover:underline">
                    {source.organization}
                  </a>
                  <p className="mt-1 text-sm text-muted">{source.topic}</p>
                </li>
              ))}
            </ul>
          </SidebarPanel>
        </aside>
      </div>
    </div>
  );
}
