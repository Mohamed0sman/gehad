"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-600 to-navy-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Design Your Next Career Move?
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              View All Programs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
