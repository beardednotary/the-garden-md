import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { plants } from "@/lib/content";

export const metadata = {
  title: "Plants",
  description: "Common problems and watering systems organized by plant, from tomatoes to houseplants.",
  alternates: { canonical: "/plants" }
};

export default function PlantsIndexPage() {
  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <SectionHeading
        eyebrow="Plants"
        title="Common problems by plant"
        description="Already know what you're growing? Jump straight to the problems and watering systems most relevant to it."
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
