"use client";

import { motion } from "framer-motion";
import {
  Bot,
  GitBranch,
  LineChart,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const items = [
  {
    icon: Zap,
    title: "Process automation",
    description:
      "Eliminate repetitive tasks with resilient, observable pipelines tailored to your ops.",
  },
  {
    icon: Bot,
    title: "LLM copilots",
    description:
      "Context-aware assistants grounded in your data—with guardrails and audit trails.",
  },
  {
    icon: LineChart,
    title: "Revenue intelligence",
    description:
      "Score leads, enrich records, and surface next-best-actions in real time.",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel routing",
    description:
      "Smart triage across email, chat, and tickets with human-in-the-loop handoffs.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-ready",
    description:
      "PII handling, retention policies, and access controls built into every flow.",
  },
  {
    icon: GitBranch,
    title: "CI/CD for automations",
    description:
      "Versioned workflows, staging environments, and safe rollouts like software.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function AutomationServicesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="AI automation services"
          title="Automation that feels invisible—and performs like infrastructure"
          description="From discovery to production, we embed with your team to map processes, model outcomes, and ship automations that compound."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((s) => (
            <motion.div key={s.title} variants={item}>
              <Card className="group h-full border-border/50 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5">
                <CardHeader className="pb-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300 transition-transform group-hover:scale-105">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {s.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
