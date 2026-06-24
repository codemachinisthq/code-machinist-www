import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TechStackMarquee } from "@/components/home/TechStackMarquee";
import { StatsSection } from "@/components/home/StatsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PortfolioTeaser } from "@/components/home/PortfolioTeaser";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { CtaSection } from "@/components/home/CtaSection";
import { organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Code Machinist — Mobile, Web & AI Development Studio",
  description:
    "We build high-performance mobile apps, web platforms, and AI-powered products. React Native, Flutter, Next.js, Node.js, AWS specialists.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <HeroSection />
      <ServicesOverview />
      <TechStackMarquee />
      <StatsSection />
      <ProcessSection />
      <PortfolioTeaser />
      <TestimonialsSection />
      <NewsletterSection />
      <CtaSection />
    </>
  );
}
