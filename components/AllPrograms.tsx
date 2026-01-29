"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Wrench,
  GraduationCap,
  Building2,
  Crown,
  Briefcase,
  ArrowRight,
  Clock,
  BarChart3,
  Users,
} from "lucide-react";

export default function AllPrograms() {
  const programs = [
    {
      id: "self-leadership",
      title: "Self-Leadership & Career Ownership Program",
      subtitle: "Take Control of Your Career",
      description:
        "Develop the mindset and skills to lead yourself and take ownership of your career path with confidence and clarity.",
      duration: "40 Hours",
      level: "All Levels",
      category: "Personal Development",
      features: [
        "Self-awareness development",
        "Career ownership strategies",
        "Leadership mindset cultivation",
        "Goal setting and achievement",
      ],
      icon: Target,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: "professional-effectiveness",
      title: "Professional Effectiveness & Core Skills Program",
      subtitle: "Master Essential Workplace Skills",
      description:
        "Build a strong foundation of core professional skills that are essential for success in any modern workplace environment.",
      duration: "60 Hours",
      level: "Intermediate",
      category: "Professional Skills",
      features: [
        "Effective communication",
        "Time management mastery",
        "Problem-solving skills",
        "Professional etiquette",
      ],
      icon: Wrench,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      id: "career-development",
      title: "Career Development & Job Redlines",
      subtitle: "Navigate Your Career Path",
      description:
        "Understand career development principles and identify your redlines to make informed decisions about your professional journey.",
      duration: "35 Hours",
      level: "Beginner",
      category: "Career Development",
      features: [
        "Career path analysis",
        "Redline identification",
        "Decision-making frameworks",
        "Career transition strategies",
      ],
      icon: GraduationCap,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      id: "freelancing",
      title: "Freelancing & Independent Career Development",
      subtitle: "Build Your Independent Career",
      description:
        "Learn how to successfully navigate the freelance world and build a sustainable independent career with confidence.",
      duration: "40 Hours",
      level: "All Levels",
      category: "Entrepreneurship",
      features: [
        "Freelance business setup",
        "Client acquisition strategies",
        "Portfolio development",
        "Financial management",
      ],
      icon: Briefcase,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      borderColor: "border-teal-200",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">
              Professional Development Programs
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Career with
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Expert Guidance
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of evidence-based programs
            designed to accelerate your professional growth and career success.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div key={program.id} variants={itemVariants}>
              <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden h-full">
                {/* Program Header */}
                <div className={`${program.bgColor} p-6 relative`}>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${program.color} flex items-center justify-center mb-4`}
                  >
                    <program.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {program.title}
                    </h3>
                    <p className={`text-sm font-medium ${program.textColor}`}>
                      {program.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {program.description}
                  </p>
                </div>

                {/* Program Details */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 font-medium">
                          {program.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 font-medium">
                          {program.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                      What You'll Get:
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${program.bgColor} ${program.textColor} ${program.borderColor} border`}
                    >
                      {program.category}
                    </span>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/programs/${program.id}`}
                    className={`group/btn w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${program.color} hover:shadow-lg text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Program is Right for You?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Book a free consultation session to discuss your goals and find
              the perfect program for your career development needs.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/booking"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
