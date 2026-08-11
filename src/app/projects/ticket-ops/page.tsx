import Link from "next/link";
import { ArrowLeft, Clock, Layers, ShieldCheck, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Ticket Ops Suite — Case Study",
  description:
    "A four-surface automation platform for high-demand timed-entry tickets: a chat-native operator console, a 5-second availability watcher, a browser extension that drives checkout, and a Windows agent for away mode.",
  path: "/projects/ticket-ops",
});

const TECH = [
  "Python",
  "Node.js",
  "TypeScript",
  "React",
  "Electron",
  "WXT",
  "Google Sheets API",
  "Chat Bot API",
  "systemd",
  "nginx",
];

const RESULTS = [
  { icon: Clock, label: "Watch interval", value: "5s", desc: "Round-robin across every live monitor" },
  { icon: Layers, label: "Surfaces shipped", value: "4", desc: "Console, watcher, extension, agent" },
  { icon: ShieldCheck, label: "Captcha & payment", value: "Manual", desc: "Never solved, never faked" },
  { icon: Terminal, label: "Deploy", value: "1 cmd", desc: "Idempotent — re-run it to update" },
];

const TL_DR = [
  {
    label: "Problem",
    value:
      "High-demand timed-entry tickets are released in unpredictable bursts and gone in seconds. The platform has no alerts, quotes availability differently per party size and per tour language, and buries the booking behind a multi-step checkout on a countdown.",
  },
  {
    label: "Solution",
    value:
      "Four cooperating surfaces: a chat-native console for defining what to watch, a watcher that alerts within seconds with a one-tap link, a browser extension that drives the booking to the payment page, and a desktop agent that does the opening when nobody is at the keyboard.",
  },
  {
    label: "Hardest part",
    value:
      "Getting two independent codebases — a server-side watcher and a client-side extension — to agree on which visit, which language and which slot, when the platform's own identifiers are session-scoped and its names differ between the API and the page.",
  },
  {
    label: "Principle",
    value:
      "Automate the tedious 90%. Stop hard at the captcha and the card — those controls exist to keep a human in the loop, and the system is built to respect that, not route around it.",
  },
  {
    label: "Stack",
    value: "Python · Node.js · TypeScript · React · Electron · WXT · Google Sheets API · systemd · nginx",
  },
];

const HIGHLIGHTS = [
  {
    n: "01",
    title: "The identifier that means nothing outside your session",
    body:
      "The obvious design passes the platform's numeric visit id from the watcher to the extension. It fails, silently and intermittently, because that id is minted per browser session — the value the server sees is meaningless in the operator's browser. The fix was to stop passing identity and start passing description: both sides resolve the visit by name, using one shared matcher that tokenizes, strips plurals, folds cross-language synonyms and scores by overlap. Same rules on both sides, so they cannot drift apart.",
  },
  {
    n: "02",
    title: "“Any language” is not a language",
    body:
      "Guided visits are sold per tour language, and asking the availability endpoint for “any” merges every language's slots into one list. That looks helpful and is actively harmful: the watcher would find an 08:00 that only exists in one language, the booking link would carry no language, the extension would fall back to a default, and 08:00 would not be there. The watcher now queries each language separately and reports the one that actually offers the time that was asked for — preferring an exact match in one language over a near-miss in another.",
  },
  {
    n: "03",
    title: "Availability is quoted per party size",
    body:
      "A slot that is sold out for four can be open for two. A watcher that only ever asks for the requested party size goes quiet exactly when it would be most useful. Each pass now steps the party down — four, three, two, one — and alerts for the largest party that actually fits, with the ticket mix clamped to it and the original request still shown, so the operator can decide whether a smaller booking is worth taking.",
  },
  {
    n: "04",
    title: "An alert you can still trust on day thirty",
    body:
      "A monitor is watched until someone removes it, and the loop runs every few seconds — so the naive version screams the same news forever. Every alert is reduced to a signature over the offered slots and the party size: an identical signature stays silent, and a slot that disappears is deliberately forgotten so its return is announced as news again. The state is pruned against live monitors on every pass, so it cannot grow without bound.",
  },
  {
    n: "05",
    title: "Two tabs, one cart",
    body:
      "The moment two bookings run in parallel, they corrupt each other. The cart lives in a server-side session keyed by a cookie, and cookies are shared by every tab in a profile — so the second tab's selection quietly overwrites the first, and checkout completes with the wrong ticket. No amount of extension code fixes that, because the conflicting state is not in the browser. The fix was to give each booking its own cookie jar, reused and wiped between bookings and cleaned up when empty.",
  },
  {
    n: "06",
    title: "Hidden tabs do not run",
    body:
      "Away mode wants to open many bookings at once. Browsers will not let you: a backgrounded tab has its animation frames paused and its timers put on a starvation budget, so an automation in a hidden tab simply stalls until someone clicks it — and a single-page app may never even render. The honest fix was to stop fighting it: process one booking at a time in the foreground, move on the moment it reports it reached checkout, and let a watchdog break the queue if it never does. Every booking still ends up open and parked; they are just filled in sequence.",
  },
  {
    n: "07",
    title: "The process that must never stop",
    body:
      "The pause switch had an obvious trap in it: if pausing stopped the process that receives commands, nobody could ever turn it back on. So the two responsibilities live in separate long-running services — the console stays up permanently, and only the watcher is stopped and started, through a narrowly scoped privileged helper. Pausing also drops a flag, so a machine that reboots into a clean start comes back paused rather than surprising everyone with alerts.",
  },
  {
    n: "08",
    title: "A five-hundred character link nobody wants to confirm",
    body:
      "The booking instruction — visit, date, ticket mix, slot, language, contact — travels inside the URL, which makes it enormous. Chat clients open a bare URL immediately but interrupt anything else with an “open this link?” prompt, and a prompt in front of a slot that lasts seconds is a real cost. A tiny redirect service mints a short code derived from the link itself, so the same booking always resolves to the same code and one tap is one tap.",
  },
];

