"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function CompanyStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <section
      ref={ref}
      className="py-24 sm:py-32 bg-bg-base"
      aria-labelledby="story-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-4 border-brand-blue/40 bg-brand-blue/10 text-brand-blue">
              Our Story
            </Badge>
            <h2
              id="story-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            >
              Built by Engineers,{" "}
              <span className="gradient-text">for Builders</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Code Machinist was founded by engineers who were tired of watching great ideas
                get buried under bad execution. We&apos;ve lived on both sides — as founders
                and as the team building the tech — and we know what it takes to ship products
                that actually work.
              </p>
              <p>
                Over 8 years, we&apos;ve partnered with early-stage startups, scaling
                mid-market companies, and enterprise teams across healthcare, fintech,
                e-commerce, and AI. Every project has made us sharper, faster, and better at
                translating vision into code.
              </p>
              <p>
                Today, our team of designers, engineers, and strategists operates as an
                extension of your team — not a black box. You get daily updates, shared
                dashboards, and a partner who cares about your outcomes as much as you do.
              </p>
            </div>
          </motion.div>

          {/* SVG illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-bg-border bg-bg-surface p-8 overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
              <svg
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>

                {/* Circuit traces */}
                <motion.path
                  d="M 50 150 H 120 V 80 H 200 V 150 H 280 V 220 H 350"
                  stroke="url(#circuitGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                />
                <motion.path
                  d="M 80 220 H 150 V 150 H 230 V 80 H 310 V 150"
                  stroke="#22d3ee"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                />

                {/* Nodes */}
                {[
                  [120, 80], [200, 150], [280, 220], [150, 150], [230, 80],
                ].map(([cx, cy], i) => (
                  <motion.circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="5"
                    fill="url(#circuitGrad)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.4, type: "spring" }}
                  />
                ))}

                {/* Center chip */}
                <motion.rect
                  x="170"
                  y="120"
                  width="60"
                  height="60"
                  rx="6"
                  stroke="url(#circuitGrad)"
                  strokeWidth="2"
                  fill="rgba(59,130,246,0.1)"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
                />
                <motion.text
                  x="200"
                  y="155"
                  textAnchor="middle"
                  fill="#3b82f6"
                  fontSize="12"
                  fontFamily="monospace"
                  fontWeight="bold"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  {"</>"}
                </motion.text>
              </svg>

              {/* Floating stats on illustration */}
              <div className="absolute top-4 right-4 rounded-lg border border-bg-border bg-bg-base/80 px-3 py-2 text-xs backdrop-blur-sm">
                <p className="text-brand-blue font-semibold">8+ Years</p>
                <p className="text-text-muted">Experience</p>
              </div>
              <div className="absolute bottom-4 left-4 rounded-lg border border-bg-border bg-bg-base/80 px-3 py-2 text-xs backdrop-blur-sm">
                <p className="text-brand-purple font-semibold">150+ Projects</p>
                <p className="text-text-muted">Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
