import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-bold tracking-tight">
              SmartFlow<span className="text-gradient">Gen</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              AI automation agency building resilient workflows, CRM systems,
              and agentic experiences for ambitious teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <Separator className="my-8 bg-border/60" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} SmartFlowGen. Crafted for the automated
          enterprise.
        </p>
      </div>
    </footer>
  );
}
