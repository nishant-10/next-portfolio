import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const SITE_URL = "https://www.nishantjoshi.com";
const DESCRIPTION =
  "Nishant Joshi is a Software Engineer specializing in web development — Next.js, Express, Shopify, MySQL and MongoDB. Explore his projects, experience and ways to get in touch.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nishant Joshi — Software Engineer & Web Developer",
    template: "%s | Nishant Joshi",
  },
  description: DESCRIPTION,
  keywords: [
    "Nishant Joshi",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Shopify",
    "MongoDB",
    "MySQL",
    "portfolio",
    "Mumbai",
  ],
  authors: [{ name: "Nishant Joshi", url: SITE_URL }],
  creator: "Nishant Joshi",
  publisher: "Nishant Joshi",
  applicationName: "Nishant Joshi Portfolio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nishant Joshi",
    title: "Nishant Joshi — Software Engineer & Web Developer",
    description:
      "Software Engineer specializing in web development — Next.js, Express, Shopify, MySQL and MongoDB. Explore my projects and experience.",
    locale: "en_US",
    images: [
      {
        url: "/compress3.jpg",
        width: 500,
        height: 500,
        alt: "Portrait of Nishant Joshi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishant Joshi — Software Engineer & Web Developer",
    description:
      "Software Engineer specializing in web development — Next.js, Express, Shopify, MySQL and MongoDB.",
    images: ["/compress3.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icons8-n-100.png",
    shortcut: "/favicon.ico",
    apple: "/logo192.png",
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#0a192f",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nishant Joshi",
  url: SITE_URL,
  image: `${SITE_URL}/compress3.jpg`,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "NewAge Products Inc." },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Ramnarain Ruia Autonomous College, Mumbai",
    },
    { "@type": "CollegeOrUniversity", name: "D.G. Ruparel College, Mumbai" },
  ],
  knowsAbout: [
    "Web Development",
    "Next.js",
    "React",
    "Express.js",
    "Node.js",
    "Shopify",
    "MySQL",
    "MongoDB",
  ],
  sameAs: [
    "https://www.linkedin.com/in/nishantjoshi10/",
    "https://github.com/nishant-10",
    "https://www.instagram.com/nishantism/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="video-background">
        <video
          id="video-background"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <noscript>You need to enable JavaScript to view this site.</noscript>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
