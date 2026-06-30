import Link from "next/link";
import { ArrowLeft, Clock, Zap, Shield, Box } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Museum Ticket Tracker — Case Study",
  description:
    "How we reverse-engineered an undocumented Angular SPA to build a 24/7 availability bot and browser extension that drives museum ticket checkout in seconds.",
  path: "/projects/vm-tracker",
});

const TECH = ["Node.js", "TypeScript", "Docker", "WXT", "React", "Google Sheets API", "Telegram Bot API"];

const RESULTS = [
  { icon: Zap, label: "Seconds to checkout", value: "<10s", desc: "From alert to prefilled form" },
  { icon: Clock, label: "24/7 monitoring", value: "100%", desc: "Containerized, hands-off" },
  { icon: Shield, label: "Human-in-the-loop", value: "Always", desc: "Captcha & payment by design" },
  { icon: Box, label: "Tech discovered", value: "0 docs", desc: "Fully reverse-engineered" },
];

const TL_DR = [
  { label: "Problem", value: "High-demand museum tickets sell out in seconds; the official site has no alerts and a slow multi-step checkout." },
  { label: "Solution", value: "A Node.js bot that polls the site's internal API and sends a Telegram alert the instant a slot opens, plus a browser extension that drives the booking UI up to the payment page." },
  { label: "Hardest part", value: "Everything was undocumented: session-scoped IDs, a localized Angular SPA, custom form widgets, and a Cloudflare Turnstile captcha." },
  { label: "Principle", value: "Automate the tedious 90%; keep the human in control of captcha and payment. No bypass." },
  { label: "Stack", value: "Node.js · Google Sheets API · Telegram Bot API · Docker · WXT · TypeScript · React" },
];