const BOUNDARIES = [
  "The captcha is never solved, scored, proxied or bypassed. The page is filled in and left waiting for a person.",
  "Card details are never entered, stored or transmitted. Payment happens on the third-party gateway, by hand.",
  "The extension only acts on a page the operator opened, using details the operator saved.",
  "Access control on the extension is a server-checked password with a grace window — a real deterrent inside an office, and documented as exactly that rather than sold as tamper-proof.",
];

export default function TicketOpsCaseStudy() {
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
        <Badge variant="outline" className="mb-5 border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan">
          Case Study · Automation Platform
        </Badge>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
          Ticket Ops{" "}
          <span className="gradient-text">Suite</span>
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-8">
          A four-surface automation platform for a small booking operation that watches a high-demand
          timed-entry ticketing site on behalf of several clients at once. A chat window is the entire
          operator console; a five-second
          watcher turns availability into a one-tap link; a browser extension drives the booking to
          the payment page; and a Windows agent keeps it running when nobody is at the desk. It stops,
          deliberately and permanently, at the captcha and the card.
        </p>
        <div className="flex flex-wrap gap-2">
          {TECH.map((t) => (
            <span key={t} className="rounded-full border border-bg-border px-3 py-1 text-xs text-text-muted">
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
              <div
                key={label}
                className="grid grid-cols-[110px_1fr] sm:grid-cols-[160px_1fr] gap-4 px-5 py-4 bg-bg-base/60"
              >
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
          <SectionLabel>At a glance</SectionLabel>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {RESULTS.map(({ icon: Icon, label, value, desc }) => (
              <div key={label} className="rounded-2xl border border-bg-border bg-bg-surface p-5 text-center">
                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <Icon className="size-5" />
                </div>
                <p className="font-display text-2xl font-bold text-text-primary mb-1">{value}</p>
                <p className="text-xs font-semibold text-text-secondary mb-0.5">{label}</p>
                <p className="text-xs text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section>
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Inventory appears for seconds. Nothing tells you.
          </h2>
          <div className="prose-custom">
            <p>
              The platform releases inventory in bursts nobody can predict, and the good slots are gone
              before a human notices. There are no notifications, no waitlist, no API you are meant to
              use. The only strategy the site supports is sitting on it and refreshing.
            </p>
            <p className="mt-3">
              Three details make that worse than it sounds. Availability is quoted{" "}
              <strong className="text-text-primary">per party size</strong>, so a slot that is closed for
              four may be open for two. Guided visits are sold{" "}
              <strong className="text-text-primary">per tour language</strong>, each with its own
              inventory. And when a slot does appear, claiming it means a multi-step checkout — visit,
              quantities, time, a long contact form, a captcha, then an external payment gateway — under a
              countdown, in a page that may not be rendering in your language.
            </p>
            <p className="mt-3">
              An operator running this for several clients at once cannot win that race by hand. But they
              also cannot be handed something that books on their behalf: the captcha and the payment step
              exist precisely to keep a person in the loop, and the answer had to work with that, not
              around it.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section>
          <SectionLabel>Solution Overview</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Four surfaces, one shared spreadsheet
          </h2>
          <div className="prose-custom mb-8">
            <p>
              The system is deliberately small. Two long-lived services, one spreadsheet as the only shared
              state, and two client-side pieces that the operator installs once. There is no database, no
              queue, no orchestrator and no admin panel — every one of those would have been a thing to host,
              secure and explain.
            </p>
            <p className="mt-3">
              The split that matters is between the surface that{" "}
              <strong className="text-text-primary">receives commands</strong> and the surface that{" "}
              <strong className="text-text-primary">does the work</strong>. They are never the same process,
              which is what makes it safe to stop the working half at any moment.
            </p>
          </div>
          <ImageFrame
            src="/projects/ticket-ops/architecture.svg"
            alt="System architecture: chat groups and monitor service on top of a shared spreadsheet, an availability poller that alerts back to the owning group, and a desktop agent plus browser extension that drive the booking to a human-only captcha and payment step"
            label="architecture.svg"
          />
        </section>

        {/* Control plane */}
        <section id="control-plane" className="scroll-mt-28">
          <SectionLabel>Surface 1 — Operator Console</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            The admin panel we deliberately never built
          </h2>
          <div className="prose-custom mb-8">
            <p>
              Every operator action happens in a chat thread: a seven-step inline wizard creates a monitor
              (ticket type → single date, range or whole month → calendar → adults → children → preferred
              times → confirm), and the same thread lists them, removes them, reports status and holds the
              kill switch. No web form, no login, no hosted UI, and no separate place to go when an alert
              arrives — because the alerts arrive in the same thread.
            </p>
            <p className="mt-3">
              That constraint shaped the implementation more than it sounds. A calendar has to be drawn with
              inline keyboard buttons and padded so the columns do not collapse; a monitor has to read like
              the booking page rather than like a database row; and multi-tenancy is just the chat group —
              each group sees, edits and is alerted about only its own monitors, re-checked against that
              group&apos;s current permissions on every pass rather than trusted from creation time.
            </p>
          </div>
          <ImageFrame
            src="/projects/ticket-ops/control-plane.svg"
            alt="The chat-based operator console: a seven-step wizard rail, an inline calendar picker with a selected date range, the reply keyboard, and examples of a saved monitor card and an availability alert"
            label="control-plane.svg"
          />
        </section>

        {/* Watcher */}
        <section>
          <SectionLabel>Surface 2 — The Watcher</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Eight decisions before anyone is allowed to be interrupted
          </h2>
          <div className="prose-custom mb-8">
            <p>
              The watcher runs a tick every five seconds and handles one monitor per pass, round-robin, so no
              single monitor can starve the others. Each pass seeds a session, resolves the visit by name,
              fans out across languages, matches the requested times and their ±30 minute fallbacks, steps the
              party size down until something fits, and only then asks whether this is actually news.
            </p>
            <p className="mt-3">
              Most of that list exists because the naive version was wrong in a way that was hard to see: it
              alerted about slots that could not be booked, or stayed silent about ones that could, or was so
              noisy that people stopped reading it. The last two steps — dedupe, then route back to the owning
              group — are what make it something an operator can leave running for a month.
            </p>
          </div>
          <ImageFrame
            src="/projects/ticket-ops/availability-pipeline.svg"
            alt="The eight-step availability pipeline: seed a session, resolve the visit by name, fan out per language, match the time window, step the party size down, dedupe against the last alert, encode and shorten the link, deliver to one group"
            label="availability-pipeline.svg"
          />
        </section>

        {/* Extension */}
        <section id="extension" className="scroll-mt-28">
          <SectionLabel>Surface 3 — Browser Extension</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Driving someone else&apos;s single-page app, honestly
          </h2>
          <div className="prose-custom mb-8">
            <p>
              Tapping an alert opens the real booking site with the whole instruction encoded in the URL. The
              extension decodes it and drives the page the way a fast human would: pick the right visit card,
              set the quantities, choose the slot, fill the contact form — then stop.
            </p>
            <p className="mt-3">
              Two things make that harder than a form-filler. The site&apos;s widgets are bespoke, so setting a
              value changes nothing — only a real click registers, and the framework&apos;s validators only wake
              up for a specific sequence of native events. And navigation happens without a page load, so a
              content script that runs once never sees the checkout at all; the history API is patched and
              navigation events watched so each step re-arms at the right moment.
            </p>
          </div>
          <ImageFrame
            src="/projects/ticket-ops/extension.svg"
            alt="The extension popup showing contact profile fields, behaviour toggles and away-mode settings, beside the seven ordered steps the content script performs, ending at a hard stop before the captcha"
            label="extension.svg"
          />
        </section>

        {/* Isolation */}
        <section>
          <SectionLabel>The Concurrency Bug</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Two bookings at once, one cart
          </h2>
          <div className="prose-custom mb-8">
            <p>
              This one is worth singling out because it is invisible until it costs money. Running two
              bookings in parallel appears to work — two tabs, two selections, two checkout pages. But the
              cart is server-side and keyed by a cookie, and cookies belong to the profile, not the tab. The
              second selection overwrites the first, and the operator pays for a ticket they did not choose.
            </p>
            <p className="mt-3">
              There is no client-side fix, because the state being clobbered is not on the client. Each booking
              gets its own cookie jar instead — created on demand, wiped before reuse so no stale cart carries
              over, and cleaned up when its tabs are gone. On browsers with no per-tab equivalent, the feature
              degrades to a no-op and bookings are run one at a time.
            </p>
          </div>
          <ImageFrame
            src="/projects/ticket-ops/isolation.svg"
            alt="Comparison: with a shared cookie jar two booking tabs collapse into one server-side cart and the second overwrites the first; with one jar per booking both carts survive to the payment page"
            label="isolation.svg"
          />
        </section>

        {/* Desktop agent */}
        <section id="desktop-agent" className="scroll-mt-28">
          <SectionLabel>Surface 4 — Desktop Agent</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            For the end of the operation that will never open a terminal
          </h2>
          <div className="prose-custom mb-8">
            <p>
              The last surface exists for a specific person: someone running this overnight who should not be
              configuring anything. A Windows installer, one button, and a tray icon. It polls the server for
              recent booking links and opens each one in the browser the extension is actually installed in —
              not a clean automated browser, which would have neither the extension nor the saved profile.
            </p>
            <p className="mt-3">
              The interesting parts are the guardrails. Links are opened at most once, ever, recorded before
              the window opens so a crash or a repeated alert cannot double-book. A session cap applies
              back-pressure, so someone returning to the desk finds a handful of tabs waiting rather than
              eighty. And it only ever polls outward — no inbound port, no account, nothing to configure on a
              machine nobody will get to debug in person.
            </p>
          </div>
          <ImageFrame
            src="/projects/ticket-ops/desktop-agent.svg"
            alt="The desktop agent window showing an active monitoring state, session counters, an activity log, and notes on polling outward, opening each link once, applying back-pressure and using the user's real browser"
            label="desktop-agent.svg"
          />
        </section>

        {/* Analytics */}
        <section>
          <SectionLabel>Measurement</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Knowing whether any of it actually worked
          </h2>
          <div className="prose-custom mb-8">
            <p>
              An alerting system is easy to feel good about and hard to evaluate. Four events — link opened,
              reached checkout, payment started, confirmed — are recorded against a token derived from the
              booking itself, so a link tapped at nine in the morning can be joined to the confirmation it
              produced. That turns &quot;the bot is working&quot; into a number, per day and per client.
            </p>
            <p className="mt-3">
              The client side stays deliberately dumb: it sends short opaque codes, and the server assigns the
              meaning. The vocabulary can change without reshipping anything, and the commercial ledger lives
              in a separate spreadsheet from the operational one, reported only in the operator&apos;s own chat.
            </p>
          </div>
          <ImageFrame
            src="/projects/ticket-ops/funnel.svg"
            alt="The four-stage booking funnel — link opened, reached checkout, payment started, confirmed — beside the five steps by which an event travels from the page to a private ledger and into operator-only reports"
            label="funnel.svg"
          />
        </section>

        {/* Deployment */}
        <section>
          <SectionLabel>Operations</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Boring on purpose
          </h2>
          <div className="prose-custom mb-8">
            <p>
              It runs on one small VPS: two service units, a reverse proxy with an auto-renewed certificate,
              two secret files that are in neither the repository nor any build, and two small state files
              whose worst-case loss is a single repeated alert. The public surface is four tiny endpoints.
            </p>
            <p className="mt-3">
              Deployment is a single idempotent script — it installs the runtimes, writes and enables both
              units, configures the proxy, obtains the certificate and health-checks the result, and re-running
              it is also how an update ships. The failure modes are written down as a symptom-to-cause table
              next to it, because the person restarting this at 2am might not be me.
            </p>
          </div>
          <ImageFrame
            src="/projects/ticket-ops/deployment.svg"
            alt="Deployment topology: a single VPS with an always-on console service, a stoppable availability service, a reverse proxy with TLS, secret files and disposable state files, alongside notes on the idempotent installer, the chat kill switch and access restrictions"
            label="deployment.svg"
          />
        </section>

        {/* Highlights */}
        <section>
          <SectionLabel>Technical Highlights</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-8">
            Eight problems that were not obvious from the outside
          </h2>
          <div className="space-y-6">
            {HIGHLIGHTS.map(({ n, title, body }) => (
              <div key={n} className="rounded-2xl border border-bg-border bg-bg-surface p-6 flex gap-5">
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

        {/* Boundaries */}
        <section>
          <SectionLabel>Where it stops</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            The boundary is the product
          </h2>
          <div className="prose-custom mb-6">
            <p>
              Automation against someone else&apos;s booking flow only stays defensible if it has a line in it
              that is never crossed. This one is drawn where the platform itself draws it.
            </p>
          </div>
          <ul className="space-y-3">
            {BOUNDARIES.map((b) => (
              <li
                key={b}
                className="flex gap-3 rounded-xl border border-bg-border bg-bg-surface p-4 text-sm text-text-secondary leading-relaxed"
              >
                <ShieldCheck className="size-4 shrink-0 mt-0.5 text-emerald-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Stack */}
        <section>
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-6">
            Four codebases, one shared vocabulary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StackCard
              title="Console (server)"
              accent="text-brand-blue"
              dot="bg-brand-blue/60"
              items={[
                "Python · long-polling chat bot",
                "Inline-keyboard wizard + calendar",
                "Google Sheets API",
                "Export / import of monitors",
                "systemd unit, always on",
              ]}
            />
            <StackCard
              title="Watcher (server)"
              accent="text-brand-cyan"
              dot="bg-brand-cyan/60"
              items={[
                "Node.js (ESM)",
                "Cookie-jar HTTP client",
                "Shared name-matching module",
                "Link shortener + health endpoint",
                "systemd unit, stoppable from chat",
              ]}
            />
            <StackCard
              title="Extension (client)"
              accent="text-emerald-400"
              dot="bg-emerald-500/60"
              items={[
                "WXT framework · TypeScript",
                "React popup UI",
                "Content scripts + background worker",
                "Per-booking cookie isolation",
                "Server-checked access gate",
              ]}
            />
            <StackCard
              title="Agent (desktop)"
              accent="text-amber-400"
              dot="bg-amber-500/60"
              items={[
                "Electron on Windows",
                "Tray + start-with-Windows",
                "Feed polling with a durable ledger",
                "Launches the user's own browser",
                "Packaged installer, ships the extension",
              ]}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
            Need something similar?
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            We build automation, reverse-engineer undocumented APIs, and ship the unglamorous parts —
            deployment, kill switches, and knowing where to stop.
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

function StackCard({
  title,
  accent,
  dot,
  items,
}: {
  title: string;
  accent: string;
  dot: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-bg-border bg-bg-surface p-5">
      <p className={`text-xs font-semibold uppercase tracking-widest ${accent} mb-3`}>{title}</p>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-2">
            <span className={`size-1.5 rounded-full ${dot} shrink-0`} />
            {t}
          </li>
        ))}
      </ul>
    </div>
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
