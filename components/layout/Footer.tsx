import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["/diagnose", "Diagnose"],
      ["/calculators", "Calculators"],
      ["/systems", "Systems"],
      ["/tools", "Tools"],
      ["/plants", "Plants"]
    ]
  },
  {
    title: "About",
    links: [
      ["/about", "About GardenMD"],
      ["/editorial-process", "Editorial Process"],
      ["/sources", "Sources"],
      ["/contact", "Contact"]
    ]
  },
  {
    title: "Legal",
    links: [
      ["/affiliate-disclosure", "Affiliate Disclosure"],
      ["/privacy", "Privacy Policy"],
      ["/terms", "Terms of Use"]
    ]
  }
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-paper-light">
      <div className="mx-auto grid max-w-shell gap-10 px-4 py-10 md:grid-cols-4 md:px-6">
        <div>
          <Image src="/badge.png" alt="" width={48} height={48} className="h-12 w-12" />
          <div className="mt-3 font-serif text-2xl text-green-dark">GardenMD</div>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
            Practical answers, field checks, calculators, and equipment notes for common garden problems.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="border-b border-border pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">
              {group.title}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {group.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="underline-offset-4 hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted md:px-6">
        GardenMD may earn from qualifying purchases through affiliate links. Always confirm a problem before buying a fix.
      </div>
    </footer>
  );
}
