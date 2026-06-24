import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center justify-center bg-bg-base overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 text-center px-4">
        <div className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
          <Terminal className="size-8" />
        </div>
        <h1 className="font-display text-8xl font-bold gradient-text mb-4">404</h1>
        <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
          Page Not Found
        </h2>
        <p className="text-text-secondary mb-8 max-w-sm mx-auto">
          This route doesn&apos;t exist in our codebase. Let&apos;s get you back on track.
        </p>
        <Button asChild className="bg-brand-blue text-white hover:bg-brand-blue/90">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </section>
  );
}
