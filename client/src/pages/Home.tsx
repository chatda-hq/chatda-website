/*
 * fun.xyz-inspired minimal landing page with enhanced visual effects.
 * Sections: Hero → Problem+Solution → Stats → Capabilities → Deployment → CTA → Footer
 * Section dividers and noise overlay for visual richness.
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import StatsSection from "@/components/StatsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import DeploymentSection from "@/components/DeploymentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen relative noise-overlay" style={{ backgroundColor: "#0D0D1A" }}>
      <Navbar onOpenForm={() => setFormOpen(true)} />

      <main>
        <HeroSection onOpenForm={() => setFormOpen(true)} />

        <div className="section-divider" />
        <ProblemSolutionSection />

        <div className="section-divider" />
        <StatsSection />

        <div className="section-divider" />
        <CapabilitiesSection />

        <div className="section-divider" />
        <DeploymentSection />

        <div className="section-divider" />
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
