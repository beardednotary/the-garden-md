import type { Solution } from "@/lib/types";

export const solutions: Solution[] = [
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
    requiredTools: ["hose-timers"],
    helpsWith: ["underwatering", "overwatering", "soil-drying-too-fast"],
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
    helpsWith: ["white-powder-on-leaves", "curling-leaves"],
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
    requiredTools: ["raised-bed-tools"],
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
    helpsWith: ["soil-drying-too-fast", "wilting"],
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
  }
];
