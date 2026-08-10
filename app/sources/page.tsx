import { sources } from "@/lib/content";

export const metadata = {
  title: "Sources",
  description: "The university extension offices and research organizations cited throughout GardenMD.",
  alternates: { canonical: "/sources" }
};

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-shell px-4 py-10 md:px-6">
      <h1 className="font-serif text-4xl text-green-dark">Sources</h1>
      <div className="mt-8 space-y-4">
        {sources.map((source) => (
          <article key={source.id} className="border border-border bg-paper-light p-5 shadow-panel">
            <h2 className="font-serif text-2xl text-green-dark">{source.organization}</h2>
            <p className="mt-2">{source.topic}</p>
            <p className="mt-1 text-sm text-muted">Publication date: {source.publicationDate}</p>
            <a href={source.url} className="mt-3 inline-block underline-offset-4 hover:underline">
              Visit source
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
