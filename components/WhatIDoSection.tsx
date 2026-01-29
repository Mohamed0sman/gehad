"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  User,
  Building,
  BookOpen,
  ArrowRight,
  Target,
  Users,
  TrendingUp,
} from "lucide-react";

const WhatIDoSection: React.FC = () => {
  const services = [
    {
      icon: User,
      title: "Individual Career Coaching",
      description:
        "Personalized one-on-one sessions using evidence-based frameworks to help you gain career clarity, make strategic decisions, and accelerate professional growth.",
      features: [
        "Career assessment & planning",
        "Goal setting & strategy",
        "Interview preparation",
        "Personal branding guidance",
      ],
      link: "/programs#career-counseling",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: Building,
      title: "Corporate Training Solutions",
      description:
        "Customized training programs for organizations to develop talent, enhance leadership capabilities, and align human potential with business objectives.",
      features: [
        "Leadership development",
        "Team effectiveness",
        "Change management",
        "Career pathway design",
      ],
      link: "/programs#corporate-programs",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      icon: BookOpen,
      title: "Professional Development Programs",
      description:
        "Comprehensive training programs designed to accelerate career growth through structured learning paths and practical skill development.",
      features: [
        "Skills assessment",
        "Competency development",
        "Certification programs",
        "Ongoing mentorship",
      ],
      link: "/programs",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
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
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">
              Professional Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How I Can
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Transform Your Career
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're an individual seeking career clarity or an
            organization looking to develop your talent, I provide
            evidence-based solutions tailored to your specific needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
            <motion.div key={service.title} variants={itemVariants}>
              <div className="group h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden">
                {/* Header */}
                <div className={`${service.bgColor} p-6 relative`}>
                  <div
                    className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <Link
                    href={service.link}
                    className={`group/btn w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${service.color} hover:shadow-lg text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Take the Next Step?
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Join thousands of professionals who have transformed their
                careers through evidence-based development strategies and expert
                guidance.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/booking"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>

              <Link
                href="/programs"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore All Programs
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">12,000+</div>
            <div className="text-gray-600">Professionals Trained</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
