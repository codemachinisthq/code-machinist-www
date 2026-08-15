import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { generatePageMetadata, contactJsonLd } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Code Machinist",
  description:
    "Ready to get your business online or automate the busywork? Get in touch for a free project scoping call. We respond within 24 hours.",
  path: "/contact",
});

function ContactFormLoader() {
  return (
    <div className="space-y-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-12 rounded-lg bg-bg-surface animate-pulse" />
      ))}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd()) }}
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-bg-base overflow-hidden" aria-labelledby="contact-hero-heading">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(59,130,246,0.15) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h1
            id="contact-hero-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
          >
            Start a{" "}
            <span className="gradient-text">Conversation</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            Tell us what your business needs — we&apos;ll scope it for free, recommend the right
            approach for your budget, and give you an honest timeline. No pressure.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 sm:py-24 bg-bg-base" aria-label="Contact form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info — 2 cols */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-bg-border bg-bg-surface p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-text-primary mb-6">
                  Project Details
                </h2>
                <Suspense fallback={<ContactFormLoader />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
