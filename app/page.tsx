import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedPrograms from '@/components/FeaturedPrograms'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedPrograms />
      <Testimonials />
      <Footer />
    </main>
  )
}