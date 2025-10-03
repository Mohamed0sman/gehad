import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Philosophy from '@/components/Philosophy'

export const metadata = {
  title: 'من أنا - جهاد أشرف | مدربة التوجيه المهني المعتمدة',
  description: 'تعرف على جهاد أشرف، مدربة معتمدة NCDA متخصصة في التوجيه النفسي والمهني. خبرة أكثر من 3 سنوات في مساعدة الطلاب على تحقيق أهدافهم.',
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