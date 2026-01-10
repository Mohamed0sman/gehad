import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramsHero from '@/components/ProgramsHero'
import AllPrograms from '@/components/AllPrograms'
import ProgramsComparison from '@/components/ProgramsComparison'

export const metadata = {
  title: 'Programs - Gehad Ashraf | Career Development & Professional Training',
  description: 'Discover our comprehensive training programs in career development, soft skills, and personal growth. Programs designed to help you achieve your professional and personal goals.',
}

export default function Programs() {
  return (
    <main>
      <Header />
      <div className="pt-16 lg:pt-20">
        <ProgramsHero />
        <AllPrograms />
        <ProgramsComparison />
      </div>
      <Footer />
    </main>
  )
}