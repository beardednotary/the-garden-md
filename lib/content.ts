import { calculators } from "@/data/calculators";
import { causes } from "@/data/causes";
import { plants } from "@/data/plants";
import { solutions } from "@/data/solutions";
import { sources } from "@/data/sources";
import { symptoms } from "@/data/symptoms";
import { systems } from "@/data/systems";
import { tools } from "@/data/tools";

export {
  calculators,
  causes,
  plants,
  solutions,
  sources,
  symptoms,
  systems,
  tools
};

export const siteUrl = "https://thegardenmd.com";

export function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

export function getSymptom(slug: string) {
  return symptoms.find((entry) => entry.slug === slug);
}

export function getCause(slug: string) {
  return causes.find((entry) => entry.slug === slug);
}

export function getSolution(slug: string) {
  return solutions.find((entry) => entry.slug === slug);
}

export function getTool(slug: string) {
  return tools.find((entry) => entry.slug === slug);
}

export function getPlant(slug: string) {
  return plants.find((entry) => entry.slug === slug);
}

export function getCalculator(slug: string) {
  return calculators.find((entry) => entry.slug === slug);
}

export function getSystem(slug: string) {
  return systems.find((entry) => entry.slug === slug);
}

export function getSource(id: string) {
  return sources.find((entry) => entry.id === id);
}
