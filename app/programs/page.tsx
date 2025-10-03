import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramsHero from '@/components/ProgramsHero'
import AllPrograms from '@/components/AllPrograms'
import ProgramsComparison from '@/components/ProgramsComparison'

export const metadata = {
  title: 'البرامج التدريبية - جهاد أشرف | برامج التوجيه المهني والنفسي',
  description: 'اكتشف برامجنا التدريبية المتنوعة في التوجيه المهني والنفسي. برامج مصممة خصيصاً لمساعدتك في تحقيق أهدافك المهنية والشخصية.',
}

export default function Programs() {
  return (
    <main>
      <Header />
      <ProgramsHero />
      <AllPrograms />
      <ProgramsComparison />
      <Footer />
    </main>
  )
}