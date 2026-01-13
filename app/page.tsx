"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProfessionalStats from "@/components/ProfessionalStats";
import SignatureApproach from "@/components/SignatureApproach";
import ProgramsSection from "@/components/ProgramsSection";
import Testimonials from "@/components/Testimonials";
import PhotoGallery from "@/components/PhotoGallery";
import SocialProof from "@/components/SocialProof";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <motion.div
    className="fixed top-0 left-0 h-1 bg-gradient-neon z-[100] shadow-neon"
    style={{ width: `${progress}%` }}
    initial={{ width: 0 }}
    animate={{ width: `${progress}%` }}
    transition={{ duration: 0.1 }}
  />
);

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="fixed inset-0 bg-dark-primary z-[9999] flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="text-center">
          {/* Animated Logo */}
          <motion.div
            className="w-24 h-24 mx-auto mb-8 rounded-xl bg-gradient-neon p-1"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 107, 53, 0.5)",
                "0 0 40px rgba(255, 107, 53, 0.8)",
                "0 0 60px rgba(255, 107, 53, 1)",
                "0 0 40px rgba(255, 107, 53, 0.8)",
                "0 0 20px rgba(255, 107, 53, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-full h-full bg-dark-primary rounded-lg flex items-center justify-center">
              <span className="text-neon-orange font-display font-black text-3xl animate-glow">
                GA
              </span>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.h1
            className="text-2xl font-display font-bold text-text-primary mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Career Development Reimagined
          </motion.h1>

          {/* Animated Dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-neon-orange rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-blue rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("");

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

      setScrollProgress(Math.min(scrollPercent, 100));

      // Track current section
      const sections = [
        "hero",
        "professional-stats",
        "signature-approach",
        "programs",
        "testimonials",
        "gallery",
        "social-proof",
        "contact",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    if (!isLoading) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial call
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-dark-primary overflow-x-hidden">
      {/* Loading Spinner */}
      <LoadingSpinner isLoading={isLoading} />

      {/* Progress Bar */}
      <ProgressBar progress={scrollProgress} />

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Header */}
            <Header />

            {/* Main Sections */}
            <main>
              {/* Hero Section */}
              <section id="hero">
                <Hero />
              </section>

              {/* Professional Stats Section */}
              <section id="professional-stats">
                <ProfessionalStats />
              </section>

              {/* Signature Approach Section */}
              <section id="signature-approach">
                <SignatureApproach />
              </section>

              {/* Programs Section */}
              <section
                id="programs"
                className="py-20 bg-gradient-to-br from-dark-tertiary to-dark-secondary"
              >
                <div className="container mx-auto px-4">
                  <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
                      <span className="text-text-primary">Professional</span>
                      <br />
                      <span className="gradient-text">
                        Development Programs
                      </span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                      Evidence-based training programs designed to accelerate
                      your career growth
                    </p>
                  </motion.div>
                </div>
                <ProgramsSection />
              </section>

              {/* Testimonials Section */}
              <section id="testimonials">
                <Testimonials />
              </section>

              {/* Photo Gallery Section */}
              <section
                id="gallery"
                className="py-20 bg-gradient-to-br from-dark-primary to-dark-secondary"
              >
                <div className="container mx-auto px-4">
                  <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
                      <span className="gradient-text">
                        Moments & Highlights
                      </span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                      A few moments from workshops, trainings, and community
                      events
                    </p>
                  </motion.div>
                </div>
                <PhotoGallery />
              </section>

              {/* Social Proof Section */}
              <section id="social-proof">
                <SocialProof />
              </section>

              {/* Contact Section */}
              <section
                id="contact"
                className="py-20 bg-gradient-to-br from-dark-secondary to-dark-primary"
              >
                <div className="container mx-auto px-4">
                  <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
                      <span className="text-text-primary">
                        Let's Design Your
                      </span>
                      <br />
                      <span className="gradient-text">Next Career Move</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                      Whether you're seeking individual guidance or
                      organizational partnership
                    </p>
                  </motion.div>
                </div>
                <ContactInfo />
              </section>
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Elements */}
            <WhatsAppFloat />
            <BackToTop />

            {/* Section Navigation (Desktop) */}
            <motion.div
              className="hidden lg:flex fixed right-8 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-40"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3 }}
            >
              {[
                { id: "hero", label: "Home" },
                { id: "professional-stats", label: "Stats" },
                { id: "signature-approach", label: "Approach" },
                { id: "programs", label: "Programs" },
                { id: "testimonials", label: "Reviews" },
                { id: "gallery", label: "Gallery" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    currentSection === item.id
                      ? "border-neon-orange bg-neon-orange shadow-neon"
                      : "border-border-subtle hover:border-neon-orange hover:bg-neon-orange/20"
                  }`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-dark-card border border-neon-orange/30 px-3 py-1 rounded-lg text-text-primary text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Ambient Lighting Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
              {/* Gradient Orbs */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-orange/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4],
                  x: [0, -40, 0],
                  y: [0, 40, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
