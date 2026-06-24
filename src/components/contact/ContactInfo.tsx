import { Mail, MessageSquare, Clock, MapPin, GitBranch, Link2, AtSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const info = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@codemachinist.dev",
    href: "mailto:hello@codemachinist.dev",
    color: "#3b82f6",
  },
  {
    icon: MessageSquare,
    label: "Response Time",
    value: "Usually within 24 hours",
    href: null,
    color: "#a855f7",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri, 9AM – 6PM (UTC)",
    href: null,
    color: "#22d3ee",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote-first, worldwide",
    href: null,
    color: "#10b981",
  },
];

const socials = [
  { icon: GitBranch, href: "#", label: "GitHub" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: AtSign, href: "#", label: "Twitter / X" },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <Badge variant="outline" className="mb-3 border-brand-blue/40 bg-brand-blue/10 text-brand-blue">
          Get In Touch
        </Badge>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-3">
          Let&apos;s Talk About Your Project
        </h2>
        <p className="text-text-secondary leading-relaxed">
          Whether you have a fully-formed brief or just a rough idea — we want to hear it.
          Book a free 30-minute discovery call or send us a message below.
        </p>
      </div>

      <div className="space-y-4">
        {info.map(({ icon: Icon, label, value, href, color }) => (
          <div key={label} className="flex items-start gap-4">
            <div
              className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `${color}15`, color }}
            >
              <Icon className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-0.5">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-sm text-text-secondary hover:text-brand-blue transition-colors"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm text-text-secondary">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Follow Us
        </p>
        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-xl border border-bg-border text-text-muted hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div
        className="relative overflow-hidden rounded-2xl border border-bg-border bg-bg-surface h-44"
        aria-label="Location map placeholder"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue animate-pulse-glow">
            <MapPin className="size-5" />
          </div>
          <p className="text-xs text-text-muted">Remote-first • Worldwide</p>
        </div>
      </div>
    </div>
  );
}
