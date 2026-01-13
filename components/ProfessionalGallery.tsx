"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Users, Award, Briefcase } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  description: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ProfessionalGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Corporate Training Sessions",
      category: "Training",
      description: "Leading professional development workshops for corporate teams and organizations.",
      gradient: "from-blue-400 via-purple-400 to-indigo-500",
      icon: Users,
    },
    {
      id: 2,
      title: "Individual Coaching",
      category: "Coaching",
      description: "One-on-one career development sessions focused on personal growth and strategic planning.",
      gradient: "from-emerald-400 via-teal-400 to-cyan-500",
      icon: Award,
    },
    {
      id: 3,
      title: "Workshop Facilitation",
      category: "Workshop",
      description: "Interactive workshops on career development, leadership skills, and professional growth.",
      gradient: "from-orange-400 via-pink-400 to-rose-500",
      icon: Briefcase,
    },
    {
      id: 4,
      title: "Conference Speaking",
      category: "Speaking",
      description: "Keynote presentations at professional conferences and career development events.",
      gradient: "from-violet-400 via-purple-400 to-fuchsia-500",
      icon: Camera,
    },
    {
      id: 5,
      title: "Team Development",
      category: "Development",
      description: "Strategic team building and professional development programs for organizations.",
      gradient: "from-sky-400 via-blue-400 to-indigo-500",
      icon: Users,
    },
    {
      id: 6,
      title: "Career Counseling",
      category: "Counseling",
      description: "Professional career guidance sessions helping individuals navigate their career paths.",
      gradient: "from-green-400 via-emerald-400 to-teal-500",
      icon: Award,
    },
  ];

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
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Camera className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold text-sm">
              Professional Gallery
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Moments of
            <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Professional Excellence
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Capturing the essence of transformative career development sessions,
            workshops, and training programs that have impacted thousands of
            professionals.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  {/* Category Badge */}
                  <div className="self-start">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold">
                      {image.category}
                    </span>
                  </div>

                  {/* Center Icon */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <image.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-white/90 transition-colors">
                      {image.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300"></div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Training Sessions</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">12K+</div>
            <div className="text-gray-600 text-sm">Professionals Trained</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600 text-sm">Corporate Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="relative aspect-[16/10]">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedImage.gradient}`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                    <selectedImage.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProfessionalGallery;
