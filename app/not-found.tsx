import Link from "next/link";
import { SearchBox } from "@/components/SearchBox";

const popularPages = [
  { href: "/diagnose", label: "Diagnose a garden problem", description: "Browse symptoms and start narrowing down the cause." },
  { href: "/diagnose/yellow-leaves", label: "Yellow leaves", description: "The most common symptom people search for." },
  { href: "/diagnose/wilting", label: "Wilting", description: "Dry soil, wet soil, or something else? Start here." },
  { href: "/calculators", label: "Calculators", description: "Soil, mulch, compost, and drip irrigation planning." },
  { href: "/tools", label: "Tools", description: "Equipment notes for common fixes, not a shopping list." }
];

export default function NotFound() {
  return (
    <div className="mx-auto max-w-prose px-4 py-16 text-center md:px-6">
      <h1 className="font-serif text-4xl text-green-dark">Page not found</h1>
      <p className="mt-4 text-muted">
        That page doesn't exist, or the link may be out of date. Try a search, or start from one of these.
      </p>
      <div className="mt-6 text-left">
        <SearchBox variant="hero" />
      </div>
      <ul className="mt-10 space-y-4 text-left">
        {popularPages.map((page) => (
          <li key={page.href} className="border border-border bg-paper-light p-4 shadow-panel">
            <Link href={page.href} className="font-semibold text-green-dark underline-offset-4 hover:underline">
              {page.label}
            </Link>
            <p className="mt-1 text-sm text-muted">{page.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
