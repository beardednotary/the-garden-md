import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { calculators } from "@/lib/content";

export const metadata = {
  title: "Calculators"
};

export default function CalculatorsIndexPage() {
  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <SectionHeading
        eyebrow="Calculators"
        title="Planning tools worth bookmarking"
        description="GardenMD calculators should feel more like practical utilities than app widgets. This first build includes the main shells and one working calculator."
      />
      <CardGrid
        items={calculators.map((entry) => ({
          href: `/calculators/${entry.slug}`,
          title: entry.name,
          description: entry.description,
          meta: "Calculator",
          action: "Open calculator"
        }))}
      />
    </div>
  );
}
