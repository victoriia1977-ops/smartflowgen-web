import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Cable,
  Cpu,
  LineChart,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation services: integrations, CRM, agents, and revenue intelligence from SmartFlowGen.",
};

const offerings = [
  {
    icon: Cpu,
    title: "Automation discovery & roadmap",
    description:
      "Workshops, process mining, and ROI modeling to prioritize what to automate first.",
  },
  {
    icon: Cable,
    title: "Integration engineering",
    description:
      "Resilient connectors, data contracts, and observability across your SaaS mesh.",
  },
  {
    icon: LineChart,
    title: "RevOps & CRM systems",
    description:
      "Lifecycle automation, enrichment, routing, and reporting your GTM team will actually use.",
  },
  {
    icon: Bot,
    title: "LLM products & copilots",
    description:
      "Retrieval, evaluation, guardrails, and UX patterns for production assistants.",
  },
  {
    icon: Shield,
    title: "Security & governance",
    description:
      "Access reviews, secrets hygiene, and audit-friendly logging baked into delivery.",
  },
];

export default function ServicesPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Full-stack automation—from whiteboard to production"
          description="Engagements are tailored: retainers for continuous iteration, or fixed-scope pilots that prove value in weeks."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {offerings.map((o) => (
            <Card
              key={o.title}
              className="border-border/50 bg-card/30 transition-colors hover:border-cyan-500/25"
            >
              <CardHeader className="flex flex-row gap-4 space-y-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                  <o.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">{o.title}</CardTitle>
                  <CardDescription className="mt-2 text-base leading-relaxed">
                    {o.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-border/50 bg-zinc-950/50 p-8 sm:flex-row sm:p-10">
          <div>
            <p className="font-display text-xl font-semibold">
              Not sure where to start?
            </p>
            <p className="mt-2 text-muted-foreground">
              We&apos;ll recommend a focused pilot with measurable KPIs.
            </p>
          </div>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-violet-500 text-zinc-950 shadow-md shadow-cyan-500/20"
            asChild
          >
            <Link href="/contact">
              Talk to us
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
