import type { Cause } from "@/lib/types";

export const causes: Cause[] = [
  {
    slug: "underwatering",
    name: "Underwatering",
    category: "Water",
    description:
      "Underwatering leaves roots without enough moisture to keep foliage turgid, and it is often worse in containers, sandy soil, or hot, windy weather.",
    symptoms: ["wilting", "curling-leaves"],
    typicalPlants: ["tomatoes", "peppers", "hydrangeas", "peace-lily"],
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
    typicalPlants: ["tomatoes", "peppers", "hydrangeas", "snake-plant", "succulents-and-cacti"],
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
    sources: ["src-umn-nutrients"],
    image: {
      src: "/images/diagnose/yellow-leaves-1.jpg",
      alt: "Uniformly yellowish older citrus leaves next to greener new foliage, a sign of nitrogen deficiency",
      credit: "Photo: David Rosen, UC IPM",
      creditUrl: "https://ipm.ucanr.edu/home-and-landscape/common-nutrient-deficiency-symptoms/"
    }
  },
  {
    slug: "iron-deficiency",
    name: "Iron or manganese deficiency",
    category: "Nutrient",
    description:
      "Iron and manganese deficiency show up as yellowing between the leaf veins while the veins themselves stay green, usually on new growth first. High soil pH is the most common reason the plant can't take up iron or manganese that's already present in the soil.",
    symptoms: ["yellow-leaves"],
    typicalPlants: ["hydrangeas"],
    confirmationSteps: [
      "Check whether yellowing appears between the veins while the veins stay green.",
      "Note whether it shows up on new growth first, unlike nitrogen deficiency which affects older leaves first.",
      "Test soil pH, since alkaline soil is the most common reason these micronutrients become unavailable to roots."
    ],
    fixes: ["test-garden-soil"],
    tools: ["soil-test-kits"],
    sources: ["src-umn-nutrients"],
    image: {
      src: "/images/diagnose/yellow-leaves-2.jpg",
      alt: "Maple leaves with yellow tissue between still-green veins, a sign of iron or manganese deficiency",
      credit: "Photo: HortScience, Inc., Pleasanton, CA",
      creditUrl: "https://ipm.ucanr.edu/home-and-landscape/common-nutrient-deficiency-symptoms/"
    }
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
    sources: ["src-ucipm-powdery-mildew"],
    image: {
      src: "/images/diagnose/white-powder-on-leaves.jpg",
      alt: "Phlox leaves covered in white powdery mildew patches",
      credit: "Photo: Bruce Watt, University of Maine, Bugwood.org (CC BY-NC)",
      creditUrl: "https://extension.psu.edu/diagnosing-poor-plant-health"
    }
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
  },
  {
    slug: "calcium-uptake-disruption",
    name: "Calcium uptake disruption",
    category: "Water",
    description:
      "Blossom end rot is usually caused by inconsistent watering interrupting how calcium moves into developing fruit, not a true shortage of calcium in the soil.",
    symptoms: ["blossom-end-rot"],
    typicalPlants: ["tomatoes", "peppers"],
    confirmationSteps: [
      "Check whether watering has swung between very dry and very wet recently.",
      "Confirm the dark, sunken spot is on the blossom end of the fruit rather than damage from an insect or the stem end.",
      "Rule out an actual soil calcium deficiency with a soil test before adding calcium products."
    ],
    fixes: ["water-consistently-during-fruiting"],
    tools: ["soil-moisture-meters", "drip-irrigation-kits"],
    sources: ["src-pennstate-watering", "src-umn-nutrients"]
  },
  {
    slug: "leaf-scorch",
    name: "Leaf scorch",
    category: "Environment",
    description:
      "Leaf scorch is tissue damage at the tips and edges of leaves from heat, wind, drought, or a buildup of fertilizer salts, and it does not reverse once it appears.",
    symptoms: ["brown-leaf-tips-and-edges"],
    typicalPlants: ["hydrangeas", "tomatoes", "peppers"],
    confirmationSteps: [
      "Check whether browning is limited to tips and margins rather than spreading in blotches across the leaf.",
      "Review recent heat, wind exposure, or missed waterings.",
      "Review recent fertilizing, since over-fertilizing can scorch leaves the same way drought does."
    ],
    fixes: ["reduce-leaf-scorch"],
    tools: ["soil-moisture-meters", "raised-bed-tools"],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "black-spot",
    name: "Black spot",
    category: "Disease",
    description:
      "Black spot is a fungal disease, most familiar on roses, that causes dark spots with fringed edges surrounded by yellowing, and it spreads fastest when foliage stays wet.",
    symptoms: ["black-spot-on-leaves"],
    typicalPlants: ["roses"],
    confirmationSteps: [
      "Look for dark, roughly circular spots with feathered edges, often ringed by yellow tissue.",
      "Check whether affected leaves are dropping earlier than unaffected ones.",
      "Note whether watering wets the foliage or splashes soil onto lower leaves."
    ],
    fixes: ["remove-and-treat-black-spot", "improve-airflow", "spray-neem-oil"],
    tools: ["bypass-pruners", "copper-fungicide", "neem-oil"],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "insufficient-light",
    name: "Insufficient light",
    category: "Environment",
    description:
      "Without enough light, plants stretch toward the nearest light source, producing thin, pale, widely spaced growth instead of compact, sturdy stems.",
    symptoms: ["leggy-stretched-growth"],
    typicalPlants: ["tomatoes", "peppers", "pothos"],
    confirmationSteps: [
      "Check how many hours of direct light the plant actually receives where it currently sits.",
      "Compare stem spacing and color to a healthy plant of the same age and species.",
      "Note whether the problem started after a change in location, season, or nearby shade."
    ],
    fixes: ["add-supplemental-light"],
    tools: ["grow-lights"],
    sources: ["src-umd-seedlings"]
  },
  {
    slug: "low-humidity",
    name: "Low humidity",
    category: "Environment",
    description:
      "Tropical houseplants evolved in humid conditions, and dry indoor air, especially during heating season, causes crispy brown tips and edges that won't turn green again.",
    symptoms: ["brown-leaf-tips-and-edges"],
    typicalPlants: ["fiddle-leaf-fig", "peace-lily"],
    confirmationSteps: [
      "Check whether the browning is worse in winter or right after the heat or AC kicked on for the season.",
      "Rule out fertilizer buildup first by checking for a white crust on the soil surface or pot rim.",
      "Compare the plant's native humidity needs to the room it's actually in."
    ],
    fixes: ["increase-humidity"],
    tools: ["humidifier"],
    sources: ["src-clemson-houseplants"]
  },
  {
    slug: "root-bound",
    name: "Root-bound",
    category: "Soil",
    description:
      "A plant left in too small a pot for too long runs out of room, and the roots circle the inside of the container instead of growing outward, which stunts growth and makes the plant hard to water evenly.",
    symptoms: ["roots-growing-out-of-pot"],
    typicalPlants: ["pothos", "snake-plant", "succulents-and-cacti"],
    confirmationSteps: [
      "Check for roots visibly circling the surface or growing out of the drainage holes.",
      "Note whether water runs straight through the pot without the soil absorbing much of it.",
      "Compare how long it's been since the plant was last repotted to its current size."
    ],
    fixes: ["repot-a-root-bound-plant"],
    tools: [],
    sources: ["src-clemson-houseplants"]
  },
  {
    slug: "spider-mites",
    name: "Spider mites",
    category: "Pest",
    description:
      "Spider mites are tiny sap-feeding pests that thrive in warm, dry indoor air and cause fine light-colored stippling on leaves, sometimes with visible webbing in heavy infestations.",
    symptoms: ["stippled-or-webbed-leaves"],
    typicalPlants: ["fiddle-leaf-fig", "succulents-and-cacti"],
    confirmationSteps: [
      "Hold a white sheet of paper under a leaf and tap it; moving specks confirm mites rather than a nutrient issue.",
      "Check the undersides of leaves and any fine webbing between leaves or stems.",
      "Note whether the plant has been in an especially warm, dry spot recently."
    ],
    fixes: ["treat-spider-mites"],
    tools: ["neem-oil"],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "fungus-gnats",
    name: "Fungus gnats",
    category: "Pest",
    description:
      "Fungus gnats are small dark flies that breed in consistently moist potting soil. The adults are mostly a nuisance, but their larvae can damage fine roots on young or weak plants.",
    symptoms: ["small-flies-around-soil"],
    typicalPlants: ["pothos", "peace-lily"],
    confirmationSteps: [
      "Check whether the flies show up mainly when the soil surface is disturbed or watered.",
      "Confirm the top of the soil has stayed damp for several days in a row.",
      "Look for small worm-like larvae in the top inch of soil if you dig gently."
    ],
    fixes: ["control-fungus-gnats"],
    tools: ["sticky-traps"],
    sources: ["src-clemson-houseplants"]
  },
  {
    slug: "mealybugs-or-scale",
    name: "Mealybugs or scale",
    category: "Pest",
    description:
      "Mealybugs show up as cottony white masses in leaf joints, and scale looks like small waxy brown bumps stuck to stems and leaves. Both feed on sap and leave a sticky residue behind.",
    symptoms: ["sticky-residue-or-cottony-spots"],
    typicalPlants: ["succulents-and-cacti", "pothos"],
    confirmationSteps: [
      "Look closely at leaf joints and stems for cottony white clusters or small brown bumps that don't rub off easily.",
      "Check nearby surfaces for a sticky, shiny residue the pests leave behind.",
      "Inspect new plants closely before placing them near others, since this is a common way infestations spread."
    ],
    fixes: ["treat-mealybugs-and-scale"],
    tools: ["neem-oil"],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "temperature-stress",
    name: "Temperature stress or shock",
    category: "Environment",
    description:
      "Cold drafts, heating vents, or a sudden change in location can cause a houseplant to drop leaves quickly, even when watering and light are otherwise fine.",
    symptoms: ["sudden-leaf-drop"],
    typicalPlants: ["fiddle-leaf-fig", "peace-lily"],
    confirmationSteps: [
      "Check whether the plant sits near a drafty window, exterior door, or heating or cooling vent.",
      "Note whether the drop followed a recent move, temperature swing, or seasonal change.",
      "Rule out under- or overwatering first, since both can also cause leaf drop."
    ],
    fixes: ["stabilize-temperature-and-location"],
    tools: [],
    sources: ["src-clemson-houseplants"]
  }
];
