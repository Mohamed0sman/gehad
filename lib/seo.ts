/**
 * SEO & Metadata Configuration
 * Update homepage titles, descriptions, and structured data
 */

export const siteConfig = {
  name: 'Gehad Ashraf',
  description: 'NCDA Certified Career Development Professional | Evidence-based coaching for professionals, organizations, and educators',
  url: 'https://gehad-ashraf.com',
  author: 'Gehad Ashraf',
  email: 'gehad@example.com',
  phone: '+20 1234567890',
  whatsapp: '+201015362414',
  social: {
    facebook: 'https://facebook.com/gehad.ashraf',
    instagram: 'https://instagram.com/gehad.ashraf',
    linkedin: 'https://linkedin.com/in/gehad-ashraf',
    tiktok: 'https://tiktok.com/@gehad.ashraf',
    youtube: 'https://youtube.com/@gehad-ashraf'
  },
  address: {
    city: 'Cairo',
    region: 'Cairo Governorate',
    country: 'Egypt'
  },
  ogImage: 'https://gehad-ashraf.com/og-image.jpg',
  twitterHandle: '@gehad_ashraf'
}

export const pages = {
  home: {
    title: 'Gehad Ashraf | Career Development Professional',
    description: 'Evidence-based career coaching for professionals, organizations, and educators. NCDA Certified Career Development Professional specializing in data-driven coaching and strategic design.',
    keywords: ['career coaching', 'career development', 'NCDA certified', 'career counseling', 'professional development'],
    ogImage: '/og/home.jpg'
  },
  about: {
    title: 'About Gehad Ashraf | Career Development Professional',
    description: 'Learn about Gehad Ashraf\'s journey, expertise, and approach to career development. NCDA Certified with 10+ years of experience helping professionals design their careers intentionally.',
    keywords: ['career development professional', 'NCDA certified', 'about gehad ashraf', 'career coaching experience'],
    ogImage: '/og/about.jpg'
  },
  programs: {
    title: 'Career Development Programs | Gehad Ashraf',
    description: 'Explore evidence-based career development programs: Self-Leadership, Professional Effectiveness, Freelancing Skills, and Career Coaching sessions.',
    keywords: ['career programs', 'training programs', 'professional development', 'career coaching', 'self-leadership'],
    ogImage: '/og/programs.jpg'
  },
  booking: {
    title: 'Book Your Free Career Session | Gehad Ashraf',
    description: 'Book a free 30-minute career consultation with Gehad Ashraf. Discuss your career goals and receive personalized guidance.',
    keywords: ['book career session', 'free consultation', 'career coaching booking', 'schedule consultation'],
    ogImage: '/og/booking.jpg'
  },
  contact: {
    title: 'Contact Gehad Ashraf | Career Development Professional',
    description: 'Get in touch with Gehad Ashraf for career coaching, training programs, or consulting services. Available via email, phone, WhatsApp, or contact form.',
    keywords: ['contact gehad', 'career coaching contact', 'coaching inquiry', 'get in touch'],
    ogImage: '/og/contact.jpg'
  }
}

// Structured Data (Schema.org JSON-LD)
export const getSchemaData = (type: 'person' | 'website' | 'localBusiness' = 'person') => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: siteConfig.name,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    description: siteConfig.description
  }

  switch (type) {
    case 'person':
      return {
        ...baseSchema,
        '@type': 'Person',
        jobTitle: 'Career Development Professional',
        worksFor: {
          '@type': 'Organization',
          name: siteConfig.name
        },
        sameAs: [
          siteConfig.social.facebook,
          siteConfig.social.instagram,
          siteConfig.social.linkedin,
          siteConfig.social.youtube,
          siteConfig.social.tiktok
        ],
        email: siteConfig.email,
        telephone: siteConfig.phone
      }

    case 'localBusiness':
      return {
        ...baseSchema,
        '@type': 'LocalBusiness',
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.country
        },
        telephone: siteConfig.phone,
        email: siteConfig.email,
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '21:00'
        }
      }

    case 'website':
    default:
      return {
        ...baseSchema,
        '@type': 'WebSite',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
          }
        }
      }
  }
}

// Sitemap URLs for robots.txt
export const sitemapUrls = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/programs', changefreq: 'weekly', priority: 0.9 },
  { url: '/booking', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/resources', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 }
]
