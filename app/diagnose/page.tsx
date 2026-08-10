import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { symptoms } from "@/lib/content";

export const metadata = {
  title: "Diagnose",
  description: "Browse common garden symptoms and narrow down the likely cause before you treat, water, or buy anything.",
  alternates: { canonical: "/diagnose" }
};

export default function DiagnoseIndexPage() {
  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <SectionHeading
        eyebrow="Diagnose"
        title="Browse common garden symptoms"
        description="Start with what you can see. Symptom pages narrow the likely causes before you change watering, buy products, or treat for pests."
      />
      <CardGrid
        items={symptoms.map((entry) => ({
          href: `/diagnose/${entry.slug}`,
          title: entry.name,
          description: entry.quickAnswer,
          meta: `${entry.bodyArea} · ${entry.urgency}`,
          action: "Open diagnosis"
        }))}
      />
    </div>
  );
}
