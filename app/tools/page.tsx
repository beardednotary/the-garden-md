import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { tools } from "@/lib/content";

export const metadata = {
  title: "Tools",
  description: "Garden tools and equipment notes, focused on what's useful, what to look for, and when you don't need to buy anything.",
  alternates: { canonical: "/tools" }
};

export default function ToolsIndexPage() {
  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <SectionHeading
        eyebrow="Tools"
        title="Tools that solve a specific garden problem"
        description="These notes focus on what a tool is useful for, what to look for, and when you probably do not need to buy it."
      />
      <CardGrid
        items={tools.map((entry) => ({
          href: `/tools/${entry.slug}`,
          title: entry.name,
          description: entry.description,
          meta: `${entry.category} · ${entry.typicalPrice}`,
          action: "View tool notes"
        }))}
      />
    </div>
  );
}
