"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/section-heading";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about the workflows you want to unlock"
          description="Share a few details—we’ll follow up within two business days. For urgent requests, note it in the message."
        />
        <div className="mx-auto mt-14 max-w-xl">
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-border/50 bg-card/25 p-8 shadow-xl backdrop-blur-sm"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Alex Rivera"
                autoComplete="name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                placeholder="SmartFlowGen Labs"
                autoComplete="organization"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">What should we automate?</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tools in scope, timelines, success metrics…"
              />
            </div>
            {submitted ? (
              <p className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-200">
                Thanks—your message is recorded for this demo. Wire this form to
                your API or email provider for production.
              </p>
            ) : null}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 text-base font-semibold text-zinc-950 shadow-md shadow-cyan-500/20 sm:w-auto"
            >
              Send message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
