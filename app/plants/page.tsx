import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { plants } from "@/lib/content";

export default function PlantsIndexPage() {
  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <SectionHeading
        eyebrow="Plants"
        title="Plant pages stay secondary at launch"
        description="Plants help with filtering, breadcrumbs, and future expansion, but the diagnostic pages stay primary."
      />
      <CardGrid
        items={plants.map((entry) => ({
          href: `/plants/${entry.slug}`,
          title: entry.name,
          description: entry.summary,
          meta: `${entry.season} · ${entry.difficulty}`,
          action: "Open plant page"
        }))}
      />
    </div>
  );
}
