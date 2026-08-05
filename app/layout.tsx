import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const GA_MEASUREMENT_ID = "G-79Q4GK6S6P";

export const metadata: Metadata = {
  metadataBase: new URL("https://thegardenmd.com"),
  title: {
    default: "GardenMD",
    template: "%s | GardenMD"
  },
  description:
    "Practical answers for common garden problems, with diagnosis pages, calculators, systems guides, and restrained tool recommendations.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "GardenMD",
    description:
      "Practical answers for common garden problems, with diagnosis pages, calculators, systems guides, and restrained tool recommendations.",
    url: "/",
    siteName: "GardenMD",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GardenMD" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "GardenMD",
    description:
      "Practical answers for common garden problems, with diagnosis pages, calculators, systems guides, and restrained tool recommendations.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
