"use client";

import { motion } from "framer-motion";
import { Brain, Network, Radar, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const agents = [
  {
    icon: Brain,
    name: "Research agent",
    desc: "Autonomous prospect and account research with sourced citations.",
  },
  {
    icon: Workflow,
    name: "Ops agent",
    desc: "Ticket resolution, refunds, and internal requests with policy checks.",
  },
  {
    icon: Radar,
    name: "Monitoring agent",
    desc: "Watches logs and metrics; opens incidents before customers notice.",
  },
  {
    icon: Network,
    name: "Swarm routing",
    desc: "Multi-agent handoffs with shared memory and cost-aware model selection.",
  },
];

export function AiAgentsSection() {
  return (
    <section className="border-t border-border/40 bg-zinc-950/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="AI agents"
          title="Agents that collaborate with your team—not beside it"
          description="We build agent systems with clear scopes, tool permissions, and evaluation harnesses so performance improves safely over time."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {agents.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Card className="h-full overflow-hidden border-border/50 bg-card/25">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/30 text-cyan-200">
                    <a.icon className="h-6 w-6" />
                  </span>
                  <CardTitle className="text-lg">{a.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {a.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
