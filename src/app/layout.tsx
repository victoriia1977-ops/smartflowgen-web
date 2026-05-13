import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const defaultUrl =
  process.env.VERCEL_URL != null
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "SmartFlowGen | AI Automation Agency",
    template: "%s | SmartFlowGen",
  },
  description:
    "Premium AI automation, workflow integrations, CRM orchestration, and autonomous agents for modern teams.",
  openGraph: {
    title: "SmartFlowGen | AI Automation Agency",
    description:
      "Design, deploy, and scale intelligent automations across your stack.",
    type: "website",
  },
  metadataBase: new URL(defaultUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} min-h-screen font-sans`}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
