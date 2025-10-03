import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export const metadata = {
  title: 'تواصل معي - جهاد أشرف | استشارة مجانية في التوجيه المهني',
  description: 'تواصل مع جهاد أشرف للحصول على استشارة مجانية في التوجيه المهني والنفسي. متاحة عبر الهاتف، واتساب، والبريد الإلكتروني.',
}

export default function Contact() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </main>
  )
}