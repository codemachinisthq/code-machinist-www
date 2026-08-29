"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.enum(["mobile", "web", "desktop", "design", "api", "cloud", "ai", "other"] as const, {
    errorMap: () => ({ message: "Please select a service" }),
  }),
  budget: z.enum(["under-2k", "2k-10k", "10k-25k", "25k-plus"] as const, {
    errorMap: () => ({ message: "Please select a budget range" }),
  }),
  message: z
    .string()
    .min(20, "Please provide at least 20 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

type FormValues = z.infer<typeof schema>;

const SERVICE_OPTIONS = [
  { value: "mobile", label: "Mobile App Development" },
  { value: "web", label: "Web Development" },
  { value: "desktop", label: "Desktop App Development" },
  { value: "design", label: "UI/UX Design" },
  { value: "api", label: "API & Backend Development" },
  { value: "cloud", label: "Cloud & DevOps" },
  { value: "ai", label: "AI Integration" },
  { value: "other", label: "Other / Not Sure Yet" },
];

const BUDGET_OPTIONS = [
  { value: "under-2k", label: "Under $2,000" },
  { value: "2k-10k", label: "$2,000 – $10,000" },
  { value: "10k-25k", label: "$10,000 – $25,000" },
  { value: "25k-plus", label: "$25,000+" },
];

const FIELD_CLS =
  "h-11 rounded-xl bg-bg-base border border-white/11 text-text-primary placeholder:text-text-muted/60 text-sm px-4 transition-colors hover:border-white/20 focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/20 focus-visible:outline-none";

const SELECT_CLS =
  "h-11 w-full rounded-xl bg-bg-base border border-white/11 text-text-primary text-sm px-4 transition-colors hover:border-white/20 focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/20 data-placeholder:text-text-muted/60";

const DROPDOWN_CLS =
  "bg-bg-elevated border border-white/11 rounded-xl shadow-xl shadow-black/60 p-1";

const ITEM_CLS =
  "text-sm text-text-secondary rounded-lg focus:bg-bg-surface focus:text-text-primary cursor-default";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: (defaultService as FormValues["service"]) ?? undefined,
      budget: undefined,
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Failed to send");
        setSuccess(true);
      } catch {
        toast.error("Something went wrong. Please try again or email us directly.");
      }
    });
  };

  return (
    <AnimatePresence mode="wait">
      {success ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-16 gap-4"
        >
          <div className="flex size-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">
            <CheckCircle className="size-8" />
          </div>
          <h3 className="font-display text-2xl font-bold text-text-primary">
            Message Received!
          </h3>
          <p className="text-text-secondary max-w-sm">
            We&apos;ll review your project and get back to you within 24 hours. Check your inbox for a confirmation.
          </p>
        </motion.div>
      ) : (
        <motion.div key="form" initial={{ opacity: 1 }}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-text-secondary">Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Alex Rivera"
                          className={FIELD_CLS}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-text-secondary">Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="alex@company.com"
                          className={FIELD_CLS}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-text-secondary">Company (optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Acme Inc."
                        className={FIELD_CLS}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-text-secondary">Service Needed *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className={SELECT_CLS}>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className={DROPDOWN_CLS}>
                          {SERVICE_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value} className={ITEM_CLS}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-text-secondary">Budget Range *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className={SELECT_CLS}>
                            <SelectValue placeholder="Select a range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className={DROPDOWN_CLS}>
                          {BUDGET_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value} className={ITEM_CLS}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-text-secondary">
                      Tell Us About Your Project *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Describe your project, goals, and any specific requirements..."
                        className="resize-none bg-bg-base border border-white/11 text-text-primary placeholder:text-text-muted/60 rounded-xl px-4 py-3 text-sm transition-colors hover:border-white/20 focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/20 focus-visible:outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isPending}
                size="lg"
                className="w-full bg-brand-blue text-white hover:bg-brand-blue/90 text-base font-semibold h-12 rounded-xl shadow-lg shadow-brand-blue/20 transition-all"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 size-4" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
