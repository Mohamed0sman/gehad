import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import ProfessionalStats from '@/components/ProfessionalStats'
import ProfessionalShowcase from '@/components/ProfessionalShowcase'
import SignatureApproach from '@/components/SignatureApproach'
import MyStorySection from '@/components/MyStorySection'
import ProfessionalIdentity from '@/components/ProfessionalIdentity'
import Vision2026 from '@/components/Vision2026'
import MissionValues from '@/components/MissionValues'
import WhoIHelp from '@/components/WhoIHelp'
import ProfessionalServices from '@/components/ProfessionalServices'
import ProgramsSection from '@/components/ProgramsSection'
import Testimonials from '@/components/Testimonials'
import PhotoGallery from '@/components/PhotoGallery'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="pt-16 lg:pt-20">
        <Hero />
        <SocialProof />
        <ProfessionalStats />
        <ProfessionalShowcase />
        <SignatureApproach />
        <MyStorySection />
        <ProfessionalIdentity />
        <Vision2026 />
        <MissionValues />
        <WhoIHelp />
        <ProfessionalServices />
        <ProgramsSection />
        <Testimonials />
        <PhotoGallery />
      </div>
      <Footer />
    </main>
  )
}