"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, Eye, Heart, ArrowRight } from "lucide-react";

const BlogPosts: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right University Major for You",
      excerpt:
        "A practical guide to help you choose a major that fits your personality and career goals, with real-world tips from coaching and training experience.",
      category: "Career Guidance",
      readTime: "8 min read",
      publishDate: "Nov 15, 2024",
      views: 2340,
      likes: 156,
      image: "/blog/university-major.jpg",
      featured: true,
      tags: ["University", "Major", "Future"],
      author: "Gehad Ashraf",
      icon: "🎓",
    },
    {
      id: 2,
      title: "CV Writing Secrets That Get You Noticed",
      excerpt:
        "Learn how to write a modern, high-impact CV that stands out and increases your chances of landing interviews.",
      category: "Job Search",
      readTime: "12 min read",
      publishDate: "Nov 10, 2024",
      views: 1890,
      likes: 203,
      image: "/blog/cv-writing.jpg",
      featured: true,
      tags: ["CV", "Job", "Skills"],
      author: "Gehad Ashraf",
      icon: "📝",
    },
    {
      id: 3,
      title: "10 Practical Ways to Build Self-Confidence",
      excerpt:
        "Proven, actionable steps to strengthen confidence and grow personally so you can achieve goals with more clarity and calm.",
      category: "Personal Development",
      readTime: "6 min read",
      publishDate: "Nov 5, 2024",
      views: 3120,
      likes: 287,
      image: "/blog/self-confidence.jpg",
      featured: false,
      tags: ["Confidence", "Growth", "Mindset"],
      author: "Gehad Ashraf",
      icon: "✨",
    },
    {
      id: 4,
      title: "Time Management for Students: Organize Your Schedule & Excel",
      excerpt:
        "Practical techniques to plan your week, focus better, and balance studying with life without burning out.",
      category: "Time Management",
      readTime: "10 min read",
      publishDate: "Nov 1, 2024",
      views: 1567,
      likes: 134,
      image: "/blog/time-management.jpg",
      featured: false,
      tags: ["Time", "Study", "Productivity"],
      author: "Gehad Ashraf",
      icon: "⏳",
    },
    {
      id: 5,
      title: "How to Build Your Professional Network From Scratch",
      excerpt:
        "Strategic networking tips to build meaningful professional relationships that advance your career.",
      category: "Career Development",
      readTime: "9 min read",
      publishDate: "Oct 28, 2024",
      views: 2156,
      likes: 189,
      image: "/blog/networking.jpg",
      featured: false,
      tags: ["Networking", "Career", "Relationships"],
      author: "Gehad Ashraf",
      icon: "🤝",
    },
    {
      id: 6,
      title: "The Complete Guide to Job Interview Success",
      excerpt:
        "Master the art of job interviews with proven strategies, common questions, and confidence-building techniques.",
      category: "Job Search",
      readTime: "15 min read",
      publishDate: "Oct 25, 2024",
      views: 2890,
      likes: 245,
      image: "/blog/job-interview.jpg",
      featured: false,
      tags: ["Interview", "Job", "Success"],
      author: "Gehad Ashraf",
      icon: "💼",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Latest Articles & Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Expert insights, practical tips, and proven strategies to accelerate
            your career growth and personal development.
          </motion.p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Featured Articles
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-4xl">{post.icon}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-sm font-semibold text-gray-800 shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Recent Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-3xl">{post.icon}</span>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-800 shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm group/link"
                      >
                        Read
                        <ArrowRight className="ml-1 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>

        {/* View All Posts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPosts;
