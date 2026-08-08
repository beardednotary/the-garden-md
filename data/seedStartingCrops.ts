export type SeedStartingCrop = {
  slug: string;
  name: string;
  plantSlug?: string;
  indoorStart?: { minWeeks: number; maxWeeks: number };
  outdoor: { minWeeks: number; maxWeeks: number; direction: "before" | "after"; method: string };
  notes: string;
};

export const seedStartingCrops: SeedStartingCrop[] = [
  {
    slug: "tomatoes",
    name: "Tomatoes",
    plantSlug: "tomatoes",
    indoorStart: { minWeeks: 6, maxWeeks: 8 },
    outdoor: { minWeeks: 1, maxWeeks: 2, direction: "after", method: "Transplant outdoors" },
    notes: "Frost-sensitive. Wait until nights stay reliably above 50°F before moving plants outside."
  },
  {
    slug: "peppers",
    name: "Peppers",
    plantSlug: "peppers",
    indoorStart: { minWeeks: 8, maxWeeks: 10 },
    outdoor: { minWeeks: 2, maxWeeks: 3, direction: "after", method: "Transplant outdoors" },
    notes: "Needs warm soil. A late cold snap can stunt growth for the rest of the season."
  },
  {
    slug: "basil",
    name: "Basil",
    indoorStart: { minWeeks: 6, maxWeeks: 8 },
    outdoor: { minWeeks: 1, maxWeeks: 2, direction: "after", method: "Transplant outdoors" },
    notes: "Very frost-sensitive. Even a light chill can blacken the leaves."
  },
  {
    slug: "cucumbers",
    name: "Cucumbers",
    plantSlug: "cucumbers",
    indoorStart: { minWeeks: 3, maxWeeks: 4 },
    outdoor: { minWeeks: 1, maxWeeks: 2, direction: "after", method: "Direct sow" },
    notes: "Dislikes root disturbance. Direct sowing after the soil warms usually outperforms transplants."
  },
  {
    slug: "zucchini",
    name: "Zucchini",
    plantSlug: "zucchini",
    indoorStart: { minWeeks: 3, maxWeeks: 4 },
    outdoor: { minWeeks: 1, maxWeeks: 2, direction: "after", method: "Direct sow" },
    notes: "Grows fast enough that a head start indoors is optional, not required."
  },
  {
    slug: "beans",
    name: "Beans",
    outdoor: { minWeeks: 1, maxWeeks: 2, direction: "after", method: "Direct sow" },
    notes: "Doesn't transplant well. Sow directly once the soil has warmed."
  },
  {
    slug: "peas",
    name: "Peas",
    outdoor: { minWeeks: 4, maxWeeks: 6, direction: "before", method: "Direct sow" },
    notes: "Very cold-hardy and can handle a light frost. One of the earliest crops you can plant."
  },
  {
    slug: "lettuce",
    name: "Lettuce",
    indoorStart: { minWeeks: 4, maxWeeks: 6 },
    outdoor: { minWeeks: 2, maxWeeks: 4, direction: "before", method: "Direct sow or transplant" },
    notes: "Cold-hardy but bolts in heat, so getting it in early matters more than usual."
  },
  {
    slug: "spinach",
    name: "Spinach",
    outdoor: { minWeeks: 4, maxWeeks: 6, direction: "before", method: "Direct sow" },
    notes: "Very cold-hardy. Usually the first thing you can plant in spring."
  },
  {
    slug: "carrots",
    name: "Carrots",
    outdoor: { minWeeks: 2, maxWeeks: 4, direction: "before", method: "Direct sow" },
    notes: "Doesn't transplant. Direct sow only, and thin seedlings once they come up."
  }
];
