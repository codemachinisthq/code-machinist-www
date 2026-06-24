"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-bg-base" aria-labelledby="testimonials-heading">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 30% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-brand-blue/40 bg-brand-blue/10 text-brand-blue">
            Client Stories
          </Badge>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary"
          >
            What Our Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card className="h-full bg-bg-surface border border-bg-border hover:border-brand-blue/30 transition-colors duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, ri) => (
                      <Star key={ri} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Quote className="size-8 text-brand-blue/20 mb-3" aria-hidden="true" />

                  <p className="text-sm text-text-secondary leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-bg-border">
                    <Avatar className="size-10">
                      <AvatarFallback className="bg-linear-to-br from-brand-blue to-brand-purple text-white text-xs font-semibold">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{t.author}</p>
                      <p className="text-xs text-text-muted">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
