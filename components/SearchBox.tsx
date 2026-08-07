"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { searchSite, type SearchEntry } from "@/lib/searchIndex";

export function SearchBox({
  variant = "hero",
  placeholder = "Yellow leaves, wet soil, raised bed soil calculator"
}: {
  variant?: "hero" | "compact";
  placeholder?: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results: SearchEntry[] = searchSite(query);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function goToResult(entry: SearchEntry) {
    setOpen(false);
    setQuery("");
    router.push(entry.href);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (results[0]) {
      goToResult(results[0]);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const inputClasses =
    variant === "hero"
      ? "w-full border border-border bg-paper px-4 py-3 text-ink outline-none placeholder:text-muted"
      : "w-32 border border-border bg-paper px-3 py-1.5 text-sm text-ink outline-none placeholder:text-muted md:w-40";

  return (
    <div ref={containerRef} className={`relative ${variant === "hero" ? "w-full" : "inline-block"}`}>
      <form onSubmit={handleSubmit}>
        {variant === "hero" && (
          <label htmlFor="search" className="mb-2 block text-sm font-semibold text-green-dark">
            Search GardenMD
          </label>
        )}
        <input
          id={variant === "hero" ? "search" : undefined}
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={inputClasses}
          autoComplete="off"
        />
      </form>
      {open && results.length > 0 && (
        <ul className="absolute left-0 z-10 mt-1 w-[max(100%,260px)] max-w-[calc(100vw-2rem)] border border-border bg-paper-light shadow-panel md:left-auto md:right-0">
          {results.map((entry) => (
            <li key={entry.href}>
              <Link
                href={entry.href}
                onClick={() => goToResult(entry)}
                className="flex items-center justify-between gap-3 px-4 py-2 text-sm text-ink hover:bg-paper"
              >
                <span>{entry.title}</span>
                <span className="text-xs uppercase tracking-[0.1em] text-muted">{entry.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {open && query.trim() && results.length === 0 && (
        <div className="absolute left-0 z-10 mt-1 w-[max(100%,260px)] max-w-[calc(100vw-2rem)] border border-border bg-paper-light p-4 text-sm text-muted shadow-panel md:left-auto md:right-0">
          No matches yet. Try a different word.
        </div>
      )}
    </div>
  );
}
