/*
 * DESIGN: Neural Cartography — Swiss precision + generative data art
 * Single-page scroll architecture with 9 distinct narrative sections.
 * Problem → Solution → Proof → Action arc for B2B enterprise audience.
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import DeploymentSection from "@/components/DeploymentSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenForm={() => setFormOpen(true)} />

      <main>
        <HeroSection onOpenForm={() => setFormOpen(true)} />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <CapabilitiesSection />
        <DeploymentSection />
        <TrustSection />
        <CTASection onOpenForm={() => setFormOpen(true)} />
      </main>

      <Footer />

      <LeadCaptureForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
      />
    </div>
  );
}
