import type { Symptom } from "@/lib/types";

export const symptoms: Symptom[] = [
  {
    slug: "yellow-leaves",
    name: "Yellow leaves",
    questionTitle: "Why are my plant leaves turning yellow?",
    description:
      "Yellow leaves are a symptom, not a diagnosis. Start by checking moisture, leaf pattern, and which leaves changed first.",
    quickAnswer:
      "Yellow leaves can result from watering problems, nutrient deficiencies, disease, pests, or normal aging.",
    aliases: ["Leaves turning yellow", "Yellowing leaves", "Plant turning yellow"],
    bodyArea: "Leaf",
    urgency: "Medium",
    commonCauses: [
      { slug: "overwatering", confidence: 94 },
      { slug: "nitrogen-deficiency", confidence: 62 },
      { slug: "poor-drainage", confidence: 58 },
      { slug: "powdery-mildew", confidence: 34 }
    ],
    relatedSymptoms: ["wilting", "curling-leaves", "soil-staying-wet"],
    recommendedTools: ["soil-moisture-meters", "raised-bed-tools", "soil-test-kits"],
    fieldCheck:
      "Push a finger about two inches into the soil. If the soil remains wet several days after watering, poor drainage or excess watering may be involved.",
    firstSteps: [
      "Check the soil before adding fertilizer.",
      "Notice whether old leaves or new leaves changed first.",
      "Look for spots, powder, or distorted growth before treating for pests."
    ],
    patterns: [
      {
        observation: "Lower leaves yellow",
        likelyCause: "Natural aging or nitrogen deficiency",
        checkFirst: "Compare older leaves to new growth"
      },
      {
        observation: "Yellow leaves with wet soil",
        likelyCause: "Overwatering or poor drainage",
        checkFirst: "Check soil moisture and drainage"
      },
      {
        observation: "Yellowing between veins",
        likelyCause: "Iron or other nutrient issue",
        checkFirst: "Look at leaf pattern and newest growth"
      },
      {
        observation: "Yellow leaves with white coating",
        likelyCause: "Powdery mildew",
        checkFirst: "Inspect leaf surfaces for powder"
      }
    ],
    sources: ["src-pennstate-watering", "src-umn-nutrients", "src-ucipm-powdery-mildew"]
  },
  {
    slug: "wilting",
    name: "Wilting",
    questionTitle: "Why are my plants wilting?",
    description:
      "Wilting can come from soil that is too dry, too wet, too hot, or from damaged roots. Soil condition matters more than the leaf posture alone.",
    quickAnswer:
      "Start by checking the root zone before assuming your plant needs more water.",
    aliases: ["Drooping plants", "Wilted plants"],
    bodyArea: "Whole plant",
    urgency: "High in hot weather",
    commonCauses: [
      { slug: "underwatering", confidence: 85 },
      { slug: "overwatering", confidence: 70 },
      { slug: "poor-drainage", confidence: 64 }
    ],
    relatedSymptoms: ["yellow-leaves", "curling-leaves"],
    recommendedTools: ["soil-moisture-meters"],
    fieldCheck:
      "Check the soil in the morning and again late in the day. Temporary afternoon wilt behaves differently from ongoing root-zone stress.",
    firstSteps: [
      "Check the soil before watering again.",
      "Watch whether the plant rebounds overnight.",
      "Inspect roots or drainage if wilting happens in wet soil."
    ],
    patterns: [
      {
        observation: "Wilt with dry soil",
        likelyCause: "Underwatering or heat stress",
        checkFirst: "Check root-zone moisture depth"
      },
      {
        observation: "Wilt with wet soil",
        likelyCause: "Overwatering or drainage trouble",
        checkFirst: "Confirm how long the soil stays wet"
      }
    ],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "holes-in-leaves",
    name: "Holes in leaves",
    questionTitle: "What is causing holes in my plant leaves?",
    description:
      "Leaf holes usually point to physical feeding damage or abrasion, not a nutrient problem.",
    quickAnswer:
      "Look for the pattern of damage before reaching for a spray. Clean holes, ragged edges, and nighttime damage suggest different causes.",
    aliases: ["Chewed leaves"],
    bodyArea: "Leaf",
    urgency: "Low to medium",
    commonCauses: [{ slug: "aphids", confidence: 38 }],
    relatedSymptoms: ["curling-leaves"],
    recommendedTools: ["garden-netting", "neem-oil"],
    fieldCheck:
      "Inspect leaves early in the morning and again at dusk. Some pests hide during the day.",
    firstSteps: [
      "Look under leaves before treating anything.",
      "Note whether damage is on tender new growth or older leaves.",
      "Protect the plant only after you know what is causing the damage."
    ],
    patterns: [
      {
        observation: "Small holes in tender new leaves",
        likelyCause: "Insect feeding",
        checkFirst: "Inspect undersides and nearby stems"
      }
    ],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "soil-staying-wet",
    name: "Soil staying wet",
    questionTitle: "Why is my garden soil staying wet too long?",
    description:
      "Soil that stays wet too long usually points to watering frequency, container drainage, or underlying soil structure.",
    quickAnswer:
      "If the soil remains soggy for days, do not keep watering on schedule. Confirm drainage first.",
    aliases: ["Wet soil", "Soggy soil"],
    bodyArea: "Root zone",
    urgency: "Medium",
    commonCauses: [
      { slug: "poor-drainage", confidence: 89 },
      { slug: "overwatering", confidence: 82 }
    ],
    relatedSymptoms: ["yellow-leaves", "wilting"],
    recommendedTools: ["soil-moisture-meters", "raised-bed-tools"],
    fieldCheck:
      "Check both the surface and deeper soil. Some beds crust on top while staying wet below.",
    firstSteps: [
      "Pause watering and measure how quickly the soil actually dries.",
      "Check drainage holes, grade, and low spots.",
      "Switch to slower watering methods if runoff and pooling happen together."
    ],
    patterns: [
      {
        observation: "Wet for several days after rain",
        likelyCause: "Poor drainage",
        checkFirst: "Check site grade and soil structure"
      },
      {
        observation: "Wet only after frequent irrigation",
        likelyCause: "Overwatering",
        checkFirst: "Review schedule and duration"
      }
    ],
    sources: ["src-pennstate-watering"]
  },
  {
    slug: "white-powder-on-leaves",
    name: "White powder on leaves",
    questionTitle: "Why is there white powder on my plant leaves?",
    description:
      "A white or dusty coating often points to powdery mildew, especially where air movement is poor.",
    quickAnswer:
      "Confirm that the coating sits on the leaf surface before treating it like a nutrient issue.",
    aliases: ["Powder on leaves", "White mildew"],
    bodyArea: "Leaf",
    urgency: "Medium",
    commonCauses: [{ slug: "powdery-mildew", confidence: 95 }],
    relatedSymptoms: ["yellow-leaves"],
    recommendedTools: ["bypass-pruners", "neem-oil"],
    fieldCheck:
      "Compare shaded and crowded plants to more open ones. Mildew often shows up first where airflow is limited.",
    firstSteps: [
      "Remove heavily affected leaves first.",
      "Reduce crowding before buying treatments.",
      "Avoid wetting foliage late in the day."
    ],
    patterns: [
      {
        observation: "White coating with crowded foliage",
        likelyCause: "Powdery mildew",
        checkFirst: "Check airflow and plant spacing"
      }
    ],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "curling-leaves",
    name: "Curling leaves",
    questionTitle: "Why are my plant leaves curling?",
    description:
      "Curling leaves usually point to water stress, heat, or sap-feeding pests. The direction of the curl matters less than what you find when you check the plant closely.",
    quickAnswer:
      "Check the undersides of new growth for pests before assuming curling is a watering or heat problem.",
    aliases: ["Leaves rolling", "Cupped leaves", "Leaves curling up"],
    bodyArea: "Leaf",
    urgency: "Low to medium",
    commonCauses: [
      { slug: "aphids", confidence: 55 },
      { slug: "underwatering", confidence: 48 }
    ],
    relatedSymptoms: ["yellow-leaves", "holes-in-leaves", "wilting"],
    recommendedTools: ["garden-netting", "neem-oil", "soil-moisture-meters"],
    fieldCheck:
      "Inspect the undersides of curling leaves and the newest growth tips for clusters of small insects before treating for anything else.",
    firstSteps: [
      "Check soil moisture before treating for pests.",
      "Inspect the undersides of curled leaves and stems for aphids or other insects.",
      "Note whether curling is limited to new growth or spread across the whole plant."
    ],
    patterns: [
      {
        observation: "Curling with visible insects underneath",
        likelyCause: "Aphids or other sap-feeding pests",
        checkFirst: "Inspect undersides of new growth and stems"
      },
      {
        observation: "Curling with dry soil and hot weather",
        likelyCause: "Heat or water stress",
        checkFirst: "Check root-zone moisture depth"
      },
      {
        observation: "Curling with no pests and moist soil",
        likelyCause: "Environmental stress or a viral issue that needs monitoring",
        checkFirst: "Compare against nearby plants of the same type"
      }
    ],
    sources: ["src-ucipm-powdery-mildew", "src-pennstate-watering"]
  },
  {
    slug: "plants-not-producing-fruit",
    name: "Plants not producing fruit",
    questionTitle: "Why isn't my plant producing fruit?",
    description:
      "Fruit set problems usually come down to bloom-time temperature, watering consistency, or excess nitrogen rather than a disease or pest.",
    quickAnswer:
      "Watch whether flowers open and drop without swelling into fruit before changing your fertilizer routine.",
    aliases: ["No fruit", "Flowers but no fruit", "Blossom drop"],
    bodyArea: "Whole plant",
    urgency: "Low",
    commonCauses: [
      { slug: "blossom-drop", confidence: 58 },
      { slug: "nitrogen-deficiency", confidence: 22 }
    ],
    relatedSymptoms: ["yellow-leaves"],
    recommendedTools: ["soil-moisture-meters"],
    fieldCheck:
      "Watch a few flowers over several days. If they open, dry up, and drop without any fruit swelling behind them, that points to blossom drop rather than a nutrient problem.",
    firstSteps: [
      "Check bloom-period temperatures before changing fertilizer.",
      "Review recent fertilizing history for excess nitrogen.",
      "Confirm pollinator activity, or hand-pollinate, if flowers are dropping."
    ],
    patterns: [
      {
        observation: "Flowers open and drop without swelling",
        likelyCause: "Blossom drop from heat or inconsistent watering",
        checkFirst: "Check bloom-period temperatures and watering"
      },
      {
        observation: "Lush, dark green growth with few flowers",
        likelyCause: "Excess nitrogen favoring leaves over fruit",
        checkFirst: "Review recent fertilizing history"
      },
      {
        observation: "Pale, stunted plant with few flowers",
        likelyCause: "Nitrogen deficiency limiting overall vigor",
        checkFirst: "Compare against healthy plants of the same age"
      }
    ],
    sources: ["src-pennstate-watering", "src-umn-nutrients"]
  }
];
