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
    <div className="relative noise-overlay snap-scroll-container" style={{ backgroundColor: "#0D0D1A" }}>
      <Navbar onOpenForm={() => setFormOpen(true)} />

      <main>
        <section className="snap-section"><HeroSection onOpenForm={() => setFormOpen(true)} /></section>
        <section className="snap-section"><ProblemSolutionSection /></section>
        <section className="snap-section"><StatsSection /></section>
        <section className="snap-section"><CapabilitiesSection /></section>
        <section className="snap-section"><DeploymentSection /></section>
        <section className="snap-section"><CTASection onOpenForm={() => setFormOpen(true)} /></section>
        <section className="snap-section snap-section-auto"><Footer /></section>
      </main>

      <LeadCaptureForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
      />
    </div>
  );
}
