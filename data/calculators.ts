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
    config: { kind: "drip" },
    context:
      "A drip system's real advantage isn't convenience, it's consistency. Most watering-related plant problems come from swinging between too dry and too wet, not from an absolute lack of water, and delivering the same amount to the same spot on the same schedule removes most of that guesswork. The tradeoff is upfront setup: pressure, emitter spacing, and line length all need to be roughly right before it becomes as effortless as it sounds.",
    sources: ["src-pennstate-watering"],
    relatedContent: [
      { href: "/causes/underwatering", label: "Underwatering" },
      { href: "/causes/overwatering", label: "Overwatering" },
      { href: "/systems/planning-a-garden-irrigation-system", label: "Planning a garden irrigation system" }
    ]
  },
  {
    slug: "seed-starting-calculator",
    name: "Seed starting calculator",
    description:
      "Enter your last spring frost date to see when to start seeds indoors and when it's safe to move common crops outside.",
    relatedTools: ["grow-lights"],
    formulaLabel: "last frost date +/- weeks per crop",
    config: { kind: "seedStarting" },
    context:
      "Timing is the single biggest lever in whether a transplant survives its first week outside. Starting too early usually means leggy, root-bound seedlings that have sat in trays too long; starting too late means a shorter season and a smaller harvest. The ranges here are deliberately wide, since a \"last frost date\" is a statistical average, not a guarantee — a warm spring can bring it early, and a late cold snap can still catch you off guard even after the average date has passed.",
    sources: ["src-cornell-seed-starting"],
    relatedContent: [
      { href: "/diagnose/leggy-stretched-growth", label: "Leggy, stretched growth" },
      { href: "/causes/insufficient-light", label: "Insufficient light" }
    ]
  }
];
