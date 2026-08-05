import Link from "next/link";
import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { calculators, symptoms, systems, tools } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6 md:py-10">
      <section className="border border-border bg-paper-light p-6 shadow-panel md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">Garden Reference</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-green-dark md:text-5xl">
          Practical answers for common garden problems.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Search symptoms, compare likely causes, check the simplest fix first, and use calculators before you buy materials.
        </p>
        <form className="mt-6 max-w-2xl">
          <label htmlFor="search" className="mb-2 block text-sm font-semibold text-green-dark">
            Search GardenMD
          </label>
          <input
            id="search"
            type="search"
            placeholder="Yellow leaves, wet soil, raised bed soil calculator"
            className="w-full border border-border bg-paper px-4 py-3 text-ink outline-none placeholder:text-muted"
          />
        </form>
        <p className="mt-4 text-sm text-muted">
          Common problems:{" "}
          {["Yellow leaves", "Wilting", "Holes in leaves", "Wet soil", "White powder"].map((item, index) => (
            <span key={item}>
              {index > 0 ? " · " : ""}
              {item}
            </span>
          ))}
        </p>
      </section>

      <section className="mt-12">
        <SectionHeading
          eyebrow="Common Garden Problems"
          title="Start with the symptom you can actually see"
          description="These diagnostic pages are the main entry points into the site. Each one leads to likely causes, confirmation steps, and the least complicated next move."
        />
        <CardGrid
          items={symptoms.map((entry) => ({
            href: `/diagnose/${entry.slug}`,
            title: entry.name,
            description: entry.description,
            meta: `${entry.bodyArea} · ${entry.urgency}`,
            action: `Diagnose ${entry.name.toLowerCase()}`
          }))}
        />
      </section>

      <section className="mt-12">
        <SectionHeading
          eyebrow="Popular Calculators"
          title="Plain tools for planning soil, mulch, and irrigation"
          description="Calculators are a major section of GardenMD, not a side feature. They should be useful enough to bookmark."
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
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            eyebrow="Watering and Irrigation"
            title="System pages connect symptoms to setup decisions"
            description="These are practical guides that sit between diagnosis pages and product pages."
          />
          <CardGrid
            items={systems.map((entry) => ({
              href: `/systems/${entry.slug}`,
              title: entry.name,
              description: entry.summary,
              meta: "System guide",
              action: "Read system guide"
            }))}
          />
        </div>
        <aside className="border border-border bg-paper-light p-6 shadow-panel">
          <h2 className="border-b border-border pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">
            Helpful Tools
          </h2>
          <ul className="mt-4 space-y-4">
            {tools.slice(0, 4).map((tool) => (
              <li key={tool.slug}>
                <h3 className="font-serif text-2xl text-green-dark">
                  <Link href={`/tools/${tool.slug}`} className="underline-offset-4 hover:underline">
                    {tool.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-muted">{tool.typicalPrice}</p>
                <p className="mt-2 text-[15px] leading-7">{tool.description}</p>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
}
