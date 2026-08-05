import { calculators, causes, plants, solutions, symptoms, systems, tools } from "@/lib/content";

export type SearchEntry = {
  href: string;
  title: string;
  category: string;
  keywords: string;
};

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const entry of symptoms) {
    entries.push({
      href: `/diagnose/${entry.slug}`,
      title: entry.name,
      category: "Diagnose",
      keywords: [entry.name, ...entry.aliases, entry.description].join(" ").toLowerCase()
    });
  }
  for (const entry of causes) {
    entries.push({
      href: `/causes/${entry.slug}`,
      title: entry.name,
      category: "Cause",
      keywords: [entry.name, entry.description].join(" ").toLowerCase()
    });
  }
  for (const entry of solutions) {
    entries.push({
      href: `/solutions/${entry.slug}`,
      title: entry.name,
      category: "Solution",
      keywords: [entry.name, entry.summary].join(" ").toLowerCase()
    });
  }
  for (const entry of tools) {
    entries.push({
      href: `/tools/${entry.slug}`,
      title: entry.name,
      category: "Tool",
      keywords: [entry.name, entry.featuredProduct, ...entry.useCases].join(" ").toLowerCase()
    });
  }
  for (const entry of plants) {
    entries.push({
      href: `/plants/${entry.slug}`,
      title: entry.name,
      category: "Plant",
      keywords: [entry.name, entry.summary].join(" ").toLowerCase()
    });
  }
  for (const entry of systems) {
    entries.push({
      href: `/systems/${entry.slug}`,
      title: entry.name,
      category: "System",
      keywords: [entry.name, entry.summary].join(" ").toLowerCase()
    });
  }
  for (const entry of calculators) {
    entries.push({
      href: `/calculators/${entry.slug}`,
      title: entry.name,
      category: "Calculator",
      keywords: [entry.name, entry.description].join(" ").toLowerCase()
    });
  }

  return entries;
}

export const searchIndex: SearchEntry[] = buildIndex();

export function searchSite(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) {
    return [];
  }

  const scored = searchIndex
    .map((entry) => {
      const titleLower = entry.title.toLowerCase();
      let score = -1;
      if (titleLower === q) {
        score = 3;
      } else if (titleLower.startsWith(q)) {
        score = 2;
      } else if (titleLower.includes(q)) {
        score = 1;
      } else if (entry.keywords.includes(q)) {
        score = 0;
      }
      return { entry, score };
    })
    .filter((result) => result.score >= 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((result) => result.entry);
}
