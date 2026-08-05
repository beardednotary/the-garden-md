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
    relatedTools: ["hose-timers", "raised-bed-tools"]
  },
  {
    slug: "vacation-watering",
    name: "Vacation watering",
    summary:
      "A basic plan for keeping beds and containers alive while you are away without soaking everything first.",
    idealFor: ["Summer travel", "Containers", "Mixed sun exposures"],
    watchFor: ["Pre-trip overwatering", "Clogged emitters", "Unstable hose connections"],
    relatedTools: ["hose-timers", "soil-moisture-meters"]
  }
];
