"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Career Coaching", href: "/programs#career-counseling" },
    { label: "Corporate Training", href: "/programs#corporate-programs" },
    { label: "Leadership Development", href: "/programs#leadership-program" },
    { label: "Professional Skills", href: "/programs#skill-development" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/gehad-ashraf",
      icon: Linkedin,
      color: "hover:text-blue-500 hover:bg-blue-50",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/gehad.ashraf",
      icon: Facebook,
      color: "hover:text-blue-600 hover:bg-blue-50",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/gehad.ashraf",
      icon: Instagram,
      color: "hover:text-pink-500 hover:bg-pink-50",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">GA</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Gehad Ashraf
                  </h3>
                  <p className="text-sm text-gray-600">
                    Career Development Professional
                  </p>
                </div>
              </div>
            </Link>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
              Empowering professionals worldwide with evidence-based career
              development strategies and expert guidance.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  NCDA Certified
                </span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-50 rounded-lg border border-green-100">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">
                  12K+ Trained
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Connect With Me
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:gfeps@yahoo.com"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm">gfeps@yahoo.com</span>
              </a>

              <a
                href="tel:+201015362414"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-100 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm">+20 101 536 2414</span>
              </a>

              <div className="flex items-center text-gray-600">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm">Cairo, Egypt</span>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-800">
                  Available Now
                </span>
              </div>
              <p className="text-xs text-green-600">
                Ready for new consultations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-100">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of professionals who have accelerated their career
              growth with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-semibold rounded-lg transition-all duration-300"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600 text-center md:text-left">
              <p>© 2024 Gehad Ashraf. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </Link>
              <div className="flex items-center space-x-2 px-3 py-1 bg-blue-50 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-medium text-blue-700">
                  Professional Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
