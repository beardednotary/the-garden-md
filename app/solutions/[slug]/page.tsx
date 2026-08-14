import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FieldNote } from "@/components/FieldNote";
import { SidebarPanel } from "@/components/SidebarPanel";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { getSolution, getTool, isDefined, siteUrl, solutions } from "@/lib/content";

export function generateStaticParams() {
  return solutions.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  return solution
    ? { title: solution.name, description: solution.summary, alternates: { canonical: `/solutions/${solution.slug}` } }
    : {};
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  const relatedTools = solution.requiredTools.map((toolSlug) => getTool(toolSlug)).filter(isDefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: solution.name,
    description: solution.summary,
    url: `${siteUrl}/solutions/${solution.slug}`,
    step: solution.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step
    })),
    author: { "@type": "Person", name: "Sam Ellery" },
    publisher: { "@type": "Organization", name: "GardenMD", url: siteUrl }
  };

  const breadcrumbItems = [{ href: "/", label: "Home" }, { href: "/solutions", label: "Solutions" }, { label: solution.name }];
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems, siteUrl);

  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <Breadcrumbs items={breadcrumbItems} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,760px)_320px]">
        <article>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">Solution Guide</p>
          <h1 className="mt-3 font-serif text-4xl text-green-dark">{solution.name}</h1>
          <p className="mt-4 text-lg text-muted">{solution.summary}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <FieldNote title="Difficulty" body={solution.difficulty} />
            <FieldNote title="Time" body={solution.time} />
            <FieldNote title="Cost" body={solution.cost} />
          </div>
          <section className="mt-10 border border-border bg-paper-light p-5 shadow-panel">
            <h2 className="font-serif text-2xl text-green-dark">Steps</h2>
            <ol className="mt-4 space-y-3">
              {solution.steps.map((step, index) => (
                <li key={step}>
                  <span className="font-semibold text-green-dark">{index + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </section>
          {solution.video && (
            <section className="mt-8">
              <YouTubeEmbed video={solution.video} />
            </section>
          )}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </article>
        <aside className="space-y-5">
          <SidebarPanel title="Helpful Tools">
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
          <SidebarPanel title="Helps With">
            <ul className="space-y-2">
              {solution.helpsWith.map((symptom) => (
                <li key={symptom}>
                  <Link href={`/diagnose/${symptom}`} className="underline-offset-4 hover:underline">
                    {symptom.replaceAll("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarPanel>
        </aside>
      </div>
    </div>
  );
}
