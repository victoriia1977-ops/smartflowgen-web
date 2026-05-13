import type { Metadata } from "next";
import { ContactFormSection } from "@/components/contact-form-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SmartFlowGen to discuss AI automation, integrations, and agents for your team.",
};

export default function ContactPage() {
  return <ContactFormSection />;
}
