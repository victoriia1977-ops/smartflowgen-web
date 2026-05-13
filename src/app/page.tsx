import { HeroSection } from "@/components/home/hero-section";
import { AutomationServicesSection } from "@/components/home/automation-services-section";
import { WorkflowIntegrationsSection } from "@/components/home/workflow-integrations-section";
import { CrmAutomationsSection } from "@/components/home/crm-automations-section";
import { AiAgentsSection } from "@/components/home/ai-agents-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AutomationServicesSection />
      <WorkflowIntegrationsSection />
      <CrmAutomationsSection />
      <AiAgentsSection />
      <CtaSection />
    </>
  );
}
