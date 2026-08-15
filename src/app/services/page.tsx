import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CtaSection } from "@/components/home/CtaSection";
import { TechStackMarquee } from "@/components/home/TechStackMarquee";
import { SERVICES } from "@/lib/constants";
import { generatePageMetadata, servicesJsonLd } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Software Development Services for Businesses",
  description:
    "Websites, customer apps, desktop tools, UI/UX design, backend & integrations, hosting & IT, and AI automation — all under one roof, sized and priced for business.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd()) }}
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-bg-base overflow-hidden" aria-labelledby="services-hero-heading">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(168,85,247,0.15) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1
            id="services-hero-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
          >
            Everything Your Business{" "}
            <span className="gradient-text">Needs to Go Digital</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed">
            From your first website to the tools that run your daily operations — we cover every layer, so you don&apos;t need to hire an in-house team.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 sm:py-24 bg-bg-base" aria-label="Service offerings">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TechStackMarquee />
      <CtaSection />
    </>
  );
}
