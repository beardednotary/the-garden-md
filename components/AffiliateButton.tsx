export function AffiliateButton({ href, label = "Check price on Amazon" }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="inline-block border border-green-dark bg-green-dark px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-paper-light hover:bg-transparent hover:text-green-dark"
    >
      {label}
    </a>
  );
}
