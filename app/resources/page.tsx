import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResourcesHero from '@/components/ResourcesHero'
import ResourcesGrid from '@/components/ResourcesGrid'
import ResourcesCategories from '@/components/ResourcesCategories'

export const metadata = {
  title: 'الموارد التعليمية - جهاد أشرف | ملفات PDF ومواد تدريبية مجانية',
  description: 'حمل الموارد التعليمية المجانية، ملفات PDF، أوراق عمل، ودلائل شاملة في التوجيه المهني والتطوير الشخصي من جهاد أشرف.',
}

export default function Resources() {
  return (
    <main>
      <Header />
      <ResourcesHero />
      <ResourcesCategories />
      <ResourcesGrid />
      <Footer />
    </main>
  )
}