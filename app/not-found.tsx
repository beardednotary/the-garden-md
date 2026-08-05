import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-prose px-4 py-16 text-center md:px-6">
      <h1 className="font-serif text-4xl text-green-dark">Page not found</h1>
      <p className="mt-4 text-muted">The page you were looking for is not here yet.</p>
      <Link href="/" className="mt-6 inline-block underline-offset-4 hover:underline">
        Return to the homepage
      </Link>
    </div>
  );
}
