"use client";

import { motion } from "framer-motion";
import {
  Search, FileSearch, Palette, Code2, Rocket, HeartHandshake
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, FileSearch, Palette, Code2, Rocket, HeartHandshake,
};

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-bg-base" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-brand-purple/40 bg-brand-purple/10 text-brand-purple">
            How We Work
          </Badge>
          <h2
            id="process-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary"
          >
            From Idea to{" "}
            <span className="gradient-text">Launch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-text-secondary">
            A proven 6-step process that keeps projects on time, on scope, and on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="group relative h-full rounded-2xl border border-bg-border bg-bg-surface p-6 hover:border-brand-blue/40 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-display text-5xl font-bold text-white/10 group-hover:text-brand-blue/20 transition-colors duration-300 select-none">
                      {step.number}
                    </span>
                    {Icon && (
                      <div className="flex size-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                        <Icon className="size-5" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
