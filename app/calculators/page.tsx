import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { calculators } from "@/lib/content";

export const metadata = {
  title: "Calculators",
  description: "Six calculators for soil, mulch, compost, containers, drip irrigation planning, and seed starting timing.",
  alternates: { canonical: "/calculators" }
};

const materialSlugs = ["raised-bed-soil-calculator", "container-soil-calculator", "mulch-calculator", "compost-calculator"];
const planningSlugs = ["drip-irrigation-planner", "seed-starting-calculator"];

export default function CalculatorsIndexPage() {
  const materialCalculators = calculators.filter((entry) => materialSlugs.includes(entry.slug));
  const planningCalculators = calculators.filter((entry) => planningSlugs.includes(entry.slug));

  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <SectionHeading
        eyebrow="Calculators"
        title="Planning tools worth bookmarking"
        description="Straight answers on quantities and timing before you buy materials or start seeds, without the guesswork."
      />
      <p className="max-w-3xl text-[15px] leading-7 text-muted">
        Bags and cubic yards of soil, mulch, and compost are easy to over- or under-order by a lot when
        you're estimating by eye. Frost dates and drip line lengths are easy to get wrong in the other
        direction — not enough measurement, too much guessing. Each calculator here does one specific job
        with real numbers, not a generic estimate.
      </p>

      <div className="mt-10">
        <SectionHeading eyebrow="Soil &amp; Materials" title="How much to buy" />
        <CardGrid
          items={materialCalculators.map((entry) => ({
            href: `/calculators/${entry.slug}`,
            title: entry.name,
            description: entry.description,
            meta: "Calculator",
            action: "Open calculator"
          }))}
        />
      </div>

      <div className="mt-10">
        <SectionHeading eyebrow="Planning &amp; Timing" title="What to do and when" />
        <CardGrid
          items={planningCalculators.map((entry) => ({
            href: `/calculators/${entry.slug}`,
            title: entry.name,
            description: entry.description,
            meta: "Calculator",
            action: "Open calculator"
          }))}
        />
      </div>
    </div>
  );
}
