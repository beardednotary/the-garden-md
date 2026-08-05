import type { MetadataRoute } from "next";
import { calculators, causes, plants, siteUrl, solutions, symptoms, systems, tools } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/diagnose",
    "/calculators",
    "/systems",
    "/tools",
    "/plants",
    "/about",
    "/editorial-process",
    "/sources",
    "/contact",
    "/affiliate-disclosure",
    "/privacy",
    "/terms"
  ];

  const entityRoutes = [
    ...symptoms.map((entry) => `/diagnose/${entry.slug}`),
    ...causes.map((entry) => `/causes/${entry.slug}`),
    ...solutions.map((entry) => `/solutions/${entry.slug}`),
    ...calculators.map((entry) => `/calculators/${entry.slug}`),
    ...systems.map((entry) => `/systems/${entry.slug}`),
    ...tools.map((entry) => `/tools/${entry.slug}`),
    ...plants.map((entry) => `/plants/${entry.slug}`)
  ];

  return [...staticRoutes, ...entityRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-08-05")
  }));
}
