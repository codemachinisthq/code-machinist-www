import { TECH_STACK_MARQUEE } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-3" aria-hidden="true">
      {/* Spacing lives on the items, not as `gap` on the row: a gap renders 2n-1 times
          across the doubled list, so translateX(-50%) would land half a gap short and the
          loop would visibly jump. A trailing margin on every item makes one copy exactly 50%. */}
      <div className={`flex w-max ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}>
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mr-4 inline-flex shrink-0 items-center gap-2 rounded-full border border-bg-border bg-bg-surface px-4 py-1.5 text-sm text-text-secondary"
          >
            <span className="size-1.5 rounded-full bg-brand-blue shrink-0" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechStackMarquee() {
  const half = Math.ceil(TECH_STACK_MARQUEE.length / 2);
  const row1 = TECH_STACK_MARQUEE.slice(0, half);
  const row2 = TECH_STACK_MARQUEE.slice(half);

  return (
    <section className="py-16 sm:py-20 bg-bg-void overflow-hidden border-y border-bg-border" aria-labelledby="tech-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-10 text-center">
        <Badge variant="outline" className="mb-3 border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan">
          Tech Stack
        </Badge>
        <h2 id="tech-heading" className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
          Technologies We Master
        </h2>
      </div>

      {/* Fade masks */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-linear-to-r from-bg-void to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-linear-to-l from-bg-void to-transparent" />
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>
    </section>
  );
}
