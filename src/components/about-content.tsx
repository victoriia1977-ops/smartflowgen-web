"use client";

import { motion } from "framer-motion";
import { Award, Rocket, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const values = [
  {
    icon: Rocket,
    title: "Ship, then refine",
    body: "We bias to working software in production—telemetry and iteration beat slide decks.",
  },
  {
    icon: Users,
    title: "Embedded partnership",
    body: "We work alongside your engineers and ops, transferring playbooks—not black boxes.",
  },
  {
    icon: Award,
    title: "Quality bar",
    body: "Reliability, security, and clear ownership are non-negotiable in every engagement.",
  },
];

export function AboutContent() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="We build the automation layer modern companies run on"
          description="SmartFlowGen is a boutique agency focused on AI-powered operations—bridging strategy, integration engineering, and applied machine learning for teams that cannot afford downtime."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-border/50 bg-gradient-to-br from-card/60 to-background/40 p-8"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our team blends product sense with deep systems experience—from
              event-driven architectures to LLM evaluation. Whether you need a
              single high-impact workflow or a portfolio of agents, we meet you
              where you are and scale with you.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Based remotely, working globally. Typical clients: Series A–C
              SaaS, fintech, and healthcare operators modernizing GTM and
              support.
            </p>
          </motion.div>
          <div className="space-y-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-4 rounded-xl border border-border/40 bg-zinc-950/40 p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                  <v.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
