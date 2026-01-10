'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

type GalleryImage = {
  src: string
  alt: { en: string; ar: string }
  tag?: { en: string; ar: string }
}

export default function PhotoGallery() {
  const { language, isRTL } = useLanguage()
  const t = (en: string, ar: string) => (language === 'ar' ? ar : en)

  const images: GalleryImage[] = useMemo(
    () => [
      {
        src: '/photos/1672229131168.jpg',
        alt: { en: 'Workshop moment', ar: 'لحظة من ورشة' },
        tag: { en: 'Workshop', ar: 'ورشة' }
      },
      {
        src: '/photos/IMG-20220922-WA0028.jpg',
        alt: { en: 'Group training', ar: 'تدريب جماعي' },
        tag: { en: 'Training', ar: 'تدريب' }
      },
      {
        src: '/photos/FB_IMG_1648134514274.jpg',
        alt: { en: 'Team & community', ar: 'فريق وكوميونيتي' },
        tag: { en: 'Community', ar: 'كوميونيتي' }
      },
      {
        src: '/photos/IMG20220323144836.jpg',
        alt: { en: 'Session in action', ar: 'سيشن شغال' },
        tag: { en: 'Session', ar: 'سيشن' }
      },
      {
        src: '/photos/IMG20220323153727.jpg',
        alt: { en: 'Workshop planning', ar: 'تخطيط ورشة' },
        tag: { en: 'Planning', ar: 'تخطيط' }
      },
      {
        src: '/photos/IMG20181001150327.jpg',
        alt: { en: 'Group photo', ar: 'صورة جماعية' },
        tag: { en: 'Event', ar: 'إيفنت' }
      }
    ],
    []
  )

  const [active, setActive] = useState<GalleryImage | null>(null)

  return (
    <section className="relative section-padding bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(rgba(15,163,164,0.22) 1px, transparent 1px),\n                         linear-gradient(90deg, rgba(15,163,164,0.22) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container-professional">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 font-playfair"
          >
            {t('Moments & Highlights', 'لحظات وأهم اللقطات')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-slate-600 text-lg font-inter"
          >
            {t(
              'A few moments from workshops, trainings, and community events.',
              'شوية لحظات من ورش وتدريبات وإيفنتات.'
            )}
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.button
              key={`${img.src}-${idx}`}
              type="button"
              onClick={() => setActive(img)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={t(img.alt.en, img.alt.ar)}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-slate-950/0 opacity-80" />
                {img.tag && (
                  <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                    <span className="inline-flex items-center rounded-full bg-white/90 text-slate-800 px-3 py-1 text-xs font-semibold border border-white/50">
                      {t(img.tag.en, img.tag.ar)}
                    </span>
                  </div>
                )}
              </div>
              <div className={`p-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="text-sm font-semibold text-slate-900 font-inter">
                  {t(img.alt.en, img.alt.ar)}
                </div>
                <div className="mt-1 text-sm text-slate-600 font-inter">
                  {t('Click to view', 'اضغط عشان تشوف')}
                </div>
              </div>
              <div className="absolute inset-0 ring-0 ring-cyan-500/0 group-hover:ring-2 group-hover:ring-cyan-500/20 transition-all" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:bg-white`}
                aria-label={t('Close', 'إغلاق')}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="relative w-full aspect-[16/10] bg-slate-100">
                <Image
                  src={active.src}
                  alt={t(active.alt.en, active.alt.ar)}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>

              <div className="p-6">
                <div className="text-lg font-bold text-slate-900 font-playfair">
                  {t(active.alt.en, active.alt.ar)}
                </div>
                <div className="mt-1 text-slate-600 font-inter">
                  {t('Part of workshops & trainings portfolio.', 'جزء من شغل الورش والتدريبات.')}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
