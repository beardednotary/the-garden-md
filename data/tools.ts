import type { ToolEntry } from "@/lib/types";

const AMAZON_TAG = "gardenmd-20";

function amazonProductUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

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
      "Useful for comparing moisture at different depths before watering again. It should supplement a physical soil check, not replace one.",
    featuredProduct: "XLUX Plant Soil Moisture Meter (battery-free)",
    affiliateUrl: amazonProductUrl("B0H25GXM85")
  },
  {
    slug: "hose-timers",
    name: "Hose timers",
    category: "Irrigation",
    typicalPrice: "$25 to $60",
    useCases: ["Vacation watering", "Consistent bed irrigation", "Drip scheduling"],
    worksFor: ["install-drip-irrigation", "wilting"],
    avoidIf: ["You need zone-by-zone automation beyond a simple faucet setup"],
    features: ["Clear scheduling controls", "Manual override", "Reliable battery compartment"],
    description:
      "A basic timer helps keep watering consistent, especially for raised beds and containers that dry unevenly.",
    featuredProduct: "Orbit 62056 One-Outlet Single-Dial Hose Faucet Timer",
    affiliateUrl:
      "https://www.amazon.com/dp/B004ROPSOI?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B004ROPSOI_1785909055248"
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
      "Clean cuts matter when you are removing diseased or crowded growth, especially on plants that need better airflow.",
    featuredProduct: "Felco F-2 Classic Manual Hand Pruner",
    affiliateUrl:
      "https://www.amazon.com/dp/B00023RYS6?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B00023RYS6_1785909069998"
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
      "Netting is most useful when it solves a specific pest or animal problem without trapping or crushing the plant.",
    featuredProduct: "KLEWEE Bird Netting, 7.5 x 100 ft, 3/4\" mesh",
    affiliateUrl:
      "https://www.amazon.com/dp/B09XBKKFVN?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B09XBKKFVN_1785909069997"
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
      "A small set of dependable bed tools goes further than a large set of low-quality gadgets.",
    featuredProduct: "FLORA GUARD 6-Piece Garden Tool Set",
    affiliateUrl:
      "https://www.amazon.com/dp/B071W8GDW5?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B071W8GDW5_1785909093062"
  },
  {
    slug: "soil-test-kits",
    name: "Soil test kits",
    category: "Testing",
    typicalPrice: "$12 to $25",
    useCases: ["Checking pH before amending soil", "Confirming a nutrient deficiency", "Planning fertilizer use"],
    worksFor: ["nitrogen-deficiency"],
    avoidIf: ["You need lab-grade precision for a commercial planting"],
    features: ["Separate pH and N-P-K tests", "Clear color-comparison chart", "Enough capsules for repeat testing"],
    description:
      "A basic test kit helps confirm a nutrient or pH problem before you buy and apply fertilizer based on a guess.",
    featuredProduct: "Luster Leaf 1601 Rapitest Soil Test Kit",
    affiliateUrl: amazonProductUrl("B00WIRPQLQ")
  },
  {
    slug: "neem-oil",
    name: "Neem oil",
    category: "Pest & Disease",
    typicalPrice: "$12 to $20",
    useCases: ["Treating powdery mildew", "Managing aphids and soft-bodied pests", "Routine organic prevention"],
    worksFor: ["powdery-mildew", "aphids"],
    avoidIf: ["You need an immediate knockdown for a heavy, active infestation"],
    features: ["Concentrate you dilute yourself", "Labeled for edible plants", "Works as both fungicide and insecticide"],
    description:
      "Neem oil is a reasonable first treatment for mild powdery mildew or aphids once airflow and spacing are already addressed, not a substitute for them.",
    featuredProduct: "Bonide Captain Jack's Neem Oil, 16 oz Concentrate",
    affiliateUrl:
      "https://www.amazon.com/dp/B006QYSAPQ?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B006QYSAPQ_1785909093061"
  },
  {
    slug: "drip-irrigation-kits",
    name: "Drip irrigation kits",
    category: "Irrigation",
    typicalPrice: "$30 to $60",
    useCases: ["Setting up a first drip system", "Fitting one raised bed", "Reducing wet-foliage disease risk"],
    worksFor: ["install-drip-irrigation", "wilting"],
    avoidIf: ["You already have a multi-zone system and only need parts"],
    features: ["Includes tubing, emitters, and stakes", "Sized for a single bed", "Compatible with a standard hose timer"],
    description:
      "A packaged kit is the easiest way to get a first drip system running correctly before you start buying parts separately.",
    featuredProduct: "Rain Bird GARDENKIT Raised Bed Drip Irrigation Kit",
    affiliateUrl:
      "https://www.amazon.com/dp/B0BCH7PYCD?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B0BCH7PYCD_1785909093060"
  }
];
