import type { Cause } from "@/lib/types";

export const causes: Cause[] = [
  {
    slug: "underwatering",
    name: "Underwatering",
    category: "Water",
    description:
      "Underwatering leaves roots without enough moisture to keep foliage turgid, and it is often worse in containers, sandy soil, or hot, windy weather.",
    symptoms: ["wilting", "curling-leaves"],
    typicalPlants: ["tomatoes", "peppers", "hydrangeas"],
    confirmationSteps: [
      "Check soil moisture several inches down, not just at the surface.",
      "Note whether the plant recovers within a few hours of a deep watering.",
      "Look for wilting that is worse in containers, sandy soil, or exposed, windy spots."
    ],
    fixes: ["correct-underwatering", "install-drip-irrigation", "mulch-a-garden-bed"],
    tools: ["soil-moisture-meters", "hose-timers", "drip-irrigation-kits"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "overwatering",
    name: "Overwatering",
    category: "Water",
    description:
      "Overwatering keeps roots deprived of oxygen and often shows up as yellow leaves, drooping, and soil that stays wet too long.",
    symptoms: ["yellow-leaves", "wilting", "soil-staying-wet"],
    typicalPlants: ["tomatoes", "peppers", "hydrangeas"],
    confirmationSteps: [
      "Check whether the top two inches of soil are still damp several days after watering.",
      "Look for drooping paired with wet soil rather than dry soil.",
      "Inspect drainage holes or bed drainage before adding fertilizer."
    ],
    fixes: ["correct-overwatering", "improve-soil-drainage"],
    tools: ["soil-moisture-meters"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "poor-drainage",
    name: "Poor drainage",
    category: "Soil",
    description:
      "Poor drainage traps water around roots and can mimic disease, nutrient issues, or general decline.",
    symptoms: ["soil-staying-wet", "yellow-leaves", "wilting"],
    typicalPlants: ["tomatoes", "hydrangeas"],
    confirmationSteps: [
      "Watch how long the bed or container stays wet after irrigation or rain.",
      "Dig a small test hole to see whether water pools below the surface.",
      "Check for compacted soil or blocked drainage holes."
    ],
    fixes: ["improve-soil-drainage", "install-drip-irrigation"],
    tools: ["raised-bed-tools", "soil-moisture-meters"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "nitrogen-deficiency",
    name: "Nitrogen deficiency",
    category: "Nutrient",
    description:
      "Nitrogen deficiency usually shows up first on older leaves, which turn pale or yellow while newer growth stays greener.",
    symptoms: ["yellow-leaves", "plants-not-producing-fruit"],
    typicalPlants: ["tomatoes", "peppers", "cucumbers"],
    confirmationSteps: [
      "Check whether older lower leaves are affected before newer leaves.",
      "Compare overall growth to healthy plants of the same age.",
      "Review recent fertilizing history before making changes."
    ],
    fixes: ["test-garden-soil", "mulch-a-garden-bed"],
    tools: ["raised-bed-tools", "soil-test-kits"],
    sources: ["src-umn-nutrients"]
  },
  {
    slug: "powdery-mildew",
    name: "Powdery mildew",
    category: "Disease",
    description:
      "Powdery mildew creates a white, dusty coating on leaves and spreads more easily where airflow is poor.",
    symptoms: ["white-powder-on-leaves", "yellow-leaves"],
    typicalPlants: ["zucchini", "cucumbers", "roses"],
    confirmationSteps: [
      "Look for a dusty white coating on leaf surfaces.",
      "Check whether crowded growth is limiting airflow.",
      "Remove a leaf and compare symptoms across several plants."
    ],
    fixes: ["improve-airflow", "protect-plants-with-netting", "spray-neem-oil"],
    tools: ["bypass-pruners", "garden-netting", "neem-oil"],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "aphids",
    name: "Aphids",
    category: "Pest",
    description:
      "Aphids cluster on tender growth, distort leaves, and leave sticky residue that can lead to more trouble later.",
    symptoms: ["holes-in-leaves", "curling-leaves"],
    typicalPlants: ["roses", "peppers", "hydrangeas"],
    confirmationSteps: [
      "Inspect the undersides of new leaves and stems.",
      "Look for sticky honeydew or ants moving across the plant.",
      "Check whether distorted growth is concentrated on soft new tissue."
    ],
    fixes: ["improve-airflow", "spray-neem-oil"],
    tools: ["bypass-pruners", "garden-netting", "neem-oil"],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "blossom-drop",
    name: "Blossom drop",
    category: "Environment",
    description:
      "Flowers open and then drop before setting fruit, usually from temperature extremes, inconsistent watering during bloom, or weak pollination rather than a nutrient problem.",
    symptoms: ["plants-not-producing-fruit"],
    typicalPlants: ["tomatoes", "peppers"],
    confirmationSteps: [
      "Check daytime and nighttime temperatures during the bloom period against the plant's normal range.",
      "Watch a few flowers over several days to see whether they drop without any fruit swelling behind them.",
      "Review recent watering consistency, since drought stress during bloom can make drop worse."
    ],
    fixes: ["improve-pollination-and-fruit-set"],
    tools: ["soil-moisture-meters"],
    sources: ["src-pennstate-watering"]
  }
];
