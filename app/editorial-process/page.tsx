import Link from "next/link";

export default function EditorialProcessPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10 md:px-6">
      <h1 className="font-serif text-4xl text-green-dark">Editorial Process</h1>
      <p className="mt-5">
        GardenMD starts with the problem a gardener can actually see, then works toward the most likely causes, the simplest checks, and the least complicated fix.
      </p>
      <p className="mt-4">
        Non-commercial fixes come first. Tools and materials are mentioned only when they help confirm the problem or make the fix easier.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Sourcing standards</h2>
      <p className="mt-3">
        GardenMD is written by Sam Ellery, whose background is in environmental data analysis rather than
        horticulture — see the{" "}
        <Link href="/about" className="underline-offset-4 hover:underline">
          full bio
        </Link>{" "}
        for detail. That background sets the sourcing bar for everything on this site: claims are checked
        against university extension research and other primary sources before they're published, not
        drawn from personal opinion or unverified folk remedies. Every diagnostic, cause, and solution
        page lists the sources behind it, visible on the page and collected in full on the{" "}
        <Link href="/sources" className="underline-offset-4 hover:underline">
          Sources
        </Link>{" "}
        page.
      </p>
    </div>
  );
}
