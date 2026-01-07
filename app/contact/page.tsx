import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export const metadata = {
  title: 'Contact Me - Gehad Ashraf | Free Career Consultation',
  description: 'Get in touch with Gehad Ashraf for a free career consultation. Available via phone, WhatsApp, and email for professional guidance and support.',
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