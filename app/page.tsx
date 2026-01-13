"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import IntroductionSection from "@/components/IntroductionSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import MyApproachSection from "@/components/MyApproachSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import Testimonials from "@/components/Testimonials";
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

        {/* Stats Bar Section */}
        <section id="stats-bar">
          <StatsBar />
        </section>

        {/* Introduction Section */}
        <section id="introduction">
          <IntroductionSection />
        </section>

        {/* What I Do Section */}
        <section id="what-i-do">
          <WhatIDoSection />
        </section>

        {/* My Approach Section */}
        <section id="my-approach">
          <MyApproachSection />
        </section>

        {/* Featured Programs Section */}
        <section id="programs" className="bg-gradient-to-br from-yellow-50 via-white to-white">
          <FeaturedPrograms />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-white">
          <Testimonials />
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
