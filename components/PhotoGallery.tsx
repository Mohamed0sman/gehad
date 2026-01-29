'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

type GalleryImage = {
  src: string
  alt: { en: string; ar: string }
  tag?: { en: string; ar: string }
}

export default function PhotoGallery() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  // Selected best quality images
  const images: GalleryImage[] = useMemo(
    () => [
      { src: '/photos/1672229131168.jpg', alt: { en: 'Workshop moment', ar: 'لحظة من ورشة عمل' }, tag: { en: 'Workshop', ar: 'ورشة عمل' } },
      { src: '/photos/IMG-20220922-WA0028.jpg', alt: { en: 'Group training session', ar: 'جلسة تدريب جماعية' }, tag: { en: 'Training', ar: 'تدريب' } },
      { src: '/photos/IMG20220323144836.jpg', alt: { en: 'Coaching session', ar: 'جلسة إرشاد' }, tag: { en: 'Session', ar: 'جلسة' } },
      { src: '/photos/FB_IMG_1648134514274.jpg', alt: { en: 'Professional event', ar: 'فعالية مهنية' }, tag: { en: 'Event', ar: 'فعالية' } },
      { src: '/photos/WhatsApp Image 2025-03-06 at 14.57.37_1cc4a6c7.jpg', alt: { en: 'Training workshop', ar: 'ورشة تدريبية' }, tag: { en: 'Workshop', ar: 'ورشة' } },
      { src: '/photos/WhatsApp Image 2025-11-30 at 2.49.43 AM.jpeg', alt: { en: 'Career development session', ar: 'جلسة تطوير مهني' }, tag: { en: 'Career', ar: 'تطوير مهني' } }
    ],
    []
  )

  const [active, setActive] = useState<GalleryImage | null>(null)

  return (
    <section className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('Moments & Highlights', 'لحظات وأبرز الإنجازات')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(
              'Capturing the essence of transformative career development sessions and workshops.',
              'لقطات من جلسات وورش تطوير المسارات المهنية والتحولات المهنية.'
            )}
          </p>
        </motion.div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.button
              key={`${img.src}-${idx}`}
              type="button"
              onClick={() => setActive(img)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.1, 0.3) }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={t(img.alt.en, img.alt.ar)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80" />
                {img.tag && (
                  <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-gray-800 text-xs font-semibold">
                      {t(img.tag.en, img.tag.ar)}
                    </span>
                  </div>
                )}
              </div>
              <div className={`absolute bottom-0 left-0 right-0 p-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="text-white font-semibold">
                  {t(img.alt.en, img.alt.ar)}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors`}
                aria-label={t('Close', 'إغلاق')}
              >
                ✕
              </button>

              <div className="relative w-full aspect-[16/10] bg-gray-100">
                <Image
                  src={active.src}
                  alt={t(active.alt.en, active.alt.ar)}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>

              <div className="p-6">
                <div className="text-xl font-bold text-gray-900">
                  {t(active.alt.en, active.alt.ar)}
                </div>
                {active.tag && (
                  <div className="mt-2 text-sm text-blue-600 font-medium">
                    {t(active.tag.en, active.tag.ar)}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
