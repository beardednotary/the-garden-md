import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SidebarPanel } from "@/components/SidebarPanel";
import { getPlant, getSystem, isDefined, plants } from "@/lib/content";

export function generateStaticParams() {
  return plants.map((entry) => ({ slug: entry.slug }));
}

export default async function PlantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plant = getPlant(slug);

  if (!plant) {
    notFound();
  }

  const relatedSystems = plant.recommendedSystems.map((systemSlug) => getSystem(systemSlug)).filter(isDefined);

  return (
    <div className="mx-auto max-w-shell px-4 py-8 md:px-6">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/plants", label: "Plants" }, { label: plant.name }]} />
      <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,760px)_320px]">
        <article className="border border-border bg-paper-light p-6 shadow-panel">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">Plant Guide</p>
          <h1 className="mt-3 font-serif text-4xl text-green-dark">{plant.name}</h1>
          <p className="mt-4 text-lg text-muted">{plant.summary}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl text-green-dark">Common problems</h2>
              <ul className="mt-4 space-y-3">
                {plant.commonProblems.map((symptom) => (
                  <li key={symptom}>
                    <Link href={`/diagnose/${symptom}`} className="underline-offset-4 hover:underline">
                      {symptom.replaceAll("-", " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-green-dark">Season and difficulty</h2>
              <p className="mt-4">{plant.season}</p>
              <p className="mt-2">{plant.difficulty}</p>
            </div>
          </div>
        </article>
        <aside className="space-y-5">
          <SidebarPanel title="Recommended Systems">
            <ul className="space-y-3">
              {relatedSystems.map((system) => (
                <li key={system.slug}>
                  <Link href={`/systems/${system.slug}`} className="font-semibold underline-offset-4 hover:underline">
                    {system.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted">{system.summary}</p>
                </li>
              ))}
            </ul>
          </SidebarPanel>
        </aside>
      </div>
    </div>
  );
}
