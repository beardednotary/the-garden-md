import type { Plant } from "@/lib/types";

export const plants: Plant[] = [
  {
    slug: "tomatoes",
    name: "Tomatoes",
    season: "Warm season",
    difficulty: "Moderate",
    commonProblems: ["yellow-leaves", "wilting", "plants-not-producing-fruit", "blossom-end-rot"],
    recommendedSystems: ["raised-bed-watering", "drip-irrigation-for-one-raised-bed"],
    summary:
      "Tomatoes reward consistent moisture, decent airflow, and simple observation before treatment."
  },
  {
    slug: "peppers",
    name: "Peppers",
    season: "Warm season",
    difficulty: "Easy to moderate",
    commonProblems: ["yellow-leaves", "curling-leaves", "blossom-end-rot"],
    recommendedSystems: ["drip-irrigation-for-one-raised-bed"],
    summary:
      "Peppers usually perform best when watering is steady and the root zone stays warm rather than waterlogged."
  },
  {
    slug: "cucumbers",
    name: "Cucumbers",
    season: "Warm season",
    difficulty: "Moderate",
    commonProblems: ["white-powder-on-leaves", "yellow-leaves"],
    recommendedSystems: ["raised-bed-watering"],
    summary:
      "Cucumbers are productive, but mildew and watering swings show up quickly once the canopy gets crowded."
  },
  {
    slug: "zucchini",
    name: "Zucchini",
    season: "Warm season",
    difficulty: "Easy to moderate",
    commonProblems: ["white-powder-on-leaves", "yellow-leaves"],
    recommendedSystems: ["raised-bed-watering"],
    summary:
      "Zucchini grows fast and produces heavily, but powdery mildew shows up almost every season once the canopy gets dense — airflow and timing matter more than any spray."
  },
  {
    slug: "roses",
    name: "Roses",
    season: "Perennial",
    difficulty: "Moderate",
    commonProblems: ["black-spot-on-leaves", "holes-in-leaves", "white-powder-on-leaves"],
    recommendedSystems: ["planning-a-garden-irrigation-system"],
    summary:
      "Roses reward attention to sanitation and airflow more than any single spray, since both black spot and aphids get worse in crowded, humid conditions."
  },
  {
    slug: "hydrangeas",
    name: "Hydrangeas",
    season: "Perennial",
    difficulty: "Moderate",
    commonProblems: ["yellow-leaves", "wilting", "brown-leaf-tips-and-edges"],
    recommendedSystems: ["vacation-watering"],
    summary:
      "Hydrangeas are a good reminder that heat, soil moisture, and drainage all need to be checked together."
  },
  {
    slug: "pothos",
    name: "Pothos",
    season: "Indoor, year-round",
    difficulty: "Easy",
    commonProblems: ["yellow-leaves", "roots-growing-out-of-pot", "leggy-stretched-growth"],
    recommendedSystems: ["vacation-watering", "container-watering-system"],
    summary:
      "One of the most forgiving houseplants, pothos tolerates missed waterings and low light better than most, but overwatering is still the most common way to lose one."
  },
  {
    slug: "snake-plant",
    name: "Snake plant",
    season: "Indoor, year-round",
    difficulty: "Easy",
    commonProblems: ["soil-staying-wet", "roots-growing-out-of-pot"],
    recommendedSystems: ["vacation-watering", "container-watering-system"],
    summary:
      "Snake plants store water in thick leaves and are far more likely to be killed by overwatering than by neglect."
  },
  {
    slug: "peace-lily",
    name: "Peace lily",
    season: "Indoor, year-round",
    difficulty: "Easy to moderate",
    commonProblems: ["wilting", "brown-leaf-tips-and-edges", "small-flies-around-soil"],
    recommendedSystems: ["container-watering-system"],
    summary:
      "Peace lilies wilt dramatically when thirsty, which makes them easy to read, but that same drama makes chronic underwatering easy to mistake for a bigger problem."
  },
  {
    slug: "fiddle-leaf-fig",
    name: "Fiddle-leaf fig",
    season: "Indoor, year-round",
    difficulty: "Moderate to hard",
    commonProblems: ["brown-leaf-tips-and-edges", "sudden-leaf-drop", "yellow-leaves"],
    recommendedSystems: ["container-watering-system"],
    summary:
      "Fiddle-leaf figs are sensitive to change, dropping leaves in response to drafts, moves, or watering swings that most other houseplants shrug off."
  },
  {
    slug: "succulents-and-cacti",
    name: "Succulents and cacti",
    season: "Indoor or outdoor",
    difficulty: "Easy",
    commonProblems: ["soil-staying-wet", "roots-growing-out-of-pot"],
    recommendedSystems: ["container-watering-system"],
    summary:
      "Succulents and cacti are adapted to infrequent water and fast-draining soil, so most problems trace back to watering too often or a pot that doesn't drain."
  }
];
