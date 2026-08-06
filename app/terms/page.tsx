import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10 md:px-6">
      <h1 className="font-serif text-4xl text-green-dark">Terms of Use</h1>
      <p className="mt-4 text-sm text-muted">Last updated: August 5, 2026</p>

      <p className="mt-6">
        By using GardenMD, you agree to the terms below. If you do not agree with them, please do not use
        the site.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">What This Site Is</h2>
      <p className="mt-3">
        GardenMD publishes general, educational information for diagnosing and fixing common garden
        problems, along with calculators, systems guides, and tool recommendations. It is not professional
        horticultural, agricultural, or landscaping advice, and it is not a substitute for a local extension
        office, certified arborist, or other qualified professional when the situation calls for one.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">No Guarantees</h2>
      <p className="mt-3">
        Content is written in good faith and checked against sources cited on each page, but every garden,
        soil, climate, and plant is different. We do not guarantee that any diagnosis, fix, or calculator
        result will be correct or effective for your specific situation, and we are not liable for plant
        loss, property damage, or other outcomes from using information on this site.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Affiliate Links</h2>
      <p className="mt-3">
        GardenMD participates in the Amazon Services LLC Associates Program and may earn a commission on
        qualifying purchases made through links on this site, at no extra cost to you. This does not change
        which products we mention. See our{" "}
        <Link href="/affiliate-disclosure" className="underline-offset-4 hover:underline">
          affiliate disclosure
        </Link>{" "}
        for more detail.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">External Links</h2>
      <p className="mt-3">
        This site links to third-party sources, including university extension offices and retailers. We
        are not responsible for the content, accuracy, or practices of external sites once you leave
        GardenMD.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Content Use</h2>
      <p className="mt-3">
        You're welcome to link to GardenMD. Please don't scrape, republish, or redistribute our text or
        images elsewhere without permission.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Changes</h2>
      <p className="mt-3">
        We may update these terms, and the site itself, at any time. Updates will be posted on this page
        with a revised "Last updated" date.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Contact</h2>
      <p className="mt-3">
        Questions about these terms can be sent through the{" "}
        <Link href="/contact" className="underline-offset-4 hover:underline">
          contact page
        </Link>
        .
      </p>
    </div>
  );
}
