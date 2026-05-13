"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-background to-violet-600/10 p-10 text-center sm:p-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(187_92%_48%_/_0.15),transparent_50%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to automate what slows you down?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Book a strategy session—we&apos;ll map quick wins, a 90-day
              roadmap, and what good looks like on day one.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                className="h-12 min-w-[200px] bg-gradient-to-r from-cyan-500 to-violet-500 text-base font-semibold text-zinc-950 shadow-lg shadow-cyan-500/25"
                asChild
              >
                <Link href="/contact">Schedule a call</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-border/60 bg-background/30"
                asChild
              >
                <Link href="/about">Meet the team</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
