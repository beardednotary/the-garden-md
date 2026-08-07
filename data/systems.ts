import type { SystemEntry } from "@/lib/types";

export const systems: SystemEntry[] = [
  {
    slug: "raised-bed-watering",
    name: "Raised bed watering",
    summary:
      "A practical watering setup for gardeners who want fewer stress swings and more predictable soil moisture.",
    idealFor: ["Vegetable beds", "Mixed annual beds", "Gardeners who water by hand now"],
    watchFor: ["Shallow daily watering", "Dry pockets near edges", "Inconsistent timer schedules"],
    relatedTools: ["hose-timers", "soil-moisture-meters"]
  },
  {
    slug: "drip-irrigation-for-one-raised-bed",
    name: "Drip irrigation for one raised bed",
    summary:
      "A simple one-bed drip setup that keeps the first project manageable.",
    idealFor: ["New raised bed gardeners", "Hot summer watering", "Vacation coverage"],
    watchFor: ["Wrong pressure", "Emitter gaps", "Timer drift"],
    relatedTools: ["hose-timers", "raised-bed-tools", "drip-irrigation-kits"]
  },
  {
    slug: "vacation-watering",
    name: "Vacation watering",
    summary:
      "A basic plan for keeping beds and containers alive while you are away without soaking everything first.",
    idealFor: ["Summer travel", "Containers", "Mixed sun exposures"],
    watchFor: ["Pre-trip overwatering", "Clogged emitters", "Unstable hose connections"],
    relatedTools: ["hose-timers", "soil-moisture-meters"]
  },
  {
    slug: "planning-a-garden-irrigation-system",
    name: "Planning a garden irrigation system",
    summary:
      "Work out what you actually need before buying parts. Zone count, timer type, and delivery method matter more than any specific product.",
    idealFor: [
      "Gardeners with more than one bed or area to water",
      "Anyone about to buy a full irrigation kit",
      "Yards with mixed sun exposure and container areas"
    ],
    watchFor: [
      "Buying a kit sized for the wrong area",
      "Skipping a pressure regulator",
      "One timer trying to run zones with different water needs"
    ],
    relatedTools: ["hose-timers", "drip-irrigation-kits", "soil-moisture-meters"]
  },
  {
    slug: "container-watering-system",
    name: "Container and houseplant watering system",
    summary:
      "A simple setup for keeping potted plants and houseplants on a consistent schedule without daily hand-watering.",
    idealFor: [
      "Multiple containers or houseplants in one area",
      "Vacation or travel coverage",
      "Plants that dry out faster than in-ground beds"
    ],
    watchFor: [
      "Pots without drainage holes",
      "One watering schedule for pots of very different sizes",
      "Self-watering reservoirs that stay full and never actually dry out"
    ],
    relatedTools: ["soil-moisture-meters", "hose-timers"]
  }
];
