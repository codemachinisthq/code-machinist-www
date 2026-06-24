"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden bg-bg-base"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.12) 0%, rgba(168,85,247,0.08) 50%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #3b82f6, #a855f7, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #a855f7, #3b82f6, transparent)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center"
      >
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-sm text-brand-blue">
            <Zap className="size-3.5" />
            Free Project Scoping
          </span>
        </div>

        <h2
          id="cta-heading"
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight"
        >
          Ready to Build{" "}
          <span className="gradient-text">Something Amazing?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary leading-relaxed">
          Share your idea with us — we&apos;ll scope it, advise on the best tech stack, and give you
          an honest timeline. Zero obligation.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-brand-blue text-white hover:bg-brand-blue/90 animate-pulse-glow px-10 text-base font-semibold"
          >
            <Link href="/contact">
              Start the Conversation <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-bg-border bg-transparent text-text-primary hover:bg-bg-elevated hover:border-brand-blue/40 px-8 text-base"
          >
            <Link href="/services">See Our Services</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
