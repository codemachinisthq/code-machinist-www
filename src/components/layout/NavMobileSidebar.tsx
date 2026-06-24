"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Smartphone, Monitor, AppWindow, Palette, Server, Cloud, Brain, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { MEGA_SERVICES, TECH_CATEGORIES, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="size-4" />,
  Monitor: <Monitor className="size-4" />,
  AppWindow: <AppWindow className="size-4" />,
  Palette: <Palette className="size-4" />,
  Server: <Server className="size-4" />,
  Cloud: <Cloud className="size-4" />,
  Brain: <Brain className="size-4" />,
};

interface NavMobileSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NavMobileSidebar({ open, onOpenChange }: NavMobileSidebarProps) {
  const pathname = usePathname();

  const close = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="w-[320px] overflow-y-auto border-bg-border bg-bg-base p-0"
      >
        <SheetHeader className="flex flex-row items-center justify-between border-b border-bg-border px-5 py-4">
          <Link href="/" onClick={close} className="flex items-center gap-2.5">
            <LogoIcon size={32} />
            <span className="font-display text-base font-bold text-text-primary">
              Code Machinist
            </span>
          </Link>
          <SheetClose className="rounded-lg p-1.5 text-text-muted hover:text-text-primary transition-colors">
            <X className="size-5" />
          </SheetClose>
        </SheetHeader>

        <nav className="px-4 py-4">
          {/* Static links */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={cn(
                "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-brand-blue bg-brand-blue/10"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Services accordion */}
          <Accordion multiple={false} className="mt-1">
            <AccordionItem value="services" className="border-none">
              <AccordionTrigger className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-elevated hover:no-underline">
                Services
              </AccordionTrigger>
              <AccordionContent className="pb-1 pl-3">
                <div className="space-y-0.5">
                  {MEGA_SERVICES.map((svc) => (
                    <Link
                      key={svc.id}
                      href={svc.href}
                      onClick={close}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-text-secondary hover:text-brand-blue hover:bg-brand-blue/5 transition-colors"
                    >
                      <span className="text-brand-blue/70">{iconMap[svc.icon]}</span>
                      {svc.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Technologies accordion */}
            <AccordionItem value="technologies" className="border-none">
              <AccordionTrigger className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-elevated hover:no-underline">
                Technologies
              </AccordionTrigger>
              <AccordionContent className="pb-1 pl-3">
                {TECH_CATEGORIES.map((cat) => (
                  <div key={cat.label} className="mb-3">
                    <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-brand-blue/70">
                      {cat.label}
                    </p>
                    <div className="space-y-0.5">
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={close}
                          className="block rounded-lg px-3 py-1.5 text-sm text-text-secondary hover:text-brand-blue hover:bg-brand-blue/5 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </nav>

        {/* CTA pinned at bottom */}
        <div className="border-t border-bg-border p-4">
          <Button
            asChild
            className="w-full bg-brand-blue text-white hover:bg-brand-blue/90"
            onClick={close}
          >
            <Link href="/contact">Hire Us</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
