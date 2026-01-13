"use client";

import React from "react";
import { motion } from "framer-motion";

const MyApproachSection: React.FC = () => {
  // Simplified to 3 bullets only
  const pillars = [
    {
      icon: "📊",
      title: "Data-Driven Coaching",
      description: "Assessment-based insights and analytics frameworks for structured decision-making",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
    },
    {
      icon: "🧠",
      title: "Psychology + Decision Science",
      description: "Emotional intelligence, cognitive science, and behavioral psychology integration",
      bgColor: "bg-soft-blue-50",
      borderColor: "border-soft-blue-200",
      iconBg: "bg-soft-blue-100",
    },
    {
      icon: "🔬",
      title: "Evidence-Based Practice",
      description: "NCDA frameworks, global best practices, and measurable outcomes",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      iconBg: "bg-teal-100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Evidence-Based Career Development
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where data meets human potential
          </p>
        </motion.div>

        {/* Pillars Grid - 3 bullets only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className={`${pillar.bgColor} rounded-2xl p-8 border-2 ${pillar.borderColor} h-full transition-all duration-300 hover:shadow-xl`}>
                {/* Icon with animation */}
                <motion.div
                  className={`w-16 h-16 ${pillar.iconBg} rounded-xl flex items-center justify-center mb-6 text-3xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {pillar.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pillar.title}
                </h3>

                {/* Description - Single bullet point */}
                <p className="text-gray-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyApproachSection;
