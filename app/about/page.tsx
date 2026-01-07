import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Philosophy from '@/components/Philosophy'

export const metadata = {
  title: 'About Me - Gehad Ashraf | NCDA Certified Career Development Professional',
  description: 'Learn about Gehad Ashraf, NCDA Certified Career Development Professional specializing in evidence-based coaching and strategic design. 3+ years of experience helping professionals achieve their career goals.',
}

export default function About() {
  return (
    <main>
      <Header />
      <AboutHero />
      <Experience />
      <Certifications />
      <Philosophy />
      <Footer />
    </main>
  )
}