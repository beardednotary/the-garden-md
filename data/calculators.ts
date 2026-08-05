import type { Calculator } from "@/lib/types";

export const calculators: Calculator[] = [
  {
    slug: "raised-bed-soil-calculator",
    name: "Raised bed soil calculator",
    description:
      "Estimate cubic feet, cubic yards, and common bag counts for a rectangular raised bed.",
    relatedTools: ["raised-bed-tools"],
    formulaLabel: "length x width x (depth / 12)",
    config: { kind: "volume", bagSizeCubicFeet: 1.5, bagLabel: "1.5 cu ft soil bags" }
  },
  {
    slug: "container-soil-calculator",
    name: "Container soil calculator",
    description:
      "Estimate how much potting mix you need for a round or rectangular container before you fill it.",
    relatedTools: ["raised-bed-tools"],
    formulaLabel: "container volume adjusted to cubic feet",
    config: { kind: "container" }
  },
  {
    slug: "mulch-calculator",
    name: "Mulch calculator",
    description:
      "Work out how many bags or cubic yards of mulch are needed for a bed, border, or path.",
    relatedTools: ["raised-bed-tools"],
    formulaLabel: "area x mulch depth",
    config: { kind: "volume", bagSizeCubicFeet: 2, bagLabel: "2 cu ft mulch bags" }
  },
  {
    slug: "compost-calculator",
    name: "Compost calculator",
    description:
      "Estimate how much compost to blend into a bed without overapplying it.",
    relatedTools: ["raised-bed-tools"],
    formulaLabel: "area x compost depth",
    config: { kind: "volume", bagSizeCubicFeet: 1, bagLabel: "1 cu ft compost bags" }
  },
  {
    slug: "drip-irrigation-planner",
    name: "Drip irrigation planner",
    description:
      "A planning guide for line length, timer placement, and emitter spacing in a basic bed setup.",
    relatedTools: ["hose-timers", "drip-irrigation-kits"],
    formulaLabel: "bed length x rows with allowance for bends and connections",
    config: { kind: "drip" }
  }
];
