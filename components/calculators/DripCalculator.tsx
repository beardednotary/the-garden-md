"use client";

import { useState } from "react";

const WASTE_ALLOWANCE = 1.1;
const EMITTER_SPACING_INCHES = 12;

export function DripCalculator() {
  const [bedLength, setBedLength] = useState("");
  const [bedCount, setBedCount] = useState("");
  const [rowCount, setRowCount] = useState("");

  const length = parseFloat(bedLength);
  const beds = parseFloat(bedCount);
  const rows = parseFloat(rowCount);
  const valid =
    Number.isFinite(length) && Number.isFinite(beds) && Number.isFinite(rows) && length > 0 && beds > 0 && rows > 0;

  const totalRowFeet = valid ? length * beds * rows : 0;
  const tubingFeet = totalRowFeet * WASTE_ALLOWANCE;
  const estimatedEmitters = Math.ceil((totalRowFeet * 12) / EMITTER_SPACING_INCHES);

  return (
    <>
      <section className="mt-8 border border-border bg-paper-light p-5 shadow-panel">
        <h2 className="font-serif text-2xl text-green-dark">Inputs</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <label className="block text-sm text-ink">
            <span className="mb-2 block font-semibold text-green-dark">Bed length (feet)</span>
            <input
              type="number"
              min="0"
              step="0.5"
              inputMode="decimal"
              value={bedLength}
              onChange={(event) => setBedLength(event.target.value)}
              className="w-full border border-border bg-paper px-3 py-2"
              placeholder="e.g. 8"
            />
          </label>
          <label className="block text-sm text-ink">
            <span className="mb-2 block font-semibold text-green-dark">Number of beds</span>
            <input
              type="number"
              min="0"
              step="1"
              inputMode="numeric"
              value={bedCount}
              onChange={(event) => setBedCount(event.target.value)}
              className="w-full border border-border bg-paper px-3 py-2"
              placeholder="e.g. 2"
            />
          </label>
          <label className="block text-sm text-ink">
            <span className="mb-2 block font-semibold text-green-dark">Rows per bed</span>
            <input
              type="number"
              min="0"
              step="1"
              inputMode="numeric"
              value={rowCount}
              onChange={(event) => setRowCount(event.target.value)}
              className="w-full border border-border bg-paper px-3 py-2"
              placeholder="e.g. 3"
            />
          </label>
        </div>
        <p className="mt-3 text-xs text-muted">Result updates automatically as you type.</p>
      </section>

      <section className="mt-8 border border-border bg-paper-light p-5 shadow-panel">
        <h2 className="font-serif text-2xl text-green-dark">Result</h2>
        {valid ? (
          <p className="mt-3 text-[15px] leading-7">
            You will need about <strong>{tubingFeet.toFixed(0)} feet</strong> of 1/4-inch drip tubing (includes a 10%
            allowance for bends and connections), with roughly <strong>{estimatedEmitters} emitters</strong> at
            standard 12-inch spacing.
          </p>
        ) : (
          <p className="mt-3 text-[15px] leading-7 text-muted">
            Enter bed length, number of beds, and rows per bed above to see an estimate.
          </p>
        )}
      </section>
    </>
  );
}
