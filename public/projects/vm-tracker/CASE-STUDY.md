# Case Study — High-Demand Ticket Tracker & Auto-Fill Assistant

> A two-part automation system that watches a major museum's official ticketing
> platform for availability and helps a user complete a booking in seconds — built
> by reverse-engineering an undocumented single-page app, with a deliberate
> human-in-the-loop boundary at the captcha and payment.

*(Client/site name omitted; this is a generalized write-up of the engineering.)*

---

## TL;DR

| | |
|---|---|
| **Problem** | High-demand museum tickets sell out in seconds; the official site has no alerts and a slow multi-step checkout. |
| **Solution** | A **Node.js bot** that polls the site's internal API and pings **Telegram** the instant a wanted slot appears, plus a **browser extension** that auto-drives the booking UI up to the payment page. |
| **Hardest part** | Everything was undocumented and defended: session-scoped IDs, a localized Angular SPA, custom form widgets, and a Cloudflare Turnstile captcha. |
| **Principle** | Automate the tedious 90%; keep the human in control of the captcha and the actual payment. No captcha bypass. |
| **Stack** | Node.js · Google Sheets API · Telegram Bot API · Docker · WXT · TypeScript · React |

---

## The problem

The platform releases inventory in unpredictable bursts, and popular slots
(general admission especially) are gone within seconds. For someone trying to book
a specific date/time, that means:

- **No notifications** — you have to sit and refresh the site manually.
- **A long checkout** — pick visit → tickets → time slot → a 10-field contact form
  → captcha → payment, all under a countdown timer, in the site's default
  (non-English) language.

The goal: get notified the moment a wanted slot opens, and remove as much of the
repetitive checkout typing as possible — without doing anything the site forbids
(no captcha solving, no auto-payment).

---

## Solution overview

The system has two cooperating parts:

**1. The tracker bot (server-side).**
A containerized Node.js service reads a Google Sheet of "watch" rows (date, time,
ticket counts, contact details, visit type), polls the site's internal JSON API on
an interval, and the moment a matching slot is available, sends a formatted
Telegram alert containing a deep link.

**2. The auto-fill extension (client-side).**
A WXT/React browser extension reads that deep link, then drives the real booking
UI like a human would — selecting the visit, ticket quantities, time slot, and
prefilling the entire checkout form — stopping at the captcha + payment for the
person to finish.

The link is the bridge: the bot encodes the whole booking instruction (which
visit, how many adult/child tickets, preferred time, contact details) into a
compact, base64-encoded query parameter the extension decodes.

---

## Technical deep-dive (the interesting parts)

Nothing here was documented. Each capability below was recovered by reading the
site's minified Angular bundles, inspecting live network traffic, and probing the
API directly.

### 1. Reverse-engineering an undocumented SPA
The site is an Angular Material single-page app. I mapped its routes from the main
bundle, traced the lazy-loaded chunks for the visit/checkout pages, and recovered
the internal API surface: a search endpoint (lists visits), a time-availability
endpoint (slots), a ticket-types endpoint, and a reservation endpoint.

### 2. The session-scoped ID trap
My first design passed the visit's numeric `id` from the bot to the extension.
It kept failing. The root cause: **that `id` is regenerated per browser session** —
the value the bot sees is meaningless in the clicker's browser. The fix was to
match the visit by its **name** instead of its id — which led to the next problem.

### 3. Bilingual, fuzzy name matching
The displayed card name doesn't equal the API name (e.g. an internal "Admission
Ticket" shows on the card as "Entrance Tickets"), and the page can render in a
second language. Exact matching was hopeless. I built a tolerant matcher:
tokenize → de-pluralize → map cross-language synonyms to canonical tokens →
score by keyword overlap. It reliably resolves the right card across wording **and**
language differences, and is shared by both the bot (API match) and the extension
(card match).

### 4. Driving an Angular SPA from a content script
Clicking "Proceed" navigates *within* the SPA — no page reload — so a content
script that runs once never sees the checkout page. I added a navigation watcher
(patched `history.pushState`/`replaceState` + `popstate`/`hashchange` + a poll) so
the right automation step fires on each in-app route change. Form fields are filled
the way Angular's reactive forms require (native value setter + dispatched
`input`/`change`/`blur` events), and custom widgets (a bespoke dropdown component,
a date picker, Material checkboxes) are each driven appropriately.

### 5. The captcha & payment boundary — by design
Checkout is guarded by **Cloudflare Turnstile**, and payment happens on an
external bank gateway with 3-D Secure. These are exactly the controls meant to
keep a human in the loop — so the extension **stops at the prefilled checkout**.
It never solves, fakes, or bypasses the captcha, and never auto-pays. This was a
deliberate product decision: the tool removes tedium, not human consent.

### 6. Robust slot selection
Availability has nuance — a "low availability" slot is bookable but shares a status
badge with sold-out slots, which caused false "no slot" results until I switched
to text-based detection. The extension picks the slot closest to the preferred
time within a ±30-minute window, skipping genuinely sold-out times.

---

## Architecture

See [architecture.svg](architecture.svg) and [booking-flow.svg](booking-flow.svg).

```
Google Sheet ──▶ Bot (Node, Docker) ──polls──▶ site's internal API
                      │
                      ▼ (slot found)
                 Telegram alert  ──link──▶  Clicker's browser + Extension
                                                 │ drives the UI
                                                 ▼
                                       Prefilled checkout  ──▶  human: captcha + pay
```

---

## Results

- **Seconds, not minutes** from "slot opens" to "one tap from paying."
- **End-to-end automation** of the tedious path: visit selection, ticket counts
  (adult→full, child→reduced), slot pick, and a 10-field contact form — all
  prefilled from a single spreadsheet row.
- **Bilingual & resilient** to the site's wording/localization quirks and
  session-scoped identifiers.
- **Responsible by design** — the human always completes the captcha and payment.
- **Containerized & hands-off** — the bot runs 24/7 in Docker, configured entirely
  from a Google Sheet.

---

## Tech stack

**Bot:** Node.js (ESM) · Google Sheets API · Telegram Bot API · `node-fetch` +
cookie jar · Docker / docker-compose · GitHub Actions (image publish).

**Extension:** WXT · TypeScript · React (popup) · MV3 content script + background ·
`chrome.storage` (session + local).

**Shared:** a base64 link codec and a bilingual fuzzy name-matcher kept in sync
across both codebases.

---

## What I'd highlight

- Comfortable working **without documentation** — recovering an API and UI contract
  from minified code and live traffic.
- **Pragmatic debugging** of subtle, environment-specific bugs (session-scoped IDs,
  SPA navigation, reused CSS status badges, localized labels).
- **Judgment about boundaries** — building powerful automation while deliberately
  refusing to cross into captcha-bypass or unattended payment.
