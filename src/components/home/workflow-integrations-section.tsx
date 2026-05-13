"use client";

import { motion } from "framer-motion";
import { ArrowRightLeft, Boxes, Cpu, Webhook } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const flows = [
  {
    icon: Webhook,
    title: "Event-driven orchestration",
    body: "Webhooks, queues, and schedules trigger multi-step workflows with idempotency and dead-letter handling.",
  },
  {
    icon: ArrowRightLeft,
    title: "Bidirectional sync",
    body: "Keep CRM, data warehouse, and product analytics aligned with conflict resolution and schema evolution.",
  },
  {
    icon: Boxes,
    title: "API mesh",
    body: "Unified connectors, retries, and observability across SaaS APIs—without brittle point-to-point scripts.",
  },
  {
    icon: Cpu,
    title: "Edge + batch",
    body: "Low-latency automations at the edge, plus heavy ETL where throughput matters.",
  },
];

export function WorkflowIntegrationsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-zinc-950/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Workflow integrations"
          title="Connect your stack end-to-end"
          description="We design integration topologies that scale: clear ownership, resilient retries, and dashboards your team can trust."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {flows.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-background/40 p-8"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
