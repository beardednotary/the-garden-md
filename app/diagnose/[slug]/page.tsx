import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContentImageGallery } from "@/components/ContentImage";
import { FieldNote } from "@/components/FieldNote";
import { QuickTable } from "@/components/QuickTable";
import { SectionHeading } from "@/components/SectionHeading";
import { SidebarPanel } from "@/components/SidebarPanel";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { getCause, getSource, getSymptom, isDefined, siteUrl, symptoms, tools } from "@/lib/content";

export function generateStaticParams() {
  return symptoms.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const symptom = getSymptom(slug);

  if (!symptom) {
    return {};
  }

  return {
    title: symptom.name,
    description: symptom.description,
    alternates: {
      canonical: `/diagnose/${symptom.slug}`
    }
  };
}

export default async function SymptomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const symptom = getSymptom(slug);

  if (!symptom) {
    notFound();
  }

  const likelyCauses = symptom.commonCauses
    .map((entry) => {
      const cause = getCause(entry.slug);
      return cause ? { cause, confidence: entry.confidence } : null;
    })
    .filter(
      (entry): entry is { cause: NonNullable<ReturnType<typeof getCause>>; confidence: number } => entry !== null
    );

  const relevantTools = tools.filter((entry) => symptom.recommendedTools.includes(entry.slug));
  const relatedSources = symptom.sources.map((id) => getSource(id)).filter(isDefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: symptom.questionTitle ?? symptom.name,
        description: symptom.description,
        url: `${siteUrl}/diagnose/${symptom.slug}`,
        author: { "@type": "Person", name: "Sam Ellery" },
        publisher: { "@type": "Organization", name: "GardenMD", url: siteUrl }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: symptom.questionTitle ?? symptom.name,
            acceptedAnswer: { "@type": "Answer", text: symptom.quickAnswer }
          }
        ]
      }
    ]
  };

  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/diagnose", label: "Diagnose" }, { label: symptom.name }]} />
      <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,760px)_320px]">
        <article>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">Diagnostic Guide</p>
          <h1 className="mt-3 font-serif text-4xl text-green-dark md:text-5xl">{symptom.questionTitle ?? symptom.name}</h1>
          <p className="mt-4 text-lg text-muted">{symptom.quickAnswer}</p>
          <p className="mt-4 text-sm text-muted">
            Last reviewed: August 5, 2026 · Sources:{" "}
            {relatedSources.map((source, index) => (
              <span key={source.id}>
                {index > 0 ? ", " : ""}
                {source.organization}
              </span>
            ))}
          </p>

          {symptom.images && symptom.images.length > 0 && (
            <div className="mt-6">
              <ContentImageGallery images={symptom.images} />
            </div>
          )}

          <section className="mt-10">
            <SectionHeading eyebrow="Quick Diagnosis" title="Start with the visible pattern" />
            <QuickTable rows={symptom.patterns} />
          </section>

          <section className="mt-10">
            <FieldNote title="Field Check" body={symptom.fieldCheck} />
            {symptom.video && (
              <div className="mt-4">
                <YouTubeEmbed video={symptom.video} />
              </div>
            )}
          </section>

          <section className="mt-10">
            <SectionHeading
              eyebrow="Do This First"
              title="Simple checks before you buy anything"
              description="Most garden problems have more than one possible cause. Start with the simplest explanation."
            />
            <ul className="space-y-3 border border-border bg-paper-light p-5 text-[15px] shadow-panel">
              {symptom.firstSteps.map((step) => (
                <li key={step} className="border-b border-border pb-3 last:border-b-0 last:pb-0">
                  {step}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <SectionHeading eyebrow="Likely Causes" title="Most likely causes to check first" />
            <div className="space-y-4">
              {likelyCauses.map(({ cause, confidence }) => (
                <article key={cause.slug} className="border border-border bg-paper-light p-5 shadow-panel">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="font-serif text-2xl text-green-dark">
                      <Link href={`/causes/${cause.slug}`} className="underline-offset-4 hover:underline">
                        {cause.name}
                      </Link>
                    </h2>
                    <span className="text-sm text-muted">Confidence: {confidence}%</span>
                  </div>
                  <p className="mt-3 text-[15px] leading-7">{cause.description}</p>
                  <ul className="mt-4 space-y-2 text-[15px]">
                    {cause.confirmationSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <SectionHeading eyebrow="Sources" title="Reference material used on this page" />
            <div className="space-y-4">
              {relatedSources.map((source) => (
                <article key={source.id} className="border border-border bg-paper-light p-5 shadow-panel">
                  <h2 className="font-serif text-2xl text-green-dark">{source.organization}</h2>
                  <p className="mt-2 text-[15px]">{source.topic}</p>
                  <p className="mt-1 text-sm text-muted">Publication date: {source.publicationDate}</p>
                  <a href={source.url} className="mt-3 inline-block text-sm text-green-dark underline-offset-4 hover:underline">
                    Visit source
                  </a>
                </article>
              ))}
            </div>
          </section>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </article>

        <aside className="space-y-5">
          <SidebarPanel title="At a Glance">
            <p>
              <strong>Body area:</strong> {symptom.bodyArea}
            </p>
            <p>
              <strong>Urgency:</strong> {symptom.urgency}
            </p>
            <p>
              <strong>Aliases:</strong> {symptom.aliases.join(", ")}
            </p>
          </SidebarPanel>
          <SidebarPanel title="Helpful Tools">
            <ul className="space-y-3">
              {relevantTools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className="font-semibold underline-offset-4 hover:underline">
                    {tool.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted">{tool.description}</p>
                  <a
                    href={tool.affiliateUrl}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="mt-1 inline-block text-sm text-green-dark underline-offset-4 hover:underline"
                  >
                    Check price on Amazon
                  </a>
                </li>
              ))}
            </ul>
          </SidebarPanel>
          <SidebarPanel title="Related Symptoms">
            <ul className="space-y-2">
              {symptom.relatedSymptoms.map((relatedSlug) => (
                <li key={relatedSlug}>
                  <Link href={`/diagnose/${relatedSlug}`} className="underline-offset-4 hover:underline">
                    {relatedSlug.replaceAll("-", " ")}
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
