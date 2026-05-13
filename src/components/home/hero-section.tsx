"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/20 via-violet-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            AI automation for revenue teams
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Orchestrate growth with{" "}
            <span className="text-gradient">intelligent automation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            SmartFlowGen designs and ships production-grade AI workflows,
            integrations, and agents—so your team moves faster without adding
            headcount.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-12 min-w-[180px] bg-gradient-to-r from-cyan-500 to-violet-500 text-base font-semibold text-zinc-950 shadow-lg shadow-cyan-500/30 hover:opacity-95"
              asChild
            >
              <Link href="/contact">
                Start a project
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 border-border/60 bg-background/40" asChild>
              <Link href="/services">View capabilities</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="glow-border relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-1 shadow-2xl backdrop-blur-sm">
            <div className="mesh-gradient rounded-xl border border-border/40 p-6 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { label: "Avg. time saved", value: "40h+", sub: "per team / month" },
                  { label: "Integrations", value: "120+", sub: "native connectors" },
                  { label: "Uptime SLA", value: "99.9%", sub: "managed pipelines" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border/30 bg-background/40 p-4 text-center"
                  >
                    <p className="font-mono text-2xl font-bold text-gradient sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {stat.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-md border border-border/40 bg-background/50 px-2 py-1 font-mono">
                  OpenAI
                </span>
                <span className="rounded-md border border-border/40 bg-background/50 px-2 py-1 font-mono">
                  Salesforce
                </span>
                <span className="rounded-md border border-border/40 bg-background/50 px-2 py-1 font-mono">
                  HubSpot
                </span>
                <span className="rounded-md border border-border/40 bg-background/50 px-2 py-1 font-mono">
                  Slack
                </span>
                <span className="rounded-md border border-border/40 bg-background/50 px-2 py-1 font-mono">
                  n8n · Make
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
