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
    slug: "hydrangeas",
    name: "Hydrangeas",
    season: "Perennial",
    difficulty: "Moderate",
    commonProblems: ["yellow-leaves", "wilting", "brown-leaf-tips-and-edges"],
    recommendedSystems: ["vacation-watering"],
    summary:
      "Hydrangeas are a good reminder that heat, soil moisture, and drainage all need to be checked together."
  }
];
