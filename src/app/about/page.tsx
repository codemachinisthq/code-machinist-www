import type { Metadata } from "next";
import { CompanyStory } from "@/components/about/CompanyStory";
import { MissionVision } from "@/components/about/MissionVision";
import { TeamSection } from "@/components/about/TeamSection";
import { CtaSection } from "@/components/home/CtaSection";
import { generatePageMetadata, aboutJsonLd } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "About Code Machinist",
  description:
    "Learn about Code Machinist — our story, mission, values, and the team of engineers and designers who help business owners get custom software done right.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd()) }}
      />

      {/* Page hero */}
      <section className="relative py-20 sm:py-28 bg-bg-base overflow-hidden" aria-labelledby="about-hero-heading">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(59,130,246,0.15) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1
            id="about-hero-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
          >
            We Are{" "}
            <span className="gradient-text">Code Machinist</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed">
            A team of engineers, designers, and strategists who help business owners get
            the software they need — without enterprise pricing or agency runaround.
          </p>
        </div>
      </section>

      <CompanyStory />
      <MissionVision />
      <TeamSection />
      <CtaSection />
    </>
  );
}
