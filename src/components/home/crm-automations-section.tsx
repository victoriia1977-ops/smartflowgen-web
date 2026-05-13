"use client";

import { motion } from "framer-motion";
import { Check, Mail, Phone, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

const pillars = [
  {
    icon: UserPlus,
    title: "Lead lifecycle",
    items: [
      "Instant enrichment & deduplication",
      "Round-robin and territory rules",
      "SLA alerts for stalled deals",
    ],
  },
  {
    icon: Mail,
    title: "Sequences that adapt",
    items: [
      "Behavior-based branching",
      "AI-generated variants with approval",
      "Deliverability monitoring",
    ],
  },
  {
    icon: Phone,
    title: "RevOps telemetry",
    items: [
      "Pipeline hygiene dashboards",
      "Forecast assist signals",
      "Clean handoffs to CS",
    ],
  },
];

export function CrmAutomationsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="CRM automations"
          title="CRM systems that run themselves—until you say stop"
          description="We automate the boring, error-prone parts of Salesforce, HubSpot, and custom stacks—while keeping reps in control."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-b from-violet-500/5 to-transparent p-8"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <ul className="mt-4 space-y-3">
                {p.items.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-400/80" />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <Badge variant="outline" className="border-border/60">
            Salesforce
          </Badge>
          <Badge variant="outline" className="border-border/60">
            HubSpot
          </Badge>
          <Badge variant="outline" className="border-border/60">
            Pipedrive
          </Badge>
          <Badge variant="outline" className="border-border/60">
            Custom objects & APIs
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}
