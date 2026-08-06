import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { calculators, causes, plants, siteUrl, solutions, symptoms, systems, tools } from "@/lib/content";

/**
 * Real last-modified date for a file, from git history. Falls back to the
 * build time if git isn't available or the file has no history in this
 * checkout (e.g. a shallow clone), so this never breaks the build.
 */
function lastModifiedFor(relativePath: string): Date {
  try {
    const output = execSync(`git log -1 --format=%aI -- "${relativePath}"`, {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"]
    })
      .toString()
      .trim();
    if (output) {
      return new Date(output);
    }
  } catch {
    // Fall through to build time below.
  }
  return new Date();
}

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
    lastModified: lastModifiedFor(file)
  }));

  const entityEntries = entityGroups.flatMap(({ items, prefix, file }) => {
    const lastModified = lastModifiedFor(file);
    return items.map((entry) => ({
      url: `${siteUrl}${prefix}/${entry.slug}`,
      lastModified
    }));
  });

  return [...staticEntries, ...entityEntries];
}
