"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatIDoSection: React.FC = () => {
  const services = [
    {
      icon: "👤",
      title: "Individual Career Coaching",
      description: "Personalized career guidance to help you gain clarity, direction, and confidence in your career decisions. Evidence-based frameworks designed to help you design your next career move.",
      link: "/services/career-counseling",
      linkText: "Learn More →",
    },
    {
      icon: "🏢",
      title: "Corporate Training",
      description: "Partner with organizations to design and deliver career development, employability, and learning solutions that align human potential with organizational goals.",
      link: "/services/corporate-training",
      linkText: "Learn More →",
    },
    {
      icon: "📚",
      title: "Career Development Programs",
      description: "Comprehensive training programs designed to accelerate career growth. Evidence-based frameworks and structured learning paths for professionals at all stages.",
      link: "/programs",
      linkText: "Learn More →",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
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
            How I Can Help You
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy-100 to-orange-100 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center text-navy-600 font-semibold hover:text-navy-700 transition-colors"
                >
                  {service.linkText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
