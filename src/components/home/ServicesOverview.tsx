"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone, Monitor, AppWindow, Palette, Server, Cloud, Brain, ArrowUpRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone, Monitor, AppWindow, Palette, Server, Cloud, Brain,
};

export function ServicesOverview() {
  return (
    <section className="relative py-24 sm:py-32 bg-bg-base" id="services" aria-labelledby="services-heading">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(168,85,247,0.14) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-brand-purple/40 bg-brand-purple/10 text-brand-purple">
            What We Do
          </Badge>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary"
          >
            Services Built for{" "}
            <span className="gradient-text">Business Growth</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-text-secondary">
            Practical software, sized and priced for business — from first sketch to something your customers use every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group"
              >
                <Card className="h-full bg-bg-surface border border-bg-border hover:border-brand-blue/40 hover:bg-bg-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-blue/10 cursor-pointer">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div
                      className="mb-4 inline-flex size-12 items-center justify-center rounded-xl"
                      style={{ background: `${svc.color}18`, color: svc.color }}
                    >
                      {Icon && <Icon className="size-6" />}
                    </div>
                    <h3 className="font-display text-base font-semibold text-text-primary mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">
                      {svc.shortDesc}
                    </p>
                    <Link
                      href={`/services#${svc.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-blue hover:gap-2 transition-all"
                    >
                      Learn more <ArrowUpRight className="size-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
