"use client";

import Link from "next/link";
import { useState } from "react";
import { seedStartingCrops } from "@/data/seedStartingCrops";

function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function SeedStartingCalculator() {
  const [frostDateInput, setFrostDateInput] = useState("");

  const frostDate = frostDateInput ? new Date(`${frostDateInput}T00:00:00`) : null;
  const valid = frostDate !== null && !Number.isNaN(frostDate.getTime());

  return (
    <>
      <section className="mt-8 border border-border bg-paper-light p-5 shadow-panel">
        <h2 className="font-serif text-2xl text-green-dark">Your last spring frost date</h2>
        <label className="mt-4 block text-sm text-ink">
          <span className="mb-2 block font-semibold text-green-dark">Date</span>
          <input
            type="date"
            value={frostDateInput}
            onChange={(event) => setFrostDateInput(event.target.value)}
            className="w-full max-w-xs border border-border bg-paper px-3 py-2"
          />
        </label>
        <p className="mt-3 text-xs text-muted">
          Don't know your last frost date? Check your local extension office or NOAA climate normals for
          your area. Results update automatically once entered.
        </p>
      </section>

      <section className="mt-8 overflow-x-auto border border-border bg-paper-light p-5 shadow-panel">
        <h2 className="font-serif text-2xl text-green-dark">Planting windows</h2>
        {valid && frostDate ? (
          <table className="mt-4 w-full min-w-[640px] border-collapse text-[15px]">
            <thead>
              <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-[0.1em] text-green-dark">
                <th className="py-2 pr-3">Crop</th>
                <th className="py-2 pr-3">Start indoors</th>
                <th className="py-2 pr-3">Move outside</th>
                <th className="py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              {seedStartingCrops.map((crop) => {
                const indoorLabel = crop.indoorStart
                  ? `${formatDate(addDays(frostDate, -crop.indoorStart.maxWeeks * 7))} - ${formatDate(
                      addDays(frostDate, -crop.indoorStart.minWeeks * 7)
                    )}`
                  : "Not typically started indoors";

                const outdoorStart =
                  crop.outdoor.direction === "after"
                    ? addDays(frostDate, crop.outdoor.minWeeks * 7)
                    : addDays(frostDate, -crop.outdoor.maxWeeks * 7);
                const outdoorEnd =
                  crop.outdoor.direction === "after"
                    ? addDays(frostDate, crop.outdoor.maxWeeks * 7)
                    : addDays(frostDate, -crop.outdoor.minWeeks * 7);
                const outdoorLabel = `${formatDate(outdoorStart)} - ${formatDate(outdoorEnd)}`;

                return (
                  <tr key={crop.slug} className="border-b border-border align-top last:border-0">
                    <td className="py-3 pr-3 font-semibold text-green-dark">
                      {crop.plantSlug ? (
                        <Link href={`/plants/${crop.plantSlug}`} className="underline-offset-4 hover:underline">
                          {crop.name}
                        </Link>
                      ) : (
                        crop.name
                      )}
                    </td>
                    <td className="py-3 pr-3 text-muted">{indoorLabel}</td>
                    <td className="py-3 pr-3 text-muted">
                      {outdoorLabel}
                      <div className="text-xs">{crop.outdoor.method}</div>
                    </td>
                    <td className="py-3 text-sm text-muted">{crop.notes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p className="mt-3 text-[15px] leading-7 text-muted">
            Enter your last frost date above to see planting windows for common crops.
          </p>
        )}
      </section>
    </>
  );
}
