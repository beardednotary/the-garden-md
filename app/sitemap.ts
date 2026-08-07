import type { MetadataRoute } from "next";
import { getLastModifiedDate } from "@/lib/lastModified";
import { calculators, causes, plants, siteUrl, solutions, symptoms, systems, tools } from "@/lib/content";

const staticRoutes = [
  { path: "", file: "app/page.tsx" },
  { path: "/diagnose", file: "app/diagnose/page.tsx" },
  { path: "/causes", file: "app/causes/page.tsx" },
  { path: "/solutions", file: "app/solutions/page.tsx" },
  { path: "/calculators", file: "app/calculators/page.tsx" },
  { path: "/systems", file: "app/systems/page.tsx" },
  { path: "/tools", file: "app/tools/page.tsx" },
  { path: "/plants", file: "app/plants/page.tsx" },
  { path: "/about", file: "app/about/page.tsx" },
  { path: "/editorial-process", file: "app/editorial-process/page.tsx" },
  { path: "/sources", file: "app/sources/page.tsx" },
  { path: "/contact", file: "app/contact/page.tsx" },
  { path: "/affiliate-disclosure", file: "app/affiliate-disclosure/page.tsx" },
  { path: "/privacy", file: "app/privacy/page.tsx" },
  { path: "/terms", file: "app/terms/page.tsx" }
];

const entityGroups: Array<{ items: Array<{ slug: string }>; prefix: string; file: string }> = [
  { items: symptoms, prefix: "/diagnose", file: "data/symptoms.ts" },
  { items: causes, prefix: "/causes", file: "data/causes.ts" },
  { items: solutions, prefix: "/solutions", file: "data/solutions.ts" },
  { items: calculators, prefix: "/calculators", file: "data/calculators.ts" },
  { items: systems, prefix: "/systems", file: "data/systems.ts" },
  { items: tools, prefix: "/tools", file: "data/tools.ts" },
  { items: plants, prefix: "/plants", file: "data/plants.ts" }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map(({ path, file }) => ({
    url: `${siteUrl}${path}`,
    lastModified: getLastModifiedDate(file)
  }));

  const entityEntries = entityGroups.flatMap(({ items, prefix, file }) => {
    const lastModified = getLastModifiedDate(file);
    return items.map((entry) => ({
      url: `${siteUrl}${prefix}/${entry.slug}`,
      lastModified
    }));
  });

  return [...staticEntries, ...entityEntries];
}
