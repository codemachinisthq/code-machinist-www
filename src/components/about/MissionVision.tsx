"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    icon: Target,
    label: "Mission",
    color: "#3b82f6",
    title: "We build software that pays for itself",
    body: "Every product we build is grounded in a clear business problem — more bookings, fewer manual tasks, a website that actually ranks. We don't build for the sake of building.",
  },
  {
    icon: Eye,
    label: "Vision",
    color: "#a855f7",
    title: "The technology partner every business deserves",
    body: "We want to be the team business owners trust to get software right the first time — without needing to hire, manage, or learn to code themselves.",
  },
  {
    icon: Heart,
    label: "Values",
    color: "#22d3ee",
    title: "How we show up every day",
    body: null,
    values: ["Plain-English communication, no jargon", "Quality over speed, always", "Straightforward, upfront pricing", "Ship fast, iterate faster", "Long-term partnerships"],
  },
];

export function MissionVision() {
  return (
    <section className="py-24 sm:py-32 bg-bg-surface" aria-labelledby="mvv-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-brand-purple/40 bg-brand-purple/10 text-brand-purple">
            What Drives Us
          </Badge>
          <h2
            id="mvv-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-text-primary"
          >
            Mission, Vision & Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, label, color, title, body, values }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card className="h-full bg-bg-base border border-bg-border hover:border-brand-blue/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <div
                    className="mb-4 inline-flex size-12 items-center justify-center rounded-xl"
                    style={{ background: `${color}18`, color }}
                  >
                    <Icon className="size-6" />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest" style={{ color }}>
                    {label}
                  </p>
                  <h3 className="font-display text-lg font-bold text-text-primary mb-3 leading-snug">
                    {title}
                  </h3>
                  {body && <p className="text-sm text-text-secondary leading-relaxed">{body}</p>}
                  {values && (
                    <ul className="space-y-2 mt-2">
                      {values.map((v) => (
                        <li key={v} className="flex items-center gap-2 text-sm text-text-secondary">
                          <span className="size-1.5 rounded-full bg-brand-cyan shrink-0" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
