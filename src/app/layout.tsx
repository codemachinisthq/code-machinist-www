import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://codemachinist.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Code Machinist — Custom Software for Businesses",
    template: "%s | Code Machinist",
  },
  description:
    "Code Machinist builds websites, apps, and automation tools for business owners — practical software that saves time and wins customers, without the enterprise price tag.",
  keywords: [
    "software development for business",
    "business website design",
    "custom software for business owners",
    "business app development",
    "business process automation",
    "affordable web development",
    "business AI tools",
    "custom business software",
    "website for business",
  ],
  authors: [{ name: "Code Machinist", url: SITE_URL }],
  creator: "Code Machinist",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Code Machinist",
    title: "Code Machinist — Custom Software for Businesses",
    description:
      "Websites, apps, and automation built for business owners — from first idea to something your customers use every day.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Machinist",
    description: "Custom software for business owners",
    creator: "@codemachinist",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg-base text-text-primary antialiased">
        <TooltipProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <Toaster position="bottom-right" theme="dark" />
        </TooltipProvider>
      </body>
    </html>
  );
}
