"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export function PortfolioTeaser() {
  return (
    <section className="py-24 sm:py-32 bg-bg-surface" aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div>
            <Badge variant="outline" className="mb-4 border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan">
              Portfolio
            </Badge>
            <h2
              id="portfolio-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary"
            >
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-bg-border bg-transparent text-text-secondary hover:text-text-primary hover:border-brand-blue/40 shrink-0"
          >
            <Link href="/services">
              View All Work <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, i) => {
            const href = item.link ?? (item.slug ? `/projects/${item.slug}` : null);
            const CardWrapper = href
              ? ({ children }: { children: React.ReactNode }) => (
                  <Link href={href} className="block h-full">{children}</Link>
                )
              : ({ children }: { children: React.ReactNode }) => <>{children}</>;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative overflow-hidden rounded-2xl border border-bg-border bg-bg-base"
              >
                <CardWrapper>
                  <div className="relative h-52 overflow-hidden">
                    {item.previewImage ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.previewImage}
                          alt={`${item.title} preview`}
                          className="absolute inset-0 w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-20`} />
                      </>
                    ) : (
                      <>
                        <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-70 group-hover:opacity-90 transition-opacity duration-300`} />
                        <div className="absolute inset-0 bg-dots opacity-30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-3xl font-bold text-white/20 select-none">
                            {item.title[0]}
                          </span>
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-bg-base/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="flex items-center gap-2 font-medium text-text-primary text-sm border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                        {item.slug ? "Read Case Study" : "View Project"} <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs bg-bg-elevated text-text-muted">
                        {item.category}
                      </Badge>
                      {item.slug && (
                        <span className="text-xs text-brand-blue font-medium flex items-center gap-1">
                          Case Study <ArrowUpRight className="size-3" />
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-base font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-bg-border px-2.5 py-0.5 text-xs text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardWrapper>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
