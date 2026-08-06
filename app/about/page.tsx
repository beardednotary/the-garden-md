export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10 md:px-6">
      <h1 className="font-serif text-4xl text-green-dark">About GardenMD</h1>
      <p className="mt-5">
        GardenMD is a practical reference site for diagnosing common garden problems, planning materials, and choosing tools only when they are genuinely useful.
      </p>
      <p className="mt-4">
        The goal is simple: help gardeners slow down, check the obvious first, and avoid treating or buying for the wrong problem.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Who writes this</h2>
      <p className="mt-3">
        GardenMD is written by Sam Ellery, who spent over a decade as an environmental and geospatial
        data analyst for public agencies and private consulting firms — cleaning, validating, and
        reporting on environmental datasets, including hazardous waste and remediation data, before
        moving into building sites like this one.
      </p>
      <p className="mt-4">
        That background doesn't make me a horticulturist, and I'm not going to pretend it does. What it
        does mean is that I default to the habits environmental data work requires: check the source
        before trusting a claim, tell an actual pattern apart from noise, and confirm the cause before
        treating the symptom. GardenMD applies that same discipline to garden problems, which is also why
        almost everything on this site links back to university extension research instead of personal
        opinion or folk remedies.
      </p>
      <p className="mt-4">
        I've also put in real hours with my hands in soil — volunteer invasive-species removal and trail
        restoration work with Bay Area conservation groups. Hundreds of hours pulling weeds teaches you
        something, just not a substitute for professional horticultural training, which is exactly why
        this site leans on cited sources rather than personal authority.
      </p>
    </div>
  );
}
