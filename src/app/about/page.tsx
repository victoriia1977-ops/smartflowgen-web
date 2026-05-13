import type { Metadata } from "next";
import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "SmartFlowGen is an AI automation agency helping teams ship intelligent workflows and agents.",
};

export default function AboutPage() {
  return <AboutContent />;
}
