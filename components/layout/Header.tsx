import Image from "next/image";
import Link from "next/link";
import { SearchBox } from "@/components/SearchBox";

const navItems = [
  { href: "/diagnose", label: "Diagnose" },
  { href: "/causes", label: "Causes" },
  { href: "/solutions", label: "Solutions" },
  { href: "/calculators", label: "Calculators" },
  { href: "/systems", label: "Systems" },
  { href: "/tools", label: "Tools" },
  { href: "/plants", label: "Plants" },
  { href: "/about", label: "About" }
];

export function Header() {
  return (
    <header className="border-b border-border bg-paper-light">
      <div className="mx-auto flex max-w-shell flex-col gap-4 px-4 py-5 md:flex-row md:items-end md:justify-between md:px-6">
        <Link href="/" className="flex items-center gap-3 text-ink no-underline">
          <Image src="/badge.png" alt="" width={56} height={56} className="h-14 w-14" priority />
          <div>
            <div className="font-serif text-3xl uppercase tracking-[0.14em] text-green-dark">
              GardenMD
            </div>
            <div className="mt-1 text-sm text-muted">
              Practical answers for common garden problems
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-5">
          <nav aria-label="Primary navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-green-dark underline-offset-4 hover:underline">
                {item.label}
              </Link>
            ))}
          </nav>
          <SearchBox variant="compact" placeholder="Search" />
        </div>
      </div>
    </header>
  );
}
