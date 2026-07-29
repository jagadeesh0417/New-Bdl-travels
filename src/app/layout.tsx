import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { siteName, phoneNumber } from "@/lib/utils";

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteName} | Luxury Tours, Holiday Packages & Travel Rentals`,
  description:
    `${siteName} – Your trusted travel partner offering luxury tours, holiday packages, car rentals, bus rentals, adventure trips, and 24/7 customer support. Explore the world with us.`,
  keywords: [
    siteName,
    "travel agency Bangalore",
    "holiday packages",
    "car rentals",
    "bus rentals",
    "tour packages India",
    "luxury travel",
    "adventure trips",
    "family tours",
    "honeymoon packages",
  ],
  authors: [{ name: siteName }],
  openGraph: {
    title: `${siteName} – Luxury Travel & Holiday Packages`,
    description: `Premium travel services, holiday packages, car & bus rentals, and custom tour planning by ${siteName}.`,
    url: "https://akradhi-travels.vercel.app",
    siteName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} – Luxury Travel & Holiday Packages`,
    description: `Premium travel services by ${siteName}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={karla.className}>
      <head>
        <link rel="canonical" href="https://akradhi-travels.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: siteName,
                  url: "https://akradhi-travels.vercel.app",
                  logo: "https://akradhi-travels.vercel.app/logo.png",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Yelhanka",
                    addressLocality: "Bangalore",
                    addressRegion: "Karnataka",
                    postalCode: "560064",
                    addressCountry: "IN",
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: phoneNumber,
                      contactType: "customer service",
                      areaServed: "IN",
                      availableLanguage: "English",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
