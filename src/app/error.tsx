"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-bg-base">
      <div className="text-center px-4">
        <div className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
          <AlertTriangle className="size-8" />
        </div>
        <h1 className="font-display text-3xl font-bold text-text-primary mb-3">
          Something Went Wrong
        </h1>
        <p className="text-text-secondary mb-8 max-w-sm mx-auto">
          An unexpected error occurred. Our team has been notified. Please try refreshing the page.
        </p>
        <Button
          onClick={reset}
          className="bg-brand-blue text-white hover:bg-brand-blue/90"
        >
          <RefreshCw className="mr-2 size-4" />
          Try Again
        </Button>
      </div>
    </section>
  );
}
