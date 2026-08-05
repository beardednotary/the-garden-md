import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContainerCalculator } from "@/components/calculators/ContainerCalculator";
import { DripCalculator } from "@/components/calculators/DripCalculator";
import { VolumeCalculator } from "@/components/calculators/VolumeCalculator";
import { SidebarPanel } from "@/components/SidebarPanel";
import { calculators, getCalculator, getTool, isDefined } from "@/lib/content";

export function generateStaticParams() {
  return calculators.map((entry) => ({ slug: entry.slug }));
}

export default async function CalculatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const calculator = getCalculator(slug);

  if (!calculator) {
    notFound();
  }

  const relatedTools = calculator.relatedTools.map((toolSlug) => getTool(toolSlug)).filter(isDefined);

  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/calculators", label: "Calculators" }, { label: calculator.name }]} />
      <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,760px)_320px]">
        <article>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">Calculator</p>
          <h1 className="mt-3 font-serif text-4xl text-green-dark">{calculator.name}</h1>
          <p className="mt-4 text-lg text-muted">{calculator.description}</p>

          {calculator.config.kind === "volume" && (
            <VolumeCalculator bagSizeCubicFeet={calculator.config.bagSizeCubicFeet} bagLabel={calculator.config.bagLabel} />
          )}
          {calculator.config.kind === "container" && <ContainerCalculator />}
          {calculator.config.kind === "drip" && <DripCalculator />}

          <p className="mt-4 text-sm text-muted">Formula: {calculator.formulaLabel}</p>
        </article>

        <aside className="space-y-5">
          <SidebarPanel title="Related Tools">
            <ul className="space-y-3">
              {relatedTools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className="font-semibold underline-offset-4 hover:underline">
                    {tool.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted">{tool.description}</p>
                </li>
              ))}
            </ul>
          </SidebarPanel>
        </aside>
      </div>
    </div>
  );
}
