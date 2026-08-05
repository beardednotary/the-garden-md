import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { tools } from "@/lib/content";

export default function ToolsIndexPage() {
  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <SectionHeading
        eyebrow="Tools"
        title="A restrained tool catalog, not a review dump"
        description="Tool pages explain what a product is useful for, what to look for, and when not to buy it."
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
