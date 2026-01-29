"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhoIHelp from "@/components/WhoIHelp";
import SignatureApproach from "@/components/SignatureApproach";
import ProgramsComparison from "@/components/ProgramsComparison";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* Social Proof Section */}
        <section id="social-proof">
          <SocialProof />
        </section>

        {/* Who I Help Section */}
        <section id="who-i-help">
          <WhoIHelp />
        </section>

        {/* Signature Approach Section */}
        <section id="signature-approach">
          <SignatureApproach />
        </section>

        {/* Programs Comparison Section */}
        <section id="programs" className="bg-gradient-to-br from-purple-50/30 via-white to-soft-blue-50/30">
          <ProgramsComparison />
        </section>

        {/* CTA Section */}
        <section id="cta">
          <CTASection />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}
