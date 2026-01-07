import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResourcesHero from '@/components/ResourcesHero'
import ResourcesGrid from '@/components/ResourcesGrid'
import ResourcesCategories from '@/components/ResourcesCategories'

export const metadata = {
  title: 'Resources - Gehad Ashraf | Free Educational Materials & Training Guides',
  description: 'Download free educational resources, PDF files, worksheets, and comprehensive guides in career development and personal growth from Gehad Ashraf.',
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