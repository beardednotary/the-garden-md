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
      { slug: "iron-deficiency", confidence: 40 },
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
    sources: ["src-pennstate-watering", "src-umn-nutrients", "src-ucipm-powdery-mildew"],
    images: [
      {
        src: "/images/diagnose/yellow-leaves-1.jpg",
        alt: "Uniformly yellowish older citrus leaves next to greener new foliage, a sign of nitrogen deficiency",
        credit: "Photo: David Rosen, UC IPM",
        creditUrl: "https://ipm.ucanr.edu/home-and-landscape/common-nutrient-deficiency-symptoms/"
      },
      {
        src: "/images/diagnose/yellow-leaves-2.jpg",
        alt: "Maple leaves with yellow tissue between still-green veins, a sign of iron or manganese deficiency",
        credit: "Photo: HortScience, Inc., Pleasanton, CA",
        creditUrl: "https://ipm.ucanr.edu/home-and-landscape/common-nutrient-deficiency-symptoms/"
      }
    ]
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
    sources: ["src-pennstate-watering"],
    images: [
      {
        src: "/images/diagnose/wilting.jpg",
        alt: "Soybean leaves wilting and developing brown, necrotic patches",
        credit: "Photo: Adriana Murillo-Williams, Penn State",
        creditUrl: "https://extension.psu.edu/your-plants-look-sick-now-what"
      }
    ]
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
    sources: ["src-ucipm-powdery-mildew"],
    images: [
      {
        src: "/images/diagnose/holes-in-leaves.jpg",
        alt: "Cherry leaf with irregular holes chewed by a forktailed bush katydid",
        credit: "Photo: Jack Kelly Clark, UC IPM",
        creditUrl: "https://ipm.ucanr.edu/agriculture/pear/katydids/"
      }
    ]
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
    sources: ["src-ucipm-powdery-mildew"],
    images: [
      {
        src: "/images/diagnose/white-powder-on-leaves.jpg",
        alt: "Phlox leaves covered in white powdery mildew patches",
        credit: "Photo: Bruce Watt, University of Maine, Bugwood.org (CC BY-NC)",
        creditUrl: "https://extension.psu.edu/diagnosing-poor-plant-health"
      }
    ]
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
  },
  {
    slug: "blossom-end-rot",
    name: "Blossom end rot",
    questionTitle: "Why does my fruit have a dark, sunken spot on the bottom?",
    description:
      "Blossom end rot is a dark, leathery, sunken spot at the blossom end of tomatoes and peppers. It is almost always about watering consistency, not a calcium product you need to buy.",
    quickAnswer:
      "Check your recent watering pattern before assuming the soil is short on calcium.",
    aliases: ["Rot on bottom of tomato", "Dark spot on fruit", "Sunken spot on tomato"],
    bodyArea: "Fruit",
    urgency: "Low to medium",
    commonCauses: [{ slug: "calcium-uptake-disruption", confidence: 80 }],
    relatedSymptoms: ["wilting"],
    recommendedTools: ["soil-moisture-meters", "drip-irrigation-kits"],
    fieldCheck:
      "Look at the fruit itself, not the soil. A dark, sunken, leathery patch specifically at the blossom end (opposite the stem) is the identifying sign.",
    firstSteps: [
      "Review whether watering has swung between very dry and very wet recently.",
      "Water more consistently before adding any calcium product.",
      "Remove affected fruit so the plant can direct energy elsewhere."
    ],
    patterns: [
      {
        observation: "Dark, sunken spot at the blossom end only",
        likelyCause: "Calcium uptake disruption from inconsistent watering",
        checkFirst: "Review recent watering pattern"
      },
      {
        observation: "Damage on multiple sides of the fruit or on the stem end",
        likelyCause: "Physical damage or a pest, not blossom end rot",
        checkFirst: "Inspect the fruit for entry holes or insects"
      }
    ],
    sources: ["src-pennstate-watering", "src-umn-nutrients"]
  },
  {
    slug: "brown-leaf-tips-and-edges",
    name: "Brown leaf tips and edges",
    questionTitle: "Why are the tips and edges of my plant's leaves turning brown?",
    description:
      "Browning that starts at the tips and margins usually points to leaf scorch from heat, wind, drought, or fertilizer salt buildup outdoors, or low humidity on indoor tropical houseplants, rather than disease.",
    quickAnswer:
      "Check recent watering, fertilizing, and indoor humidity before treating this as a disease.",
    aliases: ["Brown leaf edges", "Crispy leaf tips", "Leaf margin burn"],
    bodyArea: "Leaf",
    urgency: "Low",
    commonCauses: [
      { slug: "leaf-scorch", confidence: 70 },
      { slug: "low-humidity", confidence: 45 }
    ],
    relatedSymptoms: ["wilting", "yellow-leaves"],
    recommendedTools: ["soil-moisture-meters", "raised-bed-tools", "humidifier"],
    fieldCheck:
      "Check whether the browning is confined to tips and margins, with otherwise normal leaf color and shape. Scorch does not typically cause spots or a powdery coating.",
    firstSteps: [
      "Review recent heat, wind, or missed watering.",
      "Review recent fertilizing history for a possible salt buildup.",
      "For indoor plants, check whether the room is especially dry, particularly during heating season."
    ],
    patterns: [
      {
        observation: "Browning limited to tips and margins outdoors",
        likelyCause: "Leaf scorch from heat, wind, or drought",
        checkFirst: "Check recent watering and weather"
      },
      {
        observation: "Browning after a recent heavy feeding",
        likelyCause: "Fertilizer salt burn",
        checkFirst: "Review recent fertilizing history"
      },
      {
        observation: "Crispy tips on an indoor tropical plant, worse in winter",
        likelyCause: "Low indoor humidity",
        checkFirst: "Check room humidity, especially near heating vents"
      }
    ],
    sources: ["src-pennstate-watering", "src-clemson-houseplants"]
  },
  {
    slug: "black-spot-on-leaves",
    name: "Black spot on leaves",
    questionTitle: "Why does my rose have black spots on its leaves?",
    description:
      "Circular black or purple spots with feathered edges, often ringed by yellowing, point to black spot, a fungal disease especially common on roses in humid conditions.",
    quickAnswer:
      "Confirm the fringed, dark spots and check whether affected leaves are dropping before treating for a pest.",
    aliases: ["Black spots on rose leaves", "Purple spots on leaves"],
    bodyArea: "Leaf",
    urgency: "Medium",
    commonCauses: [{ slug: "black-spot", confidence: 88 }],
    relatedSymptoms: ["yellow-leaves", "white-powder-on-leaves"],
    recommendedTools: ["bypass-pruners", "copper-fungicide"],
    fieldCheck:
      "Look closely at the spot edges. Black spot has a feathered, irregular border, unlike the more uniform coating of powdery mildew.",
    firstSteps: [
      "Remove and dispose of affected leaves, including fallen ones, rather than composting them.",
      "Improve airflow and avoid wetting foliage when watering.",
      "Apply a copper fungicide if sanitation and airflow changes are not enough on their own."
    ],
    patterns: [
      {
        observation: "Dark spots with feathered edges and yellowing around them",
        likelyCause: "Black spot fungal disease",
        checkFirst: "Inspect spot edges and check for early leaf drop"
      },
      {
        observation: "Uniform white or gray dusty coating instead of spots",
        likelyCause: "Powdery mildew rather than black spot",
        checkFirst: "Compare the coating to a defined dark spot"
      }
    ],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "leggy-stretched-growth",
    name: "Leggy, stretched growth",
    questionTitle: "Why is my plant tall, thin, and stretched out?",
    description:
      "Thin, pale, widely spaced stems reaching toward a light source usually mean the plant is not getting enough light, most often seedlings started indoors.",
    quickAnswer:
      "Check how much direct light the plant actually gets where it currently sits before changing anything else.",
    aliases: ["Leggy seedlings", "Stretched seedlings", "Etiolation"],
    bodyArea: "Whole plant",
    urgency: "Low",
    commonCauses: [{ slug: "insufficient-light", confidence: 75 }],
    relatedSymptoms: ["yellow-leaves"],
    recommendedTools: ["grow-lights"],
    fieldCheck:
      "Compare stem spacing and color to a healthy plant of the same age. Wide gaps between leaves and pale, thin stems point to insufficient light rather than a nutrient issue.",
    firstSteps: [
      "Check how many hours of direct light the plant gets in its current spot.",
      "Move the plant closer to a light source or add a supplemental grow light.",
      "Avoid adding fertilizer as a first response, since more light is usually the actual fix."
    ],
    patterns: [
      {
        observation: "Pale, thin stems with wide gaps between leaves",
        likelyCause: "Insufficient light",
        checkFirst: "Check daily hours of direct light"
      },
      {
        observation: "Stretching toward one direction consistently",
        likelyCause: "A single, uneven light source",
        checkFirst: "Check for a nearby window or light fixture on one side"
      }
    ],
    sources: ["src-umd-seedlings"]
  },
  {
    slug: "roots-growing-out-of-pot",
    name: "Roots growing out of the pot",
    questionTitle: "Why are roots growing out of my plant's pot?",
    description:
      "Roots visible at the drainage holes or circling the soil surface usually mean the plant has outgrown its container and is root-bound.",
    quickAnswer:
      "If water runs straight through the pot without soaking in, the plant likely needs a bigger container.",
    aliases: ["Root bound plant", "Roots coming out of drainage holes", "Plant outgrew its pot"],
    bodyArea: "Root zone",
    urgency: "Low",
    commonCauses: [{ slug: "root-bound", confidence: 82 }],
    relatedSymptoms: ["wilting", "yellow-leaves"],
    recommendedTools: ["soil-moisture-meters"],
    fieldCheck:
      "Gently slide the plant out of its pot if possible. Roots densely circling the outside of the root ball confirm it's root-bound rather than a watering or light issue.",
    firstSteps: [
      "Check the drainage holes and soil surface for visible circling roots.",
      "Note how long it's been since the plant was last repotted.",
      "Water on a normal schedule and see whether water is absorbed or runs straight through."
    ],
    patterns: [
      {
        observation: "Roots visible at drainage holes or soil surface",
        likelyCause: "Root-bound plant that has outgrown its pot",
        checkFirst: "Check how long since the last repotting"
      },
      {
        observation: "Water runs straight through without soaking in",
        likelyCause: "Root mass has displaced most of the soil",
        checkFirst: "Slide the plant out of its pot to inspect the roots"
      }
    ],
    sources: ["src-clemson-houseplants"]
  },
  {
    slug: "stippled-or-webbed-leaves",
    name: "Stippled or webbed leaves",
    questionTitle: "Why do my plant's leaves have tiny light spots or webbing?",
    description:
      "Fine, light-colored speckling on leaves, especially with webbing between leaves or stems, points to spider mites rather than a nutrient or watering problem.",
    quickAnswer:
      "Check the undersides of leaves and tap a leaf over white paper to look for tiny moving specks before treating anything else.",
    aliases: ["Tiny webs on plant", "Speckled leaves", "Dusty-looking leaves"],
    bodyArea: "Leaf",
    urgency: "Medium",
    commonCauses: [{ slug: "spider-mites", confidence: 85 }],
    relatedSymptoms: ["curling-leaves", "yellow-leaves"],
    recommendedTools: ["neem-oil"],
    fieldCheck:
      "Hold a plain white sheet of paper under a leaf and tap it firmly. Tiny specks that start moving on the paper confirm spider mites.",
    firstSteps: [
      "Inspect the undersides of leaves and any webbing between leaves or stems.",
      "Isolate the plant from others while you confirm and treat, since mites spread easily.",
      "Increase humidity around the plant, since mites thrive in dry air."
    ],
    patterns: [
      {
        observation: "Fine light stippling with visible webbing",
        likelyCause: "Spider mites",
        checkFirst: "Tap a leaf over white paper to check for moving specks"
      }
    ],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "small-flies-around-soil",
    name: "Small flies around the soil",
    questionTitle: "Why are there small flies around my houseplant's soil?",
    description:
      "Small dark flies hovering near the soil surface are almost always fungus gnats, drawn to potting soil that has stayed damp for too long.",
    quickAnswer:
      "Let the top of the soil dry out more between waterings before treating for anything else.",
    aliases: ["Gnats in houseplants", "Fruit flies in soil", "Bugs flying around plant"],
    bodyArea: "Root zone",
    urgency: "Low",
    commonCauses: [{ slug: "fungus-gnats", confidence: 88 }],
    relatedSymptoms: ["soil-staying-wet"],
    recommendedTools: ["sticky-traps", "soil-moisture-meters"],
    fieldCheck:
      "Check whether the top inch of soil has stayed damp for several days. Fungus gnats need consistently moist soil to breed.",
    firstSteps: [
      "Let the soil surface dry out more between waterings.",
      "Set out a sticky trap to confirm and reduce the adult population.",
      "Avoid watering on a fixed schedule; check the soil first instead."
    ],
    patterns: [
      {
        observation: "Small flies near the soil, worse after watering",
        likelyCause: "Fungus gnats breeding in consistently moist soil",
        checkFirst: "Check how damp the top inch of soil has stayed"
      }
    ],
    sources: ["src-clemson-houseplants"]
  },
  {
    slug: "sticky-residue-or-cottony-spots",
    name: "Sticky residue or cottony spots",
    questionTitle: "What are the sticky spots or cottony bumps on my plant?",
    description:
      "Cottony white masses in leaf joints or small waxy bumps on stems, often paired with a sticky residue on and around the plant, point to mealybugs or scale.",
    quickAnswer:
      "Check leaf joints and stems closely for cottony clusters or small bumps before assuming it's dirt or damage.",
    aliases: ["White fuzzy spots on plant", "Sticky leaves houseplant", "Brown bumps on stem"],
    bodyArea: "Stem",
    urgency: "Medium",
    commonCauses: [{ slug: "mealybugs-or-scale", confidence: 85 }],
    relatedSymptoms: ["curling-leaves", "yellow-leaves"],
    recommendedTools: ["neem-oil"],
    fieldCheck:
      "Look closely at leaf joints and along stems. Cottony clusters that don't rub off easily, or small brown waxy bumps, confirm mealybugs or scale rather than dirt or disease.",
    firstSteps: [
      "Isolate the plant from others while you confirm and treat.",
      "Wipe visible pests off with a cotton swab dipped in rubbing alcohol before spraying anything.",
      "Check new plants closely before placing them near this one, since this is a common way infestations spread."
    ],
    patterns: [
      {
        observation: "Cottony white masses in leaf joints",
        likelyCause: "Mealybugs",
        checkFirst: "Check leaf joints and the undersides of leaves"
      },
      {
        observation: "Small waxy brown bumps on stems that don't rub off",
        likelyCause: "Scale",
        checkFirst: "Inspect stems closely for raised bumps"
      }
    ],
    sources: ["src-ucipm-powdery-mildew"]
  },
  {
    slug: "sudden-leaf-drop",
    name: "Sudden leaf drop",
    questionTitle: "Why did my plant suddenly drop its leaves?",
    description:
      "A houseplant dropping several leaves at once, without gradual yellowing first, usually points to a sudden environmental change rather than a slow watering or nutrient problem.",
    quickAnswer:
      "Check for cold drafts, heating vents, or a recent move before assuming it's a watering problem.",
    aliases: ["Plant losing leaves fast", "Leaves falling off suddenly", "Plant dropped all its leaves"],
    bodyArea: "Whole plant",
    urgency: "Medium",
    commonCauses: [
      { slug: "temperature-stress", confidence: 55 },
      { slug: "underwatering", confidence: 35 },
      { slug: "overwatering", confidence: 35 }
    ],
    relatedSymptoms: ["wilting", "yellow-leaves"],
    recommendedTools: ["soil-moisture-meters"],
    fieldCheck:
      "Check the plant's location for nearby drafts, exterior doors, or heating and cooling vents before checking the soil.",
    firstSteps: [
      "Check for cold drafts, heating vents, or air conditioning blowing directly on the plant.",
      "Note whether the drop followed a recent move or a sudden temperature swing.",
      "Check soil moisture to rule out a watering extreme before assuming it's temperature-related."
    ],
    patterns: [
      {
        observation: "Leaf drop after a move or temperature swing",
        likelyCause: "Temperature stress or shock",
        checkFirst: "Check for drafts, vents, or a recent location change"
      },
      {
        observation: "Leaf drop with consistently dry or consistently wet soil",
        likelyCause: "Underwatering or overwatering",
        checkFirst: "Check soil moisture at the root zone"
      }
    ],
    sources: ["src-clemson-houseplants", "src-pennstate-watering"]
  }
];