export default function VmTrackerCaseStudy() {
  return (
    <main className="min-h-screen bg-bg-base text-text-primary">
      {/* Back nav */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-28 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-4xl px-4 sm:px-6 pb-16">
        <Badge variant="outline" className="mb-5 border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
          Case Study · Automation
        </Badge>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
          Museum Ticket{" "}
          <span className="gradient-text">Tracker &amp; Auto-Fill</span>
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-8">
          A two-part automation system that watches a major museum&apos;s official ticketing platform for
          availability and helps a user complete a booking in seconds — built by reverse-engineering an
          undocumented single-page app, with a deliberate human-in-the-loop boundary at captcha and payment.
        </p>
        <div className="flex flex-wrap gap-2">
          {TECH.map((t) => (
            <span
              key={t}
              className="rounded-full border border-bg-border px-3 py-1 text-xs text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* TL;DR */}
      <section className="bg-bg-surface border-y border-bg-border py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-brand-blue mb-6">
            TL;DR
          </h2>
          <div className="divide-y divide-bg-border rounded-2xl border border-bg-border overflow-hidden">
            {TL_DR.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] gap-4 px-5 py-4 bg-bg-base/60">
                <span className="text-sm font-semibold text-text-muted shrink-0">{label}</span>
                <span className="text-sm text-text-secondary leading-relaxed">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 space-y-20">

        {/* Results */}
        <section>
          <SectionLabel>Results</SectionLabel>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {RESULTS.map(({ icon: Icon, label, value, desc }) => (
              <div key={label} className="rounded-2xl border border-bg-border bg-bg-surface p-5 text-center">
                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Icon className="size-5" />
                </div>
                <p className="font-display text-2xl font-bold text-text-primary mb-1">{value}</p>
                <p className="text-xs font-semibold text-text-secondary mb-0.5">{label}</p>
                <p className="text-xs text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Problem */}
        <section>
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Tickets vanish in seconds. The site doesn&apos;t help.
          </h2>
          <div className="prose-custom mb-8">
            <p>
              The platform releases inventory in unpredictable bursts, and popular slots are gone within
              seconds. There are no notifications — you have to sit and refresh the site manually. And
              when a slot does appear, you face a long checkout: pick visit → tickets → time slot → a
              10-field contact form → captcha → payment, all under a countdown timer, in the site&apos;s
              default (non-English) language.
            </p>
          </div>
          <div className="rounded-2xl border border-bg-border bg-bg-surface overflow-hidden">
            <div className="border-b border-bg-border px-4 py-2.5 flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-red-500/70" />
              <span className="size-2.5 rounded-full bg-yellow-500/70" />
              <span className="size-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-text-muted font-mono">before-after.svg</span>
            </div>
            <div className="p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/vm-tracker/before-after.svg"
                alt="Before and after comparison: manual ticket hunting vs. automated alert + auto-fill"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Solution */}
        <section>
          <SectionLabel>Solution Overview</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Two cooperating parts, one seamless flow
          </h2>
          <div className="prose-custom mb-8">
            <p>
              <strong className="text-text-primary">1. The tracker bot (server-side).</strong> A
              containerized Node.js service reads a Google Sheet of &quot;watch&quot; rows (date, time,
              ticket counts, contact details, visit type), polls the site&apos;s internal JSON API on an
              interval, and the moment a matching slot is available, sends a formatted Telegram alert
              containing a deep link.
            </p>
            <p className="mt-3">
              <strong className="text-text-primary">2. The auto-fill extension (client-side).</strong>{" "}
              A WXT/React browser extension reads that deep link, then drives the real booking UI like a
              human would — selecting the visit, ticket quantities, time slot, and prefilling the entire
              checkout form — stopping at the captcha and payment for the person to finish.
            </p>
          </div>
          <ImageFrame src="/projects/vm-tracker/architecture.svg" alt="System architecture: Google Sheet → Bot → Telegram → Extension → prefilled checkout" label="architecture.svg" />
        </section>

        {/* Booking flow */}
        <section>
          <SectionLabel>Booking Flow</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            From alert to prefilled checkout in one tap
          </h2>
          <div className="prose-custom mb-8">
            <p>
              The Telegram alert encodes the entire booking instruction — which visit, how many
              adult/child tickets, preferred time, contact details — into a compact base64 query
              parameter. Tapping the link opens the booking site with the extension already primed.
              The extension then navigates each step of the SPA, filling in the contact form and
              selecting the right slot, stopping just before the captcha.
            </p>
          </div>
          <ImageFrame src="/projects/vm-tracker/booking-flow.svg" alt="Step-by-step booking flow from Telegram alert to prefilled checkout" label="booking-flow.svg" />
        </section>

        {/* Extension popup */}
        <section>
          <SectionLabel>Browser Extension</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            A WXT/React popup with status and controls
          </h2>
          <div className="prose-custom mb-8">
            <p>
              Driving an Angular SPA from a content script means there are no page reloads —
              navigation happens within the app. The extension patches <code>history.pushState</code> /
              <code>replaceState</code> and watches <code>popstate</code> events to fire the right
              automation step on each route change. Angular&apos;s reactive forms require triggering
              native input events, not just setting values, to register the change — custom widgets like
              the bespoke dropdown, date picker, and Material checkboxes each needed their own driver.
            </p>
          </div>
          <ImageFrame src="/projects/vm-tracker/popup-mockup.svg" alt="Browser extension popup showing status, configuration, and progress through booking steps" label="popup-mockup.svg" />
        </section>

        {/* Tech deep-dives */}
        <section>
          <SectionLabel>Technical Highlights</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-8">
            Five interesting engineering problems
          </h2>
          <div className="space-y-6">
            {[
              {
                n: "01",
                title: "Reverse-engineering an undocumented SPA",
                body: "The site is an Angular Material SPA with no public API. I mapped its routes from the main bundle, traced the lazy-loaded chunks for the visit/checkout pages, and recovered the internal API surface: a search endpoint, a time-availability endpoint, a ticket-types endpoint, and a reservation endpoint.",
              },
              {
                n: "02",
                title: "The session-scoped ID trap",
                body: "My first design passed the visit's numeric `id` from the bot to the extension. It kept failing. The root cause: that ID is regenerated per browser session — the value the bot sees is meaningless in the clicker's browser. The fix was to match the visit by its name instead.",
              },
              {
                n: "03",
                title: "Bilingual, fuzzy name matching",
                body: "The displayed card name doesn't equal the API name (e.g., \"Admission Ticket\" shows as \"Entrance Tickets\"), and the page can render in a second language. I built a tolerant matcher: tokenize → de-pluralize → map cross-language synonyms → score by keyword overlap. It resolves the right card across wording and language differences, shared by both the bot and the extension.",
              },
              {
                n: "04",
                title: "Driving an Angular SPA from a content script",
                body: "Clicking \"Proceed\" navigates within the SPA — no page reload — so a content script that runs once never sees the checkout page. I added a navigation watcher (patched history.pushState/replaceState + popstate/hashchange + a poll) so the right automation step fires on each in-app route change.",
              },
              {
                n: "05",
                title: "Captcha & payment boundary — by design",
                body: "Checkout is guarded by Cloudflare Turnstile, and payment happens on an external bank gateway with 3-D Secure. These are exactly the controls meant to keep a human in the loop — so the extension stops at the prefilled checkout. It never solves or fakes the captcha, and never auto-pays.",
              },
            ].map(({ n, title, body }) => (
              <div
                key={n}
                className="rounded-2xl border border-bg-border bg-bg-surface p-6 flex gap-5"
              >
                <span className="font-display text-3xl font-bold text-bg-elevated/80 shrink-0 select-none w-10">
                  {n}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-text-primary mb-2">{title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section>
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-6">
            Two codebases, one shared foundation
          </h2>
          <ImageFrame src="/projects/vm-tracker/tech-stack.svg" alt="Technology stack diagram showing the bot and extension layers" label="tech-stack.svg" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-bg-border bg-bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">Bot (server)</p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                {["Node.js (ESM)", "Google Sheets API", "Telegram Bot API", "node-fetch + cookie jar", "Docker / docker-compose", "GitHub Actions"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-emerald-500/60 shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-bg-border bg-bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">Extension (client)</p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                {["WXT framework", "TypeScript", "React (popup UI)", "MV3 content script + background", "chrome.storage (session + local)"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-brand-cyan/60 shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
            Need something similar?
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            We specialize in automation, reverse-engineering, and building robust tools around APIs
            that were never meant to be used externally.
          </p>
          <Link
            href="/contact?service=api"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue/90 transition-colors"
          >
            Talk to us about your project
          </Link>
        </section>

      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">
      {children}
    </p>
  );
}

function ImageFrame({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="rounded-2xl border border-bg-border bg-bg-surface overflow-hidden">
      <div className="border-b border-bg-border px-4 py-2.5 flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-text-muted font-mono">{label}</span>
      </div>
      <div className="p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
}
