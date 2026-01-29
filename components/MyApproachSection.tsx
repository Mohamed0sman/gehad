"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Microscope,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const MyApproachSection: React.FC = () => {
  const pillars = [
    {
      icon: BarChart3,
      title: "Data-Driven Methodology",
      description:
        "Evidence-based career assessments and analytics frameworks that provide structured insights for strategic decision-making and measurable career outcomes.",
      features: [
        "Comprehensive personality assessments",
        "Skills gap analysis",
        "Market trend integration",
        "Progress tracking metrics",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Brain,
      title: "Psychology Integration",
      description:
        "Combining emotional intelligence, cognitive science, and behavioral psychology to create holistic career development strategies that align with your natural strengths.",
      features: [
        "Emotional intelligence development",
        "Cognitive behavioral techniques",
        "Motivation pattern analysis",
        "Decision-making frameworks",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Microscope,
      title: "Evidence-Based Practice",
      description:
        "Utilizing NCDA-certified frameworks, global best practices, and research-backed methodologies to ensure sustainable career transformation and professional growth.",
      features: [
        "NCDA certified frameworks",
        "Research-backed strategies",
        "Global best practices",
        "Measurable outcomes",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Microscope className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold text-sm">
              My Approach
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Evidence-Based
            <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Career Development
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My methodology combines scientific rigor with human-centered design,
            creating a comprehensive framework that delivers measurable results
            and sustainable career transformation.
          </p>
        </motion.div>

        {/* Approach Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="group"
            >
              <div
                className={`${pillar.bgColor} rounded-2xl p-8 border-2 ${pillar.borderColor} h-full transition-all duration-300 hover:shadow-xl group-hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${pillar.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            );
          })}
        </motion.div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to career transformation through proven
              methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "Comprehensive evaluation of your current situation, strengths, and career aspirations using validated tools.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Development of a personalized career roadmap based on data insights and evidence-based frameworks.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Structured execution of your career plan with ongoing support, feedback, and strategy refinement.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Continuous monitoring and adjustment to ensure sustainable growth and long-term career success.",
              },
            ].map((phase, index) => (
              <div key={phase.step} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto shadow-lg">
                  {phase.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {phase.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {phase.description}
                </p>

                {/* Arrow */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 transform translate-x-full">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience This Approach?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Discover how evidence-based career development can transform your
              professional journey through a personalized consultation session.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/booking"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>

              <motion.a
                href="/programs"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Programs
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyApproachSection;
