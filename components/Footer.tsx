"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  LinkedinIcon,
  Facebook,
  Instagram,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Success Stories", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Career Coaching", href: "/programs#coaching" },
    { label: "Professional Development", href: "/programs#development" },
    { label: "Leadership Training", href: "/programs#leadership" },
    { label: "Executive Coaching", href: "/programs#executive" },
    { label: "Career Transition", href: "/programs#transition" },
    { label: "Corporate Training", href: "/programs#corporate" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/gehad-ashraf",
      icon: LinkedinIcon,
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/gehad.ashraf",
      icon: Facebook,
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/gehad.ashraf",
      icon: Instagram,
      color: "hover:text-pink-400",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* CTA Section */}
        <div className="border-b border-gray-800/50 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="container mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your
                <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  Career Journey?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Join thousands of professionals who have successfully navigated
                their career transitions with expert guidance and proven
                strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/booking"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Book Free Consultation
                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/programs"
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    Explore Programs
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="container mx-auto px-6 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="mb-8">
                <Link href="/" className="inline-block">
                  <div className="flex items-center space-x-3 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">GA</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        Gehad Ashraf
                      </h3>
                      <p className="text-blue-400 font-medium text-sm">
                        NCDA Certified Professional
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                Empowering professionals worldwide with evidence-based career
                development strategies, strategic guidance, and transformative
                coaching experiences.
              </p>

              {/* Professional Credentials */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center space-x-2 px-3 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-300">
                    NCDA Certified
                  </span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">
                    10+ Years Experience
                  </span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-purple-300">
                    12,000+ Trained
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300"
                    >
                      <div className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group flex items-center text-gray-400 hover:text-purple-400 transition-all duration-300"
                    >
                      <div className="w-1 h-1 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h4 className="text-white font-bold text-lg mb-6">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:gfeps@yahoo.com"
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">gfeps@yahoo.com</span>
                </a>
                <a
                  href="tel:+201015362414"
                  className="flex items-center text-gray-400 hover:text-green-400 transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+20 101 536 2414</span>
                </a>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span className="text-sm">Cairo, Egypt</span>
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-400">
                    Available for consultation
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Typically responds within 2 hours
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 bg-gray-900/50">
          <div className="container mx-auto px-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p>© 2024 Gehad Ashraf. All rights reserved.</p>
                <p className="mt-1">
                  Transforming careers through evidence-based development
                  strategies.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <Link
                    href="/privacy"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>

                <div className="flex items-center space-x-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-blue-300">
                    Professional Certified
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
