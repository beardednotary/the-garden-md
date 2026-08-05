import type { ToolEntry } from "@/lib/types";

export const tools: ToolEntry[] = [
  {
    slug: "soil-moisture-meters",
    name: "Soil moisture meters",
    category: "Testing",
    typicalPrice: "$15 to $40",
    useCases: ["Checking wet soil", "Comparing container moisture", "Avoiding repeat overwatering"],
    worksFor: ["yellow-leaves", "wilting", "soil-staying-wet"],
    avoidIf: ["You want a substitute for digging and touching the soil"],
    features: ["Long enough probe", "Clear analog dial", "No required battery"],
    description:
      "Useful for comparing moisture at different depths before watering again. It should supplement a physical soil check, not replace one."
  },
  {
    slug: "hose-timers",
    name: "Hose timers",
    category: "Irrigation",
    typicalPrice: "$25 to $60",
    useCases: ["Vacation watering", "Consistent bed irrigation", "Drip scheduling"],
    worksFor: ["install-drip-irrigation", "soil-drying-too-fast"],
    avoidIf: ["You need zone-by-zone automation beyond a simple faucet setup"],
    features: ["Clear scheduling controls", "Manual override", "Reliable battery compartment"],
    description:
      "A basic timer helps keep watering consistent, especially for raised beds and containers that dry unevenly."
  },
  {
    slug: "bypass-pruners",
    name: "Bypass pruners",
    category: "Pruning",
    typicalPrice: "$20 to $55",
    useCases: ["Removing infected growth", "Thinning crowded plants", "Routine garden cleanup"],
    worksFor: ["powdery-mildew", "improve-airflow"],
    avoidIf: ["You need loppers for thick woody stems"],
    features: ["Comfortable grip", "Replaceable blade", "Easy lock"],
    description:
      "Clean cuts matter when you are removing diseased or crowded growth, especially on plants that need better airflow."
  },
  {
    slug: "garden-netting",
    name: "Garden netting",
    category: "Protection",
    typicalPrice: "$10 to $35",
    useCases: ["Bird protection", "Light pest exclusion", "Covering young crops"],
    worksFor: ["holes-in-leaves", "protect-plants-with-netting"],
    avoidIf: ["You need heavy-duty wildlife exclusion"],
    features: ["Fine enough mesh", "Easy to secure", "Reusable material"],
    description:
      "Netting is most useful when it solves a specific pest or animal problem without trapping or crushing the plant."
  },
  {
    slug: "raised-bed-tools",
    name: "Raised bed tools",
    category: "Bed prep",
    typicalPrice: "$20 to $80",
    useCases: ["Mixing soil", "Adjusting drainage", "Routine maintenance"],
    worksFor: ["improve-soil-drainage", "mulch-a-garden-bed"],
    avoidIf: ["You only need one specific hand tool"],
    features: ["Sturdy handle", "Rust-resistant head", "Comfortable working height"],
    description:
      "A small set of dependable bed tools goes further than a large set of low-quality gadgets."
  }
];
