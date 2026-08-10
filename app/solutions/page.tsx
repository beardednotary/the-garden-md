import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { solutions } from "@/lib/content";

export const metadata = {
  title: "Solutions",
  description: "Fixes for common garden problems, ranked by difficulty, time, and cost.",
  alternates: { canonical: "/solutions" }
};

export default function SolutionsIndexPage() {
  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <SectionHeading
        eyebrow="Solutions"
        title="Fixes, ranked by how simple they are"
        description="Each solution lists difficulty, time, and cost up front, along with the tools it actually requires."
      />
      <CardGrid
        items={solutions.map((entry) => ({
          href: `/solutions/${entry.slug}`,
          title: entry.name,
          description: entry.summary,
          meta: `${entry.difficulty} · ${entry.cost}`,
          action: "View fix"
        }))}
      />
    </div>
  );
}
