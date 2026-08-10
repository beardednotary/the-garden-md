export const metadata = {
  title: "Contact",
  description: "Send corrections, feedback, or a garden problem GardenMD hasn't covered yet.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10 md:px-6">
      <h1 className="font-serif text-4xl text-green-dark">Contact</h1>
      <p className="mt-5">
        Spot something wrong on a page, have a fix that worked for you, or a garden problem we haven't
        covered yet? Send it over.
      </p>
      <p className="mt-4">
        <a href="mailto:hello@thegardenmd.com" className="text-green-dark underline-offset-4 hover:underline">
          hello@thegardenmd.com
        </a>
      </p>
    </div>
  );
}
