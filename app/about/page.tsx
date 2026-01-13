import Header from '@/components/Header'
import AboutHero from '@/components/AboutHero'
import MyStory from '@/components/MyStory'
import Certifications from '@/components/Certifications'
import Philosophy from '@/components/Philosophy'
import PhotoGallery from '@/components/PhotoGallery'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Me - Gehad Ashraf | NCDA Certified Career Development Professional',
  description: 'Learn about Gehad Ashraf, NCDA Certified Career Development Professional specializing in evidence-based coaching and strategic design. 10+ years of experience helping professionals achieve their career goals.',
}

export default function About() {
  return (
    <main>
      <Header />
      <div className="pt-16 lg:pt-20">
        <AboutHero />
        <MyStory />
        <Certifications />
        <Philosophy />
        <PhotoGallery />
      </div>
      <Footer />
    </main>
  )
}