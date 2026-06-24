"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { NavMegaServices } from "@/components/layout/NavMegaServices";
import { NavMegaTechnologies } from "@/components/layout/NavMegaTechnologies";
import { NavMobileSidebar } from "@/components/layout/NavMobileSidebar";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "glass border-b border-bg-border shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <LogoIcon size={36} animated={false} />
            <span className="font-display text-lg font-bold text-text-primary hidden sm:block">
              Code Machinist
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu align="center">
              <NavigationMenuList className="gap-1">
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex h-9 items-center rounded-lg px-4 text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "gradient-text font-semibold"
                          : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Services mega menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-9 gap-1 bg-transparent text-sm font-medium hover:bg-bg-elevated data-[state=open]:bg-bg-elevated",
                      pathname.startsWith("/services")
                        ? "gradient-text font-semibold"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="glass border border-bg-border rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
                    <NavMegaServices />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Technologies mega menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="h-9 gap-1 bg-transparent text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-elevated data-[state=open]:bg-bg-elevated"
                  >
                    Technologies
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="glass border border-bg-border rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
                    <NavMegaTechnologies />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden lg:inline-flex bg-brand-blue text-white hover:bg-brand-blue/90 glow-blue transition-all"
            >
              <Link href="/contact">Hire Us</Link>
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden rounded-lg p-2 text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <NavMobileSidebar open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}
