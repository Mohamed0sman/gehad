"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BarChart3,
  Brain,
  Microscope,
  CheckCircle,
  Quote,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

interface ApproachCard {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

const SignatureApproach: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const approaches: ApproachCard[] = [
    {
      id: "data-driven",
      icon: BarChart3,
      title: "📊 Data-Driven Coaching",
      subtitle: "Analytics-Powered Decisions",
      description:
        "Career decisions guided by analytics, assessments, and structured frameworks — not guesswork",
      features: [
        "Assessment-Based Insights",
        "Analytics Frameworks",
        "Structured Decision Models",
        "Performance Metrics",
        "Evidence-Based Strategies",
      ],
      color: "neon-orange",
      gradient: "from-neon-orange/20 to-neon-pink/20",
    },
    {
      id: "psychology",
      icon: Brain,
      title: "🧠 Psychology + Decision Science",
      subtitle: "Human-Centered Intelligence",
      description:
        "Integrating emotional intelligence, mindset, and cognitive science to support sustainable choices",
      features: [
        "Emotional Intelligence",
        "Cognitive Science",
        "Behavioral Psychology",
        "Mindset Development",
        "Sustainable Growth",
      ],
      color: "neon-blue",
      gradient: "from-neon-blue/20 to-neon-cyan/20",
    },
    {
      id: "evidence-based",
      icon: Microscope,
      title: "🔬 Evidence-Based Development",
      subtitle: "Globally Grounded Methods",
      description:
        "Grounded in NCDA frameworks, global best practices, and measurable outcomes",
      features: [
        "NCDA Frameworks",
        "Global Best Practices",
        "Measurable Outcomes",
        "Research-Backed Methods",
        "Continuous Validation",
      ],
      color: "neon-purple",
      gradient: "from-neon-purple/20 to-neon-pink/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-dark-secondary via-dark-primary to-dark-tertiary"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-neon-orange rotate-45 animate-spin-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-neon-blue rotate-12 animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-glass rounded-full border border-neon-orange/30 text-neon-orange font-medium">
              <Sparkles className="w-4 h-4" />
              Interactive Section
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display font-black mb-6"
          >
            <span className="text-text-primary">The Science Behind</span>
            <br />
            <span className="gradient-text animate-glow">Career Success</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Three evidence-based pillars that transform career development from
            guesswork into strategic, measurable growth.
          </motion.p>
        </motion.div>

        {/* Interactive Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.id}
              variants={cardVariants}
              className="group relative"
              onMouseEnter={() => setActiveCard(approach.id)}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`p-8 bg-glass rounded-2xl border-2 transition-all duration-500 relative overflow-hidden h-full ${
                  activeCard === approach.id
                    ? `border-${approach.color} shadow-${approach.color.replace("neon-", "neon-")}`
                    : "border-border-subtle hover:border-neon-orange/50"
                }`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${approach.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-${approach.color}/20 flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <approach.icon
                        className={`w-8 h-8 text-${approach.color}`}
                      />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-3 group-hover:text-neon-orange transition-colors">
                    {approach.title}
                  </h3>

                  {/* Subtitle */}
                  <p className={`text-${approach.color} font-semibold mb-4`}>
                    {approach.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {approach.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {approach.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          activeCard === approach.id
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0.7, x: 0 }
                        }
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle
                          className={`w-4 h-4 text-${approach.color} flex-shrink-0`}
                        />
                        <span className="text-text-secondary text-sm font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Indicator */}
                  <AnimatePresence>
                    {activeCard === approach.id && (
                      <motion.div
                        className="absolute top-4 right-4"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className={`w-3 h-3 bg-${approach.color} rounded-full animate-pulse`}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 w-1 h-8 bg-gradient-to-t from-transparent to-neon-orange/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-8 w-8 h-1 bg-gradient-to-r from-transparent to-neon-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative p-12 bg-glass rounded-3xl border-2 border-neon-orange/30 backdrop-blur-xl"
              whileHover={{
                borderColor: "var(--neon-orange)",
                boxShadow: "0 0 40px rgba(255, 107, 53, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-neon-orange rounded-full flex items-center justify-center shadow-neon">
                  <Quote className="w-6 h-6 text-dark-primary" />
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-2xl md:text-3xl font-display font-semibold text-text-primary leading-relaxed mb-6">
                "Where data meets human potential"
              </blockquote>

              {/* Additional Context */}
              <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
                Every career decision is supported by evidence, every strategy
                is measured for impact, and every outcome contributes to
                sustainable professional growth.
              </p>

              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 border border-neon-blue/20 rounded-full animate-pulse" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border border-neon-purple/20 rounded-lg rotate-45 animate-spin-slow" />
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                className="btn btn-primary px-8 py-4 text-lg font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target className="w-5 h-5" />
                Experience This Approach
              </motion.button>

              <motion.button
                className="btn btn-secondary px-8 py-4 text-lg font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp className="w-5 h-5" />
                View Success Stories
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SignatureApproach;
