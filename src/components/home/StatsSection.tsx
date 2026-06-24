"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { STATS } from "@/lib/constants";

function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) { setCount(target); return; }
    if (!isInView) return;
    let current = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(id);
  }, [isInView, target, duration, prefersReduced]);

  return count;
}

function StatCard({ stat, isInView, index }: { stat: (typeof STATS)[0]; isInView: boolean; index: number }) {
  const count = useCountUp(stat.value, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center justify-center py-10 px-6 text-center"
    >
      <p className="font-display text-4xl sm:text-5xl font-bold gradient-text" suppressHydrationWarning>
        {count}{stat.suffix}
      </p>
      <p className="mt-2 font-semibold text-text-primary">{stat.label}</p>
      <p className="mt-1 text-sm text-text-muted">{stat.description}</p>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <section className="py-20 sm:py-24 bg-bg-surface" aria-labelledby="stats-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-brand-blue/40 bg-brand-blue/10 text-brand-blue">
            By the Numbers
          </Badge>
          <h2 id="stats-heading" className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
            Results That Speak for Themselves
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-bg-border bg-bg-elevated overflow-hidden divide-x divide-y lg:divide-y-0 divide-white/[0.07]"
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} isInView={isInView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
