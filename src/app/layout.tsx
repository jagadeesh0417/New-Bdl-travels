import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BDL Travels | Premium Vehicle Booking in Nandyal",
  description:
    "BDL Travels – ARAI certified and government approved travel agency in Nandyal. We offer luxury cars, Tempo Travellers, and buses for trips, tours, and corporate travel.",
  keywords: [
    "BDL Travels",
    "Nandyal travel agency",
    "vehicle booking Nandyal",
    "car rental Nandyal",
    "tempo traveller Nandyal",
    "bus booking Nandyal",
    "tour packages Andhra Pradesh",
  ],
  authors: [{ name: "BDL Travels" }],
  openGraph: {
    title: "BDL Travels – Premium Vehicle Booking",
    description:
      "Premium vehicle booking for trips, tours & corporate travel in Nandyal, Andhra Pradesh.",
    url: "https://bdl-travels.vercel.app",
    siteName: "BDL Travels",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BDL Travels – Premium Vehicle Booking",
    description:
      "Premium vehicle booking for trips, tours & corporate travel in Nandyal.",
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
        <link rel="canonical" href="https://bdl-travels.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                  {
                    "@type": "Organization",
                    name: "BDL Travels",
                    url: "https://bdl-travels.vercel.app",
                    logo: "https://bdl-travels.vercel.app/logo.png",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "Shop no:4, Ground floor, Ananda Nilayam Plaza",
                      addressLocality: "Nandyala",
                      addressRegion: "Andhra Pradesh",
                      postalCode: "518501",
                      addressCountry: "IN",
                    },
                    contactPoint: [
                      {
                        "@type": "ContactPoint",
                        telephone: "+918985651501",
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
