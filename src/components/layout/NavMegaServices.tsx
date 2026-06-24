import Link from "next/link";
import {
  Smartphone, Monitor, AppWindow, Palette, Server, Cloud, Brain,
  ArrowRight,
} from "lucide-react";
import { MEGA_SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="size-4" />,
  Monitor:    <Monitor className="size-4" />,
  AppWindow:  <AppWindow className="size-4" />,
  Palette:    <Palette className="size-4" />,
  Server:     <Server className="size-4" />,
  Cloud:      <Cloud className="size-4" />,
  Brain:      <Brain className="size-4" />,
};

export function NavMegaServices() {
  return (
    <div className="w-140">
      <div className="border-b border-bg-border px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">
          What we build
        </p>
      </div>

      <div className="grid grid-cols-2 p-2">
        {MEGA_SERVICES.map((svc) => (
          <Link
            key={svc.id}
            href={svc.href}
            className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-bg-elevated"
          >
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-bg-elevated text-brand-blue transition-colors group-hover:bg-brand-blue/15 group-hover:text-brand-blue">
              {iconMap[svc.icon]}
            </span>
            <span>
              <span className="block text-sm font-medium text-text-primary transition-colors group-hover:text-brand-blue leading-tight">
                {svc.title}
              </span>
              <span className="mt-0.5 block text-xs text-text-muted leading-relaxed">
                {svc.description}
              </span>
            </span>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-bg-border mx-2 px-2 py-2.5">
        <p className="text-xs text-text-muted">7 service specializations</p>
        <Link
          href="/contact"
          className="flex items-center gap-1 text-xs font-medium text-brand-blue hover:underline"
        >
          Book a free call <ArrowRight className="size-3" />
        </Link>
      </div>
    </div>
  );
}
