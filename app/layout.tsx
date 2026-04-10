import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const BASE_URL = "https://ozarkairandheat.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ozark Air & Heat | HVAC Service Fayetteville AR",
    template: "%s | Ozark Air & Heat",
  },
  description:
    "Fayetteville's trusted HVAC company. Spring AC tune-ups, fall heating checkups & 24/7 emergency repair. Book online in 60 seconds. Serving NWA since 2009.",
  keywords: [
    "HVAC Fayetteville AR",
    "AC repair Fayetteville Arkansas",
    "heating and cooling Fayetteville",
    "AC tune-up Northwest Arkansas",
    "emergency HVAC repair Fayetteville",
    "new HVAC installation Fayetteville",
    "Ozark Air and Heat",
    "air conditioning repair NWA",
    "furnace repair Fayetteville AR",
    "HVAC maintenance Springdale Rogers Bentonville",
  ],
  authors: [{ name: "Ozark Air & Heat" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Ozark Air & Heat",
    title: "Ozark Air & Heat | HVAC Fayetteville AR | (479) 555-0187",
    description:
      "Fayetteville's highest-rated HVAC company. 4.9★ across 287 reviews. Book a seasonal tune-up before slots run out.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ozark Air & Heat — Fayetteville HVAC Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozark Air & Heat | HVAC Fayetteville AR",
    description:
      "Spring AC tune-ups, fall heating checkups & 24/7 emergency repair. Serving NWA since 2009.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE_URL },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ozark Air & Heat",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/faq?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Ozark Air & Heat",
  image: `${BASE_URL}/og-image.jpg`,
  logo: `${BASE_URL}/logo.png`,
  url: BASE_URL,
  telephone: "+14795550187",
  email: "service@ozarkairandheat.com",
  foundingDate: "2009",
  description:
    "Ozark Air & Heat is Fayetteville, Arkansas's highest-rated HVAC company, delivering seasonal tune-ups, emergency repair, and new system installation across Northwest Arkansas since 2009.",
  slogan: "Before the season turns.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2847 N College Ave",
    addressLocality: "Fayetteville",
    addressRegion: "AR",
    postalCode: "72703",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 36.1246, longitude: -94.1696 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "287",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Fayetteville",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Springdale",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Rogers",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Bentonville",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Siloam Springs",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Elkins",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Prairie Grove",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
  ],
  priceRange: "$$",
  hasCredential: "AR HVAC License #H-12847",
  sameAs: [
    "https://www.facebook.com/ozarkairandheat",
    "https://www.yelp.com/biz/ozark-air-heat-fayetteville",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      className={`${barlowCondensed.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className='min-h-screen flex flex-col'
        style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
      >
        <Navbar />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
