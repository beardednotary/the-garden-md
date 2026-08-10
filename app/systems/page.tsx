import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { systems } from "@/lib/content";

export const metadata = {
  title: "Systems",
  description: "Watering, irrigation, and container setup guides that bridge the gap between symptoms and ongoing garden decisions.",
  alternates: { canonical: "/systems" }
};

export default function SystemsIndexPage() {
  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <SectionHeading
        eyebrow="Systems"
        title="Watering, beds, and practical setup guides"
        description="Systems pages bridge the gap between symptoms and ongoing garden decisions."
      />
      <CardGrid
        items={systems.map((entry) => ({
          href: `/systems/${entry.slug}`,
          title: entry.name,
          description: entry.summary,
          meta: "System guide",
          action: "Read guide"
        }))}
      />
    </div>
  );
}
