import type { Calculator } from "@/lib/types";

export const calculators: Calculator[] = [
  {
    slug: "raised-bed-soil-calculator",
    name: "Raised bed soil calculator",
    description:
      "Estimate cubic feet, cubic yards, and common bag counts for a rectangular raised bed.",
    inputs: ["Length in feet", "Width in feet", "Depth in inches"],
    relatedTools: ["raised-bed-tools"],
    formulaLabel: "length x width x (depth / 12)"
  },
  {
    slug: "container-soil-calculator",
    name: "Container soil calculator",
    description:
      "Estimate how much soil you need for a round or square container before you fill it.",
    inputs: ["Container width", "Container length or diameter", "Depth in inches"],
    relatedTools: ["raised-bed-tools"],
    formulaLabel: "container volume adjusted to cubic feet"
  },
  {
    slug: "mulch-calculator",
    name: "Mulch calculator",
    description:
      "Work out how many bags or cubic yards of mulch are needed for a bed, border, or path.",
    inputs: ["Length in feet", "Width in feet", "Depth in inches"],
    relatedTools: ["raised-bed-tools"],
    formulaLabel: "area x mulch depth"
  },
  {
    slug: "compost-calculator",
    name: "Compost calculator",
    description:
      "Estimate how much compost to blend into a bed without overapplying it.",
    inputs: ["Length in feet", "Width in feet", "Depth in inches"],
    relatedTools: ["raised-bed-tools"],
    formulaLabel: "area x compost depth"
  },
  {
    slug: "drip-irrigation-planner",
    name: "Drip irrigation planner",
    description:
      "A planning guide for line length, timer placement, and emitter spacing in a basic bed setup.",
    inputs: ["Bed length", "Bed count", "Row count"],
    relatedTools: ["hose-timers", "drip-irrigation-kits"],
    formulaLabel: "bed length x rows with allowance for bends and connections"
  }
];
