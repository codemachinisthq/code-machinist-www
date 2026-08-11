/**
 * Site-wide contact details, sourced from the environment.
 *
 * `NEXT_PUBLIC_` is required on the public address: it is rendered in the footer
 * and on the contact page, so the value has to survive into the client bundle.
 */

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@codemachinist.com";

/** Envelope sender for transactional mail. Server-side only — never rendered. */
export const NOREPLY_EMAIL = process.env.NOREPLY_EMAIL ?? "noreply@codemachinist.com";
