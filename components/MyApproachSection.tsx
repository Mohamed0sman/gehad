"use client";

import React from "react";
import { motion } from "framer-motion";

const MyApproachSection: React.FC = () => {
  const pillars = [
    {
      icon: "📊",
      title: "Data-Driven Coaching",
      items: [
        "Assessment-based insights",
        "Analytics frameworks",
        "Structured decision models",
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: "🧠",
      title: "Psychology + Decision Science",
      items: [
        "Emotional intelligence",
        "Cognitive science",
        "Behavioral psychology",
      ],
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: "🔬",
      title: "Evidence-Based Practice",
      items: [
        "NCDA frameworks",
        "Global best practices",
        "Measurable outcomes",
      ],
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
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

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className={`${pillar.bgColor} rounded-2xl p-8 border-2 ${pillar.borderColor} h-full transition-all duration-300 hover:shadow-lg`}>
                {/* Icon */}
                <div className="text-5xl mb-6">{pillar.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {pillar.title}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {pillar.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyApproachSection;
