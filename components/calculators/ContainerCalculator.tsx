"use client";

import { useState } from "react";

export function ContainerCalculator() {
  const [shape, setShape] = useState<"round" | "rectangular">("round");
  const [diameter, setDiameter] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");

  const d = parseFloat(depth);
  let cubicFeet = 0;
  let valid = false;

  if (shape === "round") {
    const dia = parseFloat(diameter);
    if (Number.isFinite(dia) && Number.isFinite(d) && dia > 0 && d > 0) {
      const radiusFeet = dia / 12 / 2;
      cubicFeet = Math.PI * radiusFeet * radiusFeet * (d / 12);
      valid = true;
    }
  } else {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (Number.isFinite(l) && Number.isFinite(w) && Number.isFinite(d) && l > 0 && w > 0 && d > 0) {
      cubicFeet = (l / 12) * (w / 12) * (d / 12);
      valid = true;
    }
  }

  const quarts = cubicFeet * 29.92;
  const gallons = cubicFeet * 7.48;

  const shapeButtonClasses = (active: boolean) =>
    `border px-4 py-2 text-sm font-semibold ${
      active ? "border-green-dark bg-green-dark text-paper-light" : "border-border bg-paper text-ink"
    }`;

  return (
    <>
      <section className="mt-8 border border-border bg-paper-light p-5 shadow-panel">
        <h2 className="font-serif text-2xl text-green-dark">Inputs</h2>
        <div className="mt-4 flex gap-3">
          <button type="button" onClick={() => setShape("round")} className={shapeButtonClasses(shape === "round")}>
            Round pot
          </button>
          <button
            type="button"
            onClick={() => setShape("rectangular")}
            className={shapeButtonClasses(shape === "rectangular")}
          >
            Rectangular
          </button>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {shape === "round" ? (
            <label className="block text-sm text-ink">
              <span className="mb-2 block font-semibold text-green-dark">Diameter (inches)</span>
              <input
                type="number"
                min="0"
                step="0.5"
                inputMode="decimal"
                value={diameter}
                onChange={(event) => setDiameter(event.target.value)}
                className="w-full border border-border bg-paper px-3 py-2"
                placeholder="e.g. 14"
              />
            </label>
          ) : (
            <>
              <label className="block text-sm text-ink">
                <span className="mb-2 block font-semibold text-green-dark">Length (inches)</span>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  inputMode="decimal"
                  value={length}
                  onChange={(event) => setLength(event.target.value)}
                  className="w-full border border-border bg-paper px-3 py-2"
                  placeholder="e.g. 24"
                />
              </label>
              <label className="block text-sm text-ink">
                <span className="mb-2 block font-semibold text-green-dark">Width (inches)</span>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  inputMode="decimal"
                  value={width}
                  onChange={(event) => setWidth(event.target.value)}
                  className="w-full border border-border bg-paper px-3 py-2"
                  placeholder="e.g. 10"
                />
              </label>
            </>
          )}
          <label className="block text-sm text-ink">
            <span className="mb-2 block font-semibold text-green-dark">Depth (inches)</span>
            <input
              type="number"
              min="0"
              step="0.5"
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
            You need about <strong>{cubicFeet.toFixed(2)} cubic feet</strong> of potting mix, which is roughly{" "}
            <strong>{quarts.toFixed(0)} quarts</strong> ({gallons.toFixed(1)} gallons) — most bagged potting mix is
            sold by the quart, so that is usually the easier number to shop with.
          </p>
        ) : (
          <p className="mt-3 text-[15px] leading-7 text-muted">
            Choose a shape and enter your container's dimensions above to see an estimate.
          </p>
        )}
      </section>
    </>
  );
}
