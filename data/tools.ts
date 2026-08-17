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
    affiliateUrl: amazonProductUrl("B0H25GXM85"),
    context:
      "A moisture meter is most useful as a comparison tool, not as an absolute number. Push the probe down to where the roots actually are, several inches deep in a container and deeper still in a raised bed, since surface soil dries out long before the root zone does and a probe that only reaches an inch will read dry even when there's plenty of water below. Check a few spots and compare readings to each other over time rather than trusting one reading in isolation, and confirm what the meter says with an actual finger check before you water. Cheap or corroded probes can read wrong in either direction, so treat it as a second opinion, not the final word.",
    sources: ["src-pennstate-watering"],
    relatedContent: [
      { href: "/diagnose/wilting", label: "Wilting" },
      { href: "/diagnose/yellow-leaves", label: "Yellow leaves" },
      { href: "/causes/overwatering", label: "Overwatering" }
    ]
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
    affiliateUrl: amazonProductUrl("B004ROPSOI")
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
    affiliateUrl: amazonProductUrl("B00023RYS6")
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
    affiliateUrl: amazonProductUrl("B09XBKKFVN")
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
    affiliateUrl: amazonProductUrl("B071W8GDW5")
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
    affiliateUrl: amazonProductUrl("B006QYSAPQ")
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
    affiliateUrl: amazonProductUrl("B0BCH7PYCD"),
    context:
      "A drip kit's real value isn't saving water, it's consistency at the root zone. The swings between too dry and too wet that make finger-checking unreliable are exactly what a correctly set up kit removes. Fit matters more than price here: a kit sized for one raised bed on a single timer connection will outperform a larger, cheaper kit stretched across more emitters than its pressure can actually support. Budget an afternoon to get spacing and pressure right the first time, and check emitters periodically once it's running, since a clogged emitter is a far more common failure point than the tubing itself.",
    sources: ["src-pennstate-watering"],
    relatedContent: [
      { href: "/systems/planning-a-garden-irrigation-system", label: "Planning a garden irrigation system" },
      { href: "/calculators/drip-irrigation-planner", label: "Drip irrigation planner" },
      { href: "/causes/underwatering", label: "Underwatering" }
    ]
  },
  {
    slug: "copper-fungicide",
    name: "Copper fungicide",
    category: "Pest & Disease",
    typicalPrice: "$12 to $22",
    useCases: ["Treating black spot on roses", "Broad-spectrum fungal disease control", "Organic-approved fungicide use"],
    worksFor: ["black-spot", "powdery-mildew"],
    avoidIf: ["You have not confirmed the problem is fungal rather than a pest or nutrient issue"],
    features: ["Concentrate you dilute yourself", "OMRI-listed for organic gardening", "Labeled for roses, vegetables, and fruit trees"],
    description:
      "Copper fungicide is a standard, more effective treatment than neem oil for black spot specifically, but sanitation and airflow still matter more than any spray.",
    featuredProduct: "Bonide Captain Jack Copper Fungicide, 16 oz Concentrate",
    affiliateUrl: amazonProductUrl("B0CVQR4FND")
  },
  {
    slug: "grow-lights",
    name: "Grow lights",
    category: "Propagation",
    typicalPrice: "$25 to $45",
    useCases: ["Starting seedlings indoors", "Overwintering leggy houseplants", "Supplementing a dim windowsill"],
    worksFor: ["leggy-stretched-growth"],
    avoidIf: ["Your plants already get several hours of direct sun where they sit"],
    features: ["Full-spectrum output", "Linkable fixtures for multiple trays", "Individual on/off switches"],
    description:
      "A basic full-spectrum light fixed a few inches above seedlings does more to prevent legginess than any amount of fertilizer.",
    featuredProduct: "Barrina T5 Grow Lights, 2ft 40W Full Spectrum, 4-Pack",
    affiliateUrl: amazonProductUrl("B0814LNBHH")
  },
  {
    slug: "sticky-traps",
    name: "Sticky traps",
    category: "Pest & Disease",
    typicalPrice: "$8 to $15",
    useCases: ["Monitoring and reducing fungus gnats", "Catching whiteflies and fruit flies", "Confirming a flying-pest problem before treating"],
    worksFor: ["fungus-gnats"],
    avoidIf: ["Your soil-dwelling pest problem doesn't involve flying adults"],
    features: ["Bright yellow color specifically attracts flying pests", "No odor or spray", "Doubles as a way to monitor whether a treatment is working"],
    description:
      "Sticky traps catch adult fungus gnats and confirm how bad an infestation is, but they don't fix the overly wet soil that's usually the real cause.",
    featuredProduct: "Kensizer 20-Pack Yellow Sticky Traps",
    affiliateUrl: amazonProductUrl("B07KRRJT5J")
  },
  {
    slug: "humidifier",
    name: "Humidifier",
    category: "Propagation",
    typicalPrice: "$25 to $40",
    useCases: ["Raising humidity for tropical houseplants", "Countering dry indoor heating season air", "Preventing crispy leaf tips and edges"],
    worksFor: ["low-humidity"],
    avoidIf: ["Your plant's soil is already staying wet too long"],
    features: ["Cool mist output", "Sized for a single room or plant grouping", "Quiet enough to run continuously"],
    description:
      "A small humidifier near a cluster of tropical houseplants does more for crispy leaf tips than misting, which evaporates within minutes.",
    featuredProduct: "LEVOIT Top Fill Cool Mist Humidifier, 1.8L",
    affiliateUrl: amazonProductUrl("B07QWJG68W")
  }
];
