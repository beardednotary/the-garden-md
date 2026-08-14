"use client";

import { useState } from "react";

export function VolumeCalculator({
  bagSizeCubicFeet,
  bagLabel,
  showMelsMixBreakdown = false
}: {
  bagSizeCubicFeet: number;
  bagLabel: string;
  showMelsMixBreakdown?: boolean;
}) {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");

  const l = parseFloat(length);
  const w = parseFloat(width);
  const d = parseFloat(depth);
  const valid = Number.isFinite(l) && Number.isFinite(w) && Number.isFinite(d) && l > 0 && w > 0 && d > 0;
  const cubicFeet = valid ? l * w * (d / 12) : 0;
  const cubicYards = cubicFeet / 27;
  const bags = valid ? Math.ceil(cubicFeet / bagSizeCubicFeet) : 0;

  return (
    <>
      <section className="mt-8 border border-border bg-paper-light p-5 shadow-panel">
        <h2 className="font-serif text-2xl text-green-dark">Inputs</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <label className="block text-sm text-ink">
            <span className="mb-2 block font-semibold text-green-dark">Length (feet)</span>
            <input
              type="number"
              min="0"
              step="0.1"
              inputMode="decimal"
              value={length}
              onChange={(event) => setLength(event.target.value)}
              className="w-full border border-border bg-paper px-3 py-2"
              placeholder="e.g. 4"
            />
          </label>
          <label className="block text-sm text-ink">
            <span className="mb-2 block font-semibold text-green-dark">Width (feet)</span>
            <input
              type="number"
              min="0"
              step="0.1"
              inputMode="decimal"
              value={width}
              onChange={(event) => setWidth(event.target.value)}
              className="w-full border border-border bg-paper px-3 py-2"
              placeholder="e.g. 8"
            />
          </label>
          <label className="block text-sm text-ink">
            <span className="mb-2 block font-semibold text-green-dark">Depth (inches)</span>
            <input
              type="number"
              min="0"
              step="0.1"
              inputMode="decimal"
              value={depth}
              onChange={(event) => setDepth(event.target.value)}
              className="w-full border border-border bg-paper px-3 py-2"
              placeholder="e.g. 12"
            />
          </label>
        </div>
        <p className="mt-3 text-xs text-muted">Result updates automatically as you type.</p>
      </section>

      <section className="mt-8 border border-border bg-paper-light p-5 shadow-panel">
        <h2 className="font-serif text-2xl text-green-dark">Result</h2>
        {valid ? (
          <p className="mt-3 text-[15px] leading-7">
            You need about <strong>{cubicFeet.toFixed(1)} cubic feet</strong>, or{" "}
            <strong>{cubicYards.toFixed(2)} cubic yards</strong>, which is roughly{" "}
            <strong>
              {bags} {bagLabel}
            </strong>
            .
          </p>
        ) : (
          <p className="mt-3 text-[15px] leading-7 text-muted">
            Enter length, width, and depth above to see an estimate.
          </p>
        )}
      </section>

      {showMelsMixBreakdown && valid && (
        <section className="mt-8 border border-border bg-paper-light p-5 shadow-panel">
          <h2 className="font-serif text-2xl text-green-dark">Using Mel's Mix?</h2>
          <p className="mt-3 text-[15px] leading-7">
            The Square Foot Gardening recipe is equal parts compost, peat moss or coco coir, and
            vermiculite. For {cubicFeet.toFixed(1)} cubic feet total, that's roughly:
          </p>
          <ul className="mt-3 space-y-1 text-[15px]">
            <li>
              <strong>Compost:</strong> {(cubicFeet / 3).toFixed(1)} cubic feet
            </li>
            <li>
              <strong>Peat moss or coco coir:</strong> {(cubicFeet / 3).toFixed(1)} cubic feet
            </li>
            <li>
              <strong>Vermiculite:</strong> {(cubicFeet / 3).toFixed(1)} cubic feet
            </li>
          </ul>
          <p className="mt-3 text-xs text-muted">
            Blend from several compost sources rather than one, since Mel's Mix relies on that variety for
            nutrients.
          </p>
        </section>
      )}
    </>
  );
}
