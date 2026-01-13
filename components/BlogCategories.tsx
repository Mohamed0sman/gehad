"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogCategories() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      id: "all",
      name: "All Articles",
      icon: "🏆",
      count: 48,
      color: "from-purple-500 to-pink-500",
      description: "All available content",
    },
    {
      id: "career-guidance",
      name: "Career Guidance",
      icon: "🎓",
      count: 12,
      color: "from-blue-500 to-cyan-500",
      description: "Choosing the right career direction",
    },
    {
      id: "job-search",
      name: "Job Search",
      icon: "💼",
      count: 8,
      color: "from-green-500 to-emerald-500",
      description: "Practical tips to land a job",
    },
    {
      id: "personal-development",
      name: "Personal Development",
      icon: "💡",
      count: 10,
      color: "from-yellow-500 to-orange-500",
      description: "Building skills and mindset",
    },
    {
      id: "mental-health",
      name: "Mental Wellbeing",
      icon: "❤️",
      count: 6,
      color: "from-pink-500 to-rose-500",
      description: "Emotional and mental support",
    },
    {
      id: "entrepreneurship",
      name: "Entrepreneurship",
      icon: "🚀",
      count: 5,
      color: "from-indigo-500 to-purple-500",
      description: "Building and launching projects",
    },
    {
      id: "soft-skills",
      name: "Soft Skills",
      icon: "👥",
      count: 4,
      color: "from-teal-500 to-cyan-500",
      description: "Communication and leadership",
    },
    {
      id: "time-management",
      name: "Time Management",
      icon: "⏰",
      count: 3,
      color: "from-violet-500 to-purple-500",
      description: "Priorities and scheduling",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            <span className="text-blue-600">Choose a Topic</span>
            <span className="text-gray-700"> That Matters to You 📂</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore articles across topics that support your career journey and
            personal growth.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCategory(category.id)}
              className={`cursor-pointer group ${
                selectedCategory === category.id
                  ? "ring-2 ring-blue-500 ring-offset-2"
                  : ""
              }`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white`}
                  >
                    {category.count} articles
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>

                {selectedCategory === category.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-4 flex items-center gap-2 text-blue-600"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-semibold">Selected</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
