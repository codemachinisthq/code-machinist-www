import Link from "next/link";
import { GitBranch, Link2, AtSign, Mail, ArrowRight } from "lucide-react";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { CONTACT_EMAIL } from "@/lib/site";
import { MEGA_SERVICES } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

const company = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: GitBranch, href: "#", label: "GitHub" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: AtSign, href: "#", label: "Twitter / X" },
  { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-bg-border bg-bg-void">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <LogoIcon size={36} />
              <span className="font-display text-lg font-bold text-text-primary">
                Code Machinist
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              We build high-performance mobile apps, web platforms, and AI-powered products that move businesses forward.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-lg border border-bg-border text-text-muted hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-sm font-semibold text-text-primary">Services</p>
            <ul className="space-y-2.5">
              {MEGA_SERVICES.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={svc.href}
                    className="text-sm text-text-secondary hover:text-brand-blue transition-colors"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-sm font-semibold text-text-primary">Company</p>
            <ul className="space-y-2.5">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="mb-1 text-sm font-semibold text-text-primary">Contact</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-text-secondary hover:text-brand-blue transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="mb-2 text-sm font-semibold text-text-primary">Stay in the loop</p>
            <p className="mb-4 text-sm text-text-secondary">
              Tips on mobile, web, and AI engineering — straight to your inbox.
            </p>
            <form className="flex overflow-hidden rounded-lg border border-bg-border focus-within:border-brand-blue transition-colors">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-text-primary outline-none placeholder:text-text-muted"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-brand-blue px-3 text-white hover:bg-brand-blue/90 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-bg-border" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Code Machinist. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-text-secondary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
