"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { CheckCircle, Loader2, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();
  const prefersReduced = useSafeReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    startTransition(async () => {
      // Placeholder — wire up your email provider here (e.g. Resend, Mailchimp)
      await new Promise((res) => setTimeout(res, 1000));
      setSuccess(true);
      setEmail("");
    });
  };

  return (
    <section className="py-20 sm:py-24 bg-bg-void border-y border-bg-border" aria-labelledby="newsletter-heading">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <Badge variant="outline" className="mb-4 border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan">
          Stay Updated
        </Badge>
        <h2
          id="newsletter-heading"
          className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-3"
        >
          Engineering Insights, Delivered
        </h2>
        <p className="text-text-secondary mb-8">
          Practical tips on mobile, web, and AI development — no fluff, no spam. Join 1,200+ builders.
        </p>

        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              initial={prefersReduced ? {} : { scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-3 text-green-400"
            >
              <CheckCircle className="size-12" />
              <p className="font-semibold text-text-primary">You&apos;re in! Check your inbox.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted pointer-events-none" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9 bg-bg-surface border-bg-border text-text-primary placeholder:text-text-muted focus-visible:ring-brand-blue"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isPending}
                className="bg-brand-blue text-white hover:bg-brand-blue/90 shrink-0"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Subscribing…
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>

        <p className="mt-4 text-xs text-text-muted">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
