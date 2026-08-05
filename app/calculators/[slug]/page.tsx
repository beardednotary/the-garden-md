import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SidebarPanel } from "@/components/SidebarPanel";
import { calculators, getCalculator, getTool, isDefined } from "@/lib/content";

function formatBags(cubicFeet: number) {
  return Math.ceil(cubicFeet / 1.5);
}

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
  const demoCubicFeet = 4 * 8 * (12 / 12);

  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/calculators", label: "Calculators" }, { label: calculator.name }]} />
      <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,760px)_320px]">
        <article>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">Calculator</p>
          <h1 className="mt-3 font-serif text-4xl text-green-dark">{calculator.name}</h1>
          <p className="mt-4 text-lg text-muted">{calculator.description}</p>

          <section className="mt-8 border border-border bg-paper-light p-5 shadow-panel">
            <h2 className="font-serif text-2xl text-green-dark">Inputs</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {calculator.inputs.map((input) => (
                <label key={input} className="block text-sm text-ink">
                  <span className="mb-2 block font-semibold text-green-dark">{input}</span>
                  <input type="text" className="w-full border border-border bg-paper px-3 py-2" placeholder="Enter value" />
                </label>
              ))}
            </div>
            <button className="mt-5 border border-green-dark bg-green-dark px-4 py-2 text-sm font-semibold text-paper-light">
              Calculate
            </button>
          </section>

          <section className="mt-8 border border-border bg-paper-light p-5 shadow-panel">
            <h2 className="font-serif text-2xl text-green-dark">Example result</h2>
            <p className="mt-3 text-[15px] leading-7">
              For a 4 ft by 8 ft bed at 12 inches deep, you need about <strong>{demoCubicFeet.toFixed(1)} cubic feet</strong>, or{" "}
              <strong>{(demoCubicFeet / 27).toFixed(2)} cubic yards</strong>, which is roughly{" "}
              <strong>{formatBags(demoCubicFeet)} bags</strong> at 1.5 cubic feet each.
            </p>
            <p className="mt-3 text-sm text-muted">Formula: {calculator.formulaLabel}</p>
          </section>
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
