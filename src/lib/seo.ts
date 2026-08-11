import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://codemachinist.dev";
const SITE_NAME = "Code Machinist";
const DEFAULT_DESCRIPTION =
  "We build high-performance mobile apps, web platforms, and AI-powered products. React Native, Flutter, Next.js, Node.js, AWS specialists.";

export function generatePageMetadata(page: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${page.path}`;
  const image = page.image ?? "/og-image.png";

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}${image}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
      images: [`${SITE_URL}${image}`],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: DEFAULT_DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT_EMAIL,
    },
    sameAs: [
      "https://linkedin.com/company/codemachinist",
      "https://github.com/codemachinist",
    ],
  };
}

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Development Services by Code Machinist",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Mobile App Development" },
      { "@type": "ListItem", position: 2, name: "Web Development" },
      { "@type": "ListItem", position: 3, name: "Desktop App Development" },
      { "@type": "ListItem", position: 4, name: "UI/UX Design" },
      { "@type": "ListItem", position: 5, name: "API & Backend Development" },
      { "@type": "ListItem", position: 6, name: "Cloud & DevOps" },
      { "@type": "ListItem", position: 7, name: "AI Integration" },
    ],
  };
}

export function contactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    priceRange: "$$",
  };
}

export function aboutJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE_NAME}`,
    description: "Learn about Code Machinist — our story, mission, values, and the team behind your next digital product.",
    url: `${SITE_URL}/about`,
  };
}
