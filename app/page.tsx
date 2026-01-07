import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ProgramsSection from '@/components/ProgramsSection'
import AudienceSection from '@/components/AudienceSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <AudienceSection />
      <ExpertiseSection />
      <Testimonials />
      <Footer />
    </main>
  )
}