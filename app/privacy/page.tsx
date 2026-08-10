import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "What information GardenMD collects, including Google Analytics and Amazon Associates cookies.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10 md:px-6">
      <h1 className="font-serif text-4xl text-green-dark">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted">Last updated: August 9, 2026</p>

      <p className="mt-6">
        GardenMD is a reference site for diagnosing common garden problems. This page explains what
        information is collected when you visit and how it is used.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Information We Collect</h2>
      <p className="mt-3">
        GardenMD does not require an account. We use Google Analytics to understand which pages are useful,
        which collects standard analytics data such as pages viewed, approximate location, device and
        browser type, and which links you click, including outbound links to retailers. If you sign up for
        the Quick Reference Guide or any other email opt-in on this site, we collect the email address you
        provide.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Email List</h2>
      <p className="mt-3">
        Signing up for a downloadable guide adds your email to a list used to send occasional guides, new
        content, and relevant updates from GardenMD. Signup forms are processed through Formspree. You can
        unsubscribe at any time using the link in any email we send, or by contacting us through the{" "}
        <Link href="/contact" className="underline-offset-4 hover:underline">
          contact page
        </Link>
        .
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Cookies and Tracking</h2>
      <p className="mt-3">
        Google Analytics sets cookies to distinguish visitors and measure site usage. You can block or
        delete these cookies through your browser settings, or opt out of Google Analytics tracking using{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          className="underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google's browser add-on
        </a>
        .
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Affiliate Links</h2>
      <p className="mt-3">
        GardenMD participates in the Amazon Services LLC Associates Program. When you click a product link
        on this site, Amazon may set its own cookie to track the referral, and we may earn a commission on
        qualifying purchases at no extra cost to you. See our{" "}
        <Link href="/affiliate-disclosure" className="underline-offset-4 hover:underline">
          affiliate disclosure
        </Link>{" "}
        for more detail.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Third-Party Services</h2>
      <p className="mt-3">
        This site is hosted on Vercel and uses Google Analytics, Amazon Associates, and Formspree (for email
        signups) as described above. Each of these services collects and processes data under its own
        privacy policy, separate from this one.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Children's Privacy</h2>
      <p className="mt-3">
        GardenMD is not directed at children under 13, and we do not knowingly collect information from
        children under 13.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Changes to This Policy</h2>
      <p className="mt-3">
        This policy may be updated as the site changes. Updates will be posted on this page with a revised
        "Last updated" date.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-green-dark">Contact</h2>
      <p className="mt-3">
        Questions about this policy can be sent through the{" "}
        <Link href="/contact" className="underline-offset-4 hover:underline">
          contact page
        </Link>
        .
      </p>
    </div>
  );
}
