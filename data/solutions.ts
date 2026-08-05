import type { Solution } from "@/lib/types";

export const solutions: Solution[] = [
  {
    slug: "correct-underwatering",
    name: "Correct underwatering",
    difficulty: "Easy",
    time: "15 minutes to assess, a few days to confirm",
    cost: "$",
    summary:
      "Most underwatering fixes are about watering more deeply and more consistently, not just more often.",
    steps: [
      "Water deeply enough to reach the full root zone rather than wetting only the surface.",
      "Check containers and sandy soil more often, since they dry out faster than garden beds.",
      "Add mulch or shift to drip irrigation if the plant dries out again within a day or two."
    ],
    requiredTools: ["soil-moisture-meters", "hose-timers"],
    helpsWith: ["wilting", "curling-leaves"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "correct-overwatering",
    name: "Correct overwatering",
    difficulty: "Easy",
    time: "20 minutes to assess, several days to confirm",
    cost: "$",
    summary:
      "Start by changing watering frequency before buying anything else. Most overwatering fixes are about timing and drainage.",
    steps: [
      "Pause watering until the top layer of soil dries to an appropriate depth for the plant.",
      "Check whether the container or bed can actually drain.",
      "Resume watering deeply but less often once the soil profile improves."
    ],
    requiredTools: ["soil-moisture-meters"],
    helpsWith: ["yellow-leaves", "wilting", "soil-staying-wet"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "improve-soil-drainage",
    name: "Improve soil drainage",
    difficulty: "Moderate",
    time: "1 to 2 hours",
    cost: "$$",
    summary:
      "Drainage problems usually need a physical fix such as better soil structure, better bed design, or a different watering method.",
    steps: [
      "Loosen compacted areas and clear blocked drainage paths.",
      "Add suitable organic matter where it improves structure rather than creating a perched layer.",
      "Switch to slower, more controlled watering if runoff or saturation is recurring."
    ],
    requiredTools: ["raised-bed-tools"],
    helpsWith: ["soil-staying-wet", "yellow-leaves"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "install-drip-irrigation",
    name: "Install drip irrigation",
    difficulty: "Easy",
    time: "2 hours",
    cost: "$$",
    summary:
      "Drip irrigation helps prevent both drought stress and constant wet foliage by delivering water more consistently at the soil line.",
    steps: [
      "Map each bed or container run before buying parts.",
      "Use a pressure regulator and timer suited to the water source.",
      "Test emitter placement before covering lines with mulch."
    ],
    requiredTools: ["hose-timers", "drip-irrigation-kits"],
    helpsWith: ["wilting", "soil-staying-wet"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "improve-airflow",
    name: "Improve airflow",
    difficulty: "Easy",
    time: "30 to 60 minutes",
    cost: "$",
    summary:
      "Crowded growth traps humidity and makes some fungal and pest problems harder to manage.",
    steps: [
      "Thin dense growth where leaves are touching constantly.",
      "Prune damaged or heavily infected material first.",
      "Adjust spacing or support systems for better long-term airflow."
    ],
    requiredTools: ["bypass-pruners"],
    helpsWith: ["white-powder-on-leaves", "curling-leaves", "black-spot-on-leaves"],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "spray-neem-oil",
    name: "Spray neem oil",
    difficulty: "Easy",
    time: "20 minutes plus repeat applications",
    cost: "$",
    summary:
      "Neem oil can help with mild powdery mildew or aphid pressure, but it works best after airflow and spacing are already fixed, not instead of fixing them.",
    steps: [
      "Improve airflow and remove heavily affected growth first.",
      "Dilute and apply according to the label, covering both sides of the leaves.",
      "Reapply on the label's schedule and avoid spraying in full sun or near bloom time when pollinators are active."
    ],
    requiredTools: ["neem-oil"],
    helpsWith: ["white-powder-on-leaves", "holes-in-leaves", "curling-leaves", "black-spot-on-leaves"],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "test-garden-soil",
    name: "Test garden soil",
    difficulty: "Easy",
    time: "15 minutes plus lab turnaround if used",
    cost: "$ to $$",
    summary:
      "A soil test helps separate nutrient guesses from actual nutrient problems.",
    steps: [
      "Collect samples from the root zone rather than only the surface.",
      "Avoid sampling immediately after fertilizing.",
      "Use the results to guide future amendments instead of reacting to one symptom."
    ],
    requiredTools: ["raised-bed-tools", "soil-test-kits"],
    helpsWith: ["yellow-leaves", "plants-not-producing-fruit"],
    sources: ["src-umn-nutrients"]
  },
  {
    slug: "mulch-a-garden-bed",
    name: "Mulch a garden bed",
    difficulty: "Easy",
    time: "1 hour",
    cost: "$$",
    summary:
      "Mulch moderates soil temperature and moisture swings, which can reduce stress-related symptoms.",
    steps: [
      "Pull mulch back slightly from stems and crowns.",
      "Apply an even layer without smothering small plants.",
      "Refresh only as needed rather than piling it up continuously."
    ],
    requiredTools: ["raised-bed-tools"],
    helpsWith: ["wilting"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "protect-plants-with-netting",
    name: "Protect plants with netting",
    difficulty: "Easy",
    time: "30 minutes",
    cost: "$$",
    summary:
      "Netting helps reduce some pest pressure and physical damage when used with proper support.",
    steps: [
      "Support the netting so it does not abrade foliage.",
      "Secure the edges well enough to keep pests from slipping underneath.",
      "Remove or adjust as plants flower if pollinator access is needed."
    ],
    requiredTools: ["garden-netting"],
    helpsWith: ["holes-in-leaves"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "improve-pollination-and-fruit-set",
    name: "Improve pollination and fruit set",
    difficulty: "Easy",
    time: "Ongoing during bloom",
    cost: "$",
    summary:
      "Small changes during bloom can reduce blossom drop and improve how many flowers actually turn into fruit.",
    steps: [
      "Keep watering consistent during flowering instead of letting the plant dry out between waterings.",
      "Avoid high-nitrogen fertilizer once flowering starts, since it favors leafy growth over fruit set.",
      "Hand-pollinate or gently shake flowering stems in the morning if pollinator activity is low."
    ],
    requiredTools: ["soil-moisture-meters"],
    helpsWith: ["plants-not-producing-fruit"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "water-consistently-during-fruiting",
    name: "Water consistently during fruiting",
    difficulty: "Easy",
    time: "Ongoing during fruit development",
    cost: "$",
    summary:
      "Blossom end rot usually responds to steadier watering rather than added calcium, since the underlying problem is delivery, not supply.",
    steps: [
      "Water on a regular schedule instead of letting the soil swing between bone dry and soaked.",
      "Mulch to buffer soil moisture, especially in containers and raised beds.",
      "Hold off on calcium sprays until a soil test confirms an actual deficiency rather than a watering problem."
    ],
    requiredTools: ["soil-moisture-meters", "drip-irrigation-kits"],
    helpsWith: ["blossom-end-rot"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "reduce-leaf-scorch",
    name: "Reduce leaf scorch",
    difficulty: "Easy",
    time: "20 minutes to assess, ongoing to prevent",
    cost: "$",
    summary:
      "Scorched tissue will not turn green again, so the goal is preventing more of it rather than reversing existing damage.",
    steps: [
      "Water deeply during heat or wind events instead of skipping a scheduled watering.",
      "Mulch to reduce soil temperature swings and moisture loss.",
      "Cut back on fertilizer for a season if recent heavy feeding lines up with when scorch appeared."
    ],
    requiredTools: ["soil-moisture-meters", "raised-bed-tools"],
    helpsWith: ["brown-leaf-tips-and-edges"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "remove-and-treat-black-spot",
    name: "Remove and treat black spot",
    difficulty: "Moderate",
    time: "30 to 45 minutes, plus a seasonal spray schedule",
    cost: "$$",
    summary:
      "Sanitation matters as much as any spray, since black spot spores overwinter in fallen leaves and reinfect the plant the following season.",
    steps: [
      "Remove and dispose of infected leaves, including any that have already dropped, rather than composting them.",
      "Apply a copper fungicide on a label-appropriate schedule once sanitation and airflow are addressed.",
      "Water at the base of the plant instead of overhead to keep foliage drier."
    ],
    requiredTools: ["bypass-pruners", "copper-fungicide"],
    helpsWith: ["black-spot-on-leaves"],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "add-supplemental-light",
    name: "Add supplemental light",
    difficulty: "Easy",
    time: "15 minutes to set up",
    cost: "$$",
    summary:
      "A basic grow light positioned close to the plant fixes legginess more reliably than moving a tray to a slightly brighter windowsill.",
    steps: [
      "Position a full-spectrum light a few inches above the seedlings or affected plant.",
      "Run the light for 12 to 16 hours a day rather than leaving it on constantly.",
      "Raise the light as plants grow to keep the distance consistent."
    ],
    requiredTools: ["grow-lights"],
    helpsWith: ["leggy-stretched-growth"],
    sources: ["src-umd-seedlings"]
  }
];
