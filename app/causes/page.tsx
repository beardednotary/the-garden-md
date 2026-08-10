import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { causes } from "@/lib/content";

export const metadata = {
  title: "Causes",
  description: "Common causes behind garden problems, with confirmation steps and the fixes connected to each.",
  alternates: { canonical: "/causes" }
};

export default function CausesIndexPage() {
  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <SectionHeading
        eyebrow="Causes"
        title="Common causes behind garden problems"
        description="Each cause page covers how to confirm it, what it typically affects, and the simplest fix to try first."
      />
      <CardGrid
        items={causes.map((entry) => ({
          href: `/causes/${entry.slug}`,
          title: entry.name,
          description: entry.description,
          meta: entry.category,
          action: "View cause"
        }))}
      />
    </div>
  );
}
