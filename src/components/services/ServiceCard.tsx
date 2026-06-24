"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone, Monitor, AppWindow, Palette, Server, Cloud, Brain, CheckCircle2, ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone, Monitor, AppWindow, Palette, Server, Cloud, Brain,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.article
      id={service.slug}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.05 + index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Card className="h-full bg-bg-surface border border-bg-border hover:border-brand-blue/40 transition-all duration-300 group">
        <CardContent className="p-7 flex flex-col h-full">
          <div className="flex items-start gap-4 mb-5">
            <div
              className="flex size-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${service.color}18`, color: service.color }}
            >
              {Icon && <Icon className="size-7" />}
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-text-muted mt-0.5">{service.shortDesc}</p>
            </div>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-5">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {service.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs border-bg-border text-text-muted hover:border-brand-blue/40 hover:text-brand-blue transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <ul className="space-y-2 flex-1 mb-6">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                <CheckCircle2
                  className="size-4 shrink-0 mt-0.5"
                  style={{ color: service.color }}
                />
                {feature}
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant="outline"
            className="mt-auto border-bg-border text-text-secondary hover:border-brand-blue/50 hover:text-brand-blue hover:bg-brand-blue/5 transition-all"
          >
            <Link href={`/contact?service=${service.slug}`}>
              Get a Quote <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.article>
  );
}
